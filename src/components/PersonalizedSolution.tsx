import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface PersonalizedSolutionProps {
  solution: any;
}

export const PersonalizedSolution = ({ solution }: PersonalizedSolutionProps) => {
  console.log('PersonalizedSolution rendering with:', solution);

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
    </div>
  );
};