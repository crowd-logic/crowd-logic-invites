import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AINavigator } from "@/components/AINavigator";
import { SolutionDashboard } from "@/components/SolutionDashboard";
import { EcosystemOverview } from "@/components/EcosystemOverview";

const Homepage = () => {
  const [uiState, setUiState] = useState<'navigator' | 'dashboard'>('navigator');
  const [solution, setSolution] = useState<any>(null);

  const handleSolutionFound = (solutionData: any) => {
    setSolution(solutionData);
    setUiState('dashboard');
  };

  const handleStartOver = () => {
    setSolution(null);
    setUiState('navigator');
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {uiState === 'navigator' && (
          <motion.div key="navigator">
            <AINavigator onSolutionFound={handleSolutionFound} />
            <EcosystemOverview />
          </motion.div>
        )}
        {uiState === 'dashboard' && solution && (
          <SolutionDashboard solution={solution} onStartOver={handleStartOver} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;