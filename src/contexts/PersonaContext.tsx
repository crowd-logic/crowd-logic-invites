import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Persona = 'organizer' | 'stash' | null;

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
  hasPersona: boolean;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

interface PersonaProviderProps {
  children: ReactNode;
}

export function PersonaProvider({ children }: PersonaProviderProps) {
  const [persona, setPersonaState] = useState<Persona>(null);

  useEffect(() => {
    const savedPersona = localStorage.getItem('persona') as Persona;
    if (savedPersona) {
      setPersonaState(savedPersona);
    }
  }, []);

  const setPersona = (newPersona: Persona) => {
    setPersonaState(newPersona);
    if (newPersona) {
      localStorage.setItem('persona', newPersona);
    } else {
      localStorage.removeItem('persona');
    }
  };

  return (
    <PersonaContext.Provider value={{
      persona,
      setPersona,
      hasPersona: persona !== null
    }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}