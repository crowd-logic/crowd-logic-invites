import { motion } from "framer-motion";
import { ProductShowcase } from "./ProductShowcase";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SolutionDossierProps {
  solution: any;
  onSignupClick: () => void;
  onBack: () => void;
}

export const SolutionDossier = ({ solution, onSignupClick, onBack }: SolutionDossierProps) => {
  return (
    <motion.div 
      className="min-h-screen bg-background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Column - The "Anchor" (Visuals) */}
      <motion.div 
        className="w-1/2 h-screen sticky top-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="h-full flex items-center justify-center p-8">
          <ProductShowcase solution={solution} />
        </div>
      </motion.div>
      
      {/* Right Column - The "Intelligence" (Scrollable Content) */}
      <motion.div 
        className="w-1/2 h-screen overflow-y-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="p-8 lg:p-12 space-y-8">
          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors font-inter"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Navigator</span>
          </motion.button>

          {/* Persona Confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-lora">
              {solution?.persona || "Your Solution"}
            </h1>
            <p className="text-xl text-primary font-semibold font-inter">
              {solution?.painPointHeadline || "Tailored for your needs"}
            </p>
          </motion.div>

          {/* Case Study Section */}
          {solution?.caseStudy && (
            <motion.section
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-foreground font-lora">Case Study</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-card-foreground leading-relaxed font-inter">
                  {solution.caseStudy}
                </p>
              </div>
            </motion.section>
          )}

          {/* Journey to Success */}
          {solution?.journey && (
            <motion.section
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-2xl font-semibold text-foreground font-lora">Your Journey to Success</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-card-foreground leading-relaxed font-inter">
                  {solution.journey}
                </p>
              </div>
            </motion.section>
          )}

          {/* Solution Stack */}
          {solution?.products && (
            <motion.section
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 className="text-2xl font-semibold text-foreground font-lora">Your Solution Stack</h2>
              <div className="space-y-4">
                {solution.products.map((product: any, index: number) => (
                  <motion.div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
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

          {/* Features */}
          {solution?.keyFeatures && (
            <motion.section
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <h2 className="text-2xl font-semibold text-foreground font-lora">Key Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {solution.keyFeatures.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 bg-card border border-border rounded-lg p-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-card-foreground font-inter">{feature}</p>
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
            transition={{ delay: 1.8 }}
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
                Get Started Now
              </Button>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
};