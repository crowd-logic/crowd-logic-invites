
import { Brain, Network, Zap, ChevronDown } from "lucide-react";
import { Star } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Uploaded Images as Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-32 h-32 opacity-15 hover:opacity-25 transition-opacity duration-500">
          <img 
            src="/lovable-uploads/fe7a702b-12de-4c6f-8100-4f521f450247.png" 
            alt="Event Innovation" 
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
        </div>
        
        <div className="absolute bottom-40 left-16 w-28 h-28 opacity-15 hover:opacity-25 transition-opacity duration-500">
          <img 
            src="/lovable-uploads/1cc647f2-ac03-4c52-903f-b521b858e0cd.png" 
            alt="Strategic Vision" 
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Artistic Elements */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
            <ChevronDown className="w-6 h-6 text-purple-400 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            The Problem
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              We're Solving
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              Event organizers struggle with 
              <span className="text-red-400 font-semibold"> fragmented tools</span>, 
              brands can't effectively 
              <span className="text-orange-400 font-semibold"> reach their audiences</span>, 
              and communities lack 
              <span className="text-yellow-400 font-semibold"> seamless connection experiences</span>.
            </p>
          </div>
        </div>

        {/* Problem Cards with Artistic Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Fragmented Ecosystem</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Event organizers juggle multiple platforms, losing efficiency and creating disconnected experiences for attendees.
              </p>
              <div className="absolute top-4 right-4">
                <Star className="w-2 h-2 text-purple-400 animate-pulse" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="group relative lg:mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Limited Insights</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Brands lack deep understanding of their audience engagement and struggle to create meaningful connections.
              </p>
              <div className="absolute top-4 right-4">
                <Star className="w-2 h-2 text-blue-400 animate-pulse delay-500" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Missed Opportunities</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Communities can't capitalize on the power of collective engagement and shared experiences.
              </p>
              <div className="absolute top-4 right-4">
                <Star className="w-2 h-2 text-pink-400 animate-pulse delay-1000" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section with Dramatic Presentation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16">
            <div className="text-center">
              <div className="mb-12">
                <div className="inline-flex items-center space-x-4 mb-8">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
                  <span className="text-green-400 font-semibold text-xl">THE SOLUTION</span>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"></div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Integrated
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"> Intelligence</span>
                </h3>
              </div>
              
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                Crowd Logic unifies event management, audience intelligence, and community engagement into 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> one powerful ecosystem </span>
                that scales with your ambitions.
              </p>

              {/* Decorative connecting lines with logo stars */}
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-4">
                  <Star className="w-8 h-8 text-green-400 animate-pulse" fill="currentColor" />
                  <div className="w-16 h-px bg-gradient-to-r from-green-400 to-blue-400"></div>
                  <Star className="w-8 h-8 text-blue-400 animate-pulse delay-300" fill="currentColor" />
                  <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <Star className="w-8 h-8 text-purple-400 animate-pulse delay-700" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
