import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DossierLayoutProps {
  children: ReactNode;
  gradientClass: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

export const DossierLayout = ({ 
  children, 
  gradientClass, 
  title, 
  subtitle, 
  icon 
}: DossierLayoutProps) => {
  return (
    <div className={`min-h-screen ${gradientClass} relative overflow-hidden`}>
      {/* Architectural grid overlay */}
      <div className="absolute inset-0 blueprint-grid" />
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen p-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <motion.header 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {icon && (
              <motion.div 
                className="mb-8 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="emerald-glow-strong">
                  {icon}
                </div>
              </motion.div>
            )}
            
            <motion.h1 
              className="dossier-title mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="dossier-subtitle max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          </motion.header>

          {/* Main content */}
          <motion.main
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
};