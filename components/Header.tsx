'use client';

import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Telephone, Envelope, GeoAlt } from 'react-bootstrap-icons';
import { antequeraConfig } from '@/config';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: t('menu.home'), url: '#hero' },
    { name: t('menu.practice'), url: '#practice-areas' },
    { name: t('menu.contact'), url: '#contact' }
  ];

  const topBarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const handleNavClick = () => {
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Top Bar con información de contacto */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={topBarVariants}
        style={{
          backgroundColor: '#000',
          padding: '8px 0',
          fontSize: '0.85rem',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1030,
          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
        }}
      >
        <Container>
          <div 
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center'
            }}
          >
            <div 
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '6px' : '20px',
                marginBottom: isMobile ? '6px' : 0
              }}
            >
              <a 
                href={`tel:${antequeraConfig.contactInfo.phone}`} 
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                <Telephone size={12} /> {antequeraConfig.contactInfo.phone}
              </a>
              <a 
                href={`mailto:${antequeraConfig.contactInfo.email}`} 
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                <Envelope size={12} /> {antequeraConfig.contactInfo.email}
              </a>
            </div>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              {!isMobile && (
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.8rem'
                  }}
                >
                  <GeoAlt size={12} style={{ marginRight: '6px' }} />
                  <span>{antequeraConfig.contactInfo.address}</span>
                </div>
              )}
              <LanguageSwitcher />
            </div>
          </div>
        </Container>
      </motion.div>
      
      {/* Barra de navegación principal */}
      <Navbar 
        expand="lg" 
        fixed="top"
        expanded={isExpanded}
        onToggle={(expanded) => setIsExpanded(expanded)}
        style={{ 
          marginTop: '36px',
          background: isScrolled || isExpanded ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled || isExpanded ? 'blur(10px)' : 'none',
          boxShadow: isScrolled || isExpanded ? '0 1px 15px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
          padding: '15px 0',
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        }} 
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Navbar.Brand 
              href="#hero" 
              style={{
                color: isScrolled || isExpanded ? '#000' : '#fff',
                fontSize: '1.5rem',
                fontWeight: 500,
                letterSpacing: '-0.5px',
                transition: 'color 0.3s ease',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              {antequeraConfig.name}
            </Navbar.Brand>
          </motion.div>
          
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            style={{ 
              border: 'none',
              padding: '0.4rem',
              color: isScrolled || isExpanded ? '#000' : '#fff' 
            }}
          />
          
          <Navbar.Collapse id="navbar-nav">
            <motion.div
              className="ms-auto d-flex align-items-center"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Nav className="me-4">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={navItemVariants}>
                    <Nav.Link 
                      href={link.url}
                      onClick={handleNavClick}
                      style={{
                        color: isScrolled || isExpanded ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                        fontWeight: 400,
                        fontSize: '0.95rem',
                        padding: '0.5rem 1.2rem',
                        transition: 'color 0.2s ease',
                        letterSpacing: '0.2px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = isScrolled || isExpanded ? '#000' : '#fff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = isScrolled || isExpanded ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)';
                      }}
                    >
                      {link.name}
                    </Nav.Link>
                  </motion.div>
                ))}
              </Nav>
              
              <motion.div variants={navItemVariants}>
                <motion.a 
                  href="#contact"
                  onClick={handleNavClick}
                  style={{
                    display: 'inline-block',
                    background: '#C41E3A',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.2)',
                    transition: 'all 0.3s ease',
                    marginTop: isMobile ? '10px' : 0
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 4px 20px rgba(196, 30, 58, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('menu.consultation')}
                </motion.a>
              </motion.div>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}; 