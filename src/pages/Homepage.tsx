import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AINavigator } from "@/components/AINavigator";
import { EcosystemOverview } from "@/components/EcosystemOverview";
import { StoryFlipbook } from "@/components/StoryFlipbook";
import { Navigation } from "@/components/Navigation";
import MotionBackground from "@/components/MotionBackground";

const Homepage = () => {
  const [solution, setSolution] = useState<any>(null);

  const handleSolutionFound = (solutionData: any) => {
    setSolution(solutionData);
  };

  const handleStartOver = () => {
    setSolution(null);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MotionBackground />
      <Navigation />

      <div className="relative z-10">
        {/* Top Section - AI Navigator with constrained height */}
        <div className="min-h-[60vh] flex items-center">
          <AINavigator onSolutionFound={handleSolutionFound} />
        </div>
        
        {/* Bottom Section - Dynamic Content */}
        <AnimatePresence mode="wait">
          {!solution ? (
            <motion.div
              key="ecosystem"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <EcosystemOverview />
            </motion.div>
          ) : (
            <StoryFlipbook 
              key="flipbook"
              story={{
                userFlow: [
                  { step: 1, text: "Identify your specific needs and challenges" },
                  { step: 2, text: "Discover the perfect combination of tools" },
                  { step: 3, text: "Implement your personalized solution" },
                  { step: 4, text: "Track results and optimize your workflow" },
                  { step: 5, text: "Scale your success across your organization" }
                ]
              }} 
              onStartOver={handleStartOver} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Homepage;