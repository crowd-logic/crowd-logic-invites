import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface StoryStep {
  step: number;
  text: string;
  image?: string;
}

interface StoryFlipbookProps {
  story: {
    userFlow: StoryStep[];
    title?: string;
  };
  onStartOver: () => void;
}

export const StoryFlipbook = ({ story, onStartOver }: StoryFlipbookProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = story.userFlow || [];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4">Your Personalized Journey</h2>
          <p className="text-xl text-muted-foreground">
            Here's how this solution transforms your workflow
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Story Card */}
          <Card className="min-h-[400px] overflow-hidden">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="p-12 text-center"
                >
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                    <h3 className="text-2xl font-semibold mb-6 leading-relaxed">
                      {steps[currentStep]?.text}
                    </h3>
                  </div>
                  
                  {/* Placeholder for story visualization */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={steps.length <= 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Step Indicators */}
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStep
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextStep}
              disabled={steps.length <= 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Start Over Button */}
          <div className="text-center mt-12">
            <Button
              variant="ghost"
              onClick={onStartOver}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              Try a different solution
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};