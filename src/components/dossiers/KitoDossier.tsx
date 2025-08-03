import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Sparkles, Store, Globe, ShoppingCart, Calendar, ArrowRight } from 'lucide-react';
import { supabase } from '../../integrations/supabase/client';
import './SharedDossier.css';

interface KitoDossierProps {
  isVisible?: boolean;
}

const KitoDossier: React.FC<KitoDossierProps> = ({ isVisible = true }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Brand.', 'Nonprofit.', 'Business.', 'Launch.'];
  
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<string | null>(null);
  const [distribution, setDistribution] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [challenge, setChallenge] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [playbook, setPlaybook] = useState<any>(null);
  const [error, setError] = useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
    if (type === 'A Nonprofit') {
      setStep(3); // Nonprofits skip the distribution question
    } else {
      setStep(2);
    }
  };

  const handleDistributionSelect = (dist: string) => {
    setDistribution(dist);
    setStep(3);
  };

  const handleGeneratePlaybook = async () => {
    setIsLoading(true);
    setPlaybook(null);
    setError('');
    
    try {
      const { data, error: functionError } = await supabase.functions.invoke('ai-playbook-architect', {
        body: {
          user_type: userType,
          distribution_model: distribution,
          location: location,
          challenge: challenge
        }
      });

      if (functionError) throw functionError;
      if (data.error) throw new Error(data.error);
      
      setPlaybook(data);

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate playbook');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setUserType(null);
    setDistribution(null);
    setLocation('');
    setChallenge('');
    setPlaybook(null);
    setError('');
  };

  const userTypeOptions = [
    { id: 'A Local Business', label: 'A Local Business', icon: Store },
    { id: 'A Nonprofit', label: 'A Nonprofit', icon: Users },
    { id: 'A Product Creator', label: 'A Product Creator', icon: Sparkles }
  ];

  const distributionOptions = [
    { id: 'physical_location', label: 'At My Physical Location', icon: Store },
    { id: 'in_retail_stores', label: 'In Retail Stores', icon: ShoppingCart },
    { id: 'online_only', label: 'Online Only', icon: Globe },
    { id: 'at_events', label: 'At Events & Markets', icon: Calendar }
  ];

  return (
    <div 
      className={`dossier-wrapper ${isVisible ? 'visible' : ''}`}
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
              {/* Step 1: User Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Step 1: Tell us who you are</h4>
                    <p className="text-gray-300 text-sm">Choose the option that best describes you</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {userTypeOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleUserTypeSelect(option.id)}
                          className={`flex items-center p-4 border rounded-lg transition-all duration-300 group ${
                            userType === option.id 
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                              : 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:border-emerald-500 text-white'
                          }`}
                        >
                          <IconComponent className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{option.label}</span>
                          <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Distribution Model (conditional) */}
              {step >= 2 && userType !== 'A Nonprofit' && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Step 2: Where do you connect with customers?</h4>
                    <p className="text-gray-300 text-sm">Choose your primary connection point</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {distributionOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleDistributionSelect(option.id)}
                          className={`flex items-center p-4 border rounded-lg transition-all duration-300 group ${
                            distribution === option.id 
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                              : 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:border-emerald-500 text-white'
                          }`}
                        >
                          <IconComponent className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{option.label}</span>
                          <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setStep(1)}
                    className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                  >
                    ← Back
                  </button>
                </motion.div>
              )}

              {/* Step 3: Location & Challenge */}
              {step >= 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    {/* Conditional Location Input */}
                    {distribution === 'physical_location' && (
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-2">Step 3: Where is your community?</h4>
                        <input 
                          type="text" 
                          placeholder="e.g., 'Brooklyn, NY' or '90210'"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    )}
                    
                    {/* Challenge Input */}
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                        {distribution === 'physical_location' ? 'Step 4' : 'Step 3'}: What is your biggest challenge or goal?
                      </h4>
                      <textarea
                        placeholder="In your own words, e.g., 'I need more foot traffic,' or 'I'm launching a new skincare line...'"
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => userType === 'A Nonprofit' ? setStep(1) : setStep(2)}
                      className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
                    >
                      ← Back
                    </button>
                    
                    <button
                      onClick={handleGeneratePlaybook}
                      disabled={isLoading || !challenge.trim() || (distribution === 'physical_location' && !location.trim())}
                      className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Building Your Playbook...' : 'Build My Playbook'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Playbook Results */}
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
                          {playbook.playbook.opportunities.map((opportunity: string, index: number) => (
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