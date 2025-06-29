
-- Complete reset of RLS policies for email_captures table
-- Drop all existing policies first
DROP POLICY IF EXISTS "Allow all access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public email capture submissions" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public read access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow authenticated users to view email captures" ON public.email_captures;
DROP POLICY IF EXISTS "email_captures_all_access" ON public.email_captures;
DROP POLICY IF EXISTS "email_captures_full_access" ON public.email_captures;

-- Ensure RLS is enabled
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;

-- Create a single, simple policy that allows everything
CREATE POLICY "email_captures_public_access" 
  ON public.email_captures 
  FOR ALL 
  TO public, anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Grant necessary permissions
GRANT ALL ON public.email_captures TO public;
GRANT ALL ON public.email_captures TO anon;
GRANT ALL ON public.email_captures TO authenticated;
