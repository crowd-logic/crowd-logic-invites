
import FoundersDossier from "@/components/FoundersDossier";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Section: Full-width Spline Scene Container */}
      <div id="spline-container" className="w-full h-screen"></div>
      
      {/* Bottom Section: Content Dossier Container (Initially Hidden) */}
      <div id="dossier-container" className="w-full min-h-screen">
        <FoundersDossier />
      </div>
    </div>
  );
};

export default Index;
