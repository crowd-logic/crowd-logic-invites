import { motion } from "framer-motion";
import { Play, Smartphone, Monitor, BarChart3, Users, MapPin } from "lucide-react";

interface ProductShowcaseProps {
  solution: any;
}

export const ProductShowcase = ({ solution }: ProductShowcaseProps) => {
  const isEscapade = solution?.persona?.toLowerCase().includes('personal') || 
                   solution?.persona?.toLowerCase().includes('trip') ||
                   solution?.persona?.toLowerCase().includes('family');

  const isEventOS = solution?.persona?.toLowerCase().includes('brand') ||
                   solution?.persona?.toLowerCase().includes('event') ||
                   solution?.persona?.toLowerCase().includes('marketing');

  return (
    <div className="h-full bg-emerald-600 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Branded Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full">
        {isEscapade && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Phone Screen Content - Animated App UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500">
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between text-white">
                      <h3 className="text-lg font-bold">Family Trip</h3>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Animated Ideas */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, staggerChildren: 0.2 }}
                    >
                      {['Beach Day', 'Museum Visit', 'Local Food Tour'].map((idea, index) => (
                        <motion.div
                          key={idea}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.3 }}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{idea}</span>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.2 + index * 0.3 }}
                              className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                            >
                              <span className="text-xs text-green-900 font-bold">✓</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Map Preview */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-6"
                    >
                      <div className="flex items-center text-white mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Shared Itinerary</span>
                      </div>
                      <div className="space-y-2">
                        {['9:00 AM - Beach Day', '1:00 PM - Lunch', '3:00 PM - Museum'].map((time, index) => (
                          <div key={time} className="text-xs text-white/80">{time}</div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-8 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                escapade™
              </h2>
              <p className="text-emerald-100 text-lg">
                Turn chaos into beautiful shared adventures
              </p>
            </motion.div>
          </motion.div>
        )}

        {isEventOS && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Dashboard Mockup */}
            <div className="relative mx-auto w-full max-w-md h-80 bg-gray-900 rounded-2xl p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                {/* Dashboard Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">Event Dashboard</h3>
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Animated ROI Chart */}
                    <motion.div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-600 mb-2">Real-time ROI</div>
                      <div className="flex items-end space-x-2 h-20">
                        {[30, 45, 60, 80, 90].map((height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                            className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-8"
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Staff Performance */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="text-sm font-medium text-gray-600 mb-2">Live Staff Status</div>
                      <div className="space-y-2">
                        {['Team A: Active', 'Team B: Check-in', 'Team C: Break'].map((status, index) => (
                          <div key={status} className="flex items-center text-xs text-gray-700">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.8 + index * 0.2 }}
                              className={`w-2 h-2 rounded-full mr-2 ${
                                index === 0 ? 'bg-green-400' : index === 1 ? 'bg-blue-400' : 'bg-yellow-400'
                              }`}
                            />
                            {status}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Event Axis™
              </h2>
              <p className="text-emerald-100 text-lg">
                Your command center for flawless event execution
              </p>
            </motion.div>
          </motion.div>
        )}

        {!isEscapade && !isEventOS && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
              <Monitor className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              CrowdLogic Platform
            </h2>
            <p className="text-emerald-100 text-lg">
              Comprehensive solutions for every challenge
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};