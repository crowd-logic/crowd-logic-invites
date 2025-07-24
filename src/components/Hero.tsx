
import { ArrowRight, Compass, Users2, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Two-Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 min-h-screen items-center">
          
          {/* Left Column - B2C / escapade Users */}
          <div className="relative">
            {/* Living Landscape Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-cyan-500 to-blue-600 rounded-3xl">
              <div className="absolute inset-0">
                {/* Animated landscape elements */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400/15 rounded-full blur-xl animate-pulse delay-500"></div>
                
                {/* Wave overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent rounded-b-3xl"></div>
              </div>
            </div>
            
            {/* B2C Content */}
            <div className="relative z-10 p-8 lg:p-12 text-white">
              <div className="mb-6">
                <Compass className="w-12 h-12 mb-4 text-white/90" />
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Your next adventure starts now.
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  escapade, our new app for planning trips with your crew, is now live in beta. 
                  Stop dreaming, start authoring.
                </p>
              </div>
              
              <button className="group relative bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Join the Escapade
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - B2B / EventOS Clients */}
          <div className="relative">
            {/* Professional Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border border-slate-700/50">
              <div className="absolute inset-0">
                {/* Data visualization elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-slate-600/30 rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-slate-600/20 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-slate-600/10 rounded-lg rotate-45 animate-pulse delay-300"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-4 opacity-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* B2B Content */}
            <div className="relative z-10 p-8 lg:p-12 text-white">
              <div className="mb-6">
                <BarChart3 className="w-12 h-12 mb-4 text-slate-300" />
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                  The Operating System for Experiential Marketing.
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  CrowdLogic's EventOS platform unifies staffing, campaigns, and attendees into a single, 
                  intelligent ecosystem. Built for brands and agencies who demand results.
                </p>
              </div>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative border-2 border-slate-400/30 text-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700/50 hover:border-slate-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
