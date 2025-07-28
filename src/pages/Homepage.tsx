import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
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
            {/* Full-Screen Split Hero */}
            <div className="h-screen relative">
              {/* Split Screen Hero Content */}
              <div className="flex h-full">
                {/* Left Panel - escapade */}
                <div className="w-1/2 relative">
                  <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center text-white relative"
                       style={{ 
                         background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #7c3aed 100%)"
                       }}>
                    {/* Animated Landscape Background */}
                    <AnimatedLandscape />
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 max-w-md">
                      <Compass className="w-12 h-12 mb-6 mx-auto text-white" />
                      <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Your next adventure starts now.
                      </h1>
                      <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                        escapade™, our new app for planning trips with your crew, is now live in beta. 
                        Stop dreaming, start authoring.
                      </p>
                      <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <span className="flex items-center gap-2">
                          Join the Escapade™
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Panel - EventOS */}
                <div className="w-1/2 relative">
                  <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center text-white relative border-l border-gray-700"
                       style={{ 
                         background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
                       }}>
                    {/* Professional Tech Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900">
                      {/* Data visualization patterns */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-gray-600/30 rounded-lg rotate-12 animate-pulse"></div>
                        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-600/20 rounded-full animate-pulse delay-700"></div>
                        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gray-600/10 rounded-lg rotate-45 animate-pulse delay-300"></div>
                        
                        {/* Grid pattern */}
                        <div className="absolute inset-4 opacity-10">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 max-w-md">
                      <BarChart3 className="w-12 h-12 mb-6 mx-auto text-gray-300" />
                      <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        The Operating System for Experiential Marketing.
                      </h1>
                      <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                        CrowdLogic's EventOS™ platform unifies staffing, campaigns, and attendees into a single, 
                        intelligent ecosystem. Built for brands and agencies who demand results.
                      </p>
                      <button 
                        onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group border-2 border-gray-400/30 text-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-400/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="flex items-center gap-2">
                          Explore the Platform
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Nexus Button - Centered on dividing line */}
              <NexusButton onClick={() => setIsAIModalOpen(true)} />
            </div>
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