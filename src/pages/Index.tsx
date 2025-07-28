
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import { AINavigator } from "@/components/AINavigator";
import { PersonalizedSolution } from "@/components/PersonalizedSolution";
import { Vision } from "@/components/Vision";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";

const Index = () => {
  const [solution, setSolution] = useState(null);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [chatResponse, setChatResponse] = useState<string>('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

  const handleSolutionFound = (newSolution: any) => {
    console.log('Solution found:', newSolution); // Debug log
    setSolution(newSolution);
  };

  const handleBackToInput = () => {
    setSolution(null);
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
        isVisible={!!solution}
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
        <PersonalizedSolution solution={solution} />
      ) : (
        <div className="pt-20">
          <Hero />
          {!solution && (
            <AINavigator onSolutionFound={handleSolutionFound} />
          )}
          <Vision />
          <Services />
          <Founder />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Index;
