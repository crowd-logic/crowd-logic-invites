
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a652dce3-bfe6-44ac-802d-2f1f2148a596.png" 
                alt="CrowdLogic Logo" 
                className="w-14 h-14"
              />
            </div>
            <span className="text-2xl md:text-3xl font-black text-white">
              CrowdLogic
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#vision" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">Vision</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">Services</a>
            <a href="#founder" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">Leadership</a>
            <a href="#contact" className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="relative z-10">Get Escapade™</span>
            </a>
          </div>

          <button
            className="md:hidden text-white hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-4 mb-4 p-6 border border-white/10">
              <div className="flex flex-col space-y-6">
                <a href="#vision" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>Vision</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#founder" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>Leadership</a>
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300" onClick={() => setIsOpen(false)}>Get Escapade™</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
