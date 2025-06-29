
-- Fix RLS policies for email_captures table
-- Remove all existing policies and create a single comprehensive one

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow all access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public email capture submissions" ON public.email_captures;
DROP POLICY IF EXISTS "Allow public read access to email captures" ON public.email_captures;
DROP POLICY IF EXISTS "Allow authenticated users to view email captures" ON public.email_captures;
DROP POLICY IF EXISTS "email_captures_all_access" ON public.email_captures;

-- Ensure RLS is enabled
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;

-- Create a single policy that allows all operations for all users
CREATE POLICY "email_captures_full_access" 
  ON public.email_captures 
  FOR ALL 
  USING (true)
  WITH CHECK (true);

-- Grant necessary table permissions
GRANT ALL ON public.email_captures TO public;
GRANT ALL ON public.email_captures TO anon;
GRANT ALL ON public.email_captures TO authenticated;

-- Grant schema permissions
GRANT USAGE ON SCHEMA public TO public;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
