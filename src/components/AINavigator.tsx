import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AINavigatorProps {
  onSolutionFound: (solution: any) => void;
}

export const AINavigator = ({ onSolutionFound }: AINavigatorProps) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    
    try {
      console.log('🚀 Calling AI Navigator with input:', input);
      
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput: input },
      });

      console.log('📦 Edge function response:', { data, error });

      if (error) {
        console.error('❌ Edge function error:', error);
        throw error;
      }
      
      const result = data;
      console.log('✅ Parsed result:', result);
      
      onSolutionFound(result);
      console.log('🎯 State updated, scrolling to hero...');
      
      // Smooth scroll to PersonalizedHero section
      setTimeout(() => {
        const heroElement = document.getElementById('personalized-hero');
        console.log('🔍 Found hero element:', heroElement);
        heroElement?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 100);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-background py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Tell us about you.
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          And we'll show you exactly how the CrowdLogic ecosystem can help.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Describe your role or goal..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 h-12 text-lg"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading || !input.trim()}
              className="h-12 px-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Find My Solution
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};