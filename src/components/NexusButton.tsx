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
        className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-white/20 flex items-center justify-center group relative"
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
        <svg
          className="w-12 h-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L13.09 8.26L19.5 9L13.09 9.74L12 16L10.91 9.74L4.5 9L10.91 8.26L12 2Z"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
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