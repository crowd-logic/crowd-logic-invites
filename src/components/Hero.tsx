
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { EmailCapture } from "./EmailCapture";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge with Glow Effect */}
        <div className="flex justify-center mb-6">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative flex items-center space-x-3 bg-slate-900 border border-emerald-400/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-emerald-300 animate-pulse delay-300" />
              <span className="text-emerald-200 font-medium">Launching Late 2025</span>
            </div>
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <EmailCapture />
        </div>
        
        {/* Enhanced Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="#contact" 
            className="group relative border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};
