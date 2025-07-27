import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { EmailCapture } from "@/components/EmailCapture";

const Homepage = () => {
  const [uiState, setUiState] = useState<'question' | 'loading' | 'solution'>('question');
  const [solution, setSolution] = useState<any>(null);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showCta, setShowCta] = useState(false);

  const handleDesignSolution = async () => {
    if (!userInput.trim()) return;
    
    setUiState('loading');
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput }
      });

      if (error) throw error;

      setSolution(data);
      setUiState('solution');
      
      // Start the user flow animation
      setTimeout(() => animateSteps(data.userFlow), 1000);
    } catch (error) {
      console.error('Error getting solution:', error);
      setUiState('question');
    }
  };

  const animateSteps = (userFlow: any[]) => {
    userFlow.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === userFlow.length - 1) {
          setTimeout(() => setShowCta(true), 1000);
        }
      }, index * 2000);
    });
  };

  const handleStartOver = () => {
    setSolution(null);
    setUiState('question');
    setUserInput("");
    setCurrentStep(0);
    setShowCta(false);
  };

  const getProductBackground = (product: string) => {
    switch (product) {
      case 'escapade':
        return 'bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800';
      case 'Event Axis':
        return 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800';
      case 'VibePass':
        return 'bg-gradient-to-br from-pink-600 via-rose-700 to-red-800';
      default:
        return 'bg-gradient-to-br from-primary via-primary/80 to-primary/60';
    }
  };

  if (uiState === 'question') {
    return (
      <motion.div 
        className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Abstract animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <motion.div 
          className="z-10 text-center max-w-2xl px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            What's your next mission?
          </motion.h1>
          
          <motion.div 
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe your role, your goal, or your biggest challenge..."
              className="text-lg p-6 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/40 rounded-xl"
              onKeyDown={(e) => e.key === 'Enter' && handleDesignSolution()}
            />
            
            <Button 
              onClick={handleDesignSolution}
              size="lg"
              className="px-12 py-6 text-lg rounded-xl bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
            >
              Design My Solution
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  if (uiState === 'loading') {
    return (
      <motion.div 
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-background via-background/95 to-background/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-primary to-secondary rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.p 
            className="text-xl text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Designing your perfect solution...
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  if (uiState === 'solution' && solution) {
    return (
      <div className="h-screen relative overflow-hidden">
        {/* Start Over Button */}
        <motion.button
          onClick={handleStartOver}
          className="absolute top-6 right-6 z-50 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:bg-background/90 transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Start Over
        </motion.button>

        <div className="flex h-full">
          {/* Left Panel */}
          <motion.div 
            className={`w-1/2 h-full relative flex flex-col justify-center items-center text-white ${getProductBackground(solution.product)}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="z-10 text-center px-12">
              <motion.h1 
                className="text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                {solution.product}
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                {solution.challenge}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div 
            className="w-1/2 h-full bg-background flex flex-col justify-center px-12"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              Watch your journey unfold step by step
            </motion.h2>

            <div className="space-y-8">
              {solution.userFlow?.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  className={`flex items-start space-x-4 transition-opacity duration-500 ${
                    currentStep > index ? 'opacity-100' : 'opacity-30'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: currentStep > index ? 1 : 0.3,
                    x: 0 
                  }}
                  transition={{ delay: 1.8 + (index * 0.2) }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    currentStep > index ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <motion.p 
                      className="text-lg leading-relaxed"
                      animate={{ opacity: currentStep > index ? 1 : 0.5 }}
                    >
                      {step.text}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <AnimatePresence>
              {showCta && (
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {solution.ctaType === 'signup' ? (
                    <Button 
                      size="lg"
                      className="px-8 py-4 text-lg bg-primary hover:bg-primary/90"
                      onClick={() => window.open(solution.ctaLink, '_blank')}
                    >
                      {solution.ctaText}
                    </Button>
                  ) : (
                    <EmailCapture />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
};

export default Homepage;