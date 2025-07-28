import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface QuadrantProps {
  id: string;
  name: string;
  icon: LucideIcon;
  background: string;
  description: string;
  isExpanded: boolean;
  isVisible: boolean;
}

export const Quadrant = ({ 
  id, 
  name, 
  icon: Icon, 
  background, 
  description, 
  isExpanded, 
  isVisible 
}: QuadrantProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-8 text-white overflow-hidden"
      style={{ background }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? (isExpanded ? 2 : 1) : 0.8,
        zIndex: isExpanded ? 10 : 1
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-3/4 w-12 h-12 border border-white/15 rounded-full rotate-45 animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <Icon className="w-16 h-16 mb-6 mx-auto" />
        <h3 className="text-3xl font-bold mb-4">{name}</h3>
        <p className="text-white/90 text-xl leading-relaxed max-w-xs">{description}</p>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};