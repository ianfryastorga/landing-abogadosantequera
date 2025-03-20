'use client';

import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Telephone, Envelope, GeoAlt } from 'react-bootstrap-icons';
import { antequeraConfig } from '../config';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    { name: 'Inicio', url: '#hero' },
    { name: 'Áreas de Práctica', url: '#practice-areas' },
    { name: 'Contacto', url: '#contact' }
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

  return (
    <>
      {/* Top Bar con información de contacto */}
      <motion.div 
        className="top-bar"
        initial="hidden"
        animate="visible"
        variants={topBarVariants}
      >
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
            <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 mb-2 mb-md-0">
              <a 
                href={`tel:${antequeraConfig.contactInfo.phone}`} 
                className="text-white text-decoration-none d-flex align-items-center gap-1"
              >
                <Telephone size={14} /> {antequeraConfig.contactInfo.phone}
              </a>
              <a 
                href={`mailto:${antequeraConfig.contactInfo.email}`} 
                className="text-white text-decoration-none d-flex align-items-center gap-1"
              >
                <Envelope size={14} /> {antequeraConfig.contactInfo.email}
              </a>
            </div>
            <div className="d-none d-md-flex align-items-center" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
              <GeoAlt size={14} className="me-1" />
              <span>{antequeraConfig.contactInfo.address}</span>
            </div>
          </div>
        </Container>
      </motion.div>
      
      {/* Barra de navegación principal */}
      <Navbar 
        expand="lg" 
        fixed="top"
        className={`header py-3 ${isScrolled ? 'scrolled' : ''}`}
        style={{ marginTop: '40px', backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent' }} 
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Navbar.Brand href="#hero" className="navbar-brand">
              {antequeraConfig.name}
            </Navbar.Brand>
          </motion.div>
          
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            style={{ border: 'none', padding: '0.4rem' }}
          />
          
          <Navbar.Collapse id="navbar-nav">
            <motion.div
              className="ms-auto d-flex align-items-center"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Nav className="me-3">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={navItemVariants}>
                    <Nav.Link 
                      href={link.url}
                      className="nav-link px-3"
                    >
                      {link.name}
                    </Nav.Link>
                  </motion.div>
                ))}
              </Nav>
              
              <motion.div variants={navItemVariants}>
                <motion.a 
                  href="#contact"
                  className="btn btn-primary btn-contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Gratuita
                </motion.a>
              </motion.div>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}; 