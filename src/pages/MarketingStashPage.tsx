import React from "react";
import Hero from "@/components/marketing/Hero";
import FeatureCard from "@/components/marketing/FeatureCard";
import CTASection from "@/components/marketing/CTASection";
import FAQ from "@/components/marketing/FAQ";
import { Bookmark, Share2, Layers } from "lucide-react";

export default function MarketingStashPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
      <Hero
        eyebrow="Stash It"
        title="Turn your screenshots into places you can actually use"
        subtitle="Upload screenshots or share directly from Reels. We extract names, addresses, and maps—ready for your next trip or event."
        ctaPrimaryText="Import 10 screenshots free"
        ctaPrimaryHref="/stash"
        ctaSecondaryText="Organizer pricing"
        ctaSecondaryHref="/escapade/pricing"
        backgroundImage="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1400&auto=format&fit=crop"
      />
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Why Stash It</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          <FeatureCard icon={<Bookmark className="h-5 w-5" />} title="Save without chaos" description="Stop losing places in camera rolls and bookmarks." items={["Parse screenshots/links","Clean place cards","Auto-tags"]}/>
          <FeatureCard icon={<Share2 className="h-5 w-5" />} title="Share directly" description="On mobile, 'Share to Escapade' from IG/TikTok." items={["PWA share target","No app install","Privacy controls"]}/>
          <FeatureCard icon={<Layers className="h-5 w-5" />} title="Bulk import pack" description="Power-user ZIP imports with priority parsing." items={["Up to 1,000 images","Priority queue","Review & confirm"]}/>
        </div>
      </section>
      <FAQ items={[
        {
          question: "How accurate is the screenshot parsing?",
          answer: "Our AI extracts venue names, addresses, and details with 95%+ accuracy. You can review and edit all parsed information before saving."
        },
        {
          question: "Can I import from Instagram and TikTok?",
          answer: "Yes! On mobile, use 'Share to Escapade' directly from the apps. No screenshots needed - we parse the original content."
        },
        {
          question: "What's the bulk import limit?",
          answer: "Up to 1,000 images per ZIP upload with priority processing. Perfect for clearing years of saved places at once."
        }
      ]} />
      <CTASection
        title="Ready to clear your screenshot backlog?"
        subtitle="Start with 10 free screenshot parses. Keep places synced with Escapade Pro."
        ctaText="Start importing"
        ctaHref="/stash"
      />
    </div>
  );
}