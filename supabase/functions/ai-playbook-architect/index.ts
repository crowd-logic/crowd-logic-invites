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
    const body = await req.json();
    console.log('Request received:', body);

    if (!anthropicApiKey) {
      console.error('ANTHROPIC_API_KEY is not configured');
      throw new Error('ANTHROPIC_API_KEY is not configured');
    }

    console.log('API key exists, length:', anthropicApiKey.length);

    // Step 1: Generate clarifying question (when clarifying_answer is not provided)
    if (!body.clarifying_answer) {
      const { user_type, location, challenge } = body;

      if (!user_type || !location || !challenge) {
        throw new Error('Missing required fields: user_type, location, and challenge are required for step 1');
      }

      const clarifyingPrompt = `You are an expert experiential marketing strategist with decades of experience. A potential client has given you their initial challenge. Your first step is ALWAYS to ask a clarifying question to understand their true, underlying goal. 

Client Details:
- User Type: ${user_type}
- Location: ${location}
- Challenge: ${challenge}

Based on their input, generate one concise question and 2-3 mutually exclusive choices that will reveal their primary business driver (e.g., immediate revenue vs. long-term brand building, brand awareness vs. lead generation, etc.). 

The question should dig deeper into their true objective and help you understand what success looks like to them.

Return this as a JSON object with the following structure:
{
  "clarifying_question": {
    "question": "What is your primary goal for this campaign?",
    "choices": ["Drive immediate sales and revenue", "Build long-term brand awareness", "Generate qualified leads for follow-up"]
  }
}`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${anthropicApiKey}`,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: clarifyingPrompt
            }
          ]
        }),
      });

      console.log('Anthropic API response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Anthropic API error response:', errorData);
        console.error('Request was:', JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 1000,
          messages: [{ role: 'user', content: clarifyingPrompt }]
        }));
        throw new Error(`Anthropic API error: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      const aiResponse = data.content[0].text;
      
      console.log('AI clarifying response:', aiResponse);

      // Parse the JSON response from Claude
      const clarifyingResult = JSON.parse(aiResponse);

      return new Response(JSON.stringify(clarifyingResult), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Step 2: Generate complete campaign playbook (when clarifying_answer is provided)
    const { user_type, location, challenge, clarifying_answer } = body;

    if (!user_type || !location || !challenge || !clarifying_answer) {
      throw new Error('Missing required fields: user_type, location, challenge, and clarifying_answer are required for step 2');
    }

    const playbookPrompt = `You are an expert experiential marketing strategist with decades of experience. Now, using the client's full context, generate the complete Campaign Playbook.

Client Details:
- User Type: ${user_type}
- Location: ${location}
- Challenge: ${challenge}
- Primary Goal (from clarifying question): ${clarifying_answer}

STRATEGY: Your strategy must now be tailored to their chosen goal. Consider their primary objective and craft a strategic approach that directly addresses it.

TACTICS: Your tactical recommendations must reflect their primary goal. For example:
- IF their goal is 'Immediate Sales' and distribution is 'in stores', you should strongly recommend In-Store Sampling as a cornerstone tactic, but also include complementary tactics like flyer distribution to drive traffic to the store.
- IF their goal is 'Brand Awareness', focus on high-visibility, memorable experiences that create social sharing moments.
- IF their goal is 'Lead Generation', prioritize tactics that capture contact information and create follow-up opportunities.

CREATIVITY: Your goal is to surface a creative, non-obvious, but implementable solution. Frame the problem from a 30,000 ft view. Borrow ideas from other industries. Be the expert in the room.

Generate the full playbook with the following structure:

{
  "playbook": {
    "strategy": {
      "core_approach": "A 2-3 sentence strategic overview tailored to their primary goal",
      "key_insights": ["Insight 1", "Insight 2", "Insight 3"]
    },
    "tactics": [
      {
        "name": "Primary Tactic Name",
        "description": "Detailed description of the tactic and how it achieves their goal",
        "implementation": "Specific steps for execution",
        "why_this_works": "Explanation of why this is perfect for their objective"
      },
      {
        "name": "Supporting Tactic 1",
        "description": "Description of complementary tactic",
        "implementation": "Implementation details",
        "why_this_works": "Strategic rationale"
      },
      {
        "name": "Supporting Tactic 2",
        "description": "Description of additional supporting tactic",
        "implementation": "Implementation details", 
        "why_this_works": "Strategic rationale"
      }
    ],
    "research": {
      "target_audience": "Detailed profile of who this will reach",
      "market_context": "Relevant market conditions and opportunities",
      "competitive_landscape": "How this differentiates from typical approaches"
    },
    "impact": {
      "immediate_outcomes": ["Expected result 1", "Expected result 2", "Expected result 3"],
      "long_term_benefits": ["Benefit 1", "Benefit 2"],
      "success_metrics": ["Metric 1", "Metric 2", "Metric 3"]
    },
    "investment": {
      "budget_range": "Estimated budget range (e.g., $5K-15K, $20K-50K)",
      "timeline": "Suggested timeline for implementation",
      "resource_requirements": ["Required resource 1", "Required resource 2"],
      "roi_expectation": "Expected return on investment based on their goal"
    }
  }
}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${anthropicApiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: playbookPrompt
          }
        ]
      }),
    });

    console.log('Anthropic API response status (step 2):', response.status);
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error response (step 2):', errorData);
      throw new Error(`Anthropic API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;
    
    console.log('AI playbook response:', aiResponse);

    // Parse the JSON response from Claude
    const playbookResult = JSON.parse(aiResponse);

    return new Response(JSON.stringify(playbookResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-playbook-architect function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});