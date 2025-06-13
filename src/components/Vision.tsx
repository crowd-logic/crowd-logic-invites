
import { ChevronDown } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background with New Color Palette */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-amber-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Intelligence Focus */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <ChevronDown className="w-6 h-6 text-emerald-400 animate-bounce" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            The Intelligence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Revolution
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              While others collect data, we extract
              <span className="text-emerald-400 font-semibold"> actionable intelligence </span>
              from crowd behavior, transforming chaos into 
              <span className="text-amber-400 font-semibold"> strategic advantage</span>.
            </p>
          </div>
        </div>

        {/* Intelligence Challenge Cards */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/fragmented-tech.jpg" 
                    alt="Fragmented Data Challenge" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Fragmented Intelligence</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Event data scattered across platforms, safety insights buried in reports, engagement metrics lost in silos—billions in potential intelligence remains untapped.
              </p>
            </div>
          </div>

          <div className="group relative lg:mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/data-analytics.jpg" 
                    alt="Predictive Analytics" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Predictive Blindness</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Without advanced analytics, crowd patterns remain invisible, safety risks go undetected, and engagement opportunities slip away before they can be leveraged.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/missed-opportunities.jpg" 
                    alt="Reactive Management" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Reactive Management</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Traditional event management reacts to problems after they occur. True intelligence anticipates, prevents, and optimizes in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section with Intelligence Positioning */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-amber-900/20 to-cyan-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16">
            <div className="text-center">
              <div className="mb-12">
                <div className="inline-flex items-center space-x-4 mb-8">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  <span className="text-emerald-400 font-semibold text-xl">THE SOLUTION</span>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Unified Crowd
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400"> Intelligence</span>
                </h3>
              </div>
              
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                CrowdLogic's AI-powered platform unifies 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> data analytics, safety navigation, engagement optimization, and predictive insights</span> 
                into one intelligent ecosystem that transforms how events are managed and experienced.
              </p>

              {/* Circuit-inspired connecting lines */}
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-emerald-400 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                  <div className="w-8 h-8 bg-amber-400 rounded-full animate-pulse delay-300 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-cyan-400"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse delay-700 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
