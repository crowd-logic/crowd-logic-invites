import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ProductShowcaseProps {
  solutionProducts: Array<{
    name: string;
    description: string;
    icon?: string;
  }>;
}

export const ProductShowcase = ({ solutionProducts }: ProductShowcaseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isEscapade = solutionProducts?.some(product => 
    product.name.toLowerCase().includes('escapade')
  );

  // Auto-advance slides for EventOS products
  useEffect(() => {
    if (!isEscapade && solutionProducts?.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % solutionProducts.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isEscapade, solutionProducts?.length]);

  if (isEscapade) {
    return (
      <div className="h-full bg-emerald-600 flex items-center justify-center p-8">
        <div className="relative">
          {/* Phone Mockup */}
          <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* Phone Screen Content */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-3 pb-2">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <motion.div 
                  className="px-6 py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-2xl font-bold text-gray-900 mb-6">escapade</h1>
                  
                  {/* Animated Features */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-gray-800 mb-2">The Stash</h3>
                      <p className="text-sm text-gray-600">Save inspiration from anywhere</p>
                    </div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">Idea Bucket</h3>
                      <p className="text-sm text-gray-600">Share with your crew</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">Itinerary & Map</h3>
                      <p className="text-sm text-gray-600">Your perfect adventure</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // EventOS/Other products carousel
  return (
    <div className="h-full bg-emerald-600 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-emerald-600">
                {solutionProducts?.[currentSlide]?.icon || '🚀'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {solutionProducts?.[currentSlide]?.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {solutionProducts?.[currentSlide]?.description}
            </p>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        {solutionProducts && solutionProducts.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {solutionProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};