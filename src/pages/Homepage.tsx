import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AINavigator } from "@/components/AINavigator";
import { SolutionDashboard } from "@/components/SolutionDashboard";

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
    <AnimatePresence mode="wait">
      {uiState === 'navigator' && (
        <AINavigator onSolutionFound={handleSolutionFound} />
      )}
      {uiState === 'dashboard' && solution && (
        <SolutionDashboard solution={solution} onStartOver={handleStartOver} />
      )}
    </AnimatePresence>
  );
};

export default Homepage;