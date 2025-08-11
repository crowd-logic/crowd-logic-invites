
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EmailCapture } from "@/components/EmailCapture";
import { SolutionBlueprint } from "@/components/SolutionBlueprint";
import { Vision } from "@/components/Vision";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [solution, setSolution] = useState(null);
  const [showInputSection, setShowInputSection] = useState(true);

  const handleSolutionFound = (newSolution: any) => {
    setSolution(newSolution);
    setShowInputSection(false);
  };

  const handleBackToInput = () => {
    setSolution(null);
    setShowInputSection(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {solution ? (
        <div className="pt-20">
          <SolutionBlueprint 
            solution={solution} 
            onBack={handleBackToInput}
          />
        </div>
      ) : (
        <>
          {showInputSection && (
            <div className="pt-20 pb-8 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
              <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-semibold text-white mb-3">Get early access</h2>
                <p className="text-white/80 mb-6">Join the waitlist and we'll notify you when case studies are ready.</p>
                <EmailCapture className="mx-auto max-w-md" placeholder="you@company.com" buttonText="Notify me" />
              </div>
            </div>
          )}
          
          <div className="perspective-1000">
            <Hero />
          </div>
          
          <Vision />
          <Services />
          <Founder />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Index;
