import { Link } from "react-router-dom";
import { TrackPage } from "@/components/Track";

export const metadata = {
  title: "Stash It — Turn screenshots into places you can actually use",
  description: "Upload screenshots or links, extract names and addresses, and save them to your Stash. Start with 10 free scans.",
};

export default function StashLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TrackPage name="stash_landing" />
      
      {/* Hero */}
      <section className="px-4 pt-12 pb-8 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold leading-tight text-foreground">
          Turn screenshots into places to actually go
        </h1>
        <p className="mt-3 text-muted-foreground">
          Drop 5–10 screenshots or paste links. We extract names, addresses, and maps for a usable list in minutes.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link 
            to="/stash/onboard" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start free (10 scans)
          </Link>
          <Link 
            to="/demo/stash" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-medium transition-colors"
          >
            Watch 20‑sec demo
          </Link>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">No app install. Keep items private. Works from mobile share.</p>
      </section>

      {/* How it works */}
      <section className="px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-center text-foreground">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StepCard step="1" title="Drop screenshots">
            Drag in 5–10 screenshots or share from mobile. We handle large images and mixed formats.
          </StepCard>
          <StepCard step="2" title="AI extracts details">
            Names, addresses, maps, and hours are pulled into tidy cards ready for quick review.
          </StepCard>
          <StepCard step="3" title="Review & save">
            Fix anything in seconds and save to a Stash list. Share with friends when ready.
          </StepCard>
        </div>
      </section>

      {/* Proof / mini gallery */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-center text-foreground">Looks this clean</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className="rounded-lg border border-border overflow-hidden bg-card">
              <div className="h-20 bg-muted" />
              <div className="p-2">
                <div className="h-3 w-24 bg-muted rounded mb-1" />
                <div className="h-3 w-16 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
        <blockquote className="mt-4 text-sm text-muted-foreground text-center">
          "I turned 300 screenshots into an actually usable city list in one evening."
        </blockquote>
      </section>

      {/* CTA strip */}
      <section className="px-4 py-8">
        <div className="max-w-3xl mx-auto rounded-xl bg-muted border border-border p-5 text-center">
          <p className="text-base font-medium text-foreground">Ready to clean up the camera roll?</p>
          <p className="text-sm text-muted-foreground">Start with 10 free scans — no account required.</p>
          <div className="mt-4">
            <Link 
              to="/stash/onboard" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Import 5–10 screenshots
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-16 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold text-center text-foreground">FAQ</h3>
        <ul className="mt-4 divide-y divide-border">
          <FaqItem q="Does this work from Instagram/TikTok?" a="Use the mobile Share action to send images/links directly to this page. A ZIP import is available on desktop." />
          <FaqItem q="Is it private?" a="Items stay private by default. Share only the lists that should be public." />
          <FaqItem q="What's free?" a="10 AI parses are included to start. Larger imports are available as add‑ons." />
          <FaqItem q="Do I need an account?" a="A lightweight account is created on first save, so items can be restored later." />
        </ul>
      </section>
    </main>
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