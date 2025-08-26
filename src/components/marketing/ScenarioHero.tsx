import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

const scenarios = [
  {
    key: "festival",
    emoji: "🎪",
    name: "Festival",
    description: "Multi-day events with stages and vendors",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    key: "retreat",
    emoji: "🏖️",
    name: "Retreat",
    description: "Team building and offsite experiences",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    key: "conference",
    emoji: "🏢",
    name: "Conference",
    description: "Professional meetings and presentations",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    key: "sports",
    emoji: "🏆",
    name: "Tournament",
    description: "Sports events and competitions",
    color: "from-amber-500/20 to-orange-500/20"
  }
];

export default function ScenarioHero() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [isFloating, setIsFloating] = useState(true);

  return (
    <section className="relative isolate overflow-hidden rounded-xl">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10 backdrop-blur-sm" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ right: "15%", top: "30%" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-center gap-2">
              <Sparkle className="h-4 w-4" />
              Try in 30 seconds
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-foreground leading-tight">
              See your event 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> come to life</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Pick your event type below and watch Escapade create a beautiful, 
              fully-functional event page in seconds. No signup required.
            </p>
          </motion.div>

          {/* Scenario Selection */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {scenarios.map((scenario, index) => (
              <motion.button
                key={scenario.key}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedScenario === scenario.key 
                    ? 'ring-2 ring-primary/50 bg-gradient-to-br ' + scenario.color
                    : 'bg-card/50 hover:bg-card/70'
                }`}
                onClick={() => setSelectedScenario(scenario.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {scenario.emoji}
                </div>
                <h3 className="font-semibold text-card-foreground text-lg mb-2">
                  {scenario.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
                
                {selectedScenario === scenario.key && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/escapade" 
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-primary/20"
            >
              <span className="flex items-center gap-2">
                Start your sandbox
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/escapade/pricing" 
              className="inline-flex items-center justify-center rounded-xl bg-background/70 backdrop-blur px-8 py-4 text-lg font-medium text-foreground border border-border hover:bg-background/90 transition-all duration-300 hover:shadow-lg"
            >
              See pricing
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              No app required
            </div>
            <div className="hidden md:block h-4 w-px bg-border" />
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Try with real data
            </div>
            <div className="hidden md:block h-4 w-px bg-border" />
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Share with team
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}