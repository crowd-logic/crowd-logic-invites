import { motion } from "framer-motion";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";

interface PersonalizedSolutionProps {
  solution: any;
}

export const PersonalizedSolution = ({ solution }: PersonalizedSolutionProps) => {
  return (
    <div className="flex h-full">
      {/* Left Panel: Product Showcase */}
      <div className="w-1/2 bg-emerald-600">
        <ProductShowcase solutionProducts={solution.solution_products || []} />
      </div>
      
      {/* Right Panel: Blueprint */}
      <div className="w-1/2 bg-white">
        <PersonalizedBlueprint solution={solution} />
      </div>
    </div>
  );
};