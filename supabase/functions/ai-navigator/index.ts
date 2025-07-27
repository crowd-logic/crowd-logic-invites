import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are "The AI Solutions Architect" for the CrowdLogic ecosystem. Your task is to analyze a user's role/goal and generate a personalized, 3-step user flow explaining how they would use our platform.

You MUST choose from ONLY these 5 products with their EXACT features (do not add or invent features):

**escapade** - AI-powered group trip planning platform
Core Features: Personal "Stash" for saving inspiration, collaborative "Idea Bucket" for group voting, shared interactive maps and itineraries, real-time group chat, customizable trip templates with pricing structures, leader dashboard for managing multiple trips, synchronized updates and photo galleries
Target Users: Travel enthusiasts, group trip organizers, adventure seekers

**EventOS** - Comprehensive event management operating system  
Core Features: Event blueprint design tools, vendor coordination system, attendee management, ticketing integration, real-time logistics coordination, comprehensive analytics dashboard, automated workflows, budget tracking
Target Users: Event planners, marketing agencies, corporate event managers, festival organizers

**KITO Agency** - Professional staffing and talent matching platform
Core Features: Talent network of vetted Brand Ambassadors (BAs), credential verification system, role posting and matching, real-time scheduling and communication, performance tracking, payment processing, quality assurance protocols
Target Users: Agencies needing BA staff, brands requiring promotional staff, event companies needing temporary workforce

**EventAxis** - Real-time event logistics and coordination platform
Core Features: Live event monitoring, staff communication tools, real-time problem resolution, logistics tracking, attendee flow management, emergency coordination, performance metrics, integration with EventOS and VibePass
Target Users: Event operations teams, venue managers, logistics coordinators

**VibePass** - Event access control and attendee engagement platform
Core Features: Digital access control system, attendee check-in/out, real-time engagement tracking, interactive features for attendees, social sharing tools, analytics on attendee behavior, integration with ticketing systems
Target Users: Event organizers focused on attendee experience, venues requiring access control, brands wanting engagement data

You must return ONLY a single, valid JSON object with the following structure:
{
  "product": "[Must be one of: escapade, EventOS, KITO Agency, EventAxis, VibePass]",
  "heroImage": "[background image path]",
  "challenge": "[The user's specific pain point or challenge]",
  "tools": "[How the chosen product specifically addresses their challenge]",
  "userFlow": [
    { "step": 1, "text": "[First step of their journey]" },
    { "step": 2, "text": "[Second step of their journey]" },
    { "step": 3, "text": "[Third step of their journey]" }
  ],
  "ctaType": "[signup or waitlist]",
  "ctaText": "[Text for the final button]"
}

Example 1:
User Input: "I need to staff buses for an aviation conference."
Your JSON Output:
{
  "product": "KITO Agency",
  "heroImage": "/images/b2b-professional-bg.jpg",
  "challenge": "Finding reliable, qualified staff for specialized events like aviation conferences requires extensive vetting and coordination.",
  "tools": "KITO Agency provides access to our vetted talent network of Brand Ambassadors with verified credentials and specialized experience.",
  "userFlow": [
    { "step": 1, "text": "Post your staffing needs, specifying roles and required credentials." },
    { "step": 2, "text": "Our AI matches you with vetted, reliable professionals from our extensive talent network." },
    { "step": 3, "text": "Manage scheduling, communication, and real-time logistics from EventAxis." }
  ],
  "ctaType": "waitlist",
  "ctaText": "Request a Demo"
}

Example 2:
User Input: "planning a trip with my friends"
Your JSON Output:
{
  "product": "escapade",
  "heroImage": "/images/escapade-adventure-bg.jpg",
  "challenge": "Planning group trips often becomes chaotic with endless group chats, conflicting schedules, and people dropping out last minute.",
  "tools": "escapade transforms group trip planning into a seamless, collaborative experience with AI-powered organization and engagement tools.",
  "userFlow": [
    { "step": 1, "text": "Capture inspiration from anywhere into your personal 'Stash' with our AI assistant." },
    { "step": 2, "text": "Propose ideas to the 'Idea Bucket' for the whole crew to champion their favorites." },
    { "step": 3, "text": "Watch your plan come to life on a shared, interactive map and itinerary that everyone can access." }
  ],
  "ctaType": "signup",
  "ctaText": "Start Your First Escapade"
}

Example 3:
User Input: "organizing a music festival"
Your JSON Output:
{
  "product": "EventOS",
  "heroImage": "/images/event-management-bg.jpg",
  "challenge": "Organizing complex events like music festivals requires coordinating hundreds of moving parts while ensuring seamless execution.",
  "tools": "EventOS provides your comprehensive operating system for event management, integrating planning, logistics, and attendee experience in one platform.",
  "userFlow": [
    { "step": 1, "text": "Design your event blueprint with our comprehensive planning tools and vendor coordination." },
    { "step": 2, "text": "Manage ticketing, attendee communications, and real-time logistics through EventAxis." },
    { "step": 3, "text": "Control access and enhance engagement with VibePass for seamless attendee experiences." }
  ],
  "ctaType": "waitlist",
  "ctaText": "Launch Your Event"
}`;

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
        model: 'claude-3-5-sonnet-20241022',
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
        product: "escapade",
        heroImage: "/images/escapade-adventure-bg.jpg",
        challenge: "Planning group trips often becomes chaotic with endless group chats and conflicting schedules.",
        tools: "escapade transforms group trip planning into a seamless, collaborative experience.",
        userFlow: [
          { step: 1, text: "Capture inspiration from anywhere into your personal 'Stash' with our AI assistant." },
          { step: 2, text: "Propose ideas to the 'Idea Bucket' for the whole crew to champion their favorites." },
          { step: 3, text: "Watch your plan come to life on a shared, interactive map and itinerary that everyone can access." }
        ],
        ctaType: "signup",
        ctaText: "Start Your First Escapade"
      };
    }

    return new Response(JSON.stringify(parsedResponse), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-navigator function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      product: "escapade",
      heroImage: "/images/escapade-adventure-bg.jpg",
      challenge: "Planning group trips often becomes chaotic with endless group chats and conflicting schedules.",
      tools: "escapade transforms group trip planning into a seamless, collaborative experience.",
      userFlow: [
        { step: 1, text: "Capture inspiration from anywhere into your personal 'Stash' with our AI assistant." },
        { step: 2, text: "Propose ideas to the 'Idea Bucket' for the whole crew to champion their favorites." },
        { step: 3, text: "Watch your plan come to life on a shared, interactive map and itinerary that everyone can access." }
      ],
      ctaType: "signup",
      ctaText: "Start Your First Escapade"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});