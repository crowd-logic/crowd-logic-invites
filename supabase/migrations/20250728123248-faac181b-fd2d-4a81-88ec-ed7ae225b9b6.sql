-- Add case_study column to solution_blueprints table
ALTER TABLE solution_blueprints ADD COLUMN case_study JSONB;

-- Update Personal Trip Planner record
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: The Rodriguez Family Vacation",
  "scenario": "A family of five struggled to coordinate their annual trip, with different age groups, interests, and a chaotic group chat causing more stress than excitement.",
  "solution": "Using escapade''s ''Idea Bucket'', everyone added their dream activities. The group championed their favorites, which automatically built a balanced itinerary on a shared map that everyone could see.",
  "result": "The outcome? Their best vacation yet, with 15 hours of planning time saved and a 100% reduction in ''I didn''t know we were doing that!'' moments."
}'::jsonb
WHERE persona = 'Personal Trip Planner';

-- Update Brand Manager record
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: Global Beverage Co. Music Festival Launch",
  "scenario": "A global beverage brand needed to measure engagement and prove ROI for their new product launch across 15 activations at a major music festival.",
  "solution": "They used Event Axis as their command center and VibePass to distribute digital collectibles, gaining real-time insight into attendee interactions and sentiment.",
  "result": "The brand saw a 30% increase in measured engagement, a 45% social share rate from digital collectibles, and a comprehensive ROI report that secured their budget for the following year."
}'::jsonb
WHERE persona = 'Brand Manager';

-- Update Staffing Agency record
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: NationWide Event Staffing Solutions",
  "scenario": "A staffing agency managing 500+ events annually was drowning in spreadsheets, missed communications, and last-minute no-shows that damaged client relationships.",
  "solution": "Event Axis became their operational backbone, with automated job matching, bulk communication tools, and real-time shift tracking across multiple time zones.",
  "result": "They reduced administrative overhead by 60%, improved staff retention by 40%, and scaled from 2,000 to 5,000 active brand ambassadors without adding headcount."
}'::jsonb
WHERE persona = 'Staffing Agency';