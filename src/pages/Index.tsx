
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { PersistentAIBar } from "@/components/PersistentAIBar";
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
    
    // Simulate loading delay for the spinning animation
    setTimeout(() => {
      setSolution(newSolution);
      setIsLoading(false);
    }, 2000);
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
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Persistent AI Bar - always visible below navigation */}
      <PersistentAIBar 
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
      
      {/* Main Content */}
      <div>
        <Hero 
          isLoading={isLoading}
          solution={solution}
          onNexusClick={() => console.log('Nexus clicked - but AI bar should handle input')}
          onSignupClick={() => setIsSignupModalOpen(true)}
          onBack={handleBackToHero}
        />
        
        {/* Ecosystem Overview - always visible */}
        <EcosystemOverview />
        
        {/* Additional sections when no solution is active */}
        {!solution && !isLoading && (
          <>
            <Vision />
            <Services />
            <Founder />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
