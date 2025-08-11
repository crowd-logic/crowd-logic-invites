import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { MotionBackground } from "@/components/MotionBackground";
import { EmailCapture } from "@/components/EmailCapture";

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MotionBackground />
      <Navigation />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
            We orchestrate unforgettable experiences with intelligence and heart
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
        }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            An AI-native ecosystem unifying group planning, brand ambassadors, and attendee engagement—so your moments feel effortless, not chaotic
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#proof" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-all transform hover:scale-105 font-medium">
              See it in action
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all font-medium">
              Talk to us
            </a>
          </motion.div>
          
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Proof: escapade with live embed */}
      <section id="proof" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up opacity-0 translate-y-10 transition-all duration-1000">
              <div className="text-emerald-400 uppercase tracking-wide text-sm mb-4 font-semibold">Proof in the open</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                escapade transforms group chat chaos into authored adventures
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our live app serves as both a consumer solution and the data engine for our AI-powered ecosystem. Over 1,000 beta users are already capturing inspiration, coordinating seamlessly, and creating memories together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-all text-center font-medium">
                  Experience escapade
                </a>
                <a href="#vision" className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-center font-medium">
                  Explore our ecosystem
                </a>
              </div>
            </div>
            
            <div className="fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <div className="relative mx-auto max-w-sm">
                {/* Phone frame */}
                <div className="relative rounded-[3rem] border-8 border-gray-800 bg-gray-800 p-2 shadow-2xl">
                  <div className="aspect-[9/19.5] w-full rounded-[2.5rem] bg-black overflow-hidden">
                    <iframe src="https://escapadeapp.accesscrowdlogic.com" title="escapade app" className="w-full h-full" loading="lazy" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 px-6 relative scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 fade-up opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From weekend trips to 10,000 person conferences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One unified ecosystem. One seamless experience. Powered by AI that understands context, not just commands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 hover:bg-white/10 hover:scale-105 transform hover:border-emerald-500/50">
              <div className="text-emerald-400 text-sm uppercase tracking-wide mb-2 font-semibold">Live Now</div>
              <h3 className="text-2xl font-bold mb-4">escapade</h3>
              <p className="text-gray-300">Social trip planning that captures inspiration and coordinates groups effortlessly</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-100 hover:bg-white/10 hover:scale-105 transform hover:border-purple-500/50">
              <div className="text-purple-400 text-sm uppercase tracking-wide mb-2 font-semibold">Q3 2025</div>
              <h3 className="text-2xl font-bold mb-4">KITO Agency</h3>
              <p className="text-gray-300">Educating and powering small businesses with elite brand ambassadors</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200 hover:bg-white/10 hover:scale-105 transform hover:border-blue-500/50">
              <div className="text-blue-400 text-sm uppercase tracking-wide mb-2 font-semibold">Q4 2025</div>
              <h3 className="text-2xl font-bold mb-4">EventAxis</h3>
              <p className="text-gray-300">Enterprise command center for managing complex multi-track events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service: KITO Agency */}
      <section id="service" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-up opacity-0 translate-y-10 transition-all duration-1000">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">AI Campaign Architect</h3>
                <p className="text-sm text-white/70 mb-6">
                  Answer 3 questions. Get a custom campaign playbook in 60 seconds.
                </p>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">✓ Local market analysis</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">✓ Ambassador deployment strategy</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60">✓ ROI projections</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 text-white font-medium">
                  Try It Now (Launching August 18)
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 fade-up opacity-0 translate-y-10 transition-all duration-1000">
              <div className="text-purple-400 uppercase tracking-wide text-sm mb-4 font-semibold">Coming Q3 2025</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                KITO Agency: On-street influence, engineered
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We educate and empower small businesses and nonprofits with elite brand ambassadors and smart campaign playbooks tailored to their local market.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Discover your audience and articulate your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Design location-aware campaigns with AI-powered insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Deploy trained ambassadors who embody your brand</span>
                </li>
              </ul>
              <a href="#contact" className="inline-flex px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all font-medium">
                Request Early Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built by Creative Technologists</h2>
            <p className="text-xl text-gray-300">Two complementary minds united by a shared vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kito */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-green-900/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-emerald-400">K</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Kito

            </h3>
              <p className="text-emerald-400 mb-4">The Alchemist</p>
              <p className="text-gray-300 leading-relaxed">
                A renaissance creator who transforms experiences across mediums. From touring the world as an artist to mastering chemistry in labs, from producing thousands of live experiences to pioneering digital innovation—Kito brings the soul and vision that makes moments unforgettable.
              </p>
              <a href="https://linkedin.com/in/kitowilliams" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all mt-4">
                LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Brian */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-cyan-400">B</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Brian</h3>
              <p className="text-cyan-400 mb-4">The Architect</p>
              <p className="text-gray-300 leading-relaxed">
                The strategic mind behind the systems. Brian brings deep technical expertise and operational excellence, architecting the infrastructure that transforms creative vision into scalable reality. Together, they embody the perfect balance of art and science.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-12 max-w-3xl mx-auto">
            Between them: decades of experience, thousands of successful events, millions of attendees served, and one unified vision for the future of shared experiences.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-black via-emerald-950/10 to-transparent scroll-mt-24">
        <div className="max-w-xl mx-auto text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-gray-300 mb-8">We'll send meaningful updates about our journey to transform shared experiences</p>
          <EmailCapture />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          © 2025 CrowdLogic. Orchestrating unforgettable experiences with intelligence and heart.
        </div>
      </footer>
    </div>;
};
export default Homepage;