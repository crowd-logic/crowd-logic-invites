
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AINavigator } from "@/components/AINavigator";
import { SolutionDossier } from "@/components/SolutionDossier";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";

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
    <div className="min-h-screen bg-background">
      {/* Main Header */}
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Persistent Chat Bar - appears after solution is found */}
      {solution && (
        <PersistentChatBar 
          isVisible={true}
          originalSolution={solution}
          onResponse={handleChatResponse}
        />
      )}

      {/* Interactive Dossier Experience */}
      <AnimatePresence mode="wait">
        {!solution && !isLoading ? (
          <AINavigator 
            key="navigator"
            onSolutionFound={handleSolutionFound}
          />
        ) : solution && !isLoading ? (
          <SolutionDossier
            key="dossier"
            solution={solution}
            onSignupClick={() => setIsSignupModalOpen(true)}
            onBack={handleBackToHero}
          />
        ) : null}
      </AnimatePresence>

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
