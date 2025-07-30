import { motion } from "framer-motion";

interface NexusTransformationProps {
  onComplete: () => void;
}

export const NexusTransformation = ({ onComplete }: NexusTransformationProps) => {
  return (
    <div className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Central Nexus Logo */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => {
          // Start the convergence animation after logo appears
          setTimeout(onComplete, 2000);
        }}
      >
        {/* Pulsing Nexus Circle */}
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 0 0 hsla(var(--primary), 0.6)",
              "0 0 0 20px hsla(var(--primary), 0)",
              "0 0 0 0 hsla(var(--primary), 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Converging Lines Animation */}
        <svg className="absolute inset-0 w-full h-full -z-10">
          {/* Four lines converging to center */}
          <motion.line
            x1="0" y1="0" x2="50%" y2="50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line
            x1="100%" y1="0" x2="50%" y2="50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.line
            x1="0" y1="100%" x2="50%" y2="50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          <motion.line
            x1="100%" y1="100%" x2="50%" y2="50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
        </svg>
      </motion.div>

      {/* Text overlay */}
      <motion.div
        className="absolute bottom-1/4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-2xl text-foreground font-inter">
          Connecting your solution...
        </p>
      </motion.div>
    </div>
  );
};