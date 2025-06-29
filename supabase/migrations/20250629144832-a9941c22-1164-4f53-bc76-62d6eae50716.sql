
-- Create a table to store email capture form submissions
CREATE TABLE public.email_captures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add an index on email for faster lookups
CREATE INDEX idx_email_captures_email ON public.email_captures(email);

-- Add an index on created_at for sorting
CREATE INDEX idx_email_captures_created_at ON public.email_captures(created_at DESC);

-- Enable Row Level Security (RLS) - making it publicly accessible for form submissions
ALTER TABLE public.email_captures ENABLE ROW LEVEL Security;

-- Create policy to allow public insertions (for the form)
CREATE POLICY "Allow public email capture submissions" 
  ON public.email_captures 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policy to allow reading for authenticated users only (for admin access)
CREATE POLICY "Allow authenticated users to view email captures" 
  ON public.email_captures 
  FOR SELECT 
  TO authenticated
  USING (true);
