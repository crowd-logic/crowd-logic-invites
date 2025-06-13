
import { ArrowRight } from "lucide-react";
import { NeonMailIcon } from "./icons/NeonMailIcon";
import { NeonStarIcon } from "./icons/NeonStarIcon";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Intelligence Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Intelligence Revolution Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <NeonStarIcon size={24} className="animate-spin" />
            <span className="text-emerald-400 font-semibold text-xl">JOIN THE INTELLIGENCE REVOLUTION</span>
            <NeonStarIcon size={24} className="animate-spin" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Partner with the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400">
              Intelligence Leaders
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you're an event organizer seeking predictive analytics, a brand looking for influencer intelligence, 
            or an investor interested in the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> crowd intelligence revolution</span>, 
            let's explore the possibilities together.
          </p>
        </div>

        {/* Enhanced Intelligence Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <NeonMailIcon size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Strategic Intelligence</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to discuss enterprise partnerships, investment opportunities, or how CrowdLogic's AI can transform your events, community engagement, and safety operations?
              </p>
              
              <a 
                href="mailto:hello@crowdlogic.com"
                className="group/link inline-flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors text-lg font-semibold"
              >
                <span>hello@crowdlogic.com</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>

              <div className="absolute top-6 right-6">
                <NeonStarIcon size={16} className="text-emerald-400 animate-ping" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <NeonMailIcon size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Early Intelligence Access</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Interested in beta access to our crowd intelligence platforms, becoming a design partner, or staying updated on our analytics breakthroughs? Join our intelligence network.
              </p>
              
              <a 
                href="mailto:connect@crowdlogic.com"
                className="group/link inline-flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                <span>connect@crowdlogic.com</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>

              <div className="absolute top-6 right-6">
                <NeonStarIcon size={16} className="text-cyan-400 animate-ping delay-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Launch Announcement */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-amber-900/20 to-cyan-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 mb-6">
                <NeonStarIcon size={32} className="text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-bold text-2xl">INTELLIGENCE PLATFORM LAUNCHING MID-2025</span>
                <NeonStarIcon size={32} className="text-yellow-400 animate-pulse" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                Be Part of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> Intelligence Revolution</span>
              </h3>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We're actively developing AI-powered demo environments showcasing predictive crowd analytics, real-time safety intelligence, and engagement optimization. Connect with us now to shape the future of crowd intelligence.
            </p>

            {/* Intelligence Progress Indicator */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <NeonStarIcon size={16} className="text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">AI Development</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
              <div className="flex items-center space-x-2">
                <NeonStarIcon size={16} className="text-amber-400 animate-pulse delay-300" />
                <span className="text-amber-400 font-semibold">Beta Testing</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-cyan-400"></div>
              <div className="flex items-center space-x-2">
                <NeonStarIcon size={16} className="text-cyan-400 animate-pulse delay-700" />
                <span className="text-cyan-400 font-semibold">Intelligence Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Footer */}
        <div className="relative">
          <div className="text-center py-12 border-t border-white/10">
            <div className="flex justify-center items-center space-x-6 mb-6">
              <NeonStarIcon size={24} className="text-emerald-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">CrowdLogic</span>
              <NeonStarIcon size={24} className="text-emerald-400 animate-pulse" />
            </div>
            
            <p className="text-gray-400 text-lg">
              &copy; 2024 CrowdLogic. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> Transforming crowds into intelligence.</span>
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-8 mt-8 opacity-40">
              <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
              <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
              <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
