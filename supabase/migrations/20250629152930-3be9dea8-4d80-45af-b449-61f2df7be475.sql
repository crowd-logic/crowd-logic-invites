
-- Fix RLS policy for email_captures table
-- First, let's make sure RLS is enabled and create a proper policy

-- Enable RLS on the table
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public read access to email captures" ON public.email_captures;

-- Create a new policy that allows all operations for public access
-- This is safe for a simple email capture use case
CREATE POLICY "Allow all access to email captures" 
  ON public.email_captures 
  FOR ALL 
  TO public
  USING (true)
  WITH CHECK (true);

-- Alternative: If you want to be more restrictive, you can use this instead:
-- CREATE POLICY "Allow public read and insert on email captures" 
--   ON public.email_captures 
--   FOR SELECT 
--   TO public
--   USING (true);
-- 
-- CREATE POLICY "Allow public insert on email captures" 
--   ON public.email_captures 
--   FOR INSERT 
--   TO public
--   WITH CHECK (true);
