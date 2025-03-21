'use client';

import React from 'react';

export function CommonFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div 
      style={{
        background: '#000',
        padding: '15px 0',
        textAlign: 'center',
        fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div 
        style={{
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.6)',
          fontWeight: 300
        }}
      >
        © {currentYear} Antequera Abogados. Todos los derechos reservados.
      </div>
    </div>
  );
} 