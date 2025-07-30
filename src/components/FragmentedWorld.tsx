import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, BarChart3, Heart, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FragmentedWorldProps {
  onSolutionFound: (solution: any) => void;
}

export const FragmentedWorld = ({ onSolutionFound }: FragmentedWorldProps) => {
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

      onSolutionFound(data);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const islands = [
    { 
      icon: Users, 
      title: "Staffing", 
      subtitle: "Disconnected teams", 
      position: { top: "20%", left: "15%" } 
    },
    { 
      icon: BarChart3, 
      title: "Reporting", 
      subtitle: "Scattered data", 
      position: { top: "20%", right: "15%" } 
    },
    { 
      icon: Heart, 
      title: "Engagement", 
      subtitle: "Lost connections", 
      position: { bottom: "20%", left: "15%" } 
    },
    { 
      icon: MapPin, 
      title: "Trip Planning", 
      subtitle: "Fragmented tools", 
      position: { bottom: "20%", right: "15%" } 
    },
  ];

  return (
    <div className="h-screen relative overflow-hidden bg-background">
      {/* Sophisticated Data Nebula Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Animated starfield */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Abstract connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M0,300 Q400,100 800,250 T1600,200"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,600 Q600,400 1200,500 T2400,450"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </svg>
      </div>

      {/* The Four Islands */}
      {islands.map((island, index) => (
        <motion.div
          key={island.title}
          className="absolute"
          style={island.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
        >
          <motion.div 
            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 min-w-[200px] text-center shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 hsla(var(--primary), 0.4)",
                  "0 0 0 10px hsla(var(--primary), 0)",
                  "0 0 0 0 hsla(var(--primary), 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <island.icon className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground font-lora mb-1">
              {island.title}
            </h3>
            <p className="text-sm text-muted-foreground font-inter">
              {island.subtitle}
            </p>
          </motion.div>
        </motion.div>
      ))}

      {/* Central AI Prompt */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="max-w-2xl w-full mx-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-lora"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            The world of events is fragmented.
          </motion.h1>

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
                Finding your nexus...
              </motion.p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <motion.p 
                className="text-xl text-muted-foreground mb-8 font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Tell us your biggest challenge.
              </motion.p>
              
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., Our events lack engagement and we can't measure ROI..."
                className="h-14 text-lg px-6 bg-card/50 backdrop-blur-sm border-border/50 text-foreground placeholder-muted-foreground font-inter"
                disabled={isLoading}
              />
              
              <Button 
                type="submit" 
                disabled={isLoading || !userInput.trim()}
                className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-inter font-semibold"
              >
                Find My Nexus
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </div>
  );
};