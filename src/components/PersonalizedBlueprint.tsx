import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PersonalizedBlueprintProps {
  solution: any;
  onSignupClick: () => void;
  onBack: () => void;
}

export const PersonalizedBlueprint = ({ solution, onSignupClick, onBack }: PersonalizedBlueprintProps) => {
  const caseStudy = solution?.case_study;

  return (
    <div className="h-full overflow-y-auto p-8 lg:p-12 space-y-8 bg-background">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors font-inter"
        whileHover={{ x: -5 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Nexus</span>
      </motion.button>

      {/* Persona Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-lora">
          {solution?.persona || "Your Solution"}
        </h1>
        <p className="text-xl text-primary font-semibold font-inter">
          {solution?.painPointHeadline || solution?.pain_point_headline || "Tailored for your needs"}
        </p>
      </motion.div>

      {/* Case Study Section */}
      {caseStudy && (
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-foreground font-lora">Case Study</h2>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Scenario</h4>
              <p className="text-muted-foreground">{caseStudy.scenario}</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Solution</h4>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Result</h4>
              <p className="text-foreground">{caseStudy.result}</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Journey to Success */}
      {solution?.user_journey_raw && (
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-foreground font-lora">Your Journey to Success</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-card-foreground leading-relaxed font-inter whitespace-pre-line">
              {solution.user_journey_raw}
            </p>
          </div>
        </motion.section>
      )}

      {/* Solution Stack */}
      {solution?.solution_products && (
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-foreground font-lora">Your Solution Stack</h2>
          <div className="space-y-4">
            {Object.entries(solution.solution_products).map(([key, product]: [string, any], index) => (
              <motion.div
                key={key}
                className="bg-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2 font-lora">
                  {product.name}
                </h3>
                <p className="text-card-foreground font-inter">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        className="space-y-6 pt-8 border-t border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-lora">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6 font-inter">
            Join thousands of users who have transformed their workflows with CrowdLogic.
          </p>
          <Button
            onClick={onSignupClick}
            className="bg-accent text-accent-foreground px-8 py-4 text-lg font-semibold hover:bg-accent/90 transition-all duration-300 font-inter"
          >
            {solution?.cta_text || "Get Started Now"}
          </Button>
        </div>
      </motion.section>
    </div>
  );
};