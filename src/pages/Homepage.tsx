import { useState } from "react";
import { AINavigator } from "@/components/AINavigator";
import { SolutionPortal } from "@/components/SolutionPortal";

const Homepage = () => {
  const [solution, setSolution] = useState<any>(null);

  return (
    <>
      {!solution ? (
        <AINavigator onSolutionFound={setSolution} />
      ) : (
        <SolutionPortal solution={solution} />
      )}
    </>
  );
};

export default Homepage;