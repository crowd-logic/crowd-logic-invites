import { Compass, BarChart3, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NexusButton } from "./NexusButton";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";

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
  const quadrants = [
    {
      id: 'escapade',
      name: 'escapade™',
      icon: Compass,
      background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)',
      description: 'Adventure Planning App'
    },
    {
      id: 'eventos',
      name: 'EventOS™',
      icon: BarChart3,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      description: 'Experiential Marketing Platform'
    },
    {
      id: 'kito',
      name: 'KITO Agency',
      icon: Users,
      background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
      description: 'Creative Agency Services'
    },
    {
      id: 'vibepass',
      name: 'VibePass',
      icon: Zap,
      background: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #ea580c 100%)',
      description: 'Event Access & Experience'
    }
  ];

  // Determine which quadrant matches the solution
  const getMatchingQuadrant = () => {
    if (!solution) return null;
    const productName = solution.product?.toLowerCase() || '';
    return quadrants.find(q => productName.includes(q.id.toLowerCase())) || quadrants[0];
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
          // Default state - show quadrants
          <motion.div
            key="quadrants"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full grid grid-cols-2 grid-rows-2"
          >
            {quadrants.map((quadrant, index) => {
              const IconComponent = quadrant.icon;
              return (
                <motion.div
                  key={quadrant.id}
                  className="relative flex flex-col items-center justify-center p-8 text-white border border-gray-700/30"
                  style={{ background: quadrant.background }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Background patterns */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/20 rounded-lg rotate-12 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-700"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <IconComponent className="w-16 h-16 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold mb-2">{quadrant.name}</h3>
                    <p className="text-white/80">{quadrant.description}</p>
                  </div>
                </motion.div>
              );
            })}

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