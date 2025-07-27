import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Wrench, Map, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { EmailCapture } from "./EmailCapture";

interface SolutionBlueprintProps {
  solution: any;
  onBack: () => void;
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
  challenge?: string;
  tools?: string;
}

export const SolutionBlueprint = ({ solution, onBack }: SolutionBlueprintProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const typedSolution = solution as Solution;

  // Animation for user flow steps
  useEffect(() => {
    if (currentPage === 2 && typedSolution?.userFlow) {
      setCurrentStep(0);
      setShowCTA(false);
      
      const timer = setTimeout(() => {
        animateSteps();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage, typedSolution]);

  const animateSteps = () => {
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      if (stepIndex < (typedSolution?.userFlow?.length || 0)) {
        setCurrentStep(stepIndex + 1);
        stepIndex++;
      } else {
        clearInterval(stepInterval);
        setTimeout(() => {
          setShowCTA(true);
        }, 1000);
      }
    }, 2000);
  };

  const pages = [
    {
      title: "The Challenge",
      icon: Target,
      content: typedSolution.challenge || "Managing complex workflows and coordinating multiple stakeholders while ensuring quality delivery and meeting tight deadlines."
    },
    {
      title: "Your Tools for Success",
      icon: Wrench,
      content: typedSolution.tools || `${typedSolution.product} provides the comprehensive solution you need to streamline operations and achieve your goals.`,
      subtitle: typedSolution.product
    },
    {
      title: "Your Personalized User Flow",
      icon: Map,
      isFlow: true
    },
    {
      title: "Your Next Step",
      icon: Trophy,
      isCTA: true
    }
  ];

  const handleCTAFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Header with Back Button */}
      <div className="absolute top-6 left-6 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Navigator
        </Button>
      </div>

      {/* Book Container */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div 
          className="relative w-full max-w-7xl h-[80vh]"
          style={{ perspective: "1200px" }}
        >
          {/* Book Base */}
          <div className="relative w-full h-full">
            {/* Split Book Layout */}
            <div className="flex w-full h-full">
              {/* Left Page */}
              <motion.div
                className="w-1/2 h-full relative"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "right center"
                }}
                animate={{
                  rotateY: currentPage > 0 ? -5 : 0,
                  translateZ: currentPage > 0 ? 20 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div 
                  className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-2xl p-12 flex flex-col justify-center items-center text-white relative overflow-hidden"
                  style={{ 
                    boxShadow: "20px 20px 40px rgba(0,0,0,0.3)",
                    background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)"
                  }}
                >
                  {/* Page binding effect */}
                  <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
                  
                  {/* Chapter indicator */}
                  <div className="absolute top-8 left-8 text-emerald-400 font-semibold">
                    Chapter {currentPage + 1}
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center max-w-lg"
                    >
                      {pages[currentPage] && (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                          >
                            {(() => {
                              const IconComponent = pages[currentPage].icon;
                              return <IconComponent className="w-16 h-16 mx-auto text-emerald-400 mb-4" />;
                            })()}
                          </motion.div>
                          <h1 className="text-4xl font-bold mb-8 text-emerald-400">
                            {pages[currentPage].title}
                          </h1>
                          {pages[currentPage].subtitle && (
                            <h2 className="text-3xl font-bold mb-6 text-white">
                              {pages[currentPage].subtitle}
                            </h2>
                          )}
                          {!pages[currentPage].isFlow && !pages[currentPage].isCTA && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="text-xl leading-relaxed opacity-90"
                            >
                              {pages[currentPage].content}
                            </motion.p>
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Right Page */}
              <motion.div
                className="w-1/2 h-full relative"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center"
                }}
                animate={{
                  rotateY: currentPage > 0 ? 5 : 0,
                  translateZ: currentPage > 0 ? 20 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div 
                  className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-r-2xl p-12 flex flex-col justify-center items-center text-white relative overflow-hidden"
                  style={{ 
                    boxShadow: "-20px 20px 40px rgba(0,0,0,0.3)",
                    background: "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)"
                  }}
                >
                  {/* Page binding effect */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-lg"
                    >
                      {/* User Flow Page */}
                      {pages[currentPage]?.isFlow && (
                        <div className="space-y-8">
                          <p className="text-lg opacity-80 mb-8 text-center">Watch your journey unfold step by step</p>
                          <div className="space-y-6">
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
                                      animate={{ height: currentStep > index + 1 ? 32 : 0 }}
                                      transition={{ duration: 0.5, delay: (index + 1) * 2 }}
                                      className="w-px bg-emerald-400 ml-4 mt-4"
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      )}

                      {/* CTA Page */}
                      {pages[currentPage]?.isCTA && (
                        <div className="text-center">
                          {/* 3D Flip Card Animation */}
                          <motion.div
                            className="relative mx-auto w-80 h-48 cursor-pointer"
                            style={{ perspective: '1000px' }}
                            onClick={handleCTAFlip}
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              className="relative w-full h-full"
                              style={{ transformStyle: 'preserve-3d' }}
                              animate={{ rotateY: isFlipped ? 180 : 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              {/* Front of card */}
                              <div 
                                className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center border border-emerald-400/30"
                                style={{ backfaceVisibility: 'hidden' }}
                              >
                                <p className="text-xl font-semibold">Click to reveal your next step</p>
                              </div>
                              
                              {/* Back of card */}
                              <div 
                                className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex flex-col items-center justify-center border border-emerald-400/30 p-6"
                                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                              >
                                {typedSolution.product === "escapade" ? (
                                  <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-6 py-3"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open('https://escapadeapp.accesscrowdlogic.com/auth', '_blank');
                                    }}
                                  >
                                    {typedSolution.ctaText}
                                  </Button>
                                ) : (
                                  <div className="w-full">
                                    <EmailCapture 
                                      placeholder="Enter your email for early access"
                                      buttonText={typedSolution.ctaText}
                                    />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="text-white hover:bg-white/10 disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === index ? 'bg-emerald-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="text-white hover:bg-white/10 disabled:opacity-30"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};