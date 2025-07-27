import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Compass, BarChart3 } from "lucide-react";
import { AnimatedLandscape } from "./AnimatedLandscape";
import { EmailCapture } from "./EmailCapture";

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
  
  // Determine background based on product
  const getProductBackground = () => {
    if (typedSolution.product === "escapade") {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800">
          <AnimatedLandscape />
        </div>
      );
    } else if (typedSolution.product === "KITO Agency") {
      return (
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full">
            <div 
              className="bg-cover bg-center opacity-80"
              style={{ backgroundImage: 'url(/lovable-uploads/21927be0-01c9-4a91-a532-c6684454e280.png)' }}
            />
            <div 
              className="bg-cover bg-center opacity-80"
              style={{ backgroundImage: 'url(/lovable-uploads/a23bcfeb-8aa9-443c-a4a6-333b32717982.png)' }}
            />
            <div 
              className="bg-cover bg-center opacity-80"
              style={{ backgroundImage: 'url(/lovable-uploads/0cd428cb-98d5-40a3-b1f8-a6ee2e1218bb.png)' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
      );
    } else {
      // EventOS, EventAxis, VibePass - video placeholder backgrounds
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-8 h-full opacity-30">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-slate-700/50" />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-slate-400 text-lg">Video Demo Coming Soon</div>
          </div>
        </div>
      );
    }
  };

  const getProductDisplayName = () => {
    if (typedSolution.product === "KITO Agency") return "KITO Agency";
    return typedSolution.product;
  };

  return (
    <section id="personalized-hero" className="w-full h-screen flex">
      {/* Left Side - Personalized Product */}
      <motion.div 
        className="flex-1 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {getProductBackground()}
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold mb-4">{getProductDisplayName()}</h2>
            <p className="text-xl opacity-90">Your CrowdLogic Solution</p>
          </motion.div>
          
          {/* Escapade Auth Embed in iPhone Mockup */}
          {typedSolution.product === "escapade" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 w-full max-w-sm mx-auto"
            >
              {/* iPhone Mockup */}
              <div className="relative mx-auto bg-gradient-to-br from-emerald-100 to-white rounded-[3rem] p-2 shadow-2xl ring-2 ring-white/30">
                <div className="bg-emerald-50 rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* iPhone Notch */}
                  <div className="relative bg-emerald-100 h-6 flex justify-center">
                    <div className="absolute top-1 bg-emerald-200 rounded-full w-16 h-4 flex items-center justify-center">
                      <div className="w-10 h-1.5 bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="bg-white relative" style={{ aspectRatio: '9/19.5' }}>
                    <iframe
                      src="https://escapadeapp.accesscrowdlogic.com/auth"
                      className="w-full h-full border-none"
                      title="Escapade Authentication"
                      style={{ minHeight: '600px' }}
                    />
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="bg-emerald-100 h-6 flex justify-center items-center">
                    <div className="w-32 h-1 bg-emerald-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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

            {/* CTA Section */}
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-12"
                >
                  {typedSolution.product === "escapade" ? (
                    // For escapade, show different CTA since auth is embedded on left
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4 text-emerald-400">Your Blueprint</h3>
                      <p className="text-lg opacity-90">Sign in on the left to start your adventure!</p>
                    </div>
                  ) : (
                    // For other products, show email capture
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-center text-emerald-400">Your Blueprint</h3>
                      <EmailCapture 
                        placeholder="Enter your email for early access"
                        buttonText={typedSolution.ctaText}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};