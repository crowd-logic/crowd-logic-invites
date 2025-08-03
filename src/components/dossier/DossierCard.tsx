import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DossierCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const DossierCard = ({ children, className = "", delay = 0 }: DossierCardProps) => {
  return (
    <motion.div
      className={`glass-card rounded-lg p-8 architect-transition hover:border-accent-emerald/30 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
};