import { AppShell } from "@/components/AppShell";
import { Users, MapPinLine, CalendarPlus, Sparkle, ChatsCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export default function EscapadeOrganizer() {
  return (
    <AppShell>
      <section className="max-w-3xl mx-auto pt-10 pb-10 px-3 md:px-0">
        <div className="flex items-center gap-4 mb-8">
          <Users size={44} className="text-primary flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Finally—group event planning that just works
            </h1>
            <p className="text-md text-muted-foreground mt-1">
              No more rehearsal stress, lost volunteers, or group chat disasters. Escapade lets organizers, facilitators, and attendees actually enjoy the day.
            </p>
          </div>
        </div>
        
        <ul className="space-y-6 mb-10">
          <li className="flex items-center gap-3">
            <MapPinLine size={26} className="text-green-600" /> 
            Share floorplans and directions once. No more "where's the ballroom?"
          </li>
          <li className="flex items-center gap-3">
            <ChatsCircle size={26} className="text-primary" /> 
            Announce only what matters to each group—staff, VIPs, attendees.
          </li>
          <li className="flex items-center gap-3">
            <CalendarPlus size={26} className="text-violet-500" /> 
            Change your schedule? All participants see it instantly.
          </li>
          <li className="flex items-center gap-3">
            <Sparkle size={26} className="text-pink-500" /> 
            Run smoother, save hours, guarantee a calmer experience for all.
          </li>
        </ul>
        
        <div className="w-full py-4 rounded-xl bg-muted text-muted-foreground font-semibold text-lg text-center mb-3">
          Coming Soon
        </div>
        <div className="text-xs text-muted-foreground text-center mb-6">
          Only pay if your event runs. Upgrade your team anytime.
        </div>
        
        <div className="text-center mb-10">
          <Link to="/escapade/pricing" className="text-primary hover:underline">
            See transparent pricing & add-ons
          </Link>
        </div>
        
        {/* Testimonial Block */}
        <div className="mt-10">
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
            "We stopped using four tools and never got lost. My volunteers told me it's the first event app they actually kept using."
            <br />
            <span className="block mt-2 text-muted-foreground text-sm">
              Real Director, Association Partner
            </span>
          </blockquote>
        </div>
      </section>

    </AppShell>
  );
}

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <div className="font-medium text-card-foreground">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

function WorkflowStep({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <div className="text-xs uppercase text-muted-foreground">Step {n}</div>
      <div className="mt-1 font-medium text-card-foreground">{t}</div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

function AddonCard({ name, blurb, price }: { name: string; blurb: string; price: string }) {
  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <div className="font-medium text-card-foreground">{name}</div>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      <div className="mt-2 text-xs text-muted-foreground/70">{price}/event</div>
    </div>
  );
}