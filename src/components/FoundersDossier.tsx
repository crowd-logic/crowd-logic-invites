import { motion } from "framer-motion";

const FoundersDossier = () => {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Left Column - The Artist */}
        <div className="text-center lg:text-right space-y-6">
          <motion.h2 
            className="font-crimson text-4xl font-semibold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Artist
          </motion.h2>
          <motion.h3 
            className="font-crimson text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kito Johori
          </motion.h3>
          <motion.p 
            className="font-inter text-lg text-muted-foreground leading-relaxed max-w-md lg:ml-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A visionary who transforms complex challenges into elegant, human-centered experiences. 
            Where others see problems, Kito sees possibilities for connection and growth.
          </motion.p>
        </div>

        {/* Center Column - Animated Double Helix */}
        <div className="flex justify-center items-center">
          <motion.div
            className="w-64 h-96 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              className="drop-shadow-lg"
              animate={{ rotateY: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Organic Flowing Strand */}
              <motion.path
                d="M100 20 Q140 60 100 100 Q60 140 100 180 Q140 220 100 260 Q60 300 100 340"
                fill="none"
                stroke="hsl(var(--accent-emerald))"
                strokeWidth="3"
                className="drop-shadow-[0_0_8px_hsl(var(--accent-emerald))]"
                style={{
                  filter: "drop-shadow(0 0 8px hsl(var(--accent-emerald)))"
                }}
              />
              
              {/* Clean Architectural Strand */}
              <motion.path
                d="M100 20 Q60 60 100 100 Q140 140 100 180 Q60 220 100 260 Q140 300 100 340"
                fill="none"
                stroke="hsl(var(--accent-emerald))"
                strokeWidth="2"
                className="drop-shadow-[0_0_6px_hsl(var(--accent-emerald))]"
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent-emerald)))"
                }}
              />
              
              {/* Connection Points */}
              <motion.circle
                cx="100" cy="60" r="4"
                fill="hsl(var(--accent-emerald))"
                className="drop-shadow-[0_0_6px_hsl(var(--accent-emerald))]"
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent-emerald)))"
                }}
              />
              <motion.circle
                cx="100" cy="140" r="4"
                fill="hsl(var(--accent-emerald))"
                className="drop-shadow-[0_0_6px_hsl(var(--accent-emerald))]"
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent-emerald)))"
                }}
              />
              <motion.circle
                cx="100" cy="220" r="4"
                fill="hsl(var(--accent-emerald))"
                className="drop-shadow-[0_0_6px_hsl(var(--accent-emerald))]"
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent-emerald)))"
                }}
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Right Column - The Architect */}
        <div className="text-center lg:text-left space-y-6">
          <motion.h2 
            className="font-crimson text-4xl font-semibold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Architect
          </motion.h2>
          <motion.h3 
            className="font-crimson text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Brian Gibbs
          </motion.h3>
          <motion.p 
            className="font-inter text-lg text-muted-foreground leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A strategic builder who constructs systems that scale. Brian transforms vision into 
            sustainable reality, creating the infrastructure that enables dreams to flourish.
          </motion.p>
        </div>
      </div>

      {/* Bottom Section - Our Why */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center max-w-4xl px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="font-crimson text-3xl font-semibold text-foreground mb-6">
          Our Why: We've Been There.
        </h3>
        <p className="font-inter text-lg text-muted-foreground leading-relaxed">
          We've stood in the chaos of event management, felt the frustration of disconnected systems, 
          and witnessed the magic that happens when everything just works. CrowdLogic isn't just our business—
          it's our answer to every sleepless night spent juggling spreadsheets, every moment of panic when 
          systems fail, and every time we've seen brilliant events held back by broken technology. 
          We're building what we needed, what the industry deserves.
        </p>
      </motion.div>
    </div>
  );
};

export default FoundersDossier;