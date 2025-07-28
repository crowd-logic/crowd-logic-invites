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
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-center text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-lg"
                >
                  <Compass className="h-16 w-16 mx-auto mb-6 text-purple-200" />
                  <h1 className="text-4xl font-bold mb-6 leading-tight">
                    Your next adventure starts now
                  </h1>
                  <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                    Discover personalized travel experiences crafted just for you. From hidden gems to bucket-list destinations.
                  </p>
                  <Button 
                    size="lg"
                    onClick={onSignupClick}
                    className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-3 text-lg"
                  >
                    Join the Escapade™
                  </Button>
                </motion.div>
              </div>
              
              {/* Animated Landscape Background */}
              <div className="absolute inset-0 opacity-30">
                <AnimatedLandscape />
              </div>
            </motion.div>

            {/* Right Panel - EventOS Pitch */}
            <motion.div
              className="w-1/2 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
              }}
            >
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-center text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="max-w-lg"
                >
                  <BarChart3 className="h-16 w-16 mx-auto mb-6 text-slate-300" />
                  <h1 className="text-4xl font-bold mb-6 leading-tight">
                    The Operating System for Experiential Marketing
                  </h1>
                  <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                    Transform events into powerful brand experiences with data-driven insights and seamless execution.
                  </p>
                  <Button 
                    size="lg"
                    onClick={onSignupClick}
                    className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-8 py-3 text-lg"
                  >
                    Explore the Platform
                  </Button>
                </motion.div>
              </div>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  animate={{ x: [0, 100, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 left-16 w-6 h-6 bg-white/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -80, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-24 right-24 w-8 h-8 bg-white/20 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};