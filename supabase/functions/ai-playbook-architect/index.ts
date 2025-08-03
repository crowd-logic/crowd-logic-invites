import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Anthropic from 'npm:@anthropic-ai/sdk@^0.24.2';

// --- CORS HEADERS ---
// This is the crucial fix for the OPTIONS request failures.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // For testing. For production, you should lock this to your website's domain.
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // This block handles the browser's security "handshake" request.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { user_type, location, challenge } = await req.json()

    const anthropicApiKey = Deno.env.get("ANTHROPIC_API_KEY")
    if (!anthropicApiKey) {
      throw new Error("CRITICAL: ANTHROPIC_API_KEY is not set in Supabase secrets.")
    }

    const anthropic = new Anthropic({ apiKey: anthropicApiKey });

    // --- THE FULL, DETAILED MASTER PROMPT ---
    const playbookPrompt = `
      You are a world-class experiential marketing strategist and a local market expert. Your client is a small business owner, product creator, or nonprofit leader who is new to this world. Based on their user_type, location, and challenge, generate a complete "Campaign Playbook."

      1.  **Diagnose and Strategize**: Based on the user's \`challenge\` and \`user_type\`, prescribe a tailored **Strategy** in a simple, one-paragraph summary. Give the strategy a compelling, jargon-free name (e.g., 'The Neighborhood Blitz,' 'The Pop-Up Sensory Experience').

      2.  **Incorporate Distribution Channel Logic**:
          * IF the \`challenge\` mentions a physical product and its distribution is in stores, your primary recommended tactic **MUST** be **In-Store Sampling**. Your strategy should reflect this.
          * IF distribution is online or not mentioned, recommend tactics like **Pop-Up Demos** at high-traffic local events.

      3.  **Conduct Local Research**: Based on the \`location\`, identify **2-3 real or representative types of local events or high-traffic areas** where this strategy could be deployed. List these as **Recommended Local Opportunities**.

      4.  **Define the Street Team**: Recommend a small, effective team (default to **2 BAs for 4 hours**) and list their specific **Tactics**.

      5.  **Project the Impact**: Calculate the tangible outcomes using these credible averages:
          * **Direct Human Interactions/Samples**: 30 per hour per BA.
          * **Flyers Distributed**: 125 per hour per BA.

      6.  **Detail the Investment**: Create a transparent, line-item breakdown:
          * **Brand Ambassador Team**: Calculate using a client-facing rate of **$50/hr per BA**.
          * **Campaign Materials**: Estimate at **$50**.
          * **Setup & Management**: Set at **$125**.
          * **Conditional Cost**: IF the strategy involves 'In-Store Sampling', add a line item for **Retailer Slotting Fee** and list it as "Varies (can be negotiated)."
          * Calculate and display the **Total Estimated Investment**.

      The entire response must be in plain, human language. The tone must be empowering and educational. The final output must be a single, stringified JSON object with no extra text or markdown.
    `;
    
    // This is the actual call to the Anthropic API using their official SDK
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: playbookPrompt,
        },
      ],
    });

    const playbook = response.content[0].text; 

    // Return the successful response
    return new Response(JSON.stringify({ playbook: JSON.parse(playbook) }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    // Return a detailed error response
    console.error("Critical Error in ai-playbook-architect function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
})