'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const PymeHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

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
      id="pyme-hero" 
      className="hero-section"
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: isMobile ? '700px' : '90vh',
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
      {/* Imagen de fondo con efecto de paralaje */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/santiago-skyline.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          filter: 'brightness(0.7) contrast(1.2)'
        }}
        animate={{
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Capa de fondo con gradiente oscuro */}
      <motion.div 
        className="hero-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85))',
          zIndex: 1,
          backdropFilter: 'blur(2px)'
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
          background: 'radial-gradient(circle at 70% 40%, rgba(196, 30, 58, 0.2) 0%, rgba(0,0,0,0) 60%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      
      <Container className="h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 10 }}>
        <Row className="justify-content-center align-items-center h-100 m-0">
          <Col lg={10} xl={8} className="text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants} 
                style={{
                  fontSize: isMobile ? '2.3rem' : '3.8rem',
                  fontWeight: 700,  
                  letterSpacing: '-1px',
                  marginBottom: '1.5rem',
                  color: '#fff',
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: 1.2
                }}
              >
                ¿Tienes un problema legal urgente en tu empresa?
              </motion.h1>
              
              <motion.p 
                variants={itemVariants} 
                style={{
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '800px',
                  margin: '0 auto 1.5rem',
                  lineHeight: 1.6,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  padding: isMobile ? '0 15px' : 0
                }}
              >
                Te ayudamos a resolverlo rápido con acompañamiento permanente de un abogado, para estar al tanto de cada detalle.
              </motion.p>

              {/* Video placeholder */}
              <motion.div 
                variants={itemVariants}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: isMobile ? '200px' : '300px',
                  margin: '0 auto 2rem',
                  backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📹</div>
                  <p style={{ margin: 0, fontSize: '1rem' }}>Video</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '2rem'
                }}
              >
                <WhatsAppButton
                  text="✅ Habla hoy mismo con el abogado"
                  message="Hola, tengo un problema legal urgente en mi empresa. ¿Podríamos hablar hoy mismo?"
                  size={isMobile ? 'medium' : 'large'}
                  variant="primary"
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};