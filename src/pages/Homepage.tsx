import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { EmailCapture } from "@/components/EmailCapture";
import { Link } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll(".section-fade").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto -mb-16 md:-mb-24 lg:-mb-28"
            aria-label="CrowdLogic logo"
          >
            <img
              src="/lovable-uploads/53bff6ea-6c8a-4d48-9921-3afdeb9300ef.png"
              alt="CrowdLogic logo"
              className="mx-auto w-auto h-[18rem] md:h-[24rem] lg:h-[28rem] drop-shadow-lg"
              decoding="async"
              fetchPriority="high"
            />
            <span
              className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">
            We orchestrate unforgettable{" "}
            <span className="text-primary">
              experiences
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-slate-600">with intelligence and heart</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            An AI-native ecosystem unifying group planning, brand ambassadors, and attendee engagement—so your moments feel effortless, not chaotic.
          </motion.p>

          {/* Dual Portal Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-12">
            <div className="flex-1 group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900">For Teams & Events</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Unify communication, logistics, check-ins, and partnerships—built for groups of every shape and size.
              </p>
              <Link 
                to="/escapade" 
                className="btn-cta w-full justify-center"
              >
                Start Planning
              </Link>
            </div>
            <div className="flex-1 group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-300 transition-colors">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900">For Personal Lists</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Turn screenshot chaos into organized, mapped places with addresses and hours.
              </p>
              <Link 
                to="/stash" 
                className="btn-cta-secondary w-full justify-center"
              >
                Organize My Lists
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-center">
            <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-8 py-4 border border-primary/20">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <p className="text-lg font-semibold text-slate-900">
                Real tools. Real results. Thousands of users.
              </p>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            </div>
            <p className="text-slate-600 mt-4 text-lg">
              No fluff. Try it for yourself now.
            </p>
          </motion.div>
          
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-6 text-slate-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Impact: escapade with live embed */}
      <section id="impact" className="py-20 px-6 scroll-mt-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <div className="text-primary uppercase tracking-wide text-sm mb-4 font-semibold">Our Impact</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                escapade transforms group chat chaos into authored adventures
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our live app serves as both a consumer solution and the data engine for our AI-powered ecosystem. Over 1,000 beta users are already capturing inspiration, coordinating seamlessly, and creating memories together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer" className="btn-cta text-center">
                  Experience escapade
                </a>
                <a href="/marketing/organizer" className="btn-cta-secondary text-center">
                  Organize Events
                </a>
                <a href="#vision" className="px-6 py-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all text-center font-medium text-slate-700">
                  See Our Ecosystem
                </a>
              </div>
            </div>
            
            <div className="section-fade">
              <div className="relative mx-auto max-w-sm">
                {/* Phone frame */}
                <div className="relative rounded-[3rem] border-8 border-slate-800 bg-slate-800 p-2 shadow-2xl">
                  <div className="aspect-[9/19.5] w-full rounded-[2.5rem] bg-black overflow-hidden">
                    <iframe src="https://escapadeapp.accesscrowdlogic.com" title="escapade app" className="w-full h-full" loading="lazy" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 px-6 relative scroll-mt-24 bg-white">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              From weekend trips to 1,000 person conferences
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              One unified ecosystem. One seamless experience. Powered by AI that understands context, not just commands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/marketing/stash" className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 section-fade hover:bg-primary/10 hover:scale-105 transform hover:border-primary/40 hover:shadow-lg transition-all duration-300 block">
              <div className="text-primary text-sm uppercase tracking-wide mb-2 font-semibold">Live Now</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">escapade</h3>
              <p className="text-slate-600 leading-relaxed">Social trip planning that captures inspiration and coordinates groups effortlessly</p>
              <div className="mt-4 text-primary text-sm font-medium">Learn more →</div>
            </a>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 section-fade hover:bg-purple-100 hover:scale-105 transform hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-purple-600 text-sm uppercase tracking-wide mb-2 font-semibold">Q3 2025</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">KITO Agency</h3>
              <p className="text-slate-600 leading-relaxed">Educating and powering small businesses with elite brand ambassadors</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 section-fade hover:bg-blue-100 hover:scale-105 transform hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 text-sm uppercase tracking-wide mb-2 font-semibold">Q4 2025</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">EventAxis</h3>
              <p className="text-slate-600 leading-relaxed">Enterprise command center for managing complex multi-track events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service: KITO Agency */}
      <section id="service" className="py-20 px-6 scroll-mt-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 section-fade">
              <div className="relative rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-purple-600">AI Campaign Architect</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Answer 3 questions. Get a custom campaign playbook in 60 seconds.
                </p>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-white border border-purple-100">
                    <p className="text-sm text-slate-700">✓ Local market analysis</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-purple-100">
                    <p className="text-sm text-slate-700">✓ Ambassador deployment strategy</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-purple-100">
                    <p className="text-sm text-slate-700">✓ ROI projections</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-4 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all">
                  Try It Now (Launching Q3 2025)
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 section-fade">
              <div className="text-purple-600 uppercase tracking-wide text-sm mb-4 font-semibold">Coming Q3 2025</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                KITO Agency: On-street influence, engineered
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We educate and empower small businesses and nonprofits with elite brand ambassadors and smart campaign playbooks tailored to their local market.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1 font-bold">→</span>
                  <span>Discover your audience and articulate your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1 font-bold">→</span>
                  <span>Design location-aware campaigns with AI-powered insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1 font-bold">→</span>
                  <span>Deploy trained ambassadors who embody your brand</span>
                </li>
              </ul>
              <a href="#contact" className="btn-cta-secondary">
                Request Early Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto section-fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Built by Creative Technologists</h2>
            <p className="text-xl text-slate-600">Two complementary minds united by a shared vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kito */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">K</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Kito</h3>
              <p className="text-primary mb-4 font-semibold">The Alchemist</p>
              <p className="text-slate-600 leading-relaxed">
                A renaissance creator who transforms experiences across mediums. From touring the world as an artist to mastering chemistry in labs, from producing thousands of live experiences to pioneering digital innovation—Kito brings the soul and vision that makes moments unforgettable.
              </p>
              <a href="https://linkedin.com/in/kitowilliams" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all mt-4 font-medium">
                LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Brian */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500/30 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">B</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Brian</h3>
              <p className="text-blue-600 mb-4 font-semibold">The Architect</p>
              <p className="text-slate-600 leading-relaxed">
                The strategic mind behind the systems. Brian brings deep technical expertise and operational excellence, architecting the infrastructure that transforms creative vision into scalable reality. Together, they embody the perfect balance of art and science.
              </p>
            </div>
          </div>
          
          <p className="text-center text-slate-500 mt-12 max-w-3xl mx-auto">
            Between them: decades of experience, thousands of successful events, millions of attendees served, and one unified vision for the future of shared experiences.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-slate-50 scroll-mt-24">
        <div className="max-w-xl mx-auto text-center section-fade">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Stay in the loop</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">We'll send meaningful updates about our journey to transform shared experiences</p>
          <EmailCapture />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/escapade" className="hover:text-primary transition">Escapade for Events</a></li>
                <li><a href="/marketing/stash" className="hover:text-primary transition">Stash for Personal Use</a></li>
                <li><a href="/marketing/pricing" className="hover:text-primary transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#vision" className="hover:text-primary transition">Vision</a></li>
                <li><a href="#service" className="hover:text-primary transition">Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/admin-secret-signups" className="hover:text-primary transition">Early Access</a></li>
                <li><a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Try Escapade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://linkedin.com/in/kitowilliams" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
            © 2025 CrowdLogic. Orchestrating unforgettable experiences with intelligence and heart.
          </div>
        </div>
      </footer>
    </div>;
};
export default Homepage;