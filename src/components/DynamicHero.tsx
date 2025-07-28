import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Compass, BarChart3 } from "lucide-react";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";
import { AnimatedLandscape } from "./AnimatedLandscape";

interface DynamicHeroProps {
  solution?: any;
  isLoading?: boolean;
  onSignupClick?: () => void;
  onBack?: () => void;
}

export const DynamicHero = ({ 
  solution, 
  isLoading = false, 
  onSignupClick = () => {},
  onBack = () => {}
}: DynamicHeroProps) => {
  const hasSolution = solution && !isLoading;

  return (
    <div className="h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {hasSolution ? (
          // Solution State - Transform to ProductShowcase + PersonalizedBlueprint
          <motion.div
            key="solution-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full flex"
          >
            {/* Left Panel - Product Showcase */}
            <motion.div 
              className="w-1/2 h-full"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <ProductShowcase solution={solution} />
            </motion.div>
            
            {/* Right Panel - Personalized Blueprint */}
            <motion.div 
              className="w-1/2 h-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <PersonalizedBlueprint 
                solution={solution} 
                onSignupClick={onSignupClick}
                onBack={onBack}
              />
            </motion.div>
          </motion.div>
        ) : (
          // Default State - Two-column pitch layout
          <motion.div
            key="default-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex"
          >
            {/* Left Panel - Escapade Pitch */}
            <motion.div
              className="w-1/2 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)'
              }}
            >
              {/* Centered Logo Circle */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={onSignupClick}
                >
                  <div className="text-2xl font-bold text-purple-900">C</div>
                </motion.div>
              </div>
              
              {/* Dimmed Animated Landscape Background */}
              <div className="absolute inset-0 opacity-10">
                <AnimatedLandscape />
              </div>
            </motion.div>

            {/* Right Panel - Simple Background */}
            <motion.div
              className="w-1/2 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};