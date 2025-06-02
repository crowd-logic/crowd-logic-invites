
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">
            Crowd Logic
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#vision" className="text-gray-300 hover:text-white transition-colors">Vision</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#founder" className="text-gray-300 hover:text-white transition-colors">Leadership</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Connect</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#vision" className="text-gray-300 hover:text-white transition-colors">Vision</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#founder" className="text-gray-300 hover:text-white transition-colors">Leadership</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Connect</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
