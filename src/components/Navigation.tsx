
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 mt-3 rounded-full border glass-nav px-4 sm:px-6" >
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a652dce3-bfe6-44ac-802d-2f1f2148a596.png" 
                alt="CrowdLogic Logo" 
                className="w-14 h-14"
              />
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-tight">
              CrowdLogic
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#proof" className="nav-link">Proof</a>
            <a href="#service" className="nav-link">Service</a>
            <a href="#founder" className="nav-link">Leadership</a>
            <a href="#contact" className="btn-pill-dark">Request Access</a>
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
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl mt-4 mb-4 p-6 border border-border">
              <div className="flex flex-col space-y-6">
                <a href="#proof" className="nav-link" onClick={() => setIsOpen(false)}>Proof</a>
                <a href="#service" className="nav-link" onClick={() => setIsOpen(false)}>Service</a>
                <a href="#founder" className="nav-link" onClick={() => setIsOpen(false)}>Leadership</a>
                <a href="#contact" className="btn-pill-dark text-center" onClick={() => setIsOpen(false)}>Request Access</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
