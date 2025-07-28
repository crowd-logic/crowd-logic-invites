import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PersistentAIBarProps {
  onSolutionFound: (solution: any) => void;
  isLoading?: boolean;
}

export const PersistentAIBar = ({ onSolutionFound, isLoading = false }: PersistentAIBarProps) => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isProcessing) return;

    setIsProcessing(true);

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
      setUserInput(""); // Clear input after successful submission
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-emerald-900/90 via-teal-800/90 to-emerald-700/90 backdrop-blur-lg border-b border-emerald-600/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          {/* AI Icon */}
          <div className="flex items-center gap-3 text-emerald-100">
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Find Your Fit</span>
          </div>
          
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-3">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g., I plan family events, I manage brand activations..."
              className="flex-1 h-12 bg-white/10 border-emerald-400/30 text-white placeholder-emerald-200 focus:border-emerald-300 focus:ring-emerald-300"
              disabled={isProcessing || isLoading}
            />
            <Button 
              type="submit" 
              disabled={isProcessing || isLoading || !userInput.trim()}
              className="h-12 px-6 bg-emerald-600 hover:bg-emerald-500 text-white border-none"
            >
              {isProcessing || isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </form>
          
          {/* Subtitle */}
          <div className="hidden md:block text-emerald-200 text-sm max-w-xs">
            Tell us about your role or goal to see your personalized solution
          </div>
        </div>
      </div>
    </motion.div>
  );
};