
import { Calendar, Users, BarChart3, Zap, Star, Sparkles, Compass, ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
            <span className="text-emerald-400 font-semibold text-xl">OUR ECOSYSTEM</span>
            <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Our Ecosystem
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            CrowdLogic is a unified ecosystem where personal adventures fuel professional intelligence. 
            Our B2C apps create engaged communities, generating insights that power our best-in-class 
            B2B platforms for brands, agencies, and event organizers.
          </p>
        </div>

        {/* Four Platform Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-32">
          {/* Event Axis */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Event Axis</h3>
                <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-transparent mb-6"></div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                The command center for event organizers. Plan, execute, and analyze with precision through 
                intelligent automation and real-time insights.
              </p>
              
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Smart event planning & coordination</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Automated workflow management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Real-time performance analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Multi-channel integration</span>
                </li>
              </ul>

              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* KITO Agency */}
          <div className="group relative lg:mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">KITO Agency™</h3>
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mb-6"></div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Professional event staffing operations. Where talent meets opportunity through vetted brand 
                ambassadors and production crews for agencies who demand results.
              </p>
              
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Large-scale talent roster management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Multi-client event coordination</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Professional crew & ambassador placement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>White-label staffing solutions</span>
                </li>
              </ul>

              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>

          {/* VibePass */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">VibePass™</h3>
                <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent mb-6"></div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                The social layer that transforms passive attendees into active community members through 
                gamified experiences and meaningful connections.
              </p>
              
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Social networking & community building</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Gamified engagement experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Real-time audience insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Brand-audience connection tools</span>
                </li>
              </ul>

              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
          {/* escapade */}
          <div className="group relative lg:mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">escapade™</h3>
                <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-transparent mb-4"></div>
              </div>
              
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                The app for authoring adventures. From weekend getaways to once-in-a-lifetime trips, 
                escapade™ is where you and your crew plan the moments you'll remember forever.
              </p>
              
              <ul className="space-y-2 text-gray-400 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Collaborative Idea Bucket</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>AI-Powered POI Stash</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Interactive Itinerary & Map Hub</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Digital Keepsake Generation</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                Try the Beta
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-amber-900/20 to-cyan-900/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-16">
            <div className="text-center">
              <div className="mb-12">
                <div className="inline-flex items-center space-x-4 mb-8">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  <span className="text-emerald-400 font-semibold text-xl">UNIFIED INTELLIGENCE</span>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Connected
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400"> Ecosystem</span>
                </h3>
              </div>
              
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                When escapade™, Event Axis™, KITO Agency™, and VibePass™ work together, they create something powerful: 
                a complete event intelligence system that learns, adapts, and grows with every interaction.
              </p>

              {/* Decorative connecting lines */}
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-emerald-400"></div>
                  <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                  <div className="w-6 h-6 bg-amber-400 rounded-full animate-pulse delay-600"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-cyan-400"></div>
                  <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
