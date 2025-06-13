
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
        {/* Section Header with Intelligence Focus */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-semibold text-xl">INTELLIGENT SOLUTIONS</span>
            <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Three Pillars of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400">
              Crowd Intelligence
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Each platform leverages advanced analytics and AI to transform crowd behavior into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
              actionable intelligence
            </span>, creating seamless, safe, and engaging experiences.
          </p>
        </div>

        <div className="space-y-32">
          {/* VibePass - Community Intelligence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/vibepass-icon.jpg" 
                      alt="Community Intelligence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">VibePass</h3>
                  <p className="text-emerald-300 text-xl font-semibold">Community Intelligence Engine</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform community engagement through 
                <span className="text-emerald-400 font-semibold"> predictive analytics and AI-driven insights</span>. 
                VibePass creates intelligent connections between brand ambassadors, influencers, and audiences, maximizing engagement ROI.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-powered influencer matching and performance tracking',
                  'Real-time sentiment analysis and engagement optimization', 
                  'Predictive community growth and viral content identification'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Unlock Community Intelligence</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="/images/services/vibepass-feature.jpg" 
                    alt="Community Intelligence Dashboard" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-emerald-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-emerald-300 mb-4">Intelligent Communities</h4>
                <p className="text-gray-400">Where data drives authentic connections</p>
              </div>
            </div>
          </div>

          {/* EventAxis - Event Intelligence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/eventaxis-icon.jpg" 
                      alt="Event Intelligence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">EventAxis</h3>
                  <p className="text-cyan-300 text-xl font-semibold">Event Intelligence Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionary event management powered by 
                <span className="text-cyan-400 font-semibold"> real-time crowd analytics and safety intelligence</span>. 
                EventAxis orchestrates staffing, navigation, and logistics with AI precision, ensuring seamless experiences.
              </p>
              
              <div className="space-y-4">
                {[
                  'Predictive crowd flow analysis and safety navigation', 
                  'AI-optimized staffing allocation and performance tracking',
                  'Real-time event intelligence and automated response systems'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Master Event Intelligence</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/images/services/eventaxis-feature.jpg" 
                    alt="Event Intelligence Analytics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-cyan-300 mb-4">Intelligent Events</h4>
                <p className="text-gray-400">Where AI orchestrates perfect experiences</p>
              </div>
            </div>
          </div>

          {/* The KITO Agency - Strategic Intelligence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/services/kito-icon.jpg" 
                      alt="Strategic Intelligence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">The KITO Agency</h3>
                  <p className="text-amber-300 text-xl font-semibold">Strategic Intelligence Hub</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Advanced analytics platform that transforms 
                <span className="text-amber-400 font-semibold"> complex data into strategic intelligence</span>. 
                KITO provides deep insights across all touchpoints, enabling data-driven decisions that maximize engagement and ROI.
              </p>
              
              <div className="space-y-4">
                {[
                  'Deep learning analytics for behavioral pattern recognition',
                  'Cross-platform intelligence synthesis and strategic insights', 
                  'Predictive modeling for engagement optimization and growth'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-amber-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Harness Strategic Intelligence</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="/images/services/kito-feature.jpg" 
                    alt="Strategic Intelligence Analytics" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-amber-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Strategic Intelligence</h4>
                <p className="text-gray-400">Where insights become competitive advantage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Network Connection */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/vibepass-icon.jpg" 
                alt="Community Intelligence" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500"></div>
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/eventaxis-icon.jpg" 
                alt="Event Intelligence" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500"></div>
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/services/kito-icon.jpg" 
                alt="Strategic Intelligence" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-400">Three platforms, unified intelligence</p>
        </div>
      </div>
    </section>
  );
};
