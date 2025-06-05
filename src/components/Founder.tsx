
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export const Founder = () => {
  return (
    <section id="founder" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Leadership Visual */}
          <div className="text-center lg:text-left space-y-8">
            {/* Strategic Partnership Image */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur opacity-75 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Strategic Partnership" 
                className="relative w-64 h-48 object-cover rounded-3xl border-2 border-purple-400/30 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h4 className="text-lg font-bold">Strategic Partnerships</h4>
                <p className="text-sm text-purple-200">Building the future together</p>
              </div>
            </div>

            {/* Visionary Leadership Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400 font-semibold text-xl">VISIONARY LEADERSHIP</span>
                <div className="w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Building the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  Future
                </span>
              </h2>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a 
                  href="#contact"
                  className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <Mail size={20} />
                  <span>Connect</span>
                </a>
              </div>
              
              <a 
                href="#"
                className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center space-x-3"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Leadership Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                Our founder brings a unique blend of 
                <span className="text-purple-400 font-semibold"> technical expertise </span>
                and 
                <span className="text-pink-400 font-semibold"> industry insight</span>, 
                having identified the critical gaps in how communities connect and brands engage in the digital landscape.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                With a background in building scalable solutions and a passion for meaningful connections, 
                she's assembling a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  world-class team
                </span> 
                to transform the events and community engagement industry.
              </p>
            </div>

            {/* Strategic Focus Cards */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/50 to-blue-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Building for Scale</h3>
                  </div>
                  <p className="text-gray-300">
                    Currently developing MVPs with launch targets for mid-2025, focusing on creating solutions that scale from local communities to global enterprises.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    <h3 className="text-xl font-bold text-white">Strategic Partnerships</h3>
                  </div>
                  <p className="text-gray-300">
                    Actively seeking strategic advisors, potential investors, and early adopters who share our vision for the future of community engagement.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/50 to-orange-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                    <h3 className="text-xl font-bold text-white">Industry Innovation</h3>
                  </div>
                  <p className="text-gray-300">
                    Committed to solving real problems with elegant solutions that create genuine value for all stakeholders in the events ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
