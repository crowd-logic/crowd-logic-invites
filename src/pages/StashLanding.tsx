import { AppShell } from "@/components/AppShell";
import { Archive, MapPinLine, Users, CalendarPlus } from "phosphor-react";
import { Link } from "react-router-dom";

export default function StashLanding() {
  return (
    <AppShell>
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-3 md:px-0">
        <div className="flex items-center gap-4 mb-8">
          <Archive size={44} className="text-secondary flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Everywhere you want to go, organized in one place
            </h1>
            <p className="text-md text-muted-foreground mt-1">
              Don't lose another restaurant, coffee shop, trail, or art spot in your camera roll. Stash It scans your screenshots, fixes typos, and maps it beautifully.
            </p>
          </div>
        </div>
        
        <ul className="space-y-6 mb-10">
          <li className="flex items-center gap-3">
            <MapPinLine size={26} className="text-green-600" /> 
            Upload any screenshot or link—get an instant map card and all info parsed.
          </li>
          <li className="flex items-center gap-3">
            <Users size={26} className="text-primary" /> 
            Share with your group or keep it private. Upgrade if it grows into a real trip.
          </li>
          <li className="flex items-center gap-3">
            <CalendarPlus size={26} className="text-violet-500" /> 
            Planning a full itinerary? Effortlessly escalate to team mode with Escapade.
          </li>
        </ul>
        
        <button className="w-full py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg shadow-lg hover:bg-secondary/90 transition-colors mb-3">
          Import screenshots—get your real list
        </button>
        <div className="text-xs text-muted-foreground text-center mb-10">
          First 10 scans are always free. No sign up until you want to save/share.
        </div>
        
        <div className="mt-10">
          <blockquote className="border-l-4 border-secondary pl-4 italic text-lg text-muted-foreground">
            "I turned 340 screenshots into a city-perfect list for my family in one night. Wish I'd had this years ago."
            <br />
            <span className="block mt-2 text-muted-foreground text-sm">
              Samantha K, actual user
            </span>
          </blockquote>
        </div>
      </section>

    </AppShell>
  );
}

function StepCard({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <div className="text-xs uppercase text-muted-foreground">Step {step}</div>
      <div className="mt-1 font-medium text-card-foreground">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <li className="py-3">
      <p className="font-medium text-foreground">{q}</p>
      <p className="text-sm text-muted-foreground mt-1">{a}</p>
    </li>
  );
}