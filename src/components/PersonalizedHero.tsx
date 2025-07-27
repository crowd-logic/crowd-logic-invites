import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Compass, BarChart3 } from "lucide-react";
import { AnimatedLandscape } from "./AnimatedLandscape";

interface PersonalizedHeroProps {
  solution: any;
}

interface UserFlowStep {
  step: number;
  text: string;
}

interface Solution {
  product: string;
  heroImage: string;
  userFlow: UserFlowStep[];
  ctaType: string;
  ctaText: string;
}

export const PersonalizedHero = ({ solution }: PersonalizedHeroProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (solution?.userFlow) {
      setCurrentStep(0);
      setShowCTA(false);
      setIsFlipped(false);
      
      // Start the animation sequence
      const timer = setTimeout(() => {
        animateSteps();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [solution]);

  const animateSteps = () => {
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < (solution?.userFlow?.length || 0)) {
        setCurrentStep(stepIndex + 1);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        // Show CTA after all steps are complete
        setTimeout(() => {
          setShowCTA(true);
        }, 1000);
      }
    }, 2000);
  };

  const handleCTAFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Default hero when no solution is provided
  if (!solution) {
    return (
      <section className="w-full h-screen flex">
        {/* Left Side - escapade */}
        <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800">
          <AnimatedLandscape />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Compass className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h2 className="text-5xl font-bold mb-6">escapade™</h2>
              <p className="text-xl mb-8 max-w-md leading-relaxed">
                Transform spontaneous ideas into unforgettable group adventures with AI-powered trip planning.
              </p>
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm"
              >
                Join the Escapade™
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - EventOS */}
        <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(59,130,246,0.1)_50%,transparent_60%)]" />
            <div className="grid grid-cols-8 grid-rows-8 h-full opacity-30">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-slate-700/50" />
              ))}
            </div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <BarChart3 className="w-16 h-16 mx-auto mb-6 text-blue-300" />
              <h2 className="text-5xl font-bold mb-6">EventOS™</h2>
              <p className="text-xl mb-8 max-w-md leading-relaxed">
                The operating system for experiential marketing. Streamline operations, maximize impact.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore the Platform
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Personalized hero when solution is provided
  const typedSolution = solution as Solution;

  return (
    <section id="personalized-hero" className="w-full h-screen flex">
      {/* Left Side - Personalized Product */}
      <motion.div 
        className="flex-1 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${typedSolution.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold mb-4">{typedSolution.product}</h2>
            <p className="text-xl opacity-90">Your personalized solution</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Animated User Flow */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 h-full opacity-30">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-slate-700/50" />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md w-full space-y-8">
            {/* Animated Steps */}
            <AnimatePresence>
              {typedSolution.userFlow?.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: currentStep > index ? 1 : 0,
                    x: currentStep > index ? 0 : 50
                  }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: index * 0.3 + 0.5 }}
                    >
                      {step.text}
                    </motion.p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < typedSolution.userFlow.length - 1 && currentStep > index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: currentStep > index + 1 ? 40 : 0 }}
                      transition={{ duration: 0.5, delay: (index + 1) * 2 }}
                      className="w-px bg-emerald-400 ml-4 mt-4"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* CTA Card with 3D Flip */}
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-12"
                >
                  <div 
                    className="relative w-full h-24 cursor-pointer"
                    style={{ perspective: '1000px' }}
                    onClick={handleCTAFlip}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      style={{ transformStyle: 'preserve-3d' }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Front of card */}
                      <div 
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <span className="text-xl font-semibold">Your Blueprint</span>
                      </div>
                      
                      {/* Back of card */}
                      <div 
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <Button 
                          size="lg"
                          className="bg-white text-blue-700 hover:bg-gray-100"
                        >
                          {typedSolution.ctaText}
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};