import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Anthropic from 'npm:@anthropic-ai/sdk@^0.24.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { user_type, location, challenge } = await req.json();

    if (!user_type || !location || !challenge) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: user_type, location, challenge' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!anthropicApiKey) {
      throw new Error('CRITICAL: ANTHROPIC_API_KEY is not set.');
    }

    const anthropic = new Anthropic({ apiKey: anthropicApiKey });

    const profile = `User Profile\n- user_type: ${user_type}\n- location: ${location}\n- challenge: ${challenge}`;

    // Definitive master prompt per spec
    const masterPrompt = `You are a world-class experiential marketing strategist. Based on the user's user_type, location, and challenge, generate a complete "Campaign Playbook."\n\nStrategy: Devise a creative, tailored strategy in a simple, one-paragraph summary. Give it a compelling name (e.g., 'The Neighborhood Blitz').\n\nRecommended Opportunities: Based on the location, identify 2-3 real or representative types of local events.\n\nTeam & Tactics: Recommend a small team (default 2 BAs for 4 hours) and list their tactics.\n\nProjected Impact: Calculate outcomes using these averages: 1 BA = ~25 interactions/hr & ~125 flyers/hr.\n\nInvestment: Create a transparent breakdown: agency rate of $50/hr per BA, Campaign Materials (~$50), and a Setup & Management Fee ($100).\n\nThe tone must be empowering, educational, and jargon-free.`;

    const system = `Return ONLY a single valid JSON object with this exact structure, no prose, no markdown:\n{ "playbook": { "strategy": "...", "opportunities": ["...", "..."], "team_tactics": "...", "projected_impact": "...", "investment": { "ba_team_cost": 0, "materials_cost": 0, "setup_fee": 0, "total": 0 } } }`;

    const ai = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1200,
      system,
      messages: [
        { role: 'user', content: `${profile}\n\n${masterPrompt}` }
      ],
      temperature: 0.2,
    });

    const raw = ai.content?.[0]?.text ?? '';
    console.log('Raw AI response:', raw);

    // Clean possible code fences then parse
    const cleaned = raw.replace(/```json\n?|```/g, '').trim();

    let parsed: any;
    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      console.error('JSON parse failed. Raw:', raw);
      throw new Error('AI returned invalid JSON.');
    }

    const pb = parsed?.playbook ?? {};

    // Enforce exact numeric investment as per spec (default team: 2 BAs x 4 hours x $50/hr)
    const ba_team_cost = 2 * 4 * 50; // 400
    const materials_cost = 50;
    const setup_fee = 100;
    const total = ba_team_cost + materials_cost + setup_fee; // 550

    const result = {
      playbook: {
        strategy: typeof pb.strategy === 'string' && pb.strategy.trim() ? pb.strategy.trim() : `A focused plan tailored to ${user_type} in ${location} to address: ${challenge}.`,
        opportunities: Array.isArray(pb.opportunities) && pb.opportunities.length ? pb.opportunities.slice(0, 3).map(String) : [
          'Neighborhood street fairs',
          'Local farmers markets',
          'Community wellness events'
        ],
        team_tactics: typeof pb.team_tactics === 'string' && pb.team_tactics.trim() ? pb.team_tactics.trim() : '2 Brand Ambassadors for 4 hours executing product demos, flyering, quick surveys, and social capture.',
        projected_impact: typeof pb.projected_impact === 'string' && pb.projected_impact.trim() ? pb.projected_impact.trim() : 'Approx. 200 interactions and 1,000 flyers distributed (2 BAs x 25 interactions/hr x 4 hrs; 2 BAs x 125 flyers/hr x 4 hrs).',
        investment: {
          ba_team_cost,
          materials_cost,
          setup_fee,
          total,
        },
      },
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in ai-playbook-architect function:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});