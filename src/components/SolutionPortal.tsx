import { PersonalizedSolution } from "./PersonalizedSolution";
import { EcosystemOverview } from "./EcosystemOverview";

interface SolutionPortalProps {
  solution: any;
}

export const SolutionPortal = ({ solution }: SolutionPortalProps) => {
  return (
    <div className="grid grid-rows-[65vh_35vh] h-screen">
      {/* Top Section: PersonalizedSolution */}
      <PersonalizedSolution solution={solution} />
      
      {/* Bottom Section: EcosystemOverview */}
      <EcosystemOverview />
    </div>
  );
};