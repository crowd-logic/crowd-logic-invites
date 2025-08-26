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
      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">How it works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center text-center min-w-[200px]">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg mb-3 ring-4 ring-primary/20">
                {i+1}
              </div>
              <h3 className="font-bold text-card-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block text-3xl text-primary/40 font-bold">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}