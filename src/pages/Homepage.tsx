import { Navigation } from '../components/Navigation';
import { MotionBackground } from '../components/MotionBackground';
import { EmailCapture } from '../components/EmailCapture';

export default function Homepage() {
  return (
    <>
      <Navigation />
      <MotionBackground />
      <main className="pt-28">
        {/* Hero / Vision */}
        <section id="hero" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              We orchestrate unforgettable experiences
              <br className="hidden md:block" />
              with intelligence and heart.
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl">
              An AI‑native ecosystem unifying group planning, brand ambassadors, and attendee engagement—so your moments feel effortless, not chaotic.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#proof"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 font-medium hover:from-emerald-400 hover:to-cyan-400"
              >
                Explore escapade
              </a>
              <a
                href="#contact"
                className="rounded-full px-5 py-2.5 font-medium text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>

        {/* Proof: escapade */}
        <section id="proof" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Proof in the open: escapade</h2>
                <p className="mt-3 text-white/80">
                  Our live app turns group chat chaos into authored adventures.
                </p>
                <ul className="mt-5 space-y-2 text-white/80">
                  <li>• Capture inspiration from any link or screenshot</li>
                  <li>• Plan together without the spreadsheet fatigue</li>
                  <li>• Keep the energy with elegant, shared itineraries</li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 font-medium hover:from-emerald-400 hover:to-cyan-400"
                  >
                    Get access
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                {/* Phone mock */}
                <div className="mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <div className="aspect-[9/19.5] w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'radial-gradient(600px 300px at 30% 20%, rgba(0,155,119,0.25), transparent), radial-gradient(600px 300px at 80% 90%, rgba(34,211,238,0.22), transparent)',
                      }}
                    />
                    <div className="absolute inset-x-4 top-6 h-6 rounded-full bg-black/60 border border-white/10" />
                    <div className="absolute inset-4 top-16 text-white/80">
                      <div className="h-3 w-24 rounded bg-white/15 mb-3" />
                      <div className="space-y-2">
                        <div className="h-40 rounded-xl bg-white/10" />
                        <div className="h-24 rounded-xl bg-white/10" />
                        <div className="h-16 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-white/60 mt-3">escapade (live MVP)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service: KITO Agency */}
        <section id="service" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">KITO Agency</h2>
                <p className="mt-3 text-white/80">On‑street influence, engineered.</p>
                <p className="mt-3 text-white/80">
                  We educate and equip small businesses and nonprofits with elite Brand Ambassadors and bespoke, local campaign playbooks.
                </p>
                <ol className="mt-5 space-y-2 text-white/80">
                  <li>1. Discover — learn your audience and goals</li>
                  <li>2. Design — craft a location‑aware campaign playbook</li>
                  <li>3. Deploy — staff, train, and run the activation</li>
                </ol>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="rounded-full px-5 py-2.5 font-medium text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10"
                  >
                    Request a campaign playbook
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="h-48 rounded-xl bg-gradient-to-br from-emerald-900/40 to-cyan-900/30 border border-white/10" />
                  <div className="mt-4 h-3 w-28 rounded bg-white/15" />
                  <div className="mt-2 h-3 w-40 rounded bg-white/10" />
                  <div className="mt-2 h-3 w-56 rounded bg-white/10" />
                </div>
                <p className="text-center text-sm text-white/60 mt-3">AI Campaign Architect (private beta)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="text-white text-2xl font-semibold">Stay in the loop</h3>
              <p className="text-white/70 mt-1">We’ll send meaningful updates—no spam.</p>
              <div className="mt-6">
                <EmailCapture />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} CrowdLogic. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
