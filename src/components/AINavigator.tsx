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

    console.log('AINavigator: Starting submission with input:', userInput);
    setIsLoading(true);

    try {
      console.log('AINavigator: Calling supabase function...');
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput }
      });

      console.log('AINavigator: Response received:', { data, error });

      if (error) {
        console.error('Error calling ai-navigator:', error);
        return;
      }

      if (data) {
        console.log('AI Navigator response:', data);
        console.log('AINavigator: Calling onSolutionFound with data:', data);
        onSolutionFound(data);
      } else {
        console.log('AINavigator: No data received');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsLoading(false);
      console.log('AINavigator: Loading finished');
    }
  };

  return (
    <div className="w-full">
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
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g., I plan family events, I manage brand activations..."
            className="h-14 text-lg px-6 bg-white/10 border-white/20 text-white placeholder-emerald-200 backdrop-blur-sm"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !userInput.trim()}
            className="h-14 px-8 text-lg bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 w-full"
          >
            Design My Solution
          </Button>
        </motion.form>
      )}
    </div>
  );
};