'use client';

import { useEffect } from 'react';

export default function ClientBootstrap() {
  useEffect(() => {
    // Solo importar Bootstrap CSS en el navegador
    require('bootstrap/dist/css/bootstrap.min.css');
  }, []);

  return null;
} 