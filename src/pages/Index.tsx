
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Section: Full-width Spline Scene Container */}
      <div id="spline-container" className="w-full h-screen"></div>
      
      {/* Bottom Section: Content Dossier Container (Initially Hidden) */}
      <div id="dossier-container" className="hidden w-full min-h-screen p-8">
        {/* Content will be dynamically populated based on Spline interactions */}
      </div>
    </div>
  );
};

export default Index;
