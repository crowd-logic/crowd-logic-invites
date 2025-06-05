
import { ChevronDown } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Artistic Elements */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
            <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce" />
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

        {/* Problem Cards with Professional Images */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/fragmented-tech.jpg" 
                    alt="Fragmented Technology" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Fragmented Ecosystem</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Event organizers juggle multiple platforms, losing efficiency and creating disconnected experiences for attendees.
              </p>
            </div>
          </div>

          <div className="group relative lg:mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/data-analytics.jpg" 
                    alt="Data Analytics" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Limited Insights</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Brands lack deep understanding of their audience engagement and struggle to create meaningful connections.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-full h-32 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="/images/vision/missed-opportunities.jpg" 
                    alt="Missed Opportunities" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Missed Opportunities</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Communities can't capitalize on the power of collective engagement and shared experiences.
              </p>
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

              {/* Decorative connecting lines */}
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-green-400 to-blue-400"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full animate-pulse delay-300 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse delay-700 flex items-center justify-center">
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
