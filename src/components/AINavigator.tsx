import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface AINavigatorProps {
  onSolutionFound: (solution: any) => void;
  compact?: boolean;
}

export const AINavigator = ({ onSolutionFound, compact = false }: AINavigatorProps) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      console.log('🚀 AINavigator: Calling ai-navigator function with input:', input);
      
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput: input }
      });

      if (error) {
        console.error('❌ AINavigator: Error calling function:', error);
        throw error;
      }

      console.log('✅ AINavigator: Received response:', data);
      onSolutionFound(data);
      
    } catch (error) {
      console.error('❌ AINavigator: Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (compact) {
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <div className="relative">
          <Input
            type="text"
            placeholder="Describe your role, your goal, or your biggest challenge..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-14 px-6 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/60 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          size="lg"
          className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
              Analyzing your mission...
            </>
          ) : (
            <>
              <Sparkles className="mr-3 h-5 w-5" />
              Design My Solution
            </>
          )}
        </Button>
      </motion.form>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-emerald-400/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Sparkles className="w-16 h-16 mx-auto text-emerald-400 mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl font-bold text-white mb-6"
          >
            What's your next mission?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Every great achievement starts with understanding the challenge. 
            Tell us about your world, and we'll craft your perfect solution.
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Describe your role, your goal, or your biggest challenge..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-14 px-6 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/60 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                disabled={isLoading}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              size="lg"
              className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                  Analyzing your mission...
                </>
              ) : (
                <>
                  <Sparkles className="mr-3 h-5 w-5" />
                  Design My Solution
                </>
              )}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};