import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EmailCapture } from "@/components/EmailCapture";
import { EcosystemOverview } from "@/components/EcosystemOverview";
import { StoryFlipbook } from "@/components/StoryFlipbook";

const Homepage = () => {
  const [solution, setSolution] = useState<any>(null);

  const handleSolutionFound = (solutionData: any) => {
    setSolution(solutionData);
  };

  const handleStartOver = () => {
    setSolution(null);
  };

  return (
    <div className="min-h-screen">
      
      
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

      <div className="py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">Stay in the loop</h2>
          <EmailCapture className="mx-auto max-w-md" placeholder="you@company.com" buttonText="Notify me" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;