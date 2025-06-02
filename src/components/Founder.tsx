
import { Linkedin, Mail } from "lucide-react";

export const Founder = () => {
  return (
    <section id="founder" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mb-8 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">CEO</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Visionary Leadership
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our founder brings a unique blend of technical expertise and industry insight, having identified the critical gaps in how communities connect and brands engage in the digital landscape.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With a background in building scalable solutions and a passion for meaningful connections, she's assembling a world-class team to transform the events and community engagement industry.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Connect</span>
                </a>
                <a 
                  href="#"
                  className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Building for Scale</h3>
                <p className="text-gray-300">
                  Currently developing MVPs with launch targets for mid-2025, focusing on creating solutions that scale from local communities to global enterprises.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Strategic Partnerships</h3>
                <p className="text-gray-300">
                  Actively seeking strategic advisors, potential investors, and early adopters who share our vision for the future of community engagement.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Industry Innovation</h3>
                <p className="text-gray-300">
                  Committed to solving real problems with elegant solutions that create genuine value for all stakeholders in the events ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
