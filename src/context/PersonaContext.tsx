import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Persona = 'se' | 'ai';

interface PersonaContextType {
  persona: Persona;
  togglePersona: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona>('se');

  useEffect(() => {
    const saved = localStorage.getItem('persona') as Persona;
    if (saved === 'se' || saved === 'ai') {
      setPersona(saved);
    }
  }, []);

  const togglePersona = () => {
    setPersona((prev) => {
      const next = prev === 'se' ? 'ai' : 'se';
      localStorage.setItem('persona', next);
      return next;
    });
  };

  return (
    <PersonaContext.Provider value={{ persona, togglePersona }}>
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

