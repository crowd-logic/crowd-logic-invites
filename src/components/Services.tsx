
import { ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background Elements with New Colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/3 via-transparent to-amber-600/3"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Fortune Focus */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-semibold text-xl">FORTUNE'S ECOSYSTEM</span>
            <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Three Pathways
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400">
              to Fortune
            </span>
            <br />
            One Destiny
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Each service unlocks a different aspect of technological fortune, 
            working together to create 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
              exponential prosperity
            </span>.
          </p>
        </div>

        <div className="space-y-32">
          {/* VibePass - Community Fortune */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/vibepass-icon.jpg" 
                      alt="Community Fortune" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">VibePass</h3>
                  <p className="text-emerald-300 text-xl font-semibold">The Community Fortune Engine</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform community engagement into 
                <span className="text-emerald-400 font-semibold"> exponential value creation</span>. 
                VibePass creates fortunate connections that multiply engagement and unlock hidden potential in every interaction.
              </p>
              
              <div className="space-y-4">
                {['Fortune-multiplying community features', 'Serendipitous engagement optimization', 'Value-creating connection algorithms'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Discover Your Fortune</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="/images/services/vibepass-feature.jpg" 
                    alt="Community Prosperity" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-emerald-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-emerald-300 mb-4">Community Prosperity</h4>
                <p className="text-gray-400">Where connections create fortune</p>
              </div>
            </div>
          </div>

          {/* EventAxis - Event Fortune */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/eventaxis-icon.jpg" 
                      alt="Event Fortune" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">EventAxis</h3>
                  <p className="text-cyan-300 text-xl font-semibold">The Event Fortune Orchestrator</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                The rare convergence of perfect timing and flawless execution. EventAxis transforms 
                <span className="text-cyan-400 font-semibold"> ordinary events into fortune-generating experiences</span>, 
                creating value at every touchpoint.
              </p>
              
              <div className="space-y-4">
                {['Fortune-maximizing event orchestration', 'Serendipitous moment creation', 'Value-multiplying experience design'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Orchestrate Fortune</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/images/services/eventaxis-feature.jpg" 
                    alt="Perfect Orchestration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-cyan-300 mb-4">Perfect Orchestration</h4>
                <p className="text-gray-400">Where timing creates fortune</p>
              </div>
            </div>
          </div>

          {/* The KITO Agency - Intelligence Fortune */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/kito-icon.jpg" 
                      alt="Intelligence Fortune" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">The KITO Agency</h3>
                  <p className="text-amber-300 text-xl font-semibold">The Intelligence Fortune Engine</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Where data becomes destiny. KITO transforms 
                <span className="text-amber-400 font-semibold"> raw intelligence into exponential advantage</span>, 
                revealing the rare patterns that create sustainable competitive fortune.
              </p>
              
              <div className="space-y-4">
                {['Fortune-revealing deep analytics', 'Serendipitous insight generation', 'Value-multiplying strategic intelligence'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Unlock Intelligence Fortune</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="/images/services/kito-feature.jpg" 
                    alt="Intelligence Fortune" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-amber-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Intelligence Fortune</h4>
                <p className="text-gray-400">Where insights create prosperity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fortune Circuit Connection */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/vibepass-icon.jpg" 
                alt="Community Fortune" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500"></div>
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/eventaxis-icon.jpg" 
                alt="Event Fortune" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500"></div>
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/kito-icon.jpg" 
                alt="Intelligence Fortune" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-400">Three fortunes, infinite prosperity</p>
        </div>
      </div>
    </section>
  );
};
