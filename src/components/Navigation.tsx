
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onSignupClick: () => void;
}

export const Navigation = ({ onSignupClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-lg border-b border-border/20">
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
            <span className="text-2xl md:text-3xl font-black text-foreground font-lora">
              CrowdLogic
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#escapade" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg hover:scale-105 transform duration-200 font-inter">escapade</a>
            <a href="#event-axis" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg hover:scale-105 transform duration-200 font-inter">Event Axis</a>
            <a href="#vibepass" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg hover:scale-105 transform duration-200 font-inter">VibePass</a>
            <a href="#kito-agency" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg hover:scale-105 transform duration-200 font-inter">KITO Agency</a>
            <button 
              onClick={onSignupClick} 
              className="group relative bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/25 transform hover:scale-105 font-inter"
            >
              <span className="relative z-10">Get Escapade™</span>
              <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </button>
          </div>

          <button
            className="md:hidden text-foreground hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="bg-background/30 backdrop-blur-xl rounded-2xl mt-4 mb-4 p-6 border border-border/20">
              <div className="flex flex-col space-y-6">
                <a href="#escapade" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg font-inter" onClick={() => setIsOpen(false)}>escapade</a>
                <a href="#event-axis" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg font-inter" onClick={() => setIsOpen(false)}>Event Axis</a>
                <a href="#vibepass" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg font-inter" onClick={() => setIsOpen(false)}>VibePass</a>
                <a href="#kito-agency" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-lg font-inter" onClick={() => setIsOpen(false)}>KITO Agency</a>
                <button 
                  onClick={() => { onSignupClick(); setIsOpen(false); }} 
                  className="group relative bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-center hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25 font-inter"
                >
                  <span className="relative z-10">Get Escapade™</span>
                  <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
