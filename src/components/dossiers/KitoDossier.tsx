import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import './SharedDossier.css';

const KitoDossier = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Brand.', 'Nonprofit.', 'Business.', 'Launch.'];
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="dossier-wrapper visible" 
      style={{ background: 'radial-gradient(circle at 0% 100%, rgba(0, 155, 119, 0.1), #1A1A1A 40%)' }}
    >
      <div className="dossier-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Users className="dossier-icon" />
        </motion.div>
        
        <motion.h1 
          className="dossier-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build a Street Team for Your{' '}
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-emerald-400"
          >
            {words[currentWord]}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="dossier-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Demystify the power of Brand Ambassadors. Get a custom, location-aware campaign playbook in 60 seconds.
        </motion.p>
        
        <motion.div 
          className="architect-tool glass-card w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">AI Campaign Architect</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white">
                  <option>Small Business</option>
                  <option>Nonprofit</option>
                  <option>Startup</option>
                </select>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input 
                  type="text" 
                  placeholder="City, State"
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                />
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <label className="block text-sm font-medium text-gray-300 mb-2">Challenge</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white">
                  <option>Brand Awareness</option>
                  <option>Lead Generation</option>
                  <option>Event Promotion</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300">
              Generate Campaign Playbook
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KitoDossier;