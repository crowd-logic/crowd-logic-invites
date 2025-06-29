
import { Mail, Star, Crown, Zap } from "lucide-react";

export const Founder = () => {
  return (
    <section id="founder" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Leadership Visual */}
          <div className="text-center lg:text-left space-y-8">
            {/* Artistic CEO Avatar */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative w-48 h-48 bg-gradient-to-br from-emerald-500 via-amber-500 to-orange-500 rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                <Crown className="w-24 h-24 text-white group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-4 h-4 text-slate-900" />
              </div>
            </div>

            {/* Visionary Leadership Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
                <Zap className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-xl">VISIONARY LEADERSHIP</span>
                <Zap className="w-6 h-6 text-emerald-400 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Building the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400">
                  Future
                </span>
              </h2>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="#contact"
                  className="relative bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-amber-700 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <Mail className="w-5 h-5" />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Leadership Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                Our founders bring a unique blend of 
                <span className="text-emerald-400 font-semibold"> technical expertise </span>
                and 
                <span className="text-amber-400 font-semibold"> industry insight</span>, 
                having identified the critical gaps in how communities connect and brands engage in the digital landscape.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                With a background in building scalable solutions and a passion for meaningful connections, 
                they're assembling a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
                  world-class team
                </span> 
                to transform the events and community engagement industry.
              </p>
            </div>

            {/* Strategic Focus Cards */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/50 to-emerald-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Building for Scale</h3>
                  </div>
                  <p className="text-gray-300">
                    Currently developing MVPs with launch targets for late 2025, focusing on creating solutions that scale from local communities to global enterprises.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 to-amber-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    <h3 className="text-xl font-bold text-white">Strategic Partnerships</h3>
                  </div>
                  <p className="text-gray-300">
                    Actively seeking strategic advisors, potential investors, and early adopters who share our vision for the future of community engagement.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/50 to-orange-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-700"></div>
                    <h3 className="text-xl font-bold text-white">Industry Innovation</h3>
                  </div>
                  <p className="text-gray-300">
                    Committed to solving real problems with elegant solutions that create genuine value for all stakeholders in the events ecosystem.
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
