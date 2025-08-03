import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import { supabase } from '../../integrations/supabase/client';
import './SharedDossier.css';

const KitoDossier = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Brand.', 'Nonprofit.', 'Business.', 'Launch.'];
  
  // Form state
  const [formData, setFormData] = useState({
    businessType: 'Small Business',
    location: '',
    challenge: 'Brand Awareness'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [clarifyingQuestion, setClarifyingQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [playbook, setPlaybook] = useState(null);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGeneratePlaybook = async () => {
    if (!formData.location.trim()) {
      alert('Please enter your location');
      return;
    }

    setIsGenerating(true);
    try {
      // Step 1: Get clarifying question
      const { data, error } = await supabase.functions.invoke('ai-playbook-architect', {
        body: {
          user_type: formData.businessType,
          location: formData.location,
          challenge: formData.challenge
        }
      });

      if (error) throw error;
      
      if (data.clarifying_question) {
        setClarifyingQuestion(data.clarifying_question);
      } else {
        setPlaybook(data);
      }
    } catch (error) {
      console.error('Error generating playbook:', error);
      alert('Failed to generate playbook. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAnswerSelection = async (answer) => {
    setSelectedAnswer(answer);
    setIsGenerating(true);
    
    try {
      // Step 2: Generate full playbook with the clarifying answer
      const { data, error } = await supabase.functions.invoke('ai-playbook-architect', {
        body: {
          user_type: formData.businessType,
          location: formData.location,
          challenge: formData.challenge,
          clarifying_answer: answer
        }
      });

      if (error) throw error;
      setPlaybook(data);
      setClarifyingQuestion(null); // Hide the clarifying question
    } catch (error) {
      console.error('Error generating playbook:', error);
      alert('Failed to generate playbook. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

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
                <select 
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
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
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                />
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <label className="block text-sm font-medium text-gray-300 mb-2">Challenge</label>
                <select 
                  value={formData.challenge}
                  onChange={(e) => handleInputChange('challenge', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  <option>Brand Awareness</option>
                  <option>Lead Generation</option>
                  <option>Event Promotion</option>
                  <option>More Sales/Revenue</option>
                  <option>Customer Traffic</option>
                </select>
              </div>
            </div>
            <button 
              onClick={handleGeneratePlaybook}
              disabled={isGenerating}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Campaign Playbook'}
            </button>
          </div>
        </motion.div>

        {clarifyingQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="architect-tool glass-card w-full max-w-2xl mt-8"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">One Quick Question</h3>
              <p className="text-gray-300 mb-6">{clarifyingQuestion.question}</p>
              <div className="space-y-3">
                {clarifyingQuestion.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(choice)}
                    disabled={isGenerating}
                    className="w-full p-4 text-left bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-white">{choice}</span>
                  </button>
                ))}
              </div>
            </div>
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
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Your Campaign Playbook</h3>
              <div className="space-y-6 text-gray-300">
                {playbook.playbook && (
                  <div className="space-y-8">
                    {/* Strategy Section */}
                    <div>
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Strategy</h4>
                      <p className="text-gray-300 mb-4">{playbook.playbook.strategy?.core_approach}</p>
                      {playbook.playbook.strategy?.key_insights && (
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                          {playbook.playbook.strategy.key_insights.map((insight, index) => (
                            <li key={index}>{insight}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Tactics Section */}
                    {playbook.playbook.tactics && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Tactics</h4>
                        <div className="space-y-4">
                          {playbook.playbook.tactics.map((tactic, index) => (
                            <div key={index} className="bg-gray-800/30 p-4 rounded-lg">
                              <h5 className="font-semibold text-white mb-2">{tactic.name}</h5>
                              <p className="text-gray-300 mb-2">{tactic.description}</p>
                              <p className="text-gray-400 text-sm mb-2"><strong>Implementation:</strong> {tactic.implementation}</p>
                              <p className="text-emerald-300 text-sm"><strong>Why this works:</strong> {tactic.why_this_works}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact Section */}
                    {playbook.playbook.impact && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Expected Impact</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-white mb-2">Immediate Outcomes</h5>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                              {playbook.playbook.impact.immediate_outcomes?.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-white mb-2">Long-term Benefits</h5>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                              {playbook.playbook.impact.long_term_benefits?.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Investment Section */}
                    {playbook.playbook.investment && (
                      <div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Investment</h4>
                        <div className="bg-gray-800/30 p-4 rounded-lg space-y-2">
                          <p><strong className="text-white">Budget Range:</strong> <span className="text-gray-300">{playbook.playbook.investment.budget_range}</span></p>
                          <p><strong className="text-white">Timeline:</strong> <span className="text-gray-300">{playbook.playbook.investment.timeline}</span></p>
                          <p><strong className="text-white">ROI Expectation:</strong> <span className="text-gray-300">{playbook.playbook.investment.roi_expectation}</span></p>
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