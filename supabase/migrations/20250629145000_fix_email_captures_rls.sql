
-- Update RLS policy to allow public read access for admin functionality
DROP POLICY IF EXISTS "Allow authenticated users to view email captures" ON public.email_captures;

-- Create policy to allow public read access (for admin dashboard)
CREATE POLICY "Allow public read access to email captures" 
  ON public.email_captures 
  FOR SELECT 
  TO public
  USING (true);
