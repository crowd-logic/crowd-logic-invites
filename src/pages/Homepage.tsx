import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
      </div>

      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            CrowdLogic
          </div>
          <a href="#contact" className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent fade-up opacity-0 translate-y-10 transition-all duration-1000">
            We Orchestrate Unforgettable Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            From intimate gatherings to massive conferences, our AI-powered ecosystem transforms chaos into magic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer" 
               className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 transition-all transform hover:scale-105">
              Experience escapade
            </a>
            <a href="#vision" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up opacity-0 translate-y-10 transition-all duration-1000">
              <div className="text-emerald-400 uppercase tracking-wide text-sm mb-4">Live Now</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                escapade is Here
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                1,000+ beta users are already turning group chat chaos into authored adventures. Join them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://escapadeapp.accesscrowdlogic.com" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Try Beta
                </a>
                <a href="#" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.2 12.37 21.2C10.84 21.2 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  Coming Soon
                </a>
              </div>
            </div>
            <div className="relative fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <div className="relative w-full max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 blur-3xl opacity-20" />
                <img src="/lovable-uploads/3d6a6c05-1708-4d81-82ff-66c0a3f50eea.png" 
                     alt="escapade app" 
                     className="relative z-10 w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 fade-up opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Ecosystem. Infinite Possibilities.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From weekend getaways to enterprise conferences, we're building the future of shared experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 hover:bg-white/10 hover:scale-105 transform">
              <div className="text-emerald-400 text-sm uppercase tracking-wide mb-2">Live Now</div>
              <h3 className="text-2xl font-bold mb-4">escapade</h3>
              <p className="text-gray-300">Transform group planning chaos into authored adventures</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-100 hover:bg-white/10 hover:scale-105 transform">
              <div className="text-purple-400 text-sm uppercase tracking-wide mb-2">Q3 2025</div>
              <h3 className="text-2xl font-bold mb-4">KITO Agency</h3>
              <p className="text-gray-300">AI-powered brand ambassadors and campaign orchestration</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200 hover:bg-white/10 hover:scale-105 transform">
              <div className="text-blue-400 text-sm uppercase tracking-wide mb-2">Q4 2025</div>
              <h3 className="text-2xl font-bold mb-4">EventAxis</h3>
              <p className="text-gray-300">Enterprise command center for conferences and festivals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <img
               src="/lovable-uploads/c766932b-adcc-4235-aefc-890c82644d6d.png"
               alt="Founder portrait"
               className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-emerald-500/30 object-cover"
               style={{ objectPosition: 'center 15%' }}
          />
          <h2 className="text-3xl font-bold mb-4">Built by Experience</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Kito Johorri brings 20+ years orchestrating 500+ events. From Ghostown DJs ("My Boo" - Gold Record) 
            to chemistry labs to festival stages, she's mastered the art and science of bringing people together.
          </p>
          <a href="https://linkedin.com/in/kitowilliams" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all">
            Connect on LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-black via-emerald-950/10 to-transparent">
        <div className="max-w-xl mx-auto text-center fade-up opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl font-bold mb-8">Stay in the Loop</h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" 
                   placeholder="your@email.com" 
                   className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-all" />
            <button type="submit" 
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 transition-all transform hover:scale-105">
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
