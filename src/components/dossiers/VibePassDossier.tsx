import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Waves } from 'lucide-react';
import './SharedDossier.css';

const VibePassDossier = () => {
  return (
    <div 
      className="dossier-wrapper visible" 
      style={{ background: 'radial-gradient(circle at 100% 100%, rgba(0, 155, 119, 0.1), #1A1A1A 40%)' }}
    >
      <div className="dossier-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Radio className="dossier-icon" />
        </motion.div>
        
        <motion.h1 
          className="dossier-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Know What Your Audience Truly Loves.
        </motion.h1>
        
        <motion.p 
          className="dossier-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          VibePass is the final piece of the puzzle. It's the upcoming connection to your audience, 
          turning passive attendees into active participants and providing invaluable sentiment data 
          that tells you the story behind the numbers.
        </motion.p>
        
        <motion.div 
          className="nebula-showcase w-full max-w-4xl h-96 mb-8 rounded-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated particle system */}
            <div className="relative w-64 h-64">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 120px',
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "linear"
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Waves className="w-16 h-16 text-emerald-400" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full">
              <span className="text-sm text-emerald-400">Future Vision</span>
            </div>
          </div>
        </motion.div>
        
        <motion.a
          href="#connect"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Early Access Updates
        </motion.a>
      </div>
    </div>
  );
};

export default VibePassDossier;