
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
          {/* Leadership Intelligence Visual */}
          <div className="text-center lg:text-left space-y-8">
            {/* Strategic Intelligence Image */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 rounded-3xl blur opacity-75 animate-pulse"></div>
              <img 
                src="/images/founder/strategic-partnership.jpg" 
                alt="Intelligence Leadership" 
                className="relative w-64 h-48 object-cover rounded-3xl border-2 border-emerald-400/30 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h4 className="text-lg font-bold">Intelligence Leadership</h4>
                <p className="text-sm text-emerald-200">Transforming vision into reality</p>
              </div>
            </div>

            {/* Intelligence Leadership Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
                <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold text-xl">VISIONARY LEADERSHIP</span>
                <div className="w-6 h-6 bg-amber-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Engineering the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400">
                  Intelligence Future
                </span>
              </h2>
            </div>

            {/* Enhanced Leadership Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="#contact"
                  className="relative bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-amber-700 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <Mail size={20} />
                  <span>Join the Intelligence Revolution</span>
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
          
          {/* Intelligence Leadership Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                Our founder combines deep 
                <span className="text-emerald-400 font-semibold"> AI and analytics expertise </span>
                with proven 
                <span className="text-amber-400 font-semibold"> event industry experience</span>, 
                architecting solutions that transform crowd complexity into competitive intelligence.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                With a track record of building scalable platforms that handle millions of data points, 
                she's assembling a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold">
                  world-class intelligence team
                </span> 
                to revolutionize how crowds are understood, managed, and optimized.
              </p>
            </div>

            {/* Strategic Intelligence Cards */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">AI-Powered Intelligence</h3>
                  </div>
                  <p className="text-gray-300">
                    Building cutting-edge machine learning models that predict crowd behavior, optimize engagement strategies, and enhance safety protocols with unprecedented accuracy.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 to-amber-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    <h3 className="text-xl font-bold text-white">Industry Partnerships</h3>
                  </div>
                  <p className="text-gray-300">
                    Cultivating strategic relationships with event organizers, venue operators, brand managers, and technology partners to create the most comprehensive crowd intelligence ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/50 to-orange-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-700"></div>
                    <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
                  </div>
                  <p className="text-gray-300">
                    Designing cloud-native platforms capable of processing terabytes of real-time data, delivering insights that scale from intimate gatherings to massive festivals and corporate events.
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
