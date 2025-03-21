'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px'
        }}
      >
        <motion.div 
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            backgroundColor: '#C41E3A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          A
        </motion.div>
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
    </div>
  );
} 