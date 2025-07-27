import { useState } from "react";
import { AINavigator } from "@/components/AINavigator";
import { SolutionBlueprint } from "@/components/SolutionBlueprint";

const Homepage = () => {
  const [solution, setSolution] = useState(null);

  const handleSolutionFound = (newSolution: any) => {
    console.log('🔄 Homepage: Solution found:', newSolution);
    setSolution(newSolution);
  };

  const handleBackToNavigator = () => {
    setSolution(null);
  };

  return (
    <div className="min-h-screen">
      {solution ? (
        <SolutionBlueprint 
          solution={solution} 
          onBack={handleBackToNavigator}
        />
      ) : (
        <AINavigator onSolutionFound={handleSolutionFound} />
      )}
    </div>
  );
};

export default Homepage;