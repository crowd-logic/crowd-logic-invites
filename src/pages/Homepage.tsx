import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { EmailCapture } from "@/components/EmailCapture";

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('fade-out');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 animate-gradient" />
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
          }} />
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              We orchestrate unforgettable experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              An AI-native ecosystem that transforms group planning chaos into authored adventures
            </p>
            <a href="#proof" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              See it in action
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Proof Section */}
        <section id="proof" className="min-h-screen flex items-center bg-background py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left: Phone mockup */}
              <div className="relative">
                <div className="relative mx-auto w-full max-w-[300px]">
                  <img 
                    src="/lovable-uploads/3d6a6c05-1708-4d81-82ff-66c0a3f50eea.png" 
                    alt="escapade app"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  escapade is live
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  1,000+ beta users are already turning group chat chaos into authored adventures
                </p>
                
                {/* App store buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                  <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.2 12.37 21.2C10.84 21.2 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <span className="text-white">App Store</span>
                  </a>
                  <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span className="text-white">Google Play</span>
                  </a>
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition">
                  Watch 2-min demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="min-h-screen flex items-center bg-gradient-to-b from-background to-slate-900/50 py-20 scroll-mt-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 max-w-4xl mx-auto">
              From weekend trips to 10,000 person conferences
            </h2>
            
            {/* Ecosystem progression */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-5xl mx-auto">
              {/* escapade */}
              <div className="flex-1 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-emerald-400 text-sm font-semibold mb-2">LIVE NOW</div>
                <h3 className="text-2xl font-bold text-white mb-2">escapade</h3>
                <p className="text-gray-400">Social trip planning for groups</p>
              </div>
              
              {/* Arrow */}
              <svg className="w-8 h-8 text-gray-600 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* KITO */}
              <div className="flex-1 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-gray-500 text-sm font-semibold mb-2">Q3 2025</div>
                <h3 className="text-2xl font-bold text-white mb-2">KITO Agency</h3>
                <p className="text-gray-400">Brand ambassadors & campaigns</p>
              </div>
              
              {/* Arrow */}
              <svg className="w-8 h-8 text-gray-600 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* EventAxis */}
              <div className="flex-1 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-gray-500 text-sm font-semibold mb-2">Q4 2025</div>
                <h3 className="text-2xl font-bold text-white mb-2">EventAxis</h3>
                <p className="text-gray-400">Enterprise event command center</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-400 mt-12 max-w-2xl mx-auto">
              One unified ecosystem. One seamless experience. Powered by AI that understands context, not just commands.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders" className="py-20 bg-background border-t border-white/10 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <img 
              src="/lovable-uploads/5de758f0-daa5-456a-9db7-2b1e5cc8f691.png" 
              alt="Kito Williams"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-white/20"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Built by experienced operators</h3>
            <p className="text-gray-400 text-lg mb-6">
              Kito Williams brings 20+ years of experience producing 500+ events, from intimate gatherings to massive festivals. Former Ghostown DJs member ("My Boo" - Gold Record), chemist, and creative technologist.
            </p>
            <a 
              href="https://linkedin.com/in/kitowilliams" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
            >
              Connect on LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-background to-slate-900 scroll-mt-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Stay in the loop</h2>
              <EmailCapture className="mx-auto max-w-md" placeholder="you@company.com" buttonText="Notify me" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
