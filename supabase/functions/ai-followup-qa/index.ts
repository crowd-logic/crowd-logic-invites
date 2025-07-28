import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { originalSolution, newQuestion } = await req.json();
    
    console.log('Processing follow-up question:', newQuestion);
    console.log('Original solution context:', originalSolution);

    // Extract product names from the solution to get relevant FAQs
    let productNames: string[] = [];
    if (originalSolution.solution_products && Array.isArray(originalSolution.solution_products)) {
      productNames = originalSolution.solution_products.map((product: any) => product.name);
    }

    // Fetch FAQs for relevant products
    let faqs: any[] = [];
    if (productNames.length > 0) {
      const { data: products, error: productsError } = await supabase
        .from('products')
        .select('name, faq')
        .in('name', productNames);

      if (productsError) {
        console.error('Error fetching product FAQs:', productsError);
      } else {
        faqs = products?.flatMap(product => product.faq || []) || [];
      }
    }

    console.log('Found FAQs:', faqs);

    // Prepare the prompt for Anthropic
    const prompt = `You are "The AI Sales Consultant" for CrowdLogic. You are an expert in our products. A user has already received an initial solution and now has a follow-up question. Your task is to answer their question concisely and helpfully, using the provided context and knowledge base.

INITIAL SOLUTION CONTEXT:
${JSON.stringify(originalSolution, null, 2)}

KNOWLEDGE BASE (FAQs for the relevant product):
${JSON.stringify(faqs, null, 2)}

USER'S FOLLOW-UP QUESTION:
${newQuestion}

Your Response: Your response should be conversational, directly answer the user's question using the knowledge base, and gently guide them back towards the call to action. Do not make up information. If you don't know the answer, say "That's an excellent question. Let me connect you with a human specialist who can provide more detail."

Keep your response under 200 words and be helpful and encouraging.`;

    // Call Anthropic API
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicApiKey!,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 300,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!anthropicResponse.ok) {
      throw new Error(`Anthropic API error: ${anthropicResponse.status}`);
    }

    const anthropicData = await anthropicResponse.json();
    const response = anthropicData.content[0].text;

    console.log('Generated response:', response);

    return new Response(JSON.stringify({ response }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-followup-qa function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: "I'm sorry, I'm having trouble processing your question right now. That's an excellent question though - let me connect you with a human specialist who can provide more detail."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});