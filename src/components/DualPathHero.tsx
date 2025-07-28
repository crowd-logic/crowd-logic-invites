import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface DualPathHeroProps {
  onSolutionFound: (solution: any) => void;
  initialPersona?: string;
}

export const DualPathHero = ({ onSolutionFound, initialPersona }: DualPathHeroProps) => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState<any>(null);

  // Handle URL parameter loading
  useEffect(() => {
    if (initialPersona) {
      setIsLoading(true);
      handlePersonaLoad(initialPersona);
    }
  }, [initialPersona]);

  const handlePersonaLoad = async (persona: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput: `I am a ${persona.replace('_', ' ')}` }
      });

      if (error) throw error;
      
      setSolution(data);
      onSolutionFound(data);
    } catch (error) {
      console.error('Error loading persona:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-navigator', {
        body: { userInput }
      });

      if (error) throw error;
      
      setSolution(data);
      onSolutionFound(data);
    } catch (error) {
      console.error('Error finding solution:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exploreCards = [
    {
      title: "For Personal Planners",
      description: "Transform chaotic group planning into beautiful shared adventures",
      target: "#personal-planners"
    },
    {
      title: "For Brand Managers", 
      description: "Prove experiential marketing ROI with real-time data and insights",
      target: "#brand-managers"
    },
    {
      title: "For Event Professionals",
      description: "Streamline operations with comprehensive event management tools",
      target: "#event-professionals"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] py-8">
      {/* Left Panel - AI Navigator */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold text-foreground">
              Let's find your solution
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your challenge and we'll connect you with the perfect solution from our ecosystem
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center space-y-4"
              >
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Finding your perfect fit...</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Input
                  type="text"
                  placeholder="Describe your challenge or role..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="text-lg p-6"
                />
                <Button type="submit" size="lg" className="w-full">
                  Find My Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Panel - Explorer/Solution */}
      <div className="bg-background flex items-center justify-center p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {solution ? (
            <motion.div
              key="solution"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg w-full space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  {solution.persona}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {solution.pain_point_headline}
                </p>
              </div>

              {solution.story_flow && (
                <div className="space-y-4">
                  {solution.story_flow.map((step: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index }}
                      className="p-4 bg-muted/50 rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.narrative.split(step.highlight).map((part: string, i: number) => (
                          <span key={i}>
                            {part}
                            {i < step.narrative.split(step.highlight).length - 1 && (
                              <span className="bg-primary/10 text-primary px-1 rounded font-medium">
                                {step.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              <Button size="lg" className="w-full">
                {solution.cta_text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="explore"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg w-full space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Explore the Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover how our solutions transform challenges into opportunities
                </p>
              </div>

              <div className="space-y-4">
                {exploreCards.map((card, index) => (
                  <motion.a
                    key={index}
                    href={card.target}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                    <ArrowRight className="mt-3 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};