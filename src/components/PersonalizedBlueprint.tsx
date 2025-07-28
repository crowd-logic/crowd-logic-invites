import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PersonalizedBlueprintProps {
  solution: {
    persona?: string;
    pain_point_headline?: string;
    story_flow?: Array<{
      narrative: string;
      highlight: string;
    }>;
    case_study?: {
      title: string;
      scenario: string;
      solution: string;
      result: string;
    } | null;
    cta_type?: string;
    cta_text?: string;
    cta_link?: string;
    userFlow?: Array<{
      step: number;
      text: string;
      highlight?: string;
    }>;
    challenge?: string;
    tools?: string;
  };
}

export const PersonalizedBlueprint = ({ solution }: PersonalizedBlueprintProps) => {
  // Safe fallbacks for missing data
  const persona = solution?.persona || "Solutions Expert";
  const painPoint = solution?.pain_point_headline || "Let us help you find the perfect solution";
  const caseStudy = solution?.case_study;
  const ctaText = solution?.cta_text || "Get Started";
  const ctaLink = solution?.cta_link || "#";

  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-600 font-medium uppercase tracking-wide text-sm mb-2">
            Personalized Solution
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {persona}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {painPoint}
          </p>
        </motion.div>

        {/* Case Study - Only render if data exists */}
        {caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {caseStudy.title}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.scenario}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">The Result</h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Story Flow - AI-composed narrative from modular content */}
        {!caseStudy && solution?.story_flow && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Personalized Journey
            </h2>
            
            <div className="space-y-6">
              {solution.story_flow.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed">
                      {step.narrative.split(step.highlight).map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < step.narrative.split(step.highlight).length - 1 && (
                            <span className="bg-emerald-100 text-emerald-800 px-1 rounded font-medium">
                              {step.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* User Journey - Final fallback content */}
        {!caseStudy && !solution?.story_flow && solution?.userFlow && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Journey
            </h2>
            
            <div className="space-y-4">
              {solution.userFlow.map((step: any, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {step.step}
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-1">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-emerald-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands who have already transformed their approach.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => window.open(ctaLink, '_blank')}
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};