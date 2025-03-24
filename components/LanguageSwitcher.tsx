'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        background: '#C41E3A',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(196, 30, 58, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: '64px',
        height: '34px'
      }}
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 4px 12px rgba(196, 30, 58, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe size={16} style={{ flexShrink: 0 }} />
      <span style={{ letterSpacing: '0.5px' }}>
        {language === 'es' ? 'EN' : 'ES'}
      </span>
      
      {/* Pulse effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.2)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.button>
  );
}; 