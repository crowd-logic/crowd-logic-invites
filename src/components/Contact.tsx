
import { Mail, MessageSquare, ArrowRight, Sparkles, Star, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Dramatic Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <Star className="w-6 h-6 text-yellow-400 animate-spin" />
            <span className="text-purple-400 font-semibold text-xl">JOIN THE REVOLUTION</span>
            <Star className="w-6 h-6 text-yellow-400 animate-spin" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Let's Shape the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Future Together
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you're a potential client, strategic advisor, investor, or someone who shares our vision, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> we'd love to connect </span>
            and explore possibilities.
          </p>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Strategic Conversations</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to discuss partnerships, investment opportunities, or how Crowd Logic can transform your events and community engagement?
              </p>
              
              <a 
                href="mailto:hello@crowdlogic.com"
                className="group/link inline-flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold"
              >
                <span>hello@crowdlogic.com</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>

              <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Join Our Journey</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Interested in early access, becoming a design partner, or simply staying updated on our progress? Let's start a conversation.
              </p>
              
              <a 
                href="mailto:connect@crowdlogic.com"
                className="group/link inline-flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold"
              >
                <span>connect@crowdlogic.com</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>

              <div className="absolute top-6 right-6 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
        </div>

        {/* Launch Announcement with Artistic Flair */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 mb-6">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-bold text-2xl">LAUNCHING MID-2025</span>
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                Be Part of the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Revolution</span>
              </h3>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We're in active development with demo environments showcasing our vision. Connect with us now to be part of shaping the future of events and community engagement.
            </p>

            {/* Artistic Progress Indicator */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Active Development</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-green-400 to-yellow-400"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-yellow-400 font-semibold">Demo Ready</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-yellow-400 to-blue-400"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-blue-400 font-semibold">Mid-2025 Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Footer */}
        <div className="relative">
          <div className="text-center py-12 border-t border-white/10">
            <div className="flex justify-center items-center space-x-6 mb-6">
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">Crowd Logic</span>
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
            
            <p className="text-gray-400 text-lg">
              &copy; 2024 Crowd Logic. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> Building the future of community engagement.</span>
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-8 mt-8 opacity-40">
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="w-px h-16 bg-gradient-to-b from-pink-500 to-transparent"></div>
              <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
