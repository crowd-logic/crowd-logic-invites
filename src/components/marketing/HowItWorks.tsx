import React from "react";

export default function HowItWorks({
  steps = [
    { title: "Pick your plan", desc: "Choose the right size: 150, 500, or 1,000 attendees." },
    { title: "Customize add-ons", desc: "Enable Team Pack, Photo Wall, Explore, Analytics, or Sponsored Spaces." },
    { title: "Launch with one link", desc: "No app required. QR signage and scoped chat keep everyone aligned." }
  ]
}: { steps?: { title: string; desc: string }[] }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">How it works</h2>
      <div className="grid md:grid-cols-3 gap-3 mt-3">
        {steps.map((s, i) => (
          <div key={i} className="rounded-lg border border-border p-4 bg-card/80 backdrop-blur">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i+1}</div>
            <h3 className="mt-2 font-semibold text-card-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}