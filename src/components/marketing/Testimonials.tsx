import React from "react";

export default function Testimonials() {
  const items = [
    { 
      quote: "We replaced five tools and cut day-of questions by 40%. The floorplan feature alone saved us hours.", 
      name: "Alyssa Chen", 
      title: "Association Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    { 
      quote: "No app install, just one link. Volunteers loved it and attendees found everything instantly.", 
      name: "Marcus Rodriguez", 
      title: "Alumni Coordinator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    { 
      quote: "Floorplan pins stopped the 'I'm lost' calls completely. Worth every dollar and more.", 
      name: "Jennifer Kim", 
      title: "Event Operations Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">What organizers say</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-3">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl border border-border p-6 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300">
            <p className="italic text-card-foreground text-base leading-relaxed mb-4">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img 
                src={t.avatar} 
                alt={`${t.name} avatar`} 
                className="w-12 h-12 rounded-full ring-2 ring-primary/20 object-cover"
              />
              <div>
                <p className="font-semibold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}