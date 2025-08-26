import React from "react";
import Hero from "@/components/marketing/Hero";
import FeatureCard from "@/components/marketing/FeatureCard";
import PlanCard from "@/components/marketing/PlanCard";
import AddonCard from "@/components/marketing/AddonCard";
import HowItWorks from "@/components/marketing/HowItWorks";
import Testimonials from "@/components/marketing/Testimonials";
import CTASection from "@/components/marketing/CTASection";
import FAQ from "@/components/marketing/FAQ";
import { MapPin, Users, Megaphone, Timer, Scan, MessageSquare, Layers3 } from "lucide-react";

export default function MarketingOrganizerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      <Hero />
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Why organizers choose Escapade</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          <FeatureCard
            icon={<Megaphone className="h-5 w-5" />}
            title="Right message → right group"
            description="Scoped announcements and clean chat channels end 'group chat chaos'."
            items={["Announcements (read-only)","Subgroup channels","Activity threads"]}
          />
          <FeatureCard
            icon={<MapPin className="h-5 w-5" />}
            title="Find rooms without beacons"
            description="Upload floorplans; drop pins; attendees get a simple proximity view."
            items={["Indoor floorplan pins","'Go' proximity view","Outdoor deep links"]}
          />
          <FeatureCard
            icon={<Timer className="h-5 w-5" />}
            title="Run the room"
            description="Synchronized timers, banners, and facilitation tools."
            items={["Dynamic headers/banners","Session timers","Clean signage links"]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Plans</h2>
        <p className="text-sm text-muted-foreground mt-1">Transparent, card-friendly pricing for event buyers.</p>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          <PlanCard
            name="Up to 150"
            audience="Small retreats / regional meetups"
            price="$299"
            features={["Scoped chat","Floorplan pins","Admin banners","No app required"]}
            ctaText="Start"
            ctaHref="/escapade"
          />
          <PlanCard
            name="151–500"
            audience="Mid-sized conferences"
            price="$599"
            features={["Everything in 150","Setup wizard","Provisioned channels","Signage pack"]}
            ctaText="Start"
            ctaHref="/escapade"
            highlight
          />
          <PlanCard
            name="501–1,000"
            audience="Large events"
            price="$999"
            features={["Everything in 500","Coverage budgets","Sponsor spaces","Analytics-ready"]}
            ctaText="Start"
            ctaHref="/escapade"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Add-ons</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          <AddonCard
            title="Team Pack"
            price="$149"
            description="Facilitate sessions and team-building without AV or apps."
            bullets={["Synchronized timers","Icebreakers & pairing","Polls/Surveys/Quizzes","Q&A + leaderboards","Signage controls"]}
          />
          <AddonCard
            title="Photo Wall Pro"
            price="$149"
            description="Moderated crowd photos on lobby signage."
            bullets={["Upload with consent","AI pre-flags","Moderator approvals","Sponsor overlays","Signage rotation"]}
          />
          <AddonCard
            title="Explore Pack"
            price="$199"
            description="Curated city lists and micro-groups that form in minutes."
            bullets={["Curated lists","Micro-group formation","Coverage-friendly","Sponsor-ready routes"]}
          />
          <AddonCard
            title="Analytics Pack"
            price="$199"
            description="PDF + CSV of attendance, comms, scans, signage, and budgets."
            bullets={["Comms reach","Arrival curves","Photo/signage impressions","Coverage usage","Sponsor appendix"]}
          />
          <AddonCard
            title="Sponsored Spaces & Analytics"
            price="$499"
            description="Organizer-controlled room/activity skins with exposure metrics."
            bullets={["Agenda badge","Room map label","Signage overlay","Photo Wall frames","Impression analytics"]}
          />
          <AddonCard
            title="Volunteers & Scanning"
            price="Included"
            description="Give volunteers simple tools to scan check-ins and assist ops."
            bullets={["Unique QR badges","Scan check-in","Muster compliance","Line-throughput insights"]}
          />
        </div>
      </section>

      <HowItWorks steps={[
        { title: "Pick your plan", desc: "Choose 150 / 500 / 1000 based on your headcount." },
        { title: "Customize add-ons", desc: "Enable Team Pack, Photo Wall, Explore, Analytics, or Sponsored Spaces." },
        { title: "Launch with one link", desc: "No app required—post the QR, and it just works." }
      ]} />

      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
}