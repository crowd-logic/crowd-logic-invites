-- Create products table first (needed for foreign key references)
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  tagline TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create personas table
CREATE TABLE public.personas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create story_modules table
CREATE TABLE public.story_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona_id UUID NOT NULL REFERENCES public.personas(id),
  module_type TEXT NOT NULL CHECK (module_type IN ('challenge', 'solution', 'result', 'feature_benefit')),
  product_name TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.personas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.story_modules ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since these are knowledge base tables)
CREATE POLICY "Products are viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Personas are viewable by everyone" ON public.personas FOR SELECT USING (true);
CREATE POLICY "Story modules are viewable by everyone" ON public.story_modules FOR SELECT USING (true);

-- Populate the products table
INSERT INTO public.products (name, tagline) VALUES
('escapade', 'The app for authoring adventures.'),
('Event Axis', 'The command center for experiential marketing.'),
('VibePass', 'The social layer for live events.'),
('KITO Agency', 'Professional event staffing operations.');

-- Populate the personas table
INSERT INTO public.personas (name, description, keywords) VALUES
('Personal Trip Planner', 'An individual planning a trip for a group of friends or family.', '{"friends", "vacation", "bachelorette party", "group chat", "trip", "getaway"}'),
('Brand Manager', 'A marketing professional responsible for brand strategy and campaign execution.', '{"brand", "marketing", "roi", "experiential", "campaign", "agency"}'),
('Staffing Agency', 'A professional responsible for recruiting, onboarding, and managing event staff.', '{"staffing", "recruiter", "talent", "brand ambassador", "workforce"}'),
('Logistics Manager', 'A professional managing large-scale event logistics, transportation, and crowd flow.', '{"logistics", "tms", "transportation", "buses", "crowd control"}'),
('Event Attendee', 'An individual participating in a large-scale event or festival.', '{"attendee", "festival", "concert", "safety", "navigation"}'),
('Brand Ambassador', 'An individual working gigs to represent brands at events.', '{"ba", "gig work", "side hustle", "event staff"}');

-- Populate the story_modules table with narrative content
INSERT INTO public.story_modules (persona_id, module_type, product_name, content) VALUES
-- Modules for "Personal Trip Planner"
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'challenge', 'escapade', 'Planning a group trip in a chaotic text thread is a nightmare. Ideas get lost, decisions are unclear, and the fun fades before the trip even starts.'),
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'solution', 'escapade', 'escapade moves your planning into one beautiful, organized space. Everyone adds ideas to the ''Idea Bucket,'' and the group champions their favorites.'),
((SELECT id FROM personas WHERE name = 'Personal Trip Planner'), 'result', 'escapade', 'The result is a perfectly authored adventure, with a shared interactive itinerary and map that keeps everyone on the same page.'),

-- Modules for "Brand Manager"
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'challenge', 'Event Axis', 'As a Brand Manager, your biggest challenge is proving the value of experiential marketing with hard data and real-time insights.'),
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'solution', 'Event Axis', 'Event Axis acts as your mission control, letting you see live ROI, track staff performance, and view field reports from all your activations in one dashboard.'),
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'solution', 'VibePass', 'Simultaneously, VibePass connects you directly with attendees, turning them into an engaged community through digital collectibles and gamified experiences.'),
((SELECT id FROM personas WHERE name = 'Brand Manager'), 'result', 'Event Axis', 'The outcome is a comprehensive ROI report, backed by live engagement data, that secures your marketing budget and guides your strategy for future success.'),

-- Modules for "Logistics Manager"
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'challenge', 'Event Axis', 'Managing hundreds of staff across dozens of locations during a massive event like the Olympics is a logistical nightmare without real-time visibility.'),
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'solution', 'Event Axis', 'Event Axis provides a live GPS map of all your staff at their assigned posts. When VibePass data detects an attendee surge, you can instantly redeploy your team via group message to prevent bottlenecks.'),
((SELECT id FROM personas WHERE name = 'Logistics Manager'), 'result', 'Event Axis', 'The result is a smooth, efficient operation, with documented proof of performance and the ability to proactively solve problems before they escalate.'),

-- Modules for "Event Attendee"
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'challenge', 'VibePass', 'Feeling lost or unsafe at a big event can ruin the entire experience, especially when you''re in an unfamiliar city.'),
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'solution', 'VibePass', 'VibePass is your guide to a safer, more engaging, and memorable event experience with real-time safety data and interactive features.'),
((SELECT id FROM personas WHERE name = 'Event Attendee'), 'result', 'VibePass', 'You leave with digital keepsakes, new connections, and the confidence that comes from navigating the event like a pro.'),

-- Modules for "Brand Ambassador"
((SELECT id FROM personas WHERE name = 'Brand Ambassador'), 'challenge', 'Event Axis', 'Tired of unclear pay and last-minute reporting? Working brand ambassador gigs shouldn''t feel like a guessing game.'),
((SELECT id FROM personas WHERE name = 'Brand Ambassador'), 'solution', 'Event Axis', 'Event Axis is the all-in-one app for finding gigs, managing your schedule, and tracking your earnings in real-time.'),
((SELECT id FROM personas WHERE name = 'Brand Ambassador'), 'result', 'Event Axis', 'Build a smarter schedule, get paid fairly, and turn gig work into a reliable income stream with complete transparency.'),

-- Modules for "Staffing Agency"
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'challenge', 'KITO Agency', 'Managing a network of event staff across multiple cities requires precision, reliability, and real-time coordination.'),
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'solution', 'KITO Agency', 'KITO Agency provides premium staffing operations with vetted talent, live performance tracking, and seamless client communication.'),
((SELECT id FROM personas WHERE name = 'Staffing Agency'), 'result', 'KITO Agency', 'Deliver exceptional service at scale while building long-term relationships with both clients and staff through transparent, professional operations.');