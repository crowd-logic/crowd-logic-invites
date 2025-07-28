import { Compass, BarChart3, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NexusButton } from "./NexusButton";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";
import { Quadrant } from "./Quadrant";

interface HeroSectionProps {
  isLoading?: boolean;
  solution?: any;
  onNexusClick?: () => void;
  onSignupClick?: () => void;
  onBack?: () => void;
}

export const HeroSection = ({ 
  isLoading = false, 
  solution = null, 
  onNexusClick = () => {}, 
  onSignupClick = () => {},
  onBack = () => {}
}: HeroSectionProps) => {
  const quadrants = [
    {
      id: 'escapade',
      name: 'escapade™',
      icon: Compass,
      background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)',
      description: 'Personal Adventure Planning'
    },
    {
      id: 'eventos',
      name: 'Event Axis™',
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
          // Transformed state - show solution dashboard in expanded quadrant
          <motion.div
            key="solution-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full flex"
            style={{ background: matchingQuadrant.background }}
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
          // Default state - 2x2 grid with quadrants
          <motion.div
            key="quadrants-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full grid grid-cols-2 grid-rows-2"
          >
            {/* Render each quadrant */}
            {quadrants.map((quadrant, index) => (
              <Quadrant
                key={quadrant.id}
                {...quadrant}
                isExpanded={false}
                isVisible={true}
              />
            ))}

            {/* Nexus Button - centered overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <AnimatePresence>
                {!isTransformed && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ 
                      rotate: isLoading ? 360 : 0,
                      opacity: isTransformed ? 0 : 1,
                      scale: isTransformed ? 0.8 : 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8,
                      transition: { duration: 0.3 }
                    }}
                    transition={isLoading ? { 
                      duration: 1, 
                      repeat: Infinity, 
                      ease: "linear" 
                    } : { duration: 0.3 }}
                  >
                    <NexusButton onClick={onNexusClick} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};