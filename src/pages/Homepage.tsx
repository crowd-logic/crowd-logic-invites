import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InteractiveAIPortal } from "@/components/InteractiveAIPortal";
import { EcosystemOverview } from "@/components/EcosystemOverview";

const Homepage = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Signup Modal */}
      <Dialog open={isSignupModalOpen} onOpenChange={setIsSignupModalOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          <iframe
            src="https://escapadeapp.accesscrowdlogic.com/auth"
            className="w-full h-full rounded-lg"
            title="Escapade Sign Up"
          />
        </DialogContent>
      </Dialog>
      
      <div className="pt-20">
        {/* Interactive AI Portal - Top Section */}
        <InteractiveAIPortal onSignupClick={() => setIsSignupModalOpen(true)} />
        
        {/* Ecosystem Overview - Bottom Section (Always Visible) */}
        <EcosystemOverview />
      </div>
    </div>
  );
};

export default Homepage;