
import { ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/3 via-transparent to-pink-600/3"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-semibold text-xl">OUR ECOSYSTEM</span>
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Three Powerful
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Services
            </span>
            <br />
            One Vision
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Each service addresses a critical piece of the event and community engagement puzzle, 
            working together to create 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              unprecedented value
            </span>.
          </p>
        </div>

        <div className="space-y-32">
          {/* VibePass - Community Focus */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Community Engagement" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">VibePass</h3>
                  <p className="text-purple-300 text-xl font-semibold">Community Engagement Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform how communities connect and engage. VibePass creates 
                <span className="text-purple-400 font-semibold"> immersive experiences </span>
                that turn passive attendees into active participants, fostering deeper connections and lasting relationships.
              </p>
              
              <div className="space-y-4">
                {['Interactive community features', 'Real-time engagement tools', 'Personalized experience curation'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Explore VibePass</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                    alt="Community Connection" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-purple-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Community at the Core</h4>
                <p className="text-gray-400">Connecting hearts and minds</p>
              </div>
            </div>
          </div>

          {/* EventAxis - Event Management */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                      alt="Event Management" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">EventAxis</h3>
                  <p className="text-blue-300 text-xl font-semibold">Comprehensive Event Management</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                The central nervous system for event orchestration. EventAxis streamlines every aspect of 
                <span className="text-blue-400 font-semibold"> event planning, execution, and analysis</span>, 
                from intimate gatherings to large-scale conferences.
              </p>
              
              <div className="space-y-4">
                {['End-to-end event lifecycle management', 'Integrated vendor and resource coordination', 'Real-time analytics and optimization'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Discover EventAxis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                    alt="Seamless Orchestration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Seamless Orchestration</h4>
                <p className="text-gray-400">Every detail, perfectly synchronized</p>
              </div>
            </div>
          </div>

          {/* The KITO Agency - Brand Intelligence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                      alt="Strategic Intelligence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white">The KITO Agency</h3>
                  <p className="text-pink-300 text-xl font-semibold">Strategic Brand Intelligence</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Where data meets strategy. KITO transforms 
                <span className="text-pink-400 font-semibold"> audience insights into actionable brand intelligence</span>, 
                helping organizations make informed decisions that drive meaningful engagement.
              </p>
              
              <div className="space-y-4">
                {['Deep audience analytics and insights', 'Strategic consulting and implementation', 'Custom research and market intelligence'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-pink-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors cursor-pointer group">
                <span className="font-semibold text-lg">Learn About KITO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 h-80 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                    alt="Strategic Intelligence" 
                    className="w-40 h-32 object-cover rounded-xl border-2 border-pink-400/30 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold text-pink-300 mb-4">Intelligence-Driven Strategy</h4>
                <p className="text-gray-400">Data that transforms decisions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Element */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Community" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                alt="Events" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500"></div>
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Intelligence" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-400">Three services, infinite possibilities</p>
        </div>
      </div>
    </section>
  );
};
