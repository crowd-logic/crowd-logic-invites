import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { MotionBackground } from "@/components/MotionBackground";
import { EmailCapture } from "@/components/EmailCapture";

export default function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        }
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navigation />
      <MotionBackground />

      <main className="pt-28">
        {/* Hero */}
        <section id="hero" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent fade-up opacity-0 translate-y-10 transition-all duration-1000">
              We orchestrate unforgettable experiences
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-150">
              An AI‑native ecosystem unifying group planning, brand ambassadors, and attendee engagement—so your moments feel effortless, not chaotic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <a
                href="https://escapadeapp.accesscrowdlogic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-colors"
              >
                Open escapade
              </a>
              <a
                href="#service"
                className="px-8 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Proof: escapade */}
        <section id="proof" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1 fade-up opacity-0 translate-y-10 transition-all duration-1000">
                <h2 className="text-3xl font-semibold">Proof in the open: escapade</h2>
                <p className="mt-3 text-white/80">
                  Our live app turns group chat chaos into authored adventures.
                </p>
                <ul className="mt-5 space-y-2 text-white/80">
                  <li>• Capture inspiration from any link or screenshot</li>
                  <li>• Plan together—without spreadsheet fatigue</li>
                  <li>• Keep momentum with elegant shared itineraries</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://escapadeapp.accesscrowdlogic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2.5 font-medium hover:from-emerald-400 hover:to-cyan-400"
                  >
                    Try escapade
                  </a>
                  <a
                    href="#service"
                    className="rounded-full px-5 py-2.5 font-medium text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10"
                  >
                    Explore our services
                  </a>
                </div>
              </div>

              <div className="order-1 md:order-2 fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-150">
                <div className="mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <div className="aspect-[9/19.5] w-full rounded-[2rem] border border-white/10 bg-black/60 relative overflow-hidden">
                    <iframe
                      src="https://escapadeapp.accesscrowdlogic.com"
                      title="escapade live"
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      allow="clipboard-read; clipboard-write"
                    />
                    {/* If the embed is blocked by X-Frame-Options, replace with a screenshot and keep the CTA button above. */}
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
              <div className="fade-up opacity-0 translate-y-10 transition-all duration-1000">
                <h2 className="text-3xl font-semibold">KITO Agency</h2>
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

              <div className="relative fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-150">
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

        {/* Founder micro‑section */}
        <section id="founder" className="scroll-mt-24">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
            <img
              src="/lovable-uploads/c766932b-adcc-4235-aefc-890c82644d6d.png"
              alt="Kito Johorri portrait"
              className="w-24 h-24 rounded-full mx-auto mb-6 border border-white/15 object-cover"
              style={{ objectPosition: '50% 10%' }}
            />
            <h3 className="text-2xl font-semibold mb-3">Built by Experience</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Kito Williams brings a rare mix of artistry and operations—Gold Record artist, chemist, mother, and event operator—turning ideas into experiences people remember.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-xl text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
              <h3 className="text-2xl font-semibold">Stay in the loop</h3>
              <p className="text-white/70 mt-1">We’ll send meaningful updates—no spam.</p>
              <div className="mt-6">
                <EmailCapture className="mx-auto max-w-md" placeholder="you@company.com" buttonText="Subscribe" />
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
    </div>
  );
}
