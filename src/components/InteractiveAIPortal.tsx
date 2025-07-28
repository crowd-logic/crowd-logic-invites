import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";

interface InteractiveAIPortalProps {
  onSignupClick: () => void;
}

export const InteractiveAIPortal = ({ onSignupClick }: InteractiveAIPortalProps) => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput }
      });

      if (error) {
        console.error('Error calling ai-navigator:', error);
        return;
      }

      console.log('AI Navigator response:', data);
      setSolution(data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setSolution(null);
    setUserInput("");
  };

  return (
    <div className="min-h-[50vh] relative">
      <AnimatePresence mode="wait">
        {!solution ? (
          <motion.div
            key="ai-input"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-[50vh] bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 flex items-center justify-center relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Journey Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <motion.path
                d="M0,300 Q400,100 800,250 T1600,200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-emerald-300"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M0,500 Q600,200 1200,400 T2400,300"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-teal-300"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
            </svg>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Find your fit in the CrowdLogic ecosystem.
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                From personal trip planning with escapade™ to enterprise-level event logistics with EventOS™, 
                our platform has a solution built for your needs. To see yours, tell us about your role or goal.
              </motion.p>
              
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-block w-16 h-16 border-4 border-white/20 border-t-white rounded-full mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.p 
                    className="text-2xl text-white"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Finding your fit...
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Describe your challenge or role..."
                    className="h-14 text-lg px-6 bg-white/10 border-white/20 text-white placeholder-emerald-200 backdrop-blur-sm"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !userInput.trim()}
                    className="h-14 px-8 text-lg bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300"
                  >
                    Find My Solution
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.form>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="solution-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-screen flex"
          >
            {/* Left Panel - Brand Showcase */}
            <div className="w-1/2 h-full">
              <ProductShowcase solution={solution} />
            </div>
            
            {/* Right Panel - Personalized Blueprint */}
            <div className="w-1/2 h-full">
              <PersonalizedBlueprint 
                solution={solution} 
                onSignupClick={onSignupClick}
                onBack={handleBack}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};