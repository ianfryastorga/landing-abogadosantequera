'use client';

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const SimpleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="simple-header">
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1030,
          background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease',
          padding: '15px 0',
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <a 
              href="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                fontSize: '1.4rem',
                fontWeight: 500,
                letterSpacing: '-0.5px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={35} 
                height={35} 
                style={{ 
                  marginRight: '10px',
                  filter: 'none'
                }} 
              />
              {antequeraConfig.name}
            </a>
          </motion.div>
        </Container>
      </nav>
    </header>
  );
};