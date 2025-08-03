import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Anthropic from 'npm:@anthropic-ai/sdk@^0.24.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { user_type, distribution_model, location, challenge } = await req.json();

    const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicApiKey) {
      throw new Error("CRITICAL: ANTHROPIC_API_KEY is not set.");
    }

    const anthropic = new Anthropic({ apiKey: anthropicApiKey });

    // --- REVISED & MORE EXPLICIT MASTER PROMPT ---
    const playbookPrompt = `Based on the user's profile, generate a complete "Campaign Playbook."
      <client_profile>
        <user_type>${user_type}</user_type>
        <distribution_model>${distribution_model || 'Not Specified'}</distribution_model>
        <location>${location || 'Not Specified'}</location>
        <challenge>${challenge}</challenge>
      </client_profile>
      
      Follow these instructions precisely:
      1.  Diagnose the challenge and prescribe a tailored **Strategy** with a jargon-free name.
      2.  If \`distribution_model\` is 'in_retail_stores', strongly recommend **In-Store Sampling**.
      3.  Based on the \`location\`, research and recommend 2-3 specific types of **Local Opportunities**.
      4.  Define the **Team & Tactics** (default 2 BAs for 4 hours).
      5.  Project **Impact** using these averages: 30 interactions/hr/BA, 125 flyers/hr/BA.
      6.  Detail the **Investment** breakdown: $50/hr/BA client rate, $50 for materials, $125 for setup. If In-Store Sampling is a tactic, add a 'Retailer Slotting Fee' and list it as "Varies."
    `;

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 4000,
      // Using a system prompt enforces the output format more reliably
      system: "You are an expert experiential marketing strategist. Your response MUST be a single, valid, stringified JSON object and nothing else. Do not include any conversational text, markdown formatting, or explanations outside of the JSON structure: { \"playbook\": { \"strategy\": \"...\", \"opportunities\": [...], \"team_tactics\": \"...\", \"projected_impact\": \"...\", \"investment\": { ... } } }",
      messages: [{ role: 'user', content: playbookPrompt }],
    });

    const rawAIResponse = response.content[0].text;
    
    // --- ADDED DIAGNOSTIC LOGGING ---
    console.log("Raw AI Response received:", rawAIResponse);

    let playbook;
    try {
      playbook = JSON.parse(rawAIResponse);
    } catch (parseError) {
      console.error("JSON PARSING FAILED:", parseError);
      // This provides a much more helpful error message
      throw new Error(`AI returned invalid JSON. Raw response: ${rawAIResponse}`);
    }

    return new Response(JSON.stringify(playbook), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error("Critical Error in function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
})