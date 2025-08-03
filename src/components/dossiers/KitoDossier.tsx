import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Sparkles, ArrowRight, Store, Globe, ShoppingCart, Calendar } from 'lucide-react';
import { supabase } from '../../integrations/supabase/client';
import './SharedDossier.css';

const KitoDossier = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Brand.', 'Nonprofit.', 'Business.', 'Launch.'];
  
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    identity: '',
    distributionModel: '',
    challenge: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [playbook, setPlaybook] = useState(null);

  const identityOptions = [
    { id: 'local_business', label: 'A Local Business', icon: Store },
    { id: 'nonprofit', label: 'A Nonprofit', icon: Users },
    { id: 'product_creator', label: 'A Product Creator', icon: Sparkles }
  ];

  const distributionOptions = [
    { id: 'physical_location', label: 'At my physical location', icon: Store },
    { id: 'online_only', label: 'Online only', icon: Globe },
    { id: 'retail_stores', label: 'In retail stores', icon: ShoppingCart },
    { id: 'events_markets', label: 'At events & markets', icon: Calendar }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleIdentitySelect = (identity) => {
    setFormData(prev => ({ ...prev, identity }));
    
    // If they chose nonprofit, skip distribution step
    if (identity === 'nonprofit') {
      setCurrentStep(3);
    } else {
      setCurrentStep(2);
    }
  };

  const handleDistributionSelect = (distributionModel) => {
    setFormData(prev => ({ ...prev, distributionModel }));
    setCurrentStep(3);
  };

  const handleChallengeSubmit = async () => {
    if (!formData.challenge.trim()) {
      alert('Please describe your challenge or goal');
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-playbook-architect', {
        body: {
          user_type: formData.identity,
          distribution_model: formData.distributionModel,
          challenge: formData.challenge
        }
      });

      if (error) throw error;
      setPlaybook(data);
    } catch (error) {
      console.error('Error generating playbook:', error);
      alert('Failed to generate playbook. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({ identity: '', distributionModel: '', challenge: '' });
    setPlaybook(null);
  };

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

        {!playbook && (
          <motion.div 
            className="architect-tool glass-card w-full max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Guided Conversation</h3>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Identity */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Tell us about yourself</h4>
                    <p className="text-gray-300 text-sm">Step 1 of 3</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {identityOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleIdentitySelect(option.id)}
                          className="flex items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-emerald-500 rounded-lg transition-all duration-300 group"
                        >
                          <IconComponent className="w-6 h-6 text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                          <span className="text-white font-medium">{option.label}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Distribution Model (conditional) */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Where do you connect with your customers?</h4>
                    <p className="text-gray-300 text-sm">Step 2 of 3</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {distributionOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleDistributionSelect(option.id)}
                          className="flex items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-emerald-500 rounded-lg transition-all duration-300 group"
                        >
                          <IconComponent className="w-6 h-6 text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                          <span className="text-white font-medium">{option.label}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                  >
                    ← Back
                  </button>
                </motion.div>
              )}

              {/* Step 3: Challenge */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">In your own words, what is your biggest challenge or goal right now?</h4>
                    <p className="text-gray-300 text-sm">Step 3 of 3</p>
                  </div>
                  
                  <div className="space-y-4">
                    <textarea
                      value={formData.challenge}
                      onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                      placeholder="Describe your challenge, goal, or what you're trying to achieve..."
                      rows={4}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none"
                    />
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => formData.identity === 'nonprofit' ? setCurrentStep(1) : setCurrentStep(2)}
                        className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                      >
                        ← Back
                      </button>
                      
                      <button
                        onClick={handleChallengeSubmit}
                        disabled={isGenerating || !formData.challenge.trim()}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? 'Generating...' : 'Generate Campaign Playbook'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {playbook && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="architect-tool glass-card w-full max-w-4xl mt-8"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-emerald-400">Your Campaign Playbook</h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Start Over
                </button>
              </div>
              
              <div className="space-y-6 text-gray-300">
                {playbook.playbook && (
                  <div className="space-y-8">
                    {/* Strategy Section */}
                    {playbook.playbook.strategy && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Strategy</h4>
                        <p className="text-gray-300">{playbook.playbook.strategy}</p>
                      </div>
                    )}

                    {/* Opportunities Section */}
                    {playbook.playbook.opportunities && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Local Opportunities</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {playbook.playbook.opportunities.map((opportunity, index) => (
                            <li key={index}>{opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Team & Tactics Section */}
                    {playbook.playbook.team_tactics && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Team & Tactics</h4>
                        <p className="text-gray-300">{playbook.playbook.team_tactics}</p>
                      </div>
                    )}

                    {/* Projected Impact Section */}
                    {playbook.playbook.projected_impact && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Projected Impact</h4>
                        <p className="text-gray-300">{playbook.playbook.projected_impact}</p>
                      </div>
                    )}

                    {/* Investment Section */}
                    {playbook.playbook.investment && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Investment</h4>
                        <div className="bg-gray-800/30 p-4 rounded-lg">
                          {typeof playbook.playbook.investment === 'string' ? (
                            <p className="text-gray-300">{playbook.playbook.investment}</p>
                          ) : (
                            <div className="space-y-2">
                              {Object.entries(playbook.playbook.investment).map(([key, value]) => (
                                 <p key={key}>
                                   <strong className="text-white capitalize">{key.replace('_', ' ')}:</strong>{' '}
                                   <span className="text-gray-300">{String(value)}</span>
                                 </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KitoDossier;