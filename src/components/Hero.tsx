import { Compass, BarChart3, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NexusButton } from "./NexusButton";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";
import { AnimatedLandscape } from "./AnimatedLandscape";

interface HeroProps {
  isLoading?: boolean;
  solution?: any;
  onNexusClick?: () => void;
  onSignupClick?: () => void;
  onBack?: () => void;
}

export const Hero = ({ 
  isLoading = false, 
  solution = null, 
  onNexusClick = () => {}, 
  onSignupClick = () => {},
  onBack = () => {}
}: HeroProps) => {
  // Determine which quadrant matches the solution
  const getMatchingQuadrant = () => {
    if (!solution) return null;
    const productName = solution.product?.toLowerCase() || '';
    if (productName.includes('escapade')) return 'escapade';
    if (productName.includes('eventos') || productName.includes('event')) return 'eventos';
    return 'escapade'; // default
  };

  const matchingQuadrant = getMatchingQuadrant();
  const isTransformed = solution && matchingQuadrant;

  return (
    <div className="relative h-[80vh] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        {isTransformed ? (
          // Transformed state - show solution dashboard
          <motion.div
            key="solution-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex"
          >
            {/* Left Panel - Product Showcase */}
            <div className="w-1/2 h-full">
              <ProductShowcase solution={solution} />
            </div>
            
            {/* Right Panel - Personalized Blueprint */}
            <div className="w-1/2 h-full">
              <PersonalizedBlueprint 
                solution={solution} 
                onSignupClick={onSignupClick}
                onBack={onBack}
              />
            </div>
          </motion.div>
        ) : (
          // Default state - 2x2 split like the reference images
          <motion.div
            key="hero-split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full flex"
          >
            {/* Left Half - Escapade */}
            <motion.div
              className="w-1/2 h-full relative flex flex-col justify-center items-center p-8 text-center text-white"
              style={{ 
                background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)"
              }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Animated Landscape Background */}
              <AnimatedLandscape />
              
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
                <button 
                  onClick={onSignupClick}
                  className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    Join the Escapade™
                    <Compass className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right Half - EventOS */}
            <motion.div
              className="w-1/2 h-full relative flex flex-col justify-center items-center p-8 text-center text-white border-l border-gray-700"
              style={{ 
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
              }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Professional Tech Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900">
                {/* Data visualization patterns */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-gray-600/30 rounded-lg rotate-12 animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-600/20 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gray-600/10 rounded-lg rotate-45 animate-pulse delay-300"></div>
                </div>
              </div>
              
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
                    <BarChart3 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Nexus Button - centered overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                transition={isLoading ? { 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "linear" 
                } : { duration: 0.3 }}
              >
                <NexusButton onClick={onNexusClick} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};