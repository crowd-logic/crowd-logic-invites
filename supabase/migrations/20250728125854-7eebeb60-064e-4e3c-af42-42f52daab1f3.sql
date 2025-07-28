-- 1. A table to define our core user personas
CREATE TABLE public.personas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE, -- "Brand Manager", "Logistics Manager", etc.
  description TEXT,
  keywords TEXT[]
);

-- 2. A table for the reusable story modules (our "Lego bricks")
CREATE TABLE public.story_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona_id UUID NOT NULL REFERENCES public.personas(id),
  -- The type of narrative block this is
  module_type TEXT NOT NULL CHECK (module_type IN ('challenge', 'solution', 'result', 'feature_benefit')),
  -- The specific product or feature this module relates to
  product_name TEXT, -- "Event Axis", "VibePass", etc.
  -- The actual narrative content
  content TEXT NOT NULL,
  -- For semantic search (using OpenAI's embedding dimension)
  embedding VECTOR(1536) -- Or the dimension for your chosen model
);

-- 3. Populate with initial personas
INSERT INTO public.personas (name, description, keywords) VALUES
  ('Brand Manager', 'A marketing professional responsible for brand strategy and campaign execution.', '{"brand", "marketing", "roi", "experiential", "campaign", "activation"}'),
  ('Personal Trip Planner', 'An individual planning a trip for a group of friends or family.', '{"friends", "vacation", "group chat", "trip", "family", "travel", "planning"}'),
  ('Logistics Manager', 'A professional managing large-scale event logistics, transportation, and crowd flow.', '{"logistics", "tms", "transportation", "buses", "operations", "coordination"}'),
  ('Event Attendee', 'A person attending an event looking for navigation, safety, and engagement opportunities.', '{"attendee", "festival", "concert", "safety", "navigation", "experience"}'),
  ('Staffing Agency', 'A company providing professional staffing solutions for events and activations.', '{"staffing", "workforce", "recruitment", "talent", "agency", "personnel"}}');

-- 4. Populate story modules for Brand Manager
INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'challenge', 'As a Brand Manager, your biggest challenge is proving the value of experiential marketing with hard data and real-time insights that justify your budget allocation.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'solution', 'Event Axis', 'Event Axis acts as your mission control, unifying planning, execution, and analytics into a single command center that tracks every aspect of your campaign.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'solution', 'VibePass', 'VibePass is your direct line to the audience, turning passive attendees into engaged community members through digital collectibles and interactive experiences.');

INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'result', 'The outcome is a comprehensive ROI report, backed by live engagement data and detailed analytics, that secures your marketing budget and demonstrates clear value to stakeholders.');

-- 5. Populate story modules for Personal Trip Planner
INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'challenge', 'Planning a group trip often turns into chaos with endless group chats, conflicting preferences, and the stress of coordinating everyone''s different interests and schedules.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'solution', 'escapade', 'escapade transforms your chaotic planning process with the Stash for capturing inspiration, the Idea Bucket for group collaboration, and automated itinerary creation on an interactive map.');

INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'result', 'Your group experiences their best vacation yet, with 15+ hours of planning time saved and zero "I didn''t know we were doing that!" moments.');

-- 6. Populate story modules for Logistics Manager
INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'challenge', 'Managing large-scale event logistics means coordinating complex transportation networks, crowd flow, and real-time operational changes across multiple venues and vendors.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'solution', 'Event Axis', 'Event Axis provides your logistics command center with real-time transportation tracking, crowd flow analytics, and integrated vendor coordination tools.');

INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'result', 'You achieve seamless event execution with 40% improved operational efficiency and real-time visibility into every moving part of your logistics operation.');

-- 7. Populate story modules for Event Attendee
INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'challenge', 'Navigating large events can feel overwhelming with safety concerns, long wait times, and missing out on the best experiences because you don''t know where to go.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'solution', 'VibePass', 'VibePass becomes your personal event guide with real-time safety data, crowd-sourced wait times, and exclusive access to digital collectibles and brand activations.');

INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'result', 'You experience a safer, more engaging event with personalized recommendations and lasting digital memories collected in your VibeWallet.');

-- 8. Populate story modules for Staffing Agency
INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'challenge', 'Finding and managing qualified event staff across multiple locations while ensuring reliability, proper certifications, and seamless coordination is a constant operational challenge.');

INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'solution', 'KITO Agency', 'KITO Agency provides your premium staffing platform with verified talent pools, automated matching based on certifications, and real-time workforce management tools.');

INSERT INTO public.story_modules (persona_id, module_type, content) VALUES
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'result', 'You deliver consistently excellent service with 95% staff reliability scores and streamlined operations that scale seamlessly across multiple events and clients.');

-- Enable RLS on new tables
ALTER TABLE public.personas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.story_modules ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access to personas" ON public.personas FOR SELECT USING (true);
CREATE POLICY "Public read access to story modules" ON public.story_modules FOR SELECT USING (true);