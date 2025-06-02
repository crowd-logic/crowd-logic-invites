
import { Brain, Network, Zap } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Event organizers struggle with fragmented tools, brands can't effectively reach their audiences, and communities lack seamless connection experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <Network className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Fragmented Ecosystem</h3>
            <p className="text-gray-300">
              Event organizers juggle multiple platforms, losing efficiency and creating disconnected experiences for attendees.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <Brain className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Limited Insights</h3>
            <p className="text-gray-300">
              Brands lack deep understanding of their audience engagement and struggle to create meaningful connections.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <Zap className="w-12 h-12 text-pink-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Missed Opportunities</h3>
            <p className="text-gray-300">
              Communities can't capitalize on the power of collective engagement and shared experiences.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Solution: Integrated Intelligence
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Crowd Logic unifies event management, audience intelligence, and community engagement into one powerful ecosystem that scales with your ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
