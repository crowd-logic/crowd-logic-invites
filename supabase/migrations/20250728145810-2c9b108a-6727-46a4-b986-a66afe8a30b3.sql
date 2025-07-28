-- Add FAQ column to products table
ALTER TABLE public.products 
ADD COLUMN faq JSONB DEFAULT '[]'::jsonb;

-- Add some sample FAQ data for existing products
UPDATE public.products 
SET faq = '[
  {
    "q": "what is experiential marketing",
    "a": "Experiential marketing involves creating immersive, memorable experiences that allow consumers to directly interact with a brand. Instead of just seeing an ad, they participate in an event or activation, which builds a much stronger emotional connection."
  },
  {
    "q": "is this affordable for a small business",
    "a": "Absolutely. We offer scalable solutions. For small businesses, we can focus on targeted, high-impact activations with a small team of Brand Ambassadors. This approach is often more cost-effective than broad, traditional advertising and delivers measurable results."
  },
  {
    "q": "how do you measure success",
    "a": "We track multiple metrics including foot traffic, engagement rates, brand recall surveys, social media mentions, and direct conversions. Our detailed reporting shows ROI and helps optimize future campaigns."
  },
  {
    "q": "how long does it take to set up",
    "a": "Typical timeline is 2-4 weeks from initial consultation to launch, depending on campaign complexity. We handle all logistics including permits, staffing, and setup so you can focus on your business."
  }
]'::jsonb
WHERE name = 'KITO Agency';

-- Add FAQ data for other products as well
UPDATE public.products 
SET faq = '[
  {
    "q": "what makes this different from other platforms",
    "a": "Our platform combines real-time crowd intelligence with professional event management tools. Unlike generic apps, we specialize in large-scale events and provide both attendee engagement and operational insights."
  },
  {
    "q": "can this handle large events",
    "a": "Absolutely. Our platform is designed for events of any size, from intimate gatherings to festivals with 100,000+ attendees. We provide scalable infrastructure and dedicated support for large events."
  },
  {
    "q": "what kind of data do you collect",
    "a": "We collect anonymized crowd movement patterns, engagement metrics, wait times, and sentiment data. All data collection complies with privacy regulations and helps organizers optimize the attendee experience."
  }
]'::jsonb
WHERE name != 'KITO Agency';