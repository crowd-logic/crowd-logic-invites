# Project Audit

This document provides a complete, high-level inventory of the app: routes, pages, components, imports/exports overview, dependencies, database schema, and APIs.

## 1) Routes and Pages

Router configuration: src/App.tsx
- / → src/pages/Homepage.tsx (Active)
- /admin-secret-signups → src/pages/AdminSignups.tsx (Active)
- * → src/pages/NotFound.tsx (Active)

Present but not routed (Inactive)
- src/pages/Index.tsx (Inactive)

Notes
- src/pages/Index.tsx references many hero/marketing components but is not used by the router. The currently active landing page is Homepage.tsx.

## 2) Pages (imports/exports and purpose)

- src/pages/Homepage.tsx
  - Purpose: Main public landing page; shows EcosystemOverview by default and StoryFlipbook when solution state exists; bottom section renders EmailCapture
  - Imports: useState, framer-motion (motion, AnimatePresence), EmailCapture, EcosystemOverview, StoryFlipbook
  - Export: default Homepage

- src/pages/AdminSignups.tsx
  - Purpose: Admin dashboard showing email signups from Supabase table email_captures
  - Imports: React hooks, supabase client, UI Table/Card/Button, lucide icons (Users, Mail, Calendar, RefreshCw), InspirationalMessage
  - Supabase usage: supabase.from('email_captures').select('*').order('created_at', { ascending: false })
  - Export: default AdminSignups

- src/pages/NotFound.tsx
  - Purpose: 404 page with console logging of the attempted location
  - Imports: useLocation, useEffect
  - Export: default NotFound

- src/pages/Index.tsx (Inactive)
  - Purpose: Alternate home layout (Navigation + Hero + marketing sections + EmailCapture)
  - Imports: useState, Navigation, Hero, EmailCapture, SolutionBlueprint, Vision, Services, Founder, Contact
  - Export: default Index

## 3) Components

High-level inventory of notable components (grouped by usage). Many marketing components referenced by Index.tsx are currently inactive due to routing.

- Active via Homepage.tsx
  - src/components/EcosystemOverview.tsx (named export EcosystemOverview)
  - src/components/StoryFlipbook.tsx (named export StoryFlipbook)
  - src/components/EmailCapture.tsx (named export EmailCapture)

- Active via AdminSignups.tsx
  - src/components/InspirationalMessage.tsx (default export InspirationalMessage)
  - UI components under src/components/ui/* (Button, Card, Table, etc.)

- Present but not used in active routes
  - src/components/Navigation.tsx (named export Navigation) — only used in Index.tsx (inactive)
  - src/components/Hero.tsx (named export Hero) — used in Index.tsx (inactive)
  - src/components/Vision.tsx (named export Vision) — used in Index.tsx (inactive)
  - src/components/Services.tsx (named export Services) — used in Index.tsx (inactive)
  - src/components/Founder.tsx (named export Founder) — used in Index.tsx (inactive)
  - src/components/Contact.tsx (named export Contact) — used in Index.tsx (inactive)
  - src/components/SolutionBlueprint.tsx (named export SolutionBlueprint) — referenced by Index.tsx; otherwise not on a routed page
  - src/components/SolutionDashboard.tsx (named export SolutionDashboard)
  - src/components/PersonalizedHero.tsx (named export PersonalizedHero)
  - src/components/PersonalizedBlueprint.tsx (named export PersonalizedBlueprint)
  - src/components/ProductShowcase.tsx (named export ProductShowcase)
  - src/components/AINavigator.tsx (named export AINavigator) — includes call to Supabase Edge Function
  - src/components/AnimatedLandscape.tsx (named export AnimatedLandscape)
  - src/components/Vision.tsx, Services.tsx, Founder.tsx, Contact.tsx — marketing content components

- UI (shadcn/radix-based) under src/components/ui/* (named exports per file)
  - accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner (Toaster alias), switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip, use-toast

## 4) Hooks and Utilities

- src/hooks/useQuote.ts — Fetches a random quote from https://zenquotes.io/api/random. Named export useQuote.
- src/hooks/use-mobile.tsx — Named export useIsMobile.
- src/hooks/use-toast.ts — Toast state utilities used by UI toaster.
- src/lib/utils.ts — cn helper (class merging).

## 5) Supabase Integration

- Client: src/integrations/supabase/client.ts
  - Exports: named export supabase created with
    - URL: https://qdyfzevhmphbndwlbkwt.supabase.co
    - anon key present in file (public key)

- Types: src/integrations/supabase/types.ts
  - Full database type definitions generated from Supabase (do not edit).

- Edge Function: supabase/functions/ai-navigator/index.ts
  - Purpose: Given a userInput, query solution_blueprints table and return a structured solution JSON (persona/keywords/products/case_study/cta fields, etc.).
  - Called from: src/components/AINavigator.tsx using supabase.functions.invoke('ai-navigator', { body: { userInput } })

## 6) APIs Used

- Supabase PostgREST (via supabase-js)
  - AdminSignups.tsx: email_captures table select
- Supabase Edge Functions
  - Name: ai-navigator
  - Invocation: supabase.functions.invoke('ai-navigator', { body: { userInput } })
  - URL pattern: https://qdyfzevhmphbndwlbkwt.supabase.co/functions/v1/ai-navigator
- External HTTP
  - ZenQuotes: GET https://zenquotes.io/api/random (used in useQuote)

## 7) Dependencies (from package.json)

- @hookform/resolvers ^3.9.0
- @radix-ui/*: accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, toggle-group, tooltip
- @supabase/supabase-js ^2.50.2
- @tanstack/react-query ^5.56.2
- class-variance-authority ^0.7.1, clsx ^2.1.1, tailwind-merge ^2.5.2, tailwindcss-animate ^1.0.7
- cmdk ^1.0.0, date-fns ^3.6.0, embla-carousel-react ^8.3.0
- framer-motion ^12.23.9
- input-otp ^1.2.4, lucide-react ^0.462.0, next-themes ^0.3.0
- react ^18.3.1, react-dom ^18.3.1, react-router-dom ^6.26.2
- react-day-picker ^8.10.1, react-hook-form ^7.53.0, react-resizable-panels ^2.1.3
- recharts ^2.12.7, sonner ^1.5.0, vaul ^0.9.3, zod ^3.23.8

## 8) Database Schema Overview (Supabase)

Summary of tables, notable columns, and Row Level Security (RLS) policies. For brevity, only key details are shown here; see src/integrations/supabase/types.ts for authoritative types.

Publicly readable tables (SELECT allowed for everyone)
- activations: id, major_event_id, start_time, end_time, hourly_rate, positions_needed, name, description, location, status
- campaigns: id, organization_id, start_date, end_date, description, name, status
- certifications: id, name, description
- jobs: id, activation_id, positions_to_fill, hourly_rate, title
- major_events: id, campaign_id, start_time, end_time, location, status, name, description
- payroll_entries: id, ba_profile_id, shift_id, hours_worked, hourly_rate, total_amount, payment_status
- personas: id (uuid), name, description, keywords[]
- products: id (uuid), name, tagline, faq jsonb
- shifts: id, activation_id, ba_profile_id, start_time, end_time, check_in_time, check_out_time, status
- solution_blueprints: id (uuid), solution_products jsonb, case_study jsonb, persona, keywords[], pain_point_headline, user_journey_raw, cta_type/text/link
- story_modules: id (uuid), persona_id, module_type, product_name, content
- organizations: id, name

User-scoped tables (RLS enforced)
- profiles: users can select/update/insert their own row (id = auth.uid())
- messages: INSERT if sender_id = auth.uid(); SELECT if sender/recipient is auth.uid(); columns include id, sender_id, recipient_id, activation_id, content
- notifications: SELECT if recipient_id = auth.uid()
- applications: ALL where ba_profile_id = auth.uid(); columns include job_id, ba_profile_id, status, applied_at
- ba_travel_windows: ALL where ba_profile_id = auth.uid()
- ba_certifications: ALL where ba_profile_id = auth.uid()
- attendee_saved_items: ALL where attendee_id = auth.uid()
- check_ins: INSERT where attendee_id = auth.uid()
- poi_status_reports: INSERT where reporter_id = auth.uid(); public SELECT

Open/public table (all allowed via policy)
- email_captures: id (uuid), created_at, updated_at, first_name, last_name, email — policy email_captures_public_access allows ALL

Tables shown without explicit RLS details in summary
- map_pins, invites, field_reports, job_required_certifications, run_of_show_items, geometry_columns, geography_columns, spatial_ref_sys (system/PostGIS)

Note: For exhaustive column types/relationships, consult src/integrations/supabase/types.ts.

## 9) Imports and Exports Overview

Pages
- Homepage.tsx: default export; imports EmailCapture, EcosystemOverview, StoryFlipbook, framer-motion
- AdminSignups.tsx: default export; imports supabase, UI components, lucide icons, InspirationalMessage
- NotFound.tsx: default export; imports useLocation, useEffect
- Index.tsx: default export; imports Navigation, Hero, EmailCapture, SolutionBlueprint, Vision, Services, Founder, Contact (inactive page)

Key Components (named exports unless noted)
- AINavigator.tsx: export const AINavigator; imports supabase.functions.invoke('ai-navigator')
- AnimatedLandscape.tsx: export const AnimatedLandscape
- Contact.tsx: export const Contact
- EcosystemOverview.tsx: export const EcosystemOverview
- EmailCapture.tsx: export const EmailCapture (simulated submission, success UI)
- Founder.tsx: export const Founder
- Hero.tsx: export const Hero
- InspirationalMessage.tsx: default export InspirationalMessage
- Navigation.tsx: export const Navigation
- PersonalizedBlueprint.tsx: export const PersonalizedBlueprint
- PersonalizedHero.tsx: export const PersonalizedHero
- ProductShowcase.tsx: export const ProductShowcase
- Services.tsx: export const Services
- SolutionBlueprint.tsx: export const SolutionBlueprint
- SolutionDashboard.tsx: export const SolutionDashboard
- StoryFlipbook.tsx: export const StoryFlipbook
- Vision.tsx: export const Vision

UI Components (named exports)
- Multiple files under src/components/ui/* exporting their component(s) following shadcn conventions (e.g., Button, Card, Table, Dialog, Tooltip, Toaster, etc.)

Hooks/Utils
- useQuote.ts: export const useQuote
- use-mobile.tsx: export function useIsMobile
- use-toast.ts: multiple named exports for toast state
- lib/utils.ts: export function cn

App Shell and Entry
- src/App.tsx: default export App; sets up QueryClientProvider, TooltipProvider, Toasters, and BrowserRouter/Routes
- src/main.tsx: Vite/React entry; mounts App

## 10) Active vs Inactive Summary

- Active pages: Homepage, AdminSignups, NotFound
- Inactive page: Index (and components only used by it — Navigation, Hero, Vision, Services, Founder, Contact, SolutionBlueprint — are effectively unused in current routing)
- AINavigator and related personalized components are not currently mounted via routes

## 11) Notes and Opportunities

- EmailCapture currently simulates submission; AdminSignups expects data in email_captures. If you want the form to persist, we can wire EmailCapture to insert into email_captures via Supabase.
- Many marketing components exist but are not used by the active Homepage route. We can either swap Index in as the main route or refactor Homepage to include those sections.
- AINavigator flow is implemented and functional with Edge Function, but not routed. We can add a /navigator route or integrate it into Homepage.
