import { motion } from "framer-motion";
import { Users, Sparkles, Target } from "lucide-react";

export function FloatingCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Card 1: AI Intelligence */}
      <motion.div
        className="absolute top-20 right-[10%] w-64"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 border border-white/10"
             style={{
               boxShadow: `
                 0px 0.7px 0.7px -0.7px rgba(0, 0, 0, 0.08),
                 0px 1.8px 1.8px -1.3px rgba(0, 0, 0, 0.08),
                 0px 3.6px 3.6px -2px rgba(0, 0, 0, 0.07),
                 0px 6.9px 6.9px -2.7px rgba(0, 0, 0, 0.07),
                 0px 13.6px 13.6px -3.3px rgba(0, 0, 0, 0.05),
                 0px 30px 30px -4px rgba(0, 0, 0, 0.02),
                 inset 0px 3px 1px 0px rgba(255, 255, 255, 0.1)
               `
             }}
        >
          <motion.div
            className="absolute -top-8 -right-8 w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{
              boxShadow: '0px 8px 24px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Sparkles className="w-8 h-8 text-emerald-400" />
          </motion.div>
          <h3 className="text-white/80 font-medium mb-2">AI-Powered Insights</h3>
          <p className="text-white/40 text-sm">Local market intelligence at your fingertips</p>
        </div>
      </motion.div>

      {/* Card 2: User Avatars */}
      <motion.div
        className="absolute bottom-32 left-[15%] w-56"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-4 border border-white/10"
             style={{
               boxShadow: `
                 0px 0.7px 0.7px -0.7px rgba(0, 0, 0, 0.08),
                 0px 1.8px 1.8px -1.3px rgba(0, 0, 0, 0.08),
                 0px 3.6px 3.6px -2px rgba(0, 0, 0, 0.07),
                 0px 6.9px 6.9px -2.7px rgba(0, 0, 0, 0.07),
                 0px 13.6px 13.6px -3.3px rgba(0, 0, 0, 0.05),
                 0px 30px 30px -4px rgba(0, 0, 0, 0.02),
                 inset 0px 3px 1px 0px rgba(255, 255, 255, 0.1)
               `
             }}
        >
          <div className="flex -space-x-2 mb-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white/20"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <p className="text-white/60 text-sm">1,247 campaigns launched</p>
        </div>
      </motion.div>
    </div>
  );
}
