import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are an AI assistant for CrowdLogic, a company that provides experiential marketing solutions. Based on user input describing their role or goal, you need to identify which CrowdLogic solution would be most relevant and return a structured JSON response.

CrowdLogic Solutions:
1. EventOS™ - For brands and agencies needing experiential marketing operations
2. escapade™ - For consumers planning group trips and experiences
3. VibePass™ - For vendors and concession stands at events

Analyze the user input and return a JSON response with:
{
  "title": "Solution-specific headline",
  "description": "Personalized description explaining how this solution helps them",
  "ctaText": "Relevant call-to-action button text",
  "solutionType": "EventOS" | "escapade" | "VibePass"
}

Keep responses concise, engaging, and focused on value proposition.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userInput } = await req.json();

    if (!ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY not configured');
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
        model: 'claude-3-sonnet-20240229',
        max_tokens: 500,
        system: systemPrompt,
        messages: [{
          role: 'user',
          content: userInput
        }]
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;
    
    // Parse the AI response as JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (e) {
      // Fallback if AI doesn't return valid JSON
      parsedResponse = {
        title: "Discover Your Solution",
        description: "Let us show you how CrowdLogic can transform your experiential marketing approach.",
        ctaText: "Learn More",
        solutionType: "EventOS"
      };
    }

    return new Response(JSON.stringify(parsedResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-navigator function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      title: "Explore Our Solutions",
      description: "Discover how CrowdLogic can help you succeed in experiential marketing.",
      ctaText: "Get Started",
      solutionType: "EventOS"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});