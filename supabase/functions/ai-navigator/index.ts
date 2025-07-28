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

const getSystemPrompt = () => `You are "The Br.AI.n," an expert AI Solutions Architect. Your task is to analyze a user's role/goal and generate a complete, personalized content package for our website's solution dashboard.

You must return ONLY a single, valid JSON object with the following keys: personaConfirmation, solutionProducts, dynamicCaseStudy, keyFeatures, and cta.

Example Input: "I'm a brand manager trying to prove the value of our festival activations."

Example JSON Output:

{
  "personaConfirmation": {
    "title": "For the Modern Brand Manager",
    "challenge": "The challenge is clear: proving the value of every dollar spent on live events."
  },
  "solutionProducts": [
    {"name": "Event Axis", "description": "Your command center for planning, executing, and analyzing events with precision."},
    {"name": "VibePass", "description": "The social layer that connects you directly to your audience."}
  ],
  "dynamicCaseStudy": {
    "title": "Case Study: Global Beverage Co.",
    "scenario": "A global beverage brand needed to measure engagement for their new drink launch at a major music festival.",
    "solution": "Using Event Axis to track metrics and VibePass to distribute digital collectibles, they gained real-time insight into attendee interactions.",
    "result": "The result was a 30% increase in measured engagement and a comprehensive ROI report that secured future marketing budget."
  },
  "keyFeatures": [
    {"feature": "Real-Time ROI Dashboard", "benefit": "Stop waiting for post-event reports. See your ROI develop live."},
    {"feature": "AI-Powered Staffing", "benefit": "Ensure the best Brand Ambassadors are at your most critical locations."},
    {"feature": "Digital Collectibles (POAPs)", "benefit": "Create lasting brand loyalty with unique, verifiable digital memorabilia."}
  ],
  "cta": {
    "type": "waitlist",
    "headline": "Ready to See Your True ROI?",
    "buttonText": "Request a Personalized Demo"
  }
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

    console.log('🔍 Searching for blueprint with input:', userInput);

    // Search for matching blueprint in the database
    // First try keyword search (more flexible)
    const { data: keywordBlueprints, error: keywordError } = await supabase
      .from('solution_blueprints')
      .select('*')
      .overlaps('keywords', [userInput.toLowerCase()]);

    console.log('📊 Keyword search results:', keywordBlueprints?.length || 0, 'blueprints found');
    if (keywordError) console.error('❌ Keyword search error:', keywordError);

    let matchedBlueprint = keywordBlueprints?.[0];

    // If no keyword match, try partial persona match
    if (!matchedBlueprint || keywordBlueprints?.length === 0) {
      console.log('🔄 Trying persona search...');
      const { data: personaBlueprints, error: personaError } = await supabase
        .from('solution_blueprints')
        .select('*')
        .ilike('persona', `%${userInput}%`);

      console.log('👤 Persona search results:', personaBlueprints?.length || 0, 'blueprints found');
      if (personaError) {
        console.error('❌ Persona search error:', personaError);
      } else {
        matchedBlueprint = personaBlueprints?.[0];
      }
    }

    // If still no match, try searching for common terms
    if (!matchedBlueprint) {
      console.log('🔄 Trying individual term search...');
      const searchTerms = userInput.toLowerCase().split(' ');
      console.log('🔤 Search terms:', searchTerms);
      
      for (const term of searchTerms) {
        if (term.length < 3) continue; // Skip very short terms
        
        const { data: termBlueprints } = await supabase
          .from('solution_blueprints')
          .select('*')
          .overlaps('keywords', [term]);
        
        console.log(`📝 Term "${term}" found:`, termBlueprints?.length || 0, 'blueprints');
        
        if (termBlueprints && termBlueprints.length > 0) {
          matchedBlueprint = termBlueprints[0];
          console.log('✅ Matched blueprint:', matchedBlueprint.persona);
          break;
        }
      }
    }

    if (!matchedBlueprint) {
      console.log('⚠️ No match found, using fallback blueprint');
      // Fallback to a random blueprint instead of always the same one
      const { data: allBlueprints } = await supabase
        .from('solution_blueprints')
        .select('*');
      
      if (allBlueprints && allBlueprints.length > 0) {
        // Select a random blueprint instead of always the first one
        const randomIndex = Math.floor(Math.random() * allBlueprints.length);
        matchedBlueprint = allBlueprints[randomIndex];
        console.log('🎲 Using random blueprint:', matchedBlueprint.persona);
      }
    } else {
      console.log('✅ Final matched blueprint:', matchedBlueprint.persona);
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
        system: getSystemPrompt(),
        messages: [{
          role: 'user',
          content: `Generate a complete dashboard content package for: ${userInput}`
        }]
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;
    
    // Parse the AI response as JSON
    let dashboardContent;
    try {
      dashboardContent = JSON.parse(aiResponse);
    } catch (e) {
      console.error('Failed to parse AI response:', e);
      // Fallback dashboard content
      dashboardContent = {
        personaConfirmation: {
          title: "For the Modern Professional",
          challenge: "Navigate complex challenges with confidence and precision."
        },
        solutionProducts: [
          { name: "Event Axis", description: "Your command center for comprehensive event management." }
        ],
        dynamicCaseStudy: {
          title: "Case Study: Success Story",
          scenario: "A client faced significant operational challenges.",
          solution: "Our platform provided the tools and insights needed.",
          result: "Achieved measurable improvements and exceeded goals."
        },
        keyFeatures: [
          { feature: "Real-Time Analytics", benefit: "Monitor performance as it happens." },
          { feature: "AI-Powered Insights", benefit: "Make data-driven decisions with confidence." }
        ],
        cta: {
          type: "waitlist",
          headline: "Ready to Transform Your Approach?",
          buttonText: "Get Started Today"
        }
      };
    }

    return new Response(JSON.stringify(dashboardContent), {
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