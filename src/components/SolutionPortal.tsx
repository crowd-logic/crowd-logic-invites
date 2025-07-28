import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonalizedSolution } from "./PersonalizedSolution";
import { EcosystemOverview } from "./EcosystemOverview";

interface SolutionPortalProps {
  solution: any;
  onBack: () => void;
  onSignupClick: () => void;
}

export const SolutionPortal = ({ solution, onBack, onSignupClick }: SolutionPortalProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Back Button */}
      <div className="p-4 bg-white border-b border-gray-200">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Navigator
        </Button>
      </div>
      
      {/* Main Content Grid - Adjusted to account for header space */}
      <div className="grid grid-rows-[1fr_auto] flex-1">
        {/* Top Section: PersonalizedSolution */}
        <PersonalizedSolution 
          solution={solution} 
          onSignupClick={onSignupClick}
          onBack={onBack}
        />
        
        {/* Bottom Section: EcosystemOverview */}
        <div className="h-64"> {/* Fixed height for bottom section */}
          <EcosystemOverview />
        </div>
      </div>
    </div>
  );
};