import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HeroSection } from "@/components/HeroSection";
import { AINavigator } from "@/components/AINavigator";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PersonalizedBlueprint } from "@/components/PersonalizedBlueprint";
import { PersistentChatBar } from "@/components/PersistentChatBar";
import { ChatResponseModal } from "@/components/ChatResponseModal";
import { EcosystemOverview } from "@/components/EcosystemOverview";
import { NexusButton } from "@/components/NexusButton";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, BarChart3 } from "lucide-react";
import { AnimatedLandscape } from "@/components/AnimatedLandscape";

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
      
      {/* Persistent Chat Bar with Connecting Nodes Animation */}
      <AnimatePresence>
        {uiState === 'solution' && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <PersistentChatBar 
                isVisible={true}
                originalSolution={solution}
                onResponse={handleChatResponse}
              />
            </motion.div>
            
            {/* Connecting Nodes Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="fixed top-24 left-0 right-0 z-30 pointer-events-none"
            >
              {/* Left connecting line */}
              <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-purple-400/60 to-transparent animate-pulse"></div>
              {/* Right connecting line */}
              <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-pink-400/60 to-transparent animate-pulse"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
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
            {/* HeroSection with 2x2 Grid */}
            <HeroSection 
              isLoading={false}
              solution={null}
              onNexusClick={() => setIsAIModalOpen(true)}
              onSignupClick={() => setIsSignupModalOpen(true)}
              onBack={handleBackToHero}
            />
          </motion.div>
        ) : (
          <motion.div
            key="solution"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24"
          >
            {/* Transformed Hero - Two Column Layout */}
            <div className="h-screen flex">
              {/* Left Panel - Product Showcase */}
              <motion.div 
                className="w-1/2 h-full"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <ProductShowcase solution={solution} />
              </motion.div>
              
              {/* Right Panel - Personalized Blueprint */}
              <motion.div 
                className="w-1/2 h-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <PersonalizedBlueprint 
                  solution={solution} 
                  onSignupClick={() => setIsSignupModalOpen(true)}
                  onBack={handleBackToHero}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Ecosystem Overview - Always Visible at Bottom */}
      <EcosystemOverview />
      
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