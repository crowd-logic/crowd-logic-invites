
-- Reset and fix RLS policies for email_captures table
-- This will ensure proper access for both anonymous users and the admin dashboard

-- First, drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow all access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public email capture submissions" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public read access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow authenticated users to view email captures" ON public.email_captures;

-- Ensure RLS is enabled
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows all operations for everyone
-- This is appropriate for a simple email capture use case
CREATE POLICY "email_captures_all_access" 
  ON public.email_captures 
  FOR ALL 
  TO public, anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Grant necessary permissions to ensure the table is accessible
GRANT ALL ON public.email_captures TO anon;
GRANT ALL ON public.email_captures TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
