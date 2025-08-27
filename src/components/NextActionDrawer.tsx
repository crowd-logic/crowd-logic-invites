import React, { useState, useEffect } from 'react';
import { CalendarPlus, Archive, ArrowRight, X } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { usePersona } from '@/contexts/PersonaContext';

export function NextActionDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { persona } = usePersona();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAction = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm rounded-t-2xl px-6 py-8 shadow-lg border-t border-border md:hidden">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-bold text-foreground">What would you like to do?</h4>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button 
          className="p-4 bg-primary/10 rounded-lg font-semibold text-primary flex flex-col items-center gap-2 hover:bg-primary/20 transition-colors"
          onClick={() => handleAction('/escapade')}
        >
          <CalendarPlus size={24} />
          <span className="text-sm">Start new event</span>
        </button>
        
        <button 
          className="p-4 bg-secondary/10 rounded-lg font-semibold text-secondary flex flex-col items-center gap-2 hover:bg-secondary/20 transition-colors"
          onClick={() => handleAction('/stash')}
        >
          <Archive size={24} />
          <span className="text-sm">Import to Stash</span>
        </button>
        
        {persona === 'organizer' && (
          <button 
            className="p-4 bg-primary/5 rounded-lg text-primary flex flex-col items-center gap-2 hover:bg-primary/10 transition-colors"
            onClick={() => handleAction('/escapade')}
          >
            <ArrowRight size={24} />
            <span className="text-sm">Resume event</span>
          </button>
        )}
        
        {persona === 'stash' && (
          <button 
            className="p-4 bg-secondary/5 rounded-lg text-secondary flex flex-col items-center gap-2 hover:bg-secondary/10 transition-colors"
            onClick={() => handleAction('/stash')}
          >
            <ArrowRight size={24} />
            <span className="text-sm">Resume stash</span>
          </button>
        )}
      </div>
      
      <button 
        className="mt-6 w-full text-center underline text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        Hide this
      </button>
    </div>
  );
}