import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, TrendingUp } from "lucide-react";

interface PersonalizedBlueprintProps {
  solution: any;
  onSignupClick: () => void;
  onBack: () => void;
}

export const PersonalizedBlueprint = ({ solution, onSignupClick, onBack }: PersonalizedBlueprintProps) => {
  const caseStudy = solution?.case_study;

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 mb-4 transition-colors"
        >
          ← Back to explorer
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            A Blueprint for the {solution?.persona}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {solution?.pain_point_headline}
          </p>
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-12">
          {/* Case Study Section */}
          {caseStudy && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {caseStudy.title}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-5">
                    {caseStudy.scenario}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-5">
                    {caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    The Outcome
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-5">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Story Flow Section */}
          {solution?.user_journey_raw && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Journey to Success
                </h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {solution.user_journey_raw}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Solution Products */}
          {solution?.solution_products && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Solution Stack
              </h2>
              <div className="grid gap-4">
                {Object.entries(solution.solution_products).map(([key, product]: [string, any], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="p-8 bg-gray-50 border-t border-gray-200"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ready to get started?
            </h3>
            <p className="text-gray-600">
              Join thousands who've revolutionized their workflow
            </p>
          </div>
          <Button
            onClick={onSignupClick}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {solution?.cta_text || "Get Started"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};