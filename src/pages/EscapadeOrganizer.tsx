import { AppShell } from "@/components/AppShell";
import { Users, MapPinLine, CalendarPlus, Sparkle, ChatsCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export default function EscapadeOrganizer() {
  return (
    <AppShell>
      <section className="max-w-2xl mx-auto pt-12 pb-8 px-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
          Finally—group event planning that just works
        </h1>
        <p className="text-lg text-muted-foreground mb-3">
          No more rehearsal stress, lost volunteers, or group chat disasters. Escapade lets organizers, facilitators, and attendees actually enjoy the day.
        </p>
        <ul className="mt-6 space-y-3 text-base text-foreground font-medium">
          <li>Share floorplans and directions once. No more "where's the ballroom?"</li>
          <li>Announce only what matters to each group—staff, VIPs, attendees.</li>
          <li>Change your schedule? All participants see it instantly.</li>
          <li>Run smoother, save hours, guarantee a calmer experience for all.</li>
        </ul>
        <button className="mt-8 w-full bg-primary text-primary-foreground py-4 font-bold rounded-xl shadow-xl hover:bg-primary/90 text-lg transition-colors">
          Try planner—no sign up needed
        </button>
        <div className="text-sm text-muted-foreground mt-2">
          Only pay if your event runs. Upgrade your team anytime.
        </div>
        <div className="mt-8">
          <Link to="/escapade/pricing"
            className="block text-primary underline font-semibold hover:text-primary/80 transition-colors">
            See transparent pricing & add-ons
          </Link>
        </div>
        <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-lg">
          "We stopped using four tools and never got lost. My volunteers told me it's the first event app they actually kept using."
          <div className="mt-2 text-muted-foreground text-sm font-semibold">
            Real Director, Association Partner
          </div>
        </blockquote>
      </section>
    </AppShell>
  );
}