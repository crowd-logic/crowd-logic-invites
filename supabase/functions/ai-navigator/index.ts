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

// The Master "Composable Story" Prompt for Anthropic
const getComposerPrompt = (userInput: string, storyModules: any[]) => `You are "The Br.AI.n," an expert AI storyteller and Solutions Architect. Your task is to take a user's query and a set of pre-approved, modular story components from our knowledge base, and compose them into a compelling, 3-step personalized journey.

You must intelligently weave the provided story modules together. You can add smooth, professional transition phrases, but the core facts and product names must come directly from the modules. You must also identify a key phrase to highlight in each step of the final narrative.

Return ONLY a single, valid JSON object with the key "story_flow", which contains an array of exactly three step objects. Each step object must have a "narrative" and a "highlight" key.

USER QUERY: ${userInput}

PRE-APPROVED STORY MODULES: ${JSON.stringify(storyModules)}

YOUR REQUIRED JSON OUTPUT: Return a JSON object with "story_flow" containing exactly 3 steps with "narrative" and "highlight" fields.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userInput } = await req.json();

    if (!ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY not configured');
    }

    console.log('🔍 Processing user input:', userInput);

    // Step 1: Find the best matching persona using keyword search
    console.log('🎯 Step 1: Finding matching persona...');
    
    const inputTerms = userInput.toLowerCase().split(/\s+/);
    console.log('📝 Input terms:', inputTerms);

    // Search for personas that match any of the input terms
    const { data: allPersonas, error: personaError } = await supabase
      .from('personas')
      .select('*');

    if (personaError) {
      console.error('❌ Error fetching personas:', personaError);
      throw new Error('Failed to fetch personas');
    }

    console.log('👥 Found personas:', allPersonas?.length || 0);

    // Score each persona based on keyword matches
    let bestPersona = null;
    let maxScore = 0;

    for (const persona of allPersonas || []) {
      let score = 0;
      const personaKeywords = persona.keywords || [];
      
      for (const term of inputTerms) {
        if (term.length < 3) continue; // Skip very short terms
        
        // Check if any persona keyword contains this term
        for (const keyword of personaKeywords) {
          if (keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())) {
            score += 1;
            console.log(`✅ Match: "${term}" matches keyword "${keyword}" for ${persona.name}`);
          }
        }
        
        // Also check persona name and description
        if (persona.name.toLowerCase().includes(term)) {
          score += 2; // Higher weight for name matches
          console.log(`✅ Name match: "${term}" in "${persona.name}"`);
        }
        if (persona.description?.toLowerCase().includes(term)) {
          score += 1;
          console.log(`✅ Description match: "${term}" in persona description`);
        }
      }
      
      console.log(`📊 ${persona.name}: score ${score}`);
      
      if (score > maxScore) {
        maxScore = score;
        bestPersona = persona;
      }
    }

    // Fallback to a default persona if no matches
    if (!bestPersona && allPersonas && allPersonas.length > 0) {
      bestPersona = allPersonas[0]; // Default to first persona
      console.log('🎲 No matches found, using default persona:', bestPersona.name);
    }

    if (!bestPersona) {
      throw new Error('No personas found in database');
    }

    console.log('🎯 Selected persona:', bestPersona.name, 'with score:', maxScore);

    // Step 2: Retrieve story modules for the matched persona
    console.log('📚 Step 2: Retrieving story modules...');
    
    const { data: storyModules, error: modulesError } = await supabase
      .from('story_modules')
      .select('*')
      .eq('persona_id', bestPersona.id);

    if (modulesError) {
      console.error('❌ Error fetching story modules:', modulesError);
      throw new Error('Failed to fetch story modules');
    }

    console.log('📖 Found story modules:', storyModules?.length || 0);

    if (!storyModules || storyModules.length === 0) {
      throw new Error('No story modules found for persona');
    }

    // Step 3: Call Anthropic to compose the story
    console.log('🧠 Step 3: Composing story with Anthropic...');
    
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: getComposerPrompt(userInput, storyModules)
        }]
      })
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('❌ Anthropic API error:', errorText);
      throw new Error(`Anthropic API error: ${anthropicResponse.status}`);
    }

    const anthropicData = await anthropicResponse.json();
    console.log('🧠 Anthropic response received');

    // Parse the AI response
    let aiResponse;
    try {
      aiResponse = JSON.parse(anthropicData.content[0].text);
    } catch (parseError) {
      console.error('❌ Failed to parse AI response:', anthropicData.content[0].text);
      throw new Error('Invalid AI response format');
    }

    // Step 4: Format the final response
    const result = {
      persona: bestPersona.name,
      pain_point_headline: `Personalized solution for ${bestPersona.name}`,
      story_flow: aiResponse.story_flow,
      source_modules: storyModules.length,
      cta_type: 'demo',
      cta_text: 'Get Started',
      cta_link: '#contact'
    };

    console.log('✅ Success! Generated personalized story for:', bestPersona.name);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error in ai-navigator function:', error);
    
    // Return a fallback response
    const fallbackResponse = {
      persona: "Solutions Explorer",
      pain_point_headline: "Let us help you find the perfect solution",
      story_flow: [
        {
          narrative: "We understand that every business has unique challenges and goals that require tailored solutions.",
          highlight: "unique challenges and goals"
        },
        {
          narrative: "Our CrowdLogic ecosystem offers a range of products from personal trip planning to enterprise event management.",
          highlight: "CrowdLogic ecosystem"
        },
        {
          narrative: "Connect with our team to discover how our solutions can transform your specific use case.",
          highlight: "transform your specific use case"
        }
      ],
      cta_type: "contact",
      cta_text: "Get In Touch",
      cta_link: "#contact",
      error: error.message
    };

    return new Response(JSON.stringify(fallbackResponse), {
      status: 200, // Return 200 so frontend doesn't error
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});