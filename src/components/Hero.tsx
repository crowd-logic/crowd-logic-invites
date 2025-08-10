import { ArrowRight, Compass, BarChart3 } from "lucide-react";
import { AnimatedLandscape } from "./AnimatedLandscape";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-slate-900">
      {/* 3D Book Container */}
      <div 
        className="relative w-full h-full"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ 
            transformStyle: "preserve-3d",
            transformOrigin: "center center"
          }}
          animate={{ 
            rotateY: isFlipped ? 5 : 0,
            rotateX: isFlipped ? -2 : 0
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Book Pages */}
          <div className="flex flex-col md:flex-row min-h-[90vh] relative">
            {/* Left Page - escapade */}
            <motion.div
              className="w-full md:w-1/2 relative"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "right center"
              }}
              animate={{
                rotateY: isFlipped ? -15 : 0,
                translateZ: isFlipped ? 20 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent pointer-events-none z-10"></div>
              <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center text-white relative shadow-xl"
                   style={{ 
                     background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)",
                     boxShadow: isFlipped ? "20px 20px 40px rgba(0,0,0,0.3)" : "none"
                   }}>
                {/* Animated Landscape Background */}
                <AnimatedLandscape />
                
                {/* Page binding effect */}
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-md">
                  <Compass className="w-12 h-12 mb-6 mx-auto text-white" />
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Your next adventure starts now.
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                    escapade™, our new app for planning trips with your crew, is now live in beta. 
                    Stop dreaming, start authoring.
                  </p>
                  <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="flex items-center gap-2">
                      Join the Escapade™
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Page - EventOS */}
            <motion.div
              className="w-full md:w-1/2 relative"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center"
              }}
              animate={{
                rotateY: isFlipped ? 15 : 0,
                translateZ: isFlipped ? 20 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/20 to-transparent pointer-events-none z-10"></div>
              <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center text-white relative border-l border-gray-700 min-h-[90vh] shadow-xl"
                   style={{ 
                     background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                     boxShadow: isFlipped ? "-20px 20px 40px rgba(0,0,0,0.3)" : "none"
                   }}>
                {/* Professional Tech Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900">
                  {/* Data visualization patterns */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-gray-600/30 rounded-lg rotate-12 animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-600/20 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gray-600/10 rounded-lg rotate-45 animate-pulse delay-300"></div>
                    
                    {/* Grid pattern */}
                    <div className="absolute inset-4 opacity-10">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Page binding effect */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-md">
                  <BarChart3 className="w-12 h-12 mb-6 mx-auto text-gray-300" />
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    The Operating System for Experiential Marketing.
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                    CrowdLogic's EventOS™ platform unifies staffing, campaigns, and attendees into a single, 
                    intelligent ecosystem. Built for brands and agencies who demand results.
                  </p>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group border-2 border-gray-400/30 text-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-400/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2">
                      Explore the Platform
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};