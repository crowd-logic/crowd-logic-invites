import React from 'react';
import { motion } from 'framer-motion';
import { Box, BarChart3, TrendingUp } from 'lucide-react';
import './SharedDossier.css';

const EventAxisDossier = () => {
  return (
    <div 
      className="dossier-wrapper visible" 
      style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0, 155, 119, 0.1), #1A1A1A 40%)' }}
    >
      <div className="dossier-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box className="dossier-icon" />
        </motion.div>
        
        <motion.h1 
          className="dossier-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Campaign's Command Center.
        </motion.h1>
        
        <motion.p 
          className="dossier-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stop guessing. Start knowing. EventAxis is our upcoming platform that connects your event operations, 
          staffing, and real-time audience data into a single, intelligent, unified view.
        </motion.p>
        
        <motion.div 
          className="dashboard-showcase glass-card w-full max-w-4xl h-96 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center h-full relative">
            <div className="grid grid-cols-3 gap-6 w-full max-w-md">
              <motion.div 
                className="text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <BarChart3 className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Analytics</p>
              </motion.div>
              <motion.div 
                className="text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Insights</p>
              </motion.div>
              <motion.div 
                className="text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Box className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Operations</p>
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full">
                <span className="text-sm text-emerald-400">Coming Soon</span>
              </div>
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
          Join the Waitlist
        </motion.a>
      </div>
    </div>
  );
};

export default EventAxisDossier;