import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface AINavigatorProps {
  onSolutionFound: (solution: any) => void;
}

interface SolutionUIProps {
  solution: any;
  onStartOver: () => void;
}

const SolutionUI = ({ solution, onStartOver }: SolutionUIProps) => {
  return (
    <motion.div 
      className="min-h-[60vh] flex items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"
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

      {/* Two-panel layout */}
      <div className="w-full grid md:grid-cols-2 gap-8 px-6 z-10">
        {/* Left Panel - Product Info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            {solution.personaConfirmation?.title || "Your Solution"}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            {solution.personaConfirmation?.challenge || "Tailored specifically for your needs"}
          </p>
          <div className="space-y-4">
            {solution.solutionProducts?.map((product: any, index: number) => (
              <div key={index} className="p-4 bg-card rounded-lg border">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Panel - Key Features */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
          <div className="space-y-4">
            {solution.keyFeatures?.map((feature: any, index: number) => (
              <motion.div
                key={index}
                className="p-4 bg-muted/50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h4 className="font-medium mb-2">{feature.feature}</h4>
                <p className="text-sm text-muted-foreground">{feature.benefit}</p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button size="lg" className="w-full">
              {solution.cta?.buttonText || "Get Started"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Start Over Button */}
      <motion.button
        onClick={onStartOver}
        className="absolute top-4 right-4 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm rounded-lg border hover:bg-muted/50 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Start Over
      </motion.button>
    </motion.div>
  );
};

export const AINavigator = ({ onSolutionFound }: AINavigatorProps) => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState<any>(null);
  const [uiState, setUiState] = useState<'question' | 'loading' | 'solution'>('question');

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    
    setUiState('loading');
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput }
      });

      if (error) throw error;
      setSolution(data);
      setUiState('solution');
      onSolutionFound(data);
    } catch (error) {
      console.error('Error getting solution:', error);
      setUiState('question');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartOver = () => {
    setSolution(null);
    setUserInput("");
    setUiState('question');
  };

  return (
    <div className="min-h-[60vh]">
      <AnimatePresence mode="wait">
        {uiState === 'question' && (
          <motion.div 
            key="question"
            className="min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Rich animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"
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
              {/* Floating elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-xl"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
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
                className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Find your fit in the CrowdLogic ecosystem
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                From personal trip planning with escapade™ to enterprise-level event logistics with EventOS™, 
                our platform has a solution built for your needs. To see yours, tell us about your role or goal.
              </motion.p>
              
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
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                
                <Button 
                  onClick={handleSubmit}
                  size="lg"
                  className="px-12 py-6 text-lg rounded-xl bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                >
                  Design My Solution
                </Button>
                
                <motion.a
                  href="#ecosystem"
                  className="inline-block text-muted-foreground hover:text-foreground transition-colors cursor-pointer mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Or, browse our full ecosystem ➔
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        
        {uiState === 'loading' && (
          <motion.div 
            key="loading"
            className="min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <motion.div
              className="text-center z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-primary to-secondary rounded-full relative"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-2 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="text-xl text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Finding the best fit for you...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
        
        {uiState === 'solution' && solution && (
          <SolutionUI 
            key="solution"
            solution={solution} 
            onStartOver={handleStartOver} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};