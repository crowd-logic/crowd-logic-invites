import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const openAIApiKey = Deno.env.get('OPENAI_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { userInput } = await req.json()
    
    console.log('User input received:', userInput)

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch solution blueprints for context
    const { data: blueprints, error: blueprintError } = await supabase
      .from('solution_blueprints')
      .select('*')

    if (blueprintError) {
      console.error('Error fetching blueprints:', blueprintError)
      throw blueprintError
    }

    console.log('Fetched blueprints:', blueprints?.length)

    // STRICT AI PROMPT - The AI is now a retrieval engine, not a creative writer
    const systemPrompt = `You are a data retrieval engine for the CrowdLogic ecosystem. Your ONLY task is to find the single most relevant record in the solution_blueprints knowledge base that matches the user's input. 

You must then return the entire, unmodified JSON object from that record. Do NOT invent, create, or summarize any content, especially product names like 'TripHarmony' or 'FamilySync'. You are a data retrieval engine, not a creative writer.

Available solution blueprints:
${JSON.stringify(blueprints, null, 2)}

Your response must be a valid JSON object that exactly matches one of the blueprint records above. If no good match exists, return the closest match but never invent new content.`

    // Call OpenAI with the strict retrieval prompt
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput }
        ],
        temperature: 0.1, // Very low temperature for consistent retrieval
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI API error:', errorText)
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const aiResponse = await response.json()
    console.log('AI response received')

    let solutionData
    try {
      // Extract and parse the AI's response
      const aiContent = aiResponse.choices[0].message.content
      console.log('AI content:', aiContent)
      
      // Clean up the response and parse as JSON
      const cleanedContent = aiContent.replace(/```json\n?|\n?```/g, '').trim()
      solutionData = JSON.parse(cleanedContent)
      
      console.log('Parsed solution data:', solutionData)

      // Validate that this is actually from our blueprints
      const matchingBlueprint = blueprints?.find(bp => bp.id === solutionData.id)
      if (matchingBlueprint) {
        // Use the exact blueprint from the database to prevent hallucinations
        solutionData = matchingBlueprint
        console.log('Using exact blueprint match:', solutionData.id)
      } else {
        console.log('No exact match found, using AI selection')
      }

    } catch (parseError) {
      console.error('Error parsing AI response:', parseError)
      // Fallback to first blueprint if parsing fails
      solutionData = blueprints?.[0] || {}
    }

    return new Response(JSON.stringify(solutionData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error in ai-navigator function:', error)
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})