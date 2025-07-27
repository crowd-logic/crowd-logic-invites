import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY') ?? '';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const getSystemPrompt = (userJourneyRaw: string) => `You are "The Br.AI.n," an expert AI Solutions Architect and storyteller for the CrowdLogic ecosystem. You are a master at transforming detailed, technical user journeys into compelling, concise, and elegant narratives.

Your Task: You will be given a raw user journey from our internal knowledge base. You must transform this journey into a 3-step story for our website's hero section. For each step in the story, you must also identify the single most impactful key phrase that should be visually highlighted.

You must return ONLY a single, valid JSON object with the key "story_flow", which contains an array of exactly three step objects. Each step object must have a "narrative" and a "highlight" key.

--

RAW USER JOURNEY INPUT: ${userJourneyRaw}
YOUR REQUIRED JSON OUTPUT:

{
  "story_flow": [
    {
      "step": 1,
      "narrative": "First, you'll launch your campaign using our AI-powered Brand Command Center, turning a simple goal into a complete brief in minutes.",
      "highlight": "AI-powered Brand Command Center"
    },
    {
      "step": 2,
      "narrative": "Next, you'll track live attendee engagement and sentiment in real-time with VibePass, getting instant feedback on your activation's impact.",
      "highlight": "track live attendee engagement"
    },
    {
      "step": 3,
      "narrative": "Finally, you receive a comprehensive ROI report from Event Axis, giving you the hard data you need to prove the value of your experiential marketing spend.",
      "highlight": "comprehensive ROI report"
    }
  ]
}`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userInput } = await req.json();

    if (!ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY not configured');
    }

    // Search for matching blueprint in the database
    const { data: blueprints, error: dbError } = await supabase
      .from('solution_blueprints')
      .select('*')
      .ilike('persona', `%${userInput}%`);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to search solution blueprints');
    }

    // If no direct match, try keyword search
    let matchedBlueprint = blueprints?.[0];
    if (!matchedBlueprint && blueprints?.length === 0) {
      const { data: keywordBlueprints, error: keywordError } = await supabase
        .from('solution_blueprints')
        .select('*')
        .overlaps('keywords', [userInput.toLowerCase()]);

      if (keywordError) {
        console.error('Keyword search error:', keywordError);
      } else {
        matchedBlueprint = keywordBlueprints?.[0];
      }
    }

    if (!matchedBlueprint) {
      // Fallback to a default blueprint if no match found
      const { data: defaultBlueprint } = await supabase
        .from('solution_blueprints')
        .select('*')
        .eq('persona', 'Personal Trip Planner')
        .single();
      
      matchedBlueprint = defaultBlueprint;
    }

    if (!matchedBlueprint) {
      throw new Error('No solution blueprints found in database');
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ANTHROPIC_API_KEY}`,
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        system: getSystemPrompt(matchedBlueprint.user_journey_raw),
        messages: [{
          role: 'user',
          content: `Transform this user journey for: ${matchedBlueprint.persona}`
        }]
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;
    
    // Parse the AI response as JSON
    let storyFlow;
    try {
      const parsed = JSON.parse(aiResponse);
      storyFlow = parsed.story_flow;
    } catch (e) {
      console.error('Failed to parse AI response:', e);
      // Fallback story flow
      storyFlow = [
        { step: 1, narrative: "First, you'll identify your challenge and explore our solution.", highlight: "explore our solution" },
        { step: 2, narrative: "Next, you'll implement our tools to streamline your workflow.", highlight: "streamline your workflow" },
        { step: 3, narrative: "Finally, you'll achieve your goals with measurable results.", highlight: "measurable results" }
      ];
    }

    // Build response using blueprint data
    const finalResponse = {
      product: matchedBlueprint.solution_products?.[0]?.name || "escapade",
      heroImage: "/images/escapade-adventure-bg.jpg",
      challenge: matchedBlueprint.pain_point_headline,
      tools: matchedBlueprint.solution_products?.[0]?.description || "Our comprehensive platform",
      userFlow: storyFlow.map((step: any) => ({
        step: step.step,
        text: step.narrative,
        highlight: step.highlight
      })),
      ctaType: matchedBlueprint.cta_type,
      ctaText: matchedBlueprint.cta_text,
      ctaLink: matchedBlueprint.cta_link
    };

    return new Response(JSON.stringify(finalResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-navigator function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      product: "escapade",
      heroImage: "/images/escapade-adventure-bg.jpg",
      challenge: "Tired of the Group Chat Chaos?",
      tools: "The app for authoring unforgettable adventures with your crew.",
      userFlow: [
        { step: 1, text: "First, you capture inspiration from social media and websites into your personal 'Stash' using our AI parsing tool.", highlight: "AI parsing tool" },
        { step: 2, text: "Next, you propose your best ideas to your crew's 'Idea Bucket.'", highlight: "Idea Bucket" },
        { step: 3, text: "Finally, the winning ideas are automatically promoted to a beautiful, interactive Itinerary & Map Hub.", highlight: "interactive Itinerary & Map Hub" }
      ],
      ctaType: "signup",
      ctaText: "Start Your First Escapade",
      ctaLink: "https://escapade.accesscrowdlogic.com"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});