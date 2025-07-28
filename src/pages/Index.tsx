
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import { AINavigator } from "@/components/AINavigator";
import { SolutionBlueprint } from "@/components/SolutionBlueprint";
import { Vision } from "@/components/Vision";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";

const Index = () => {
  const [solution, setSolution] = useState(null);
  const [showInputSection, setShowInputSection] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [chatResponse, setChatResponse] = useState<string>('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

  const handleSolutionFound = (newSolution: any) => {
    setSolution(newSolution);
    setShowInputSection(false);
  };

  const handleBackToInput = () => {
    setSolution(null);
    setShowInputSection(true);
  };

  const handleChatResponse = (response: string) => {
    setChatResponse(response);
    setIsResponseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Persistent Chat Bar - appears after solution is found */}
      <PersistentChatBar 
        isVisible={!!solution && !showInputSection}
        originalSolution={solution}
        onResponse={handleChatResponse}
      />
      
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

      {/* Chat Response Modal */}
      <ChatResponseModal 
        isOpen={isResponseModalOpen}
        onClose={() => setIsResponseModalOpen(false)}
        response={chatResponse}
      />
      
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
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    What's your next mission?
                  </h1>
                  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                    Every great achievement starts with understanding the challenge. 
                    Tell us about your world, and we'll craft your perfect solution.
                  </p>
                  <AINavigator onSolutionFound={handleSolutionFound} />
                </div>
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
