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

const getSystemPrompt = () => `Your ONLY task is to find the single most relevant record in the solution_blueprints knowledge base that matches the user's input. You must then return the entire, unmodified JSON object from that record. Do NOT invent, create, or summarize any content. You are a data retrieval engine, not a creative writer.

When you find the matching record, return it exactly as stored in the database, including all fields: persona, pain_point_headline, solution_products, user_journey_raw, case_study, cta_type, cta_text, and cta_link.

Your response must be a single JSON object containing the exact data from the database record.`;

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

    // Return the exact blueprint record as structured data
    const dashboardContent = {
      persona: matchedBlueprint.persona,
      pain_point_headline: matchedBlueprint.pain_point_headline,
      solution_products: matchedBlueprint.solution_products,
      user_journey_raw: matchedBlueprint.user_journey_raw,
      case_study: matchedBlueprint.case_study,
      cta_type: matchedBlueprint.cta_type,
      cta_text: matchedBlueprint.cta_text,
      cta_link: matchedBlueprint.cta_link,
      keywords: matchedBlueprint.keywords
    };

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