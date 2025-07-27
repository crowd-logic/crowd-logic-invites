CREATE TABLE public.solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  persona TEXT NOT NULL, -- e.g., "Brand Manager"
  keywords TEXT[], -- Trigger words for easier matching
  -- The exact content for the dynamic hero
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  cta_link TEXT NOT NULL, -- e.g., "/event-axis"
  solution_type TEXT NOT NULL, -- "escapade" or "EventOS"
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.solutions ENABLE ROW LEVEL SECURITY;

-- Create a policy so it's publicly readable
CREATE POLICY "Solutions are viewable by everyone" ON public.solutions FOR SELECT USING (true);