'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos de notificación
export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

// Interfaz para el mensaje
interface SnackbarMessage {
  message: string;
  type: SnackbarType;
  duration?: number;
}

// Interfaz para el contexto
interface SnackbarContextType {
  showSnackbar: (message: string, type?: SnackbarType, duration?: number) => void;
  hideSnackbar: () => void;
  snackbar: SnackbarMessage | null;
}

// Crear el contexto
const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar debe ser usado dentro de un SnackbarProvider');
  }
  return context;
}

// Props para el provider
interface SnackbarProviderProps {
  children: ReactNode;
}

// Componente proveedor del contexto
export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [snackbar, setSnackbar] = useState<SnackbarMessage | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showSnackbar = (
    message: string,
    type: SnackbarType = 'info',
    duration: number = 5000
  ) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setSnackbar({ message, type, duration });

    const id = setTimeout(() => {
      setSnackbar(null);
    }, duration);

    setTimeoutId(id);
  };

  const hideSnackbar = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setSnackbar(null);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar, snackbar }}>
      {children}
      {snackbar && (
        <div className={`snackbar ${snackbar.type}`}>
          <p>{snackbar.message}</p>
          <button onClick={hideSnackbar}>×</button>
        </div>
      )}
    </SnackbarContext.Provider>
  );
} 