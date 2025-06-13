
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export const Founder = () => {
  return (
    <section id="founder" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background with New Colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-amber-600/5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story Visual */}
          <div className="text-center lg:text-left space-y-8">
            {/* Founder Story Image */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 rounded-3xl blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/founder/strategic-partnership.jpg" 
                alt="Building Something Beautiful" 
                className="relative w-64 h-48 object-cover rounded-3xl border-2 border-emerald-400/30 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h4 className="text-lg font-bold">A Personal Mission</h4>
                <p className="text-sm text-emerald-200">Born from real experience</p>
              </div>
            </div>

            {/* Personal Story Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
                <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold text-xl">FOUNDER'S STORY</span>
                <div className="w-6 h-6 bg-amber-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                From Chaos
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400">
                  To Connection
                </span>
              </h2>
            </div>

            {/* Enhanced Personal Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="#contact"
                  className="relative bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-amber-700 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <Mail size={20} />
                  <span>Let's Talk</span>
                </a>
              </div>
              
              <a 
                href="#"
                className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3"
              >
                <Linkedin size={20} />
                <span>Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Human Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                "I've been to events that left me feeling 
                <span className="text-emerald-400 font-semibold"> completely lost </span>
                and others that felt like 
                <span className="text-amber-400 font-semibold"> coming home</span>. 
                The difference? Someone cared enough to think about every detail."
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                After years of watching incredible events struggle with the basics—and seeing guests leave disappointed—I knew there had to be a better way. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
                  CrowdLogic was born from a simple belief: every person deserves to feel valued at every event.
                </span>
              </p>
            </div>

            {/* Human-Centered Mission Cards */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Safety First, Always</h3>
                  </div>
                  <p className="text-gray-300">
                    No one should worry about their safety when they're trying to have a good time. We make sure everyone gets home with great memories, not horror stories.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 to-amber-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    <h3 className="text-xl font-bold text-white">Making Moments Matter</h3>
                  </div>
                  <p className="text-gray-300">
                    Every interaction, every smile, every "wow" moment counts. We help organizers create experiences that people talk about for years to come.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/50 to-orange-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-700"></div>
                    <h3 className="text-xl font-bold text-white">Growing Together</h3>
                  </div>
                  <p className="text-gray-300">
                    From small meetups to massive festivals, every event deserves tools that grow with their dreams. We're here for the whole journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
