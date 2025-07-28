
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

  console.log('Current solution state:', solution); // Debug log

  const handleSolutionFound = (newSolution: any) => {
    console.log('Solution found:', newSolution); // Debug log
    console.log('Setting solution state...'); // Debug log
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - AI Navigator */}
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Let's find your solution
                </h2>
                <p className="text-emerald-100 text-lg">
                  Tell us about your challenge and we'll connect you with the perfect solution from our ecosystem
                </p>
              </div>
              <AINavigator onSolutionFound={handleSolutionFound} />
            </div>
          </div>

          {/* Right Side - Hero Content */}
          <div className="flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Find your fit in the CrowdLogic ecosystem
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
                From personal trip planning with escapade™ to enterprise-level event logistics with EventOS™, 
                our platform has a solution built for your needs.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
