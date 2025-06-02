
import { Calendar, Users, TrendingUp } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three Powerful Services, One Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each service addresses a critical piece of the event and community engagement puzzle, working together to create unprecedented value.
          </p>
        </div>

        <div className="space-y-12">
          {/* VibePass */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">VibePass</h3>
              </div>
              <h4 className="text-xl text-purple-300 mb-4 font-semibold">Community Engagement Platform</h4>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Transform how communities connect and engage. VibePass creates immersive experiences that turn passive attendees into active participants, fostering deeper connections and lasting relationships.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Interactive community features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Real-time engagement tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Personalized experience curation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300 font-semibold">Community at the Core</p>
              </div>
            </div>
          </div>

          {/* EventAxis */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">EventAxis</h3>
              </div>
              <h4 className="text-xl text-blue-300 mb-4 font-semibold">Comprehensive Event Management</h4>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                The central nervous system for event orchestration. EventAxis streamlines every aspect of event planning, execution, and analysis, from intimate gatherings to large-scale conferences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>End-to-end event lifecycle management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Integrated vendor and resource coordination</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Real-time analytics and optimization</span>
                </li>
              </ul>
            </div>
            <div className="md:order-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-300 font-semibold">Seamless Orchestration</p>
              </div>
            </div>
          </div>

          {/* The KITO Agency */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">The KITO Agency</h3>
              </div>
              <h4 className="text-xl text-pink-300 mb-4 font-semibold">Strategic Brand Intelligence</h4>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Where data meets strategy. KITO transforms audience insights into actionable brand intelligence, helping organizations make informed decisions that drive meaningful engagement.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Deep audience analytics and insights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Strategic consulting and implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Custom research and market intelligence</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-orange-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                <p className="text-pink-300 font-semibold">Intelligence-Driven Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
