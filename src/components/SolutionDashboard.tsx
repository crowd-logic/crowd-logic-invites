import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SolutionDashboardProps {
  solution: any;
  onStartOver: () => void;
}

export const SolutionDashboard = ({ solution, onStartOver }: SolutionDashboardProps) => {
  const [activeChapter, setActiveChapter] = useState('personaConfirmation');

  const chapters = [
    { key: 'personaConfirmation', label: 'Your Profile' },
    { key: 'solutionProducts', label: 'Your Solution' },
    { key: 'dynamicCaseStudy', label: 'Case Study' },
    { key: 'keyFeatures', label: 'Key Features' },
    { key: 'cta', label: 'Get Started' }
  ];

  const renderContent = () => {
    const content = solution[activeChapter];
    
    switch (activeChapter) {
      case 'personaConfirmation':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{content?.title}</h2>
            <p className="text-xl text-muted-foreground">{content?.challenge}</p>
          </div>
        );
      
      case 'solutionProducts':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">Your Solution Stack</h2>
            <div className="space-y-6">
              {content?.map((product: any, index: number) => (
                <motion.div
                  key={index}
                  className="p-6 border border-border rounded-lg bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-primary">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'dynamicCaseStudy':
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{content?.title}</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Scenario</h4>
                <p className="text-muted-foreground">{content?.scenario}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Solution</h4>
                <p className="text-muted-foreground">{content?.solution}</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Result</h4>
                <p className="text-foreground">{content?.result}</p>
              </div>
            </div>
          </div>
        );
      
      case 'keyFeatures':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">Key Features</h2>
            <div className="space-y-6">
              {content?.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 border border-border rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.feature}</h4>
                    <p className="text-muted-foreground">{feature.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      case 'cta':
        return (
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-foreground">{content?.headline}</h2>
            <Button 
              size="lg"
              className="px-12 py-6 text-lg bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
            >
              {content?.buttonText}
            </Button>
          </div>
        );
      
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <motion.div 
      className="h-screen flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Start Over Button */}
      <motion.button
        onClick={onStartOver}
        className="absolute top-6 right-6 z-50 px-4 py-2 text-sm bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:bg-background/90 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Start Over
      </motion.button>

      {/* Left Sidebar */}
      <motion.div 
        className="w-1/4 bg-muted/30 border-r border-border p-6 sticky top-0 h-screen overflow-y-auto"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-lg font-semibold mb-6 text-foreground">Dashboard</h3>
        <nav className="space-y-2">
          {chapters.map((chapter) => (
            <button
              key={chapter.key}
              onClick={() => setActiveChapter(chapter.key)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                activeChapter === chapter.key 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {chapter.label}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Right Content Area */}
      <motion.div 
        className="w-3/4 p-12 overflow-y-auto"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};