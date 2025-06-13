
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
        {/* Section Header with Fortune Focus */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <ChevronDown className="w-6 h-6 text-emerald-400 animate-bounce" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            The Rare
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Opportunity
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              While others chase common solutions, the 
              <span className="text-emerald-400 font-semibold"> truly fortunate </span>
              recognize when technology, timing, and vision align to create 
              <span className="text-amber-400 font-semibold"> extraordinary value</span>.
            </p>
          </div>
        </div>

        {/* Opportunity Cards with Success Focus */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/fragmented-tech.jpg" 
                    alt="Untapped Potential" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Untapped Fortune</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Billions in potential value remain locked within disconnected systems, waiting for the rare vision to unlock prosperity.
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
                    alt="Hidden Patterns" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Hidden Patterns</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Like the rare four-leaf clover, the most valuable insights hide in plain sight, waiting for the fortunate to discover them.
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
                    alt="Seizing Moments" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Seizing Moments</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fortune favors those who act when technological stars align—creating exponential value from rare convergence.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section with Fortune Positioning */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-amber-900/20 to-cyan-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16">
            <div className="text-center">
              <div className="mb-12">
                <div className="inline-flex items-center space-x-4 mb-8">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  <span className="text-emerald-400 font-semibold text-xl">THE FORTUNE</span>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Technological
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400"> Serendipity</span>
                </h3>
              </div>
              
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                CrowdLogic represents that rare convergence where 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> advanced technology meets perfect timing</span>, 
                creating unprecedented opportunities for exponential growth.
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
