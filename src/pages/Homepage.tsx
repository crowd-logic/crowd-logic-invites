import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { AINavigator } from "@/components/AINavigator";
import { PersonalizedSolution } from "@/components/PersonalizedSolution";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";
import { motion, AnimatePresence } from "framer-motion";

type UIState = 'hero' | 'solution';

const Homepage = () => {
  const [uiState, setUIState] = useState<UIState>('hero');
  const [solution, setSolution] = useState<any>(null);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [chatResponse, setChatResponse] = useState<string>('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);

  const handleSolutionFound = (newSolution: any) => {
    setSolution(newSolution);
    setIsAIModalOpen(false);
    setUIState('solution');
  };

  const handleBackToHero = () => {
    setUIState('hero');
    setSolution(null);
  };

  const handleChatResponse = (response: string) => {
    setChatResponse(response);
    setIsResponseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Glassmorphism Navigation */}
      <Navigation onSignupClick={() => setIsSignupModalOpen(true)} />
      
      {/* Persistent Chat Bar - Only visible in solution state */}
      <PersistentChatBar 
        isVisible={uiState === 'solution'} 
        originalSolution={solution}
        onResponse={handleChatResponse}
      />
      
      {/* Main Content with State Management */}
      <AnimatePresence mode="wait">
        {uiState === 'hero' ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Full-Screen Split Hero */}
            <div className="h-screen relative">
              <Hero />
              
              {/* Center Overlay Button */}
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Button
                  onClick={() => setIsAIModalOpen(true)}
                  className="pointer-events-auto bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
                >
                  Find Your Solution
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="solution"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="pt-20"
          >
            <PersonalizedSolution
              solution={solution}
              onSignupClick={() => setIsSignupModalOpen(true)}
              onBack={handleBackToHero}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* AI Navigator Modal */}
      <Dialog open={isAIModalOpen} onOpenChange={setIsAIModalOpen}>
        <DialogContent className="max-w-6xl h-[85vh] p-0 border-0">
          <AINavigator onSolutionFound={handleSolutionFound} />
        </DialogContent>
      </Dialog>
      
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
        response={chatResponse}
        isOpen={isResponseModalOpen}
        onClose={() => setIsResponseModalOpen(false)}
      />
    </div>
  );
};

export default Homepage;