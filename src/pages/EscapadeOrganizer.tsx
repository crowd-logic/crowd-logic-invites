import { Link } from "react-router-dom";
import { TrackPage } from "@/components/Track";

export const metadata = {
  title: "Escapade — Day‑of coordination without app installs",
  description: "Segmented announcements, indoor floorplans, scoped chat, and graphic banners in a single mobile‑first link.",
};

export default function OrganizerLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TrackPage name="escapade_landing" />
      
      {/* Hero */}
      <section className="px-4 pt-12 pb-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold leading-tight text-foreground">
          Make a 500‑person conference feel effortless
        </h1>
        <p className="mt-3 text-muted-foreground">
          One link, no app. Segmented announcements, indoor floorplan proximity, scoped chat, and banners that cut through noise.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link 
            to="/app/start" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start today
          </Link>
          <Link 
            to="/escapade/pricing" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-medium transition-colors"
          >
            See pricing
          </Link>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Mobile‑first PWA. AA accessibility. Works on corporate phones.</p>
      </section>

      {/* Value bullets */}
      <section className="px-4 py-8 max-w-5xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ValueCard title="Segmented announcements">Reach the right subgroup without blasting everyone at once.</ValueCard>
          <ValueCard title="Indoor floorplans">Upload a floorplan and drop pins; attendees see proximity on the map.</ValueCard>
          <ValueCard title="Scoped chat">General, volunteers, subgroups — clear channels with context labels.</ValueCard>
          <ValueCard title="Graphic banners">Elevate urgent or sponsor messages above the itinerary with time windows.</ValueCard>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-center text-foreground">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <WorkflowStep n="1" t="Create event">Import schedule or add sessions; invite staff/admins securely.</WorkflowStep>
          <WorkflowStep n="2" t="Design headers">Set colors/logo; add static/timed/phase headers and optional banner takeovers.</WorkflowStep>
          <WorkflowStep n="3" t="Share one link">Attendees open and go. No installs. Works on every device.</WorkflowStep>
        </div>
      </section>

      {/* Pricing bands */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
          <div className="relative p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Transparent Pricing</span>
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">Simple, predictable costs</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              No surprises, no hidden fees. One price for your entire event.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-lg font-bold text-card-foreground">≤150</div>
                <div className="text-2xl font-bold text-primary">$299</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30 ring-2 ring-primary/20">
                <div className="text-lg font-bold text-card-foreground">151–500</div>
                <div className="text-2xl font-bold text-primary">$599</div>
                <div className="text-xs text-muted-foreground mt-1">Most popular</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="text-lg font-bold text-card-foreground">501–1,000</div>
                <div className="text-2xl font-bold text-primary">$999</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Nonprofit discount:</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">-15%</span>
            </div>
            
            <Link 
              to="/escapade/pricing" 
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Calculate your price
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Add‑ons grid */}
      <section className="px-4 py-8 max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold text-center text-foreground">Add‑ons</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AddonCard name="Team Pack" blurb="Icebreakers, Speed Networking, polls/Q&A, timers, leaderboards." price="$149" />
          <AddonCard name="Photo Wall Pro" blurb="Moderated uploads with signage feeds and sponsor frames." price="$149" />
          <AddonCard name="Explore Pack" blurb="Curated POIs, indoor pins, scavenger‑style games." price="$199" />
          <AddonCard name="Analytics Pack" blurb="Attendance curves, comms reach, signage impressions, CSV/PDF." price="$199" />
        </div>
      </section>

      {/* Proof */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <div className="rounded-xl border border-border p-5 bg-card">
          <p className="text-sm text-card-foreground">
            "We replaced three tools and cut 'Where is room L2?' messages by 80%. Starting sessions when 90% nearby was a game‑changer."
          </p>
          <p className="mt-2 text-xs text-muted-foreground">— Program Director, 600‑attendee training summit</p>
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto rounded-xl bg-primary text-primary-foreground p-6 text-center">
          <p className="text-base font-medium">Ready to ship the next event without chaos?</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link 
              to="/app/start" 
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-5 py-3 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Create event
            </Link>
            <Link 
              to="/book/walkthrough" 
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Book a 15‑min walkthrough
            </Link>
          </div>
        </div>
      </section>
    </main>
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