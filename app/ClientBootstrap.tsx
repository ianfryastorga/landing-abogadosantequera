'use client';

import { useEffect } from 'react';

export default function ClientBootstrap() {
  useEffect(() => {
    // Importar Bootstrap CSS una vez que estamos en el cliente
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);

  return null;
} 