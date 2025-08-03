import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DossierSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const DossierSection = ({ title, children, className = "", delay = 0 }: DossierSectionProps) => {
  return (
    <motion.section
      className={`mb-16 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h2 className="dossier-section-title mb-8 dossier-accent">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};