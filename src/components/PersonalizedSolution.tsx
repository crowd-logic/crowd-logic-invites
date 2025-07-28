import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";

interface PersonalizedSolutionProps {
  solution: any;
  onSignupClick: () => void;
  onBack: () => void;
}

export const PersonalizedSolution = ({ solution, onSignupClick, onBack }: PersonalizedSolutionProps) => {
  return (
    <div className="h-screen flex">
      {/* Left Panel - Product Showcase */}
      <div className="w-1/2 h-full">
        <ProductShowcase solution={solution} />
      </div>
      
      {/* Right Panel - Personalized Blueprint */}
      <div className="w-1/2 h-full">
        <PersonalizedBlueprint 
          solution={solution} 
          onSignupClick={onSignupClick}
          onBack={onBack}
        />
      </div>
    </div>
  );
};