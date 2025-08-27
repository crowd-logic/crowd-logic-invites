import React from 'react';
import { Users, Archive } from 'phosphor-react';
import { usePersona } from '@/contexts/PersonaContext';
import { useNavigate } from 'react-router-dom';

export function PersonaDoors() {
  const { setPersona } = usePersona();
  const navigate = useNavigate();

  const handlePersonaSelect = (selectedPersona: 'organizer' | 'stash') => {
    setPersona(selectedPersona);
    if (selectedPersona === 'organizer') {
      navigate('/escapade');
    } else {
      navigate('/stash');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Let's get you set up—who are you today?
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose your journey. You can always switch back anytime.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button
            className="group animated-door p-10 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-all duration-300 border border-primary/20 min-w-[280px]"
            aria-label="I'm an organizer planning events"
            onClick={() => handlePersonaSelect('organizer')}
          >
            <Users size={56} className="mb-4 text-primary animate-pulse"/>
            <span className="font-bold text-xl mb-2 text-foreground">Planning my event/team</span>
            <p className="text-sm text-muted-foreground text-center">
              Group events, team coordination, and seamless experiences for everyone
            </p>
          </button>
          
          <button
            className="group animated-door p-10 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-all duration-300 border border-secondary/20 min-w-[280px]"
            aria-label="I want my personal stash organized"
            onClick={() => handlePersonaSelect('stash')}
          >
            <Archive size={56} className="mb-4 text-secondary animate-pulse-slow"/>
            <span className="font-bold text-xl mb-2 text-foreground">Just want my lists</span>
            <p className="text-sm text-muted-foreground text-center">
              Personal collections, travel plans, and beautifully organized finds
            </p>
          </button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          Don't worry—you can always switch back, anytime.
        </div>
      </div>
      
      <style>{`
        .animated-door { 
          transition: box-shadow 0.2s, transform 0.15s; 
        }
        .animated-door:hover { 
          box-shadow: 0 8px 32px hsl(var(--primary) / 0.15); 
          transform: scale(1.03) rotate(-1deg);
        }
        @keyframes pulse-slow { 
          0%, 100% { opacity: 1;} 
          50% { opacity: 0.7;} 
        }
        .animate-pulse-slow { 
          animation: pulse-slow 2.4s infinite; 
        }
      `}</style>
    </div>
  );
}