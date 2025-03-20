'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OneTimeTokenContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

const OneTimeTokenContext = createContext<OneTimeTokenContextType | undefined>(undefined);

export function useOneTimeToken() {
  const context = useContext(OneTimeTokenContext);
  if (!context) {
    throw new Error('useOneTimeToken debe usarse dentro de un OneTimeTokenProvider');
  }
  return context;
}

interface OneTimeTokenProviderProps {
  children: ReactNode;
}

export function OneTimeTokenProvider({ children }: OneTimeTokenProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  const clearToken = () => {
    setToken(null);
  };

  return (
    <OneTimeTokenContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </OneTimeTokenContext.Provider>
  );
} 