import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface PersonalizedSolutionProps {
  solution: any;
}

export const PersonalizedSolution = ({ solution }: PersonalizedSolutionProps) => {
  console.log('PersonalizedSolution rendering with:', solution);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Let's find your solution
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us about your challenge and we'll connect you with the perfect solution from our ecosystem
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <span className="text-gray-700">i plan group travel</span>
              </div>
              
              <Button 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-medium"
                disabled
              >
                Find My Solution →
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Solution Result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {solution?.persona || 'Personal Trip Planner'}
              </h1>
              <p className="text-gray-600">
                {solution?.pain_point_headline || 'Personalized solution for your needs'}
              </p>
            </div>

            <div className="space-y-6">
              {solution?.story_flow?.map((story: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-gray-700 leading-relaxed"
                >
                  <p>
                    {story.narrative?.split(story.highlight).map((part: string, i: number) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < story.narrative.split(story.highlight).length - 1 && (
                          <span className="font-semibold text-gray-900">
                            {story.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    )) || story.narrative}
                  </p>
                </motion.div>
              )) || (
                <p className="text-gray-700">Loading your personalized solution...</p>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8"
            >
              <Button 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-medium"
                onClick={() => {
                  if (solution?.cta_link && solution.cta_link !== '#contact') {
                    window.open(solution.cta_link, '_blank');
                  }
                }}
              >
                {solution?.cta_text || 'Get Started'} →
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Explore Our Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how our ecosystem transforms challenges into opportunities across different industries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Personal Planners</h3>
              <p className="text-gray-600 text-sm">Individual and group planning solutions</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-600 mb-2">Brand Managers</h3>
              <p className="text-gray-500 text-sm">Professional event and marketing tools</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-600 mb-2">Event Professionals</h3>
              <p className="text-gray-500 text-sm">Enterprise-level event management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};