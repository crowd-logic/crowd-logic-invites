import { motion } from "framer-motion";
import { ProductShowcase } from "./ProductShowcase";
import { PersonalizedBlueprint } from "./PersonalizedBlueprint";

interface PersonalizedDashboardProps {
  solution: any;
  onSignupClick: () => void;
  onBack: () => void;
}

export const PersonalizedDashboard = ({ solution, onSignupClick, onBack }: PersonalizedDashboardProps) => {
  return (
    <motion.div 
      className="h-screen flex"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Left Panel - Product Showcase (Emerald Green) */}
      <motion.div 
        className="w-1/2 h-full bg-secondary"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <ProductShowcase solution={solution} />
      </motion.div>
      
      {/* Right Panel - Personalized Blueprint (White) */}
      <motion.div 
        className="w-1/2 h-full bg-background"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <PersonalizedBlueprint 
          solution={solution} 
          onSignupClick={onSignupClick}
          onBack={onBack}
        />
      </motion.div>
    </motion.div>
  );
};