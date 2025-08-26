import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Trophy, Sparkle } from "@phosphor-icons/react";

interface ProgressBarProps {
  completed: number; // 0 to 1
  onComplete?: () => void;
}

const milestones = [
  { threshold: 0.25, icon: CheckCircle, label: "Event designed", badge: "Designer" },
  { threshold: 0.5, icon: CheckCircle, label: "Groups added", badge: "Organizer" },
  { threshold: 0.75, icon: CheckCircle, label: "Program created", badge: "Curator" },
  { threshold: 1, icon: Trophy, label: "Ready to share", badge: "Super Organizer" }
];

export default function ProgressBar({ completed, onComplete }: ProgressBarProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  useEffect(() => {
    const newBadges = milestones
      .filter(m => completed >= m.threshold)
      .map(m => m.badge)
      .filter(badge => !earnedBadges.includes(badge));

    if (newBadges.length > 0) {
      setEarnedBadges(prev => [...prev, ...newBadges]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }

    if (completed === 1 && onComplete) {
      onComplete();
    }
  }, [completed, earnedBadges, onComplete]);

  return (
    <div className="relative">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{
                x: Math.random() * 400,
                y: -10,
                opacity: 1,
                scale: 1
              }}
              animate={{
                y: 200,
                opacity: 0,
                scale: 0,
                rotate: 360
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkle className="h-5 w-5 text-primary" />
            <span className="font-semibold text-card-foreground">Setup Progress</span>
          </div>
          <span className="text-sm font-bold text-primary">
            {Math.round(completed * 100)}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative mb-6">
          <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${completed * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Milestone markers */}
          <div className="absolute inset-0 flex justify-between items-center px-1">
            {milestones.map((milestone, index) => {
              const isCompleted = completed >= milestone.threshold;
              const Icon = milestone.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`relative w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary border-primary text-primary-foreground shadow-lg' 
                      : 'bg-background border-muted-foreground/30 text-muted-foreground'
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isCompleted ? 1.1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-3 w-3" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Milestones list */}
        <div className="space-y-2">
          {milestones.map((milestone, index) => {
            const isCompleted = completed >= milestone.threshold;
            const Icon = milestone.icon;
            
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                  isCompleted ? 'bg-primary/10' : 'opacity-60'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className={`h-4 w-4 ${isCompleted ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`text-sm ${isCompleted ? 'text-card-foreground font-medium' : 'text-muted-foreground'}`}>
                  {milestone.label}
                </span>
                {isCompleted && earnedBadges.includes(milestone.badge) && (
                  <motion.span
                    className="ml-auto text-xs bg-gradient-to-r from-primary to-secondary text-primary-foreground px-2 py-1 rounded-full font-bold"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {milestone.badge}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {completed === 1 && (
          <motion.div
            className="mt-4 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-primary font-bold">
              <Trophy className="h-5 w-5" />
              <span>Event Ready! 🎉</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your event looks amazing. Ready to make it real?
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}