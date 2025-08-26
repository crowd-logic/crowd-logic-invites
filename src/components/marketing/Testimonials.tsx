import React from "react";

export default function Testimonials() {
  const items = [
    { quote: "We replaced five tools and cut day-of questions by 40%.", name: "Alyssa, Association Director" },
    { quote: "No app install, just one link. Volunteers loved it.", name: "Marcus, Alumni Coordinator" },
    { quote: "Floorplan pins stopped the 'I'm lost' calls. Worth every dollar.", name: "Jen, Event Ops" }
  ];
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">What organizers say</h2>
      <div className="grid md:grid-cols-3 gap-3 mt-3">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl border border-border p-4 bg-card/80 backdrop-blur">
            <p className="italic text-card-foreground">"{t.quote}"</p>
            <p className="mt-2 text-sm text-muted-foreground">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}