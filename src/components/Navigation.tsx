
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onSignupClick: () => void;
}

export const Navigation = ({ onSignupClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
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
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#escapade" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">escapade</a>
            <a href="#event-axis" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">Event Axis</a>
            <a href="#kito-agency" className="text-gray-300 hover:text-white transition-colors font-medium text-lg hover:scale-105 transform duration-200">KITO Agency</a>
            <button 
              onClick={onSignupClick} 
              className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
            >
              <span className="relative z-10">Get Escapade™</span>
            </button>
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
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl mt-4 mb-4 p-6 border border-white/10">
              <div className="flex flex-col space-y-6">
                <a href="#escapade" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>escapade</a>
                <a href="#event-axis" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>Event Axis</a>
                <a href="#kito-agency" className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setIsOpen(false)}>KITO Agency</a>
                <button 
                  onClick={() => { onSignupClick(); setIsOpen(false); }} 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Get Escapade™
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
