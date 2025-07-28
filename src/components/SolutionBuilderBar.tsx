import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";

interface SolutionBuilderBarProps {
  onSolutionFound: (solution: any) => void;
  isLoading?: boolean;
}

export const SolutionBuilderBar = ({ onSolutionFound, isLoading = false }: SolutionBuilderBarProps) => {
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isProcessing || isLoading) return;

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput: userInput.trim() }
      });

      if (error) throw error;
      onSolutionFound(data);
    } catch (error) {
      console.error('Error calling AI navigator:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-16 z-40"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Your Solution Builder</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-4xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe your role, your goal, or your biggest challenge..."
              className="pl-10 h-12 text-base bg-background border-border/50 focus:border-primary"
              disabled={isProcessing || isLoading}
            />
          </div>
          <Button 
            type="submit"
            size="lg"
            disabled={!userInput.trim() || isProcessing || isLoading}
            className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isProcessing || isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-5 w-5 border-2 border-current border-t-transparent rounded-full"
              />
            ) : (
              "Find My Solution"
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};