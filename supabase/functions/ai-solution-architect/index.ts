import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { challenge, scale } = await req.json();

    console.log('Generating solution brief for:', { challenge, scale });

    // Create a professional solution brief based on the inputs
    const solutionTemplates = {
      "Managing a Large, Temporary Workforce": {
        challenge: `Managing large-scale temporary workforce presents critical operational challenges including recruitment bottlenecks, inconsistent onboarding processes, communication fragmentation across distributed teams, and difficulty maintaining quality standards at scale. ${scale} organizations face amplified coordination complexity, increased administrative overhead, and heightened risk of operational disruptions due to workforce volatility.`,
        proposedSolution: `Deploy the Human Capital Network module with integrated EventAxis workforce management system. This enterprise-grade solution provides automated recruitment workflows, standardized digital onboarding, real-time communication orchestration, and performance tracking dashboards. The platform's AI-driven matching algorithms optimize talent allocation while maintaining compliance protocols and quality assurance standards throughout the engagement lifecycle.`,
        projectedImpact: `Expected 40-60% reduction in recruitment cycle time, 35% decrease in administrative overhead, and 25% improvement in workforce retention rates. ROI projection shows break-even within 6-8 months through operational efficiency gains, reduced turnover costs, and enhanced project delivery reliability. Risk mitigation includes improved compliance tracking and reduced exposure to workforce-related operational disruptions.`
      },
      "Coordinating Complex Group Travel & Events": {
        challenge: `Complex group travel and event coordination creates multiple failure points including fragmented booking systems, communication silos, budget overruns, and participant experience inconsistencies. ${scale} organizations struggle with real-time logistics management, vendor coordination, and maintaining participant engagement while ensuring operational efficiency and cost control.`,
        proposedSolution: `Implement the escapade Personal Logistics Engine with integrated Campaign Analytics Core. This comprehensive platform centralizes booking management, automates participant communications, provides real-time expense tracking, and delivers predictive analytics for optimal resource allocation. The system's intelligent routing and vendor management capabilities ensure seamless execution while maintaining budget discipline.`,
        projectedImpact: `Anticipated 50% reduction in planning time, 30% decrease in coordination costs, and 45% improvement in participant satisfaction scores. Financial impact includes 20-25% cost savings through optimized vendor negotiations and resource utilization. Enhanced participant experience drives higher engagement rates and improved brand perception, with measurable impact on subsequent event attendance and loyalty metrics.`
      },
      "Measuring Real-Time Campaign & Event ROI": {
        challenge: `Traditional campaign and event measurement systems provide delayed, fragmented insights that prevent real-time optimization and accurate ROI calculation. ${scale} organizations require sophisticated analytics that capture multi-touchpoint attribution, real-time engagement metrics, and predictive performance indicators to justify marketing investments and optimize future campaigns.`,
        proposedSolution: `Deploy the Campaign Analytics Core integrated with Audience Sentiment Matrix for comprehensive real-time measurement and optimization. This advanced analytics platform provides live dashboard monitoring, multi-channel attribution modeling, sentiment analysis, and predictive ROI forecasting. Machine learning algorithms continuously optimize campaign performance while providing actionable insights for strategic decision-making.`,
        projectedImpact: `Expected 70% improvement in campaign performance visibility, 40% increase in ROI measurement accuracy, and 35% enhancement in campaign optimization speed. Strategic value includes data-driven budget allocation, improved marketing effectiveness, and enhanced stakeholder confidence through transparent reporting. Long-term impact shows 25-30% improvement in overall marketing ROI through continuous optimization and strategic insights.`
      }
    };

    const template = solutionTemplates[challenge as keyof typeof solutionTemplates];
    
    if (!template) {
      throw new Error('Invalid challenge selected');
    }

    const brief = {
      challenge: template.challenge,
      proposedSolution: template.proposedSolution,
      projectedImpact: template.projectedImpact
    };

    return new Response(JSON.stringify({ brief }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-solution-architect function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});