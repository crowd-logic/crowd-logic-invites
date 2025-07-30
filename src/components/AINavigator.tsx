import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface AINavigatorProps {
  onSolutionFound: (solution: any) => void;
}

export const AINavigator = ({ onSolutionFound }: AINavigatorProps) => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      onSolutionFound(data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rich Branded Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
        {/* Animated Data Nebula Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
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
        
        {/* Abstract Journey Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M0,300 Q400,100 800,250 T1600,200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,500 Q600,200 1200,400 T2400,300"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-secondary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-lora"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to CrowdLogic. Let's find your fit.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our ecosystem serves a diverse range of needs, from personal trip planning to enterprise logistics. 
            To connect you with the right solution, tell us about your role or goal.
          </motion.p>
          
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                className="inline-block w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p 
                className="text-2xl text-foreground font-inter"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Finding your fit...
              </motion.p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., I plan family events, I manage brand activations..."
                className="h-14 text-lg px-6 bg-background/20 border-border/30 text-foreground placeholder-muted-foreground backdrop-blur-sm font-inter"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !userInput.trim()}
                className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-inter font-semibold"
              >
                Design My Solution
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};