import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NexusButtonProps {
  onClick: () => void;
}

export const NexusButton = ({ onClick }: NexusButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      {/* Main Nexus Button */}
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-32 h-32 rounded-full bg-black/60 backdrop-blur-md border border-white/30 shadow-lg shadow-white/20 flex items-center justify-center group relative"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(255, 255, 255, 0.2)",
            "0 0 30px rgba(255, 255, 255, 0.3)",
            "0 0 20px rgba(255, 255, 255, 0.2)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* CrowdLogic Logo */}
        <img 
          src="/lovable-uploads/a652dce3-bfe6-44ac-802d-2f1f2148a596.png" 
          alt="CrowdLogic Logo" 
          className="w-20 h-20 object-contain filter brightness-0 invert"
        />
      </motion.button>

      {/* Hover Text */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-white text-lg font-semibold bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              Find Your Fit
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};