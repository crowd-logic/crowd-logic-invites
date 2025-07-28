-- Update existing solution_blueprints with persona-specific case studies

-- Update the Personal Trip Planner record with escapade case study
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: The Rodriguez Family Vacation",
  "scenario": "A family of five struggled to coordinate their annual trip, with different age groups, interests, and a chaotic group chat causing more stress than excitement.",
  "solution": "Using escapade''s ''Idea Bucket'', everyone added their dream activities. The group championed their favorites, which automatically built a balanced itinerary on a shared map that everyone could see.",
  "result": "The outcome? Their best vacation yet, with 15 hours of planning time saved and a 100% reduction in ''I didn''t know we were doing that!'' moments."
}'::JSONB
WHERE persona ILIKE '%personal%planner%' OR persona ILIKE '%trip%planner%' OR persona ILIKE '%family%';

-- Update the Brand Manager record with EventOS case study
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: Global Beverage Co. Music Festival Launch",
  "scenario": "A global beverage brand needed to measure engagement and prove ROI for their new product launch across 15 activations at a major music festival.",
  "solution": "They used Event Axis as their command center and VibePass to distribute digital collectibles, gaining real-time insight into attendee interactions and sentiment.",
  "result": "The brand saw a 30% increase in measured engagement, a 45% social share rate from digital collectibles, and a comprehensive ROI report that secured their budget for the following year."
}'::JSONB
WHERE persona ILIKE '%brand%manager%' OR persona ILIKE '%marketing%';

-- Update Event Professional record with KITO Agency case study
UPDATE solution_blueprints 
SET case_study = '{
  "title": "Case Study: Corporate Conference Staffing Success",
  "scenario": "A Fortune 500 company needed 200+ brand ambassadors across a 3-day corporate conference, with real-time performance tracking and seamless communication.",
  "solution": "KITO Agency provided vetted talent through their platform, with live performance monitoring, automated scheduling, and instant client communication throughout the event.",
  "result": "The event achieved 98% staffing reliability, 25% faster setup times, and the client received real-time performance reports that exceeded their expectations for staff quality and coordination."
}'::JSONB
WHERE persona ILIKE '%event%professional%' OR persona ILIKE '%event%coordinator%';