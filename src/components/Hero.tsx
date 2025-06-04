
import { ArrowRight } from "lucide-react";
import { NeonStarIcon } from "./icons/NeonStarIcon";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Exclusive Key Image - Floating Element */}
      <div className="absolute top-20 right-20 z-20 animate-bounce hidden lg:block">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
            alt="Exclusive Access" 
            className="relative w-32 h-32 object-cover rounded-2xl border-2 border-yellow-400/30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-2 left-2 right-2 text-yellow-300 text-xs font-bold text-center">
            EXCLUSIVE
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge with Glow Effect */}
        <div className="flex justify-center mb-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative flex items-center space-x-3 bg-slate-900 border border-purple-400/30 rounded-full px-6 py-3">
              <NeonStarIcon size={20} className="animate-pulse" />
              <span className="text-purple-200 font-medium">Launching Mid-2025</span>
              <NeonStarIcon size={20} className="animate-pulse delay-300" />
            </div>
          </div>
        </div>
        
        {/* Main Title with Artistic Typography */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6">
            <span className="block text-white drop-shadow-2xl">
              Orchestrating
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
              the Future
            </span>
            <span className="block text-white drop-shadow-2xl">
              of Events
            </span>
          </h1>
          
          {/* Artistic accent lines */}
          <div className="absolute -left-8 top-1/2 w-16 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
          <div className="absolute -right-8 top-1/2 w-16 h-px bg-gradient-to-l from-pink-500 to-transparent"></div>
        </div>
        
        {/* Sophisticated Subtitle */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
            We're building the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> infrastructure </span>
            that transforms how communities connect, brands engage, and experiences come to life in the digital age.
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        </div>
        
        {/* Enhanced Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <a 
              href="#vision" 
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-3 group"
            >
              <span>Explore Our Vision</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
          
          <a 
            href="#contact" 
            className="group relative border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Artistic Bottom Element */}
        <div className="mt-20">
          <div className="flex justify-center space-x-8 opacity-30">
            <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
            <div className="w-px h-20 bg-gradient-to-b from-pink-500 to-transparent"></div>
            <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <NeonStarIcon size={16} className="text-purple-400" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-500">
        <NeonStarIcon size={24} className="text-pink-400" />
      </div>
      <div className="absolute top-1/3 right-20 animate-bounce delay-1000">
        <NeonStarIcon size={12} className="text-blue-400" />
      </div>
    </section>
  );
};
