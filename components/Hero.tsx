'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { Award, ShieldCheck } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animaciones con variantes para un código más limpio
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: isMobile ? '600px' : '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        background: '#000'
      }}
    >
      {/* Capa de fondo con animación de degradado */}
      <motion.div 
        className="hero-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 30%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)',
          zIndex: 1
        }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)',
            'radial-gradient(circle at 80% 30%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)',
            'radial-gradient(circle at 80% 70%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)',
            'radial-gradient(circle at 20% 70%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)',
            'radial-gradient(circle at 20% 30%, rgba(40,40,40,0.7) 0%, rgba(0,0,0,0.95) 70%)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Overlay con efecto de color */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 40%, rgba(196, 30, 58, 0.08) 0%, rgba(0,0,0,0) 60%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          background: [
            'radial-gradient(circle at 70% 40%, rgba(196, 30, 58, 0.08) 0%, rgba(0,0,0,0) 60%)',
            'radial-gradient(circle at 30% 60%, rgba(196, 30, 58, 0.08) 0%, rgba(0,0,0,0) 60%)',
            'radial-gradient(circle at 70% 40%, rgba(196, 30, 58, 0.08) 0%, rgba(0,0,0,0) 60%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Partículas decorativas */}
      <div 
        style={{
          position: 'absolute',
          right: -150,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      ></div>
      
      <Container className="h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 10 }}>
        <Row className="justify-content-center align-items-center h-100 m-0">
          <Col lg={10} xl={8} className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={itemVariants} 
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Award size={14} style={{ marginRight: '8px', color: '#C41E3A' }} /> Excelencia Jurídica
              </motion.div>
              
              <motion.h1 
                variants={itemVariants} 
                style={{
                  fontSize: isMobile ? '2.5rem' : '4.5rem',
                  fontWeight: 700,
                  letterSpacing: '-1px',
                  marginBottom: '1.5rem',
                  color: '#fff',
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                {antequeraConfig.name}
              </motion.h1>
              
              <motion.p 
                variants={itemVariants} 
                style={{
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '800px',
                  margin: '0 auto 2rem',
                  lineHeight: 1.4,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  padding: isMobile ? '0 15px' : 0
                }}
              >
                {antequeraConfig.slogan}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                style={{
                  width: '40px',
                  height: '3px',
                  background: '#C41E3A',
                  margin: '0 auto 2rem',
                  borderRadius: '2px'
                }}
              ></motion.div>
              
              <motion.div 
                variants={itemVariants}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '2rem',
                  marginBottom: '3rem',
                  flexWrap: 'wrap',
                  padding: isMobile ? '0 10px' : 0
                }}
              >
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 300,
                    margin: isMobile ? '5px 0' : 0
                  }}
                  whileHover={{ color: '#fff', scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={16} style={{ marginRight: '10px', color: '#C41E3A' }} /> Asesoría Especializada
                </motion.div>
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 300,
                    margin: isMobile ? '5px 0' : 0
                  }}
                  whileHover={{ color: '#fff', scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={16} style={{ marginRight: '10px', color: '#C41E3A' }} /> Soluciones Efectivas
                </motion.div>
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 300,
                    margin: isMobile ? '5px 0' : 0
                  }}
                  whileHover={{ color: '#fff', scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={16} style={{ marginRight: '10px', color: '#C41E3A' }} /> Atención Personalizada
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '1.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={scrollToContact}
                    style={{
                      background: '#C41E3A',
                      color: '#fff',
                      border: 'none',
                      padding: isMobile ? '10px 20px' : '12px 24px',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: 500,
                      borderRadius: '30px',
                      boxShadow: '0 4px 15px rgba(196, 30, 58, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Consulta
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    href="#practice-areas"
                    style={{
                      background: 'transparent',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      padding: isMobile ? '10px 20px' : '12px 24px',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: 500,
                      borderRadius: '30px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Nuestros servicios
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}; 