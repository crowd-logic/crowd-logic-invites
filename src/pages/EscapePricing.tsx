import { Link } from "react-router-dom";
import PricingCalculator from "@/components/PricingCalculator";
import { TrackPage } from "@/components/Track";
import { useState } from "react";

export default function EscapePricingPage() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const baseFeatures = [
    "Segmented announcements",
    "Indoor floorplan mapping", 
    "Scoped chat channels",
    "Graphic banner system",
    "Mobile-first PWA",
    "Real-time updates",
    "Basic analytics", 
    "24/7 email support"
  ];

  const addonFeatures = {
    team: ["Icebreakers & Speed Networking", "Polls & Q&A", "Session timers", "Leaderboards"],
    wall: ["Moderated photo uploads", "Signage feeds", "Sponsor frames", "Real-time gallery"],
    explore: ["Curated POIs", "Indoor pin drops", "Scavenger games", "Group formation tools"],
    analytics: ["Attendance curves", "Communication reach", "Signage impressions", "CSV/PDF exports"]
  };

  const getAllFeatures = () => {
    let allFeatures = [...baseFeatures];
    selectedAddons.forEach(addon => {
      allFeatures = [...allFeatures, ...addonFeatures[addon as keyof typeof addonFeatures]];
    });
    return allFeatures;
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TrackPage name="escapade_pricing" />
      
      {/* Header */}
      <section className="px-4 pt-12 pb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold leading-tight text-foreground">
          Event Pricing Calculator
        </h1>
        <p className="mt-3 text-muted-foreground">
          Transparent pricing for events of all sizes. Calculate your total with add-ons and nonprofit discounts.
        </p>
        <div className="mt-5">
          <Link 
            to="/escapade" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-medium transition-colors"
          >
            ← Back to Escapade
          </Link>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="px-4 py-8 max-w-2xl mx-auto">
        <PricingCalculator onAddonsChange={setSelectedAddons} />
      </section>

      {/* Pricing Details */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border p-6 bg-card">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Base Event Packages</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Up to 150 attendees</span>
                <span className="font-medium text-card-foreground">$299</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">151–500 attendees</span>
                <span className="font-medium text-card-foreground">$599</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">501–1,000 attendees</span>
                <span className="font-medium text-card-foreground">$999</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Nonprofit organizations receive a 15% discount on all packages.
            </p>
          </div>

          <div className="rounded-lg border border-border p-6 bg-card">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              What's Included {selectedAddons.length > 0 && <span className="text-primary">({getAllFeatures().length} features)</span>}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {getAllFeatures().map((feature, idx) => (
                <li key={idx} className={`flex items-center gap-2 ${
                  baseFeatures.includes(feature) ? '' : 'text-primary font-medium'
                }`}>
                  <div className={`h-1.5 w-1.5 rounded-full ${
                    baseFeatures.includes(feature) ? 'bg-muted-foreground' : 'bg-primary'
                  }`}></div>
                  {feature}
                  {!baseFeatures.includes(feature) && <span className="text-xs text-primary/70">(add-on)</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto rounded-xl bg-primary text-primary-foreground p-6 text-center">
          <p className="text-base font-medium">Ready to get started?</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link 
              to="/app/start" 
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-5 py-3 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Create your event
            </Link>
            <Link 
              to="/escapade" 
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Try sandbox
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}