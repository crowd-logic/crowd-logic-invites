import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!anthropicApiKey) {
      throw new Error('Anthropic API key not configured');
    }

    const { strength, hours } = await req.json();

    if (!strength || !hours) {
      throw new Error('Both strength and hours are required');
    }

    // Validate strength input
    const validStrengths = [
      'A Great Storyteller',
      'Connecting with People', 
      'Tech-Savvy & Organized',
      'A Natural Tastemaker'
    ];

    if (!validStrengths.includes(strength)) {
      throw new Error('Invalid strength provided');
    }

    // Master prompt for the AI
    const masterPrompt = `You are an encouraging career coach for the modern gig economy. Based on the user's strength and the typical length of an activation (the hours input), generate a "Professional Persona Snapshot."

1. Assign an Aspirational Title: Choose one from: [Community Ambassador, Brand Educator, Experience Specialist, Tastemaker].

2. Project Realistic Gig Earnings: Calculate a potential earnings range for a single activation. Use a base hourly rate of $28 to $35. The formula is (hours * 28) to (hours * 35). Present this clearly, for example: "For a typical weekend activation, you could project earnings between $336 and $420."

3. Write the Empowering Narrative: Write a short, inspiring paragraph that connects their strength to the value and experience of the role. Frame it as a fun, flexible, and respectable way to monetize their natural talents and influence, not just a way to "survive." The tone must be professional, direct, and authentic.

User's strength: ${strength}
Activation hours: ${hours}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${anthropicApiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 500,
        messages: [
          { 
            role: 'user', 
            content: `You are an encouraging career coach for the modern gig economy. Generate professional, inspiring, and realistic career guidance.

${masterPrompt}`
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const snapshot = data.content[0].text;

    return new Response(JSON.stringify({ snapshot }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-opportunity-engine function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Could not project your potential at this time. Please try again.',
        details: 'An error occurred while generating your professional persona snapshot'
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});