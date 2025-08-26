import React from "react";
import Hero from "@/components/marketing/Hero";
import PricingCalculator from "@/components/PricingCalculator";
import AddonCard from "@/components/marketing/AddonCard";
import HowItWorks from "@/components/marketing/HowItWorks";
import CTASection from "@/components/marketing/CTASection";
import FAQ from "@/components/marketing/FAQ";

export default function MarketingPricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <Hero
        eyebrow="Pricing"
        title="Transparent pricing—buy it on a card"
        subtitle="No procurement hassle. Plans scale to your headcount; add-ons unlock exactly what you need."
        ctaPrimaryText="Start your event"
        ctaPrimaryHref="/escapade"
        ctaSecondaryText="Organizer overview"
        ctaSecondaryHref="/marketing/organizer"
      />
      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Estimate your event</h2>
        <PricingCalculator />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Add-ons explained</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <AddonCard title="Team Pack" price="$149" description="Facilitate sessions and team-building without AV." bullets={["Timers","Icebreakers","Polls/Quizzes","Q&A","Signage"]}/>
          <AddonCard title="Photo Wall Pro" price="$149" description="Moderated event photos on signage." bullets={["Consent & approvals","Sponsor overlay","Impressions"]}/>
          <AddonCard title="Explore Pack" price="$199" description="Curated city experiences and micro-groups." bullets={["City lists","Micro-groups","Coverage-friendly"]}/>
          <AddonCard title="Analytics Pack" price="$199" description="Post-event report and exports." bullets={["Attendance curves","Comms reach","Scans/signage","Budgets"]}/>
          <AddonCard title="Sponsored Spaces & Analytics" price="$499" description="Organizer-controlled room/activity skins." bullets={["Agenda badge","Map label","Signage overlay"]}/>
        </div>
      </section>
      <HowItWorks />
      <FAQ items={[
        {
          question: "How does the pricing calculator work?",
          answer: "Our calculator automatically finds the best price for your event size. It includes seat top-ups and auto-upgrades when a bigger plan costs less than overages."
        },
        {
          question: "What's included in each add-on?",
          answer: "Each add-on is a complete feature set: Team Pack includes facilitation tools, Photo Wall includes moderation, Analytics includes detailed reports with export options."
        },
        {
          question: "Can I change my plan after starting?",
          answer: "Yes! You can upgrade or add features anytime. Downgrades apply to your next event. We always optimize for the best price."
        }
      ]} />
      <CTASection />
    </div>
  );
}