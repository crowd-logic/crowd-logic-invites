
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SolutionBuilderBar } from "@/components/SolutionBuilderBar";
import { DynamicHero } from "@/components/DynamicHero";
import { Contact } from "@/components/Contact";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";
import { EcosystemOverview } from "@/components/EcosystemOverview";

const Index = () => {
  const [solution, setSolution] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [chatResponse, setChatResponse] = useState<string>('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

  const handleSolutionFound = (newSolution: any) => {
    console.log('Solution found:', newSolution);
    setIsLoading(true);
    
    // Simulate loading delay for smooth animation
    setTimeout(() => {
      setSolution(newSolution);
      setIsLoading(false);
    }, 1500);
  };

  const handleBackToHero = () => {
    setSolution(null);
    setIsLoading(false);
  };

  const handleChatResponse = (response: string) => {
    setChatResponse(response);
    setIsResponseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Main Header */}
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Solution Builder Bar - always visible below header */}
      <SolutionBuilderBar 
        onSolutionFound={handleSolutionFound}
        isLoading={isLoading}
      />
      
      {/* Persistent Chat Bar - appears after solution is found */}
      {solution && (
        <PersistentChatBar 
          isVisible={true}
          originalSolution={solution}
          onResponse={handleChatResponse}
        />
      )}

      {/* Dynamic Hero - transforms based on solution state */}
      <DynamicHero 
        solution={solution}
        isLoading={isLoading}
        onSignupClick={() => setIsSignupModalOpen(true)}
        onBack={handleBackToHero}
      />
      
      {/* Ecosystem Overview - always visible */}
      <EcosystemOverview />
      
      {/* Footer - always visible */}
      {!solution && !isLoading && (
        <Contact />
      )}

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
    </div>
  );
};

export default Index;
