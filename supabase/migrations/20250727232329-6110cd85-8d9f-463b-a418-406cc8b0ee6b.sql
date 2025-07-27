CREATE TABLE public.solution_blueprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona TEXT NOT NULL UNIQUE, -- e.g., "Brand Manager"
  keywords TEXT[], -- Trigger words for semantic search
  pain_point_headline TEXT NOT NULL, -- For "Chapter 1" of the story

  -- The raw, detailed user journey for the AI to process
  user_journey_raw TEXT NOT NULL, 

  -- Pre-defined product info for "Chapter 2"
  solution_products JSONB, 

  -- Pre-defined CTA for the final chapter
  cta_type TEXT NOT NULL, -- "signup" or "waitlist"
  cta_text TEXT NOT NULL,
  cta_link TEXT NOT NULL
);

-- Enable Row Level Security and make it readable
ALTER TABLE public.solution_blueprints ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Blueprints are viewable by everyone" ON public.solution_blueprints FOR SELECT USING (true);