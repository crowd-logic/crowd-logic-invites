
import { Calendar, Users, TrendingUp, ArrowRight, Sparkles, Star } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0">
        <Star className="absolute top-1/4 left-0 w-72 h-72 text-emerald-500/10 blur-3xl animate-pulse" fill="currentColor" />
        <Star className="absolute bottom-1/4 right-0 w-72 h-72 text-amber-500/10 blur-3xl animate-pulse delay-1000" fill="currentColor" />
        <Star className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-cyan-500/5 blur-3xl" fill="currentColor" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Dramatic Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 mb-8">
            <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
            <span className="text-emerald-400 font-semibold text-xl">OUR ECOSYSTEM</span>
            <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Three Powerful
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400">
              Services
            </span>
            <br />
            One Vision
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Each service addresses a critical piece of the event and community engagement puzzle, 
            working together to create 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
              unprecedented value
            </span>.
          </p>
        </div>

        <div className="space-y-32">
          {/* VibePass - Community Focus */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">VibePass</h3>
                  <p className="text-emerald-300 text-xl font-semibold">Community Engagement Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform how communities connect and engage. VibePass creates 
                <span className="text-emerald-400 font-semibold"> immersive experiences </span>
                that turn passive attendees into active participants, fostering deeper connections and lasting relationships.
              </p>
              
              <div className="space-y-4">
                {['Interactive community features', 'Real-time engagement tools', 'Personalized experience curation'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Star className="w-3 h-3 text-emerald-400 group-hover:scale-125 transition-transform duration-300" fill="currentColor" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Explore VibePass</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-emerald-300 mb-4">Community at the Core</h4>
                <p className="text-gray-400">Connecting hearts and minds</p>
              </div>
            </div>
          </div>

          {/* EventAxis - Event Management */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">EventAxis</h3>
                  <p className="text-cyan-300 text-xl font-semibold">Comprehensive Event Management</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                The central nervous system for event orchestration. EventAxis streamlines every aspect of 
                <span className="text-cyan-400 font-semibold"> event planning, execution, and analysis</span>, 
                from intimate gatherings to large-scale conferences.
              </p>
              
              <div className="space-y-4">
                {['End-to-end event lifecycle management', 'Integrated vendor and resource coordination', 'Real-time analytics and optimization'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Star className="w-3 h-3 text-cyan-400 group-hover:scale-125 transition-transform duration-300" fill="currentColor" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Discover EventAxis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-cyan-300 mb-4">Seamless Orchestration</h4>
                <p className="text-gray-400">Every detail, perfectly synchronized</p>
              </div>
            </div>
          </div>

          {/* The KITO Agency - Professional Event Staffing */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">The KITO Agency</h3>
                  <p className="text-amber-300 text-xl font-semibold">Professional Event Staffing Operations</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Where talent meets opportunity. KITO Agency manages 
                <span className="text-amber-400 font-semibold"> comprehensive event staffing operations</span>, 
                providing vetted brand ambassadors and production crews for agencies who demand professional results at scale.
              </p>
              
              <div className="space-y-4">
                {['Large-scale talent roster management', 'Multi-client event coordination', 'Professional crew and ambassador placement', 'White-label staffing solutions for agencies'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <Star className="w-3 h-3 text-amber-400 group-hover:scale-125 transition-transform duration-300" fill="currentColor" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Learn About KITO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-amber-300 mb-4">Professional Excellence</h4>
                <p className="text-gray-400">Talent that delivers results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Element */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500"></div>
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500"></div>
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-400">Three services, infinite possibilities</p>
        </div>
      </div>
    </section>
  );
};
