'use client';

import React from 'react';
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
        gap: '5px',
        background: 'transparent',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        padding: '6px 10px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 500,
        transition: 'all 0.2s ease'
      }}
      whileHover={{ 
        scale: 1.05,
        background: 'rgba(255,255,255,0.1)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe size={14} />
      {language === 'es' ? 'EN' : 'ES'}
    </motion.button>
  );
}; 