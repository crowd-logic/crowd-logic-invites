
import { Envelope, ChatCircle, ArrowRight, Sparkle, Heart } from "@phosphor-icons/react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Dramatic Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <Sparkle className="w-6 h-6 text-yellow-400 animate-spin" />
            <span className="text-emerald-400 font-semibold text-xl">JOIN THE REVOLUTION</span>
            <Sparkle className="w-6 h-6 text-yellow-400 animate-spin" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let's Shape the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400">
              Future Together
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you're a potential client, strategic advisor, investor, or someone who shares our vision, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> we'd love to connect </span>
            and explore possibilities.
          </p>
        </div>

        {/* Two-Path CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - B2C CTA */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Start Your Adventure</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Ready to stop dreaming and start planning? Join the escapade™ beta and be the first to 
                experience the future of group travel.
              </p>
              
              <button className="group/btn inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                <span>Join the Beta</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right Side - B2B CTA */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Envelope className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Shape the Future</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Ready to discuss partnerships, investment opportunities, or how EventOS™ can transform your business? 
                Let's connect.
              </p>
              
              <a 
                href="mailto:connect@accesscrowdlogic.com"
                className="group/link inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Connect with Us</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="absolute top-6 right-6 w-4 h-4 bg-emerald-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>

        {/* Launch Announcement with Artistic Flair */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-amber-900/20 to-cyan-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-4 mb-4">
                <Sparkle className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-bold text-2xl">LAUNCHING Q4 2025</span>
                <Sparkle className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Be Part of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400"> Revolution</span>
              </h3>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              We're in active development with MVPs showcasing our vision. Connect with us now to be part of shaping the future of events and community engagement.
            </p>

            {/* Artistic Progress Indicator */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Active Development</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-green-400 to-yellow-400"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-yellow-400 font-semibold">MVP Ready</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-yellow-400 to-emerald-400"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-emerald-400 font-semibold">Late 2025 Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Footer */}
        <div className="relative">
          <div className="text-center py-8 border-t border-white/10">
            <div className="flex justify-center items-center space-x-6 mb-4">
              <Heart className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">CrowdLogic</span>
              <Heart className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            
            <p className="text-gray-400 text-lg">
              &copy; 2024 CrowdLogic. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 font-semibold"> Building the future of community engagement.</span>
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Visit us at accesscrowdlogic.com
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-8 mt-6 opacity-40">
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
