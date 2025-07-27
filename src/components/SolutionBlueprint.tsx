import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Target, Wrench, Map, Trophy } from "lucide-react";
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
  const [currentStep, setCurrentStep] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState("challenge");

  const typedSolution = solution as Solution;

  // Animation for user flow steps
  useEffect(() => {
    if (activeTab === "blueprint" && typedSolution?.userFlow) {
      setCurrentStep(0);
      setShowCTA(false);
      
      const timer = setTimeout(() => {
        animateSteps();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [activeTab, typedSolution]);

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

  const getProductDisplayName = () => {
    if (typedSolution.product === "KITO Agency") return "KITO Agency";
    return typedSolution.product;
  };

  const getChallengeText = () => {
    return typedSolution.challenge || "Managing complex workflows and coordinating multiple stakeholders while ensuring quality delivery and meeting tight deadlines.";
  };

  const getToolsText = () => {
    return typedSolution.tools || `${getProductDisplayName()} provides the comprehensive solution you need to streamline operations and achieve your goals.`;
  };

  const handleCTAFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
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

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Custom Styled Tabs List */}
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/30 backdrop-blur-sm border border-white/20">
              <TabsTrigger 
                value="challenge"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-white/70 border-r border-white/10"
              >
                <Target className="w-4 h-4 mr-2" />
                Chapter 1: Challenge
              </TabsTrigger>
              <TabsTrigger 
                value="tools"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-white/70 border-r border-white/10"
              >
                <Wrench className="w-4 h-4 mr-2" />
                Chapter 2: Tools
              </TabsTrigger>
              <TabsTrigger 
                value="blueprint"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-white/70 border-r border-white/10"
              >
                <Map className="w-4 h-4 mr-2" />
                Chapter 3: Blueprint
              </TabsTrigger>
              <TabsTrigger 
                value="outcome"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-white/70"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Chapter 4: Outcome
              </TabsTrigger>
            </TabsList>

            {/* Chapter 1: Challenge */}
            <TabsContent value="challenge" className="min-h-[60vh] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <Target className="w-24 h-24 mx-auto text-emerald-400 mb-6" />
                </motion.div>
                <h1 className="text-5xl font-bold mb-8 text-emerald-400">The Challenge</h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-2xl leading-relaxed opacity-90"
                >
                  {getChallengeText()}
                </motion.p>
              </motion.div>
            </TabsContent>

            {/* Chapter 2: Tools */}
            <TabsContent value="tools" className="min-h-[60vh] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <Wrench className="w-24 h-24 mx-auto text-emerald-400 mb-6" />
                </motion.div>
                <h1 className="text-5xl font-bold mb-8 text-emerald-400">Your Tools for Success</h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold mb-4">{getProductDisplayName()}</h2>
                  <p className="text-2xl leading-relaxed opacity-90">
                    {getToolsText()}
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Chapter 3: Blueprint */}
            <TabsContent value="blueprint" className="min-h-[60vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                {/* Left Side - Title */}
                <div className="flex flex-col justify-center text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Map className="w-16 h-16 text-emerald-400 mb-6" />
                    <h1 className="text-5xl font-bold mb-8 text-emerald-400">Your Personalized User Flow</h1>
                    <p className="text-xl opacity-80">Watch your journey unfold step by step</p>
                  </motion.div>
                </div>

                {/* Right Side - Animated Flow */}
                <div className="flex flex-col justify-center">
                  <div className="max-w-md w-full space-y-8 text-white">
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
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Chapter 4: Outcome */}
            <TabsContent value="outcome" className="min-h-[60vh] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <Trophy className="w-24 h-24 mx-auto text-emerald-400 mb-6" />
                </motion.div>
                <h1 className="text-5xl font-bold mb-8 text-emerald-400">Your Next Step</h1>
                
                {/* 3D Flip Card Animation */}
                <motion.div
                  className="relative mx-auto w-96 h-64 cursor-pointer"
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
                      <p className="text-2xl font-semibold">Click to reveal your next step</p>
                    </div>
                    
                    {/* Back of card */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex flex-col items-center justify-center border border-emerald-400/30 p-6"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      {typedSolution.product === "escapade" ? (
                        <Button
                          size="lg"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-8 py-4"
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
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};