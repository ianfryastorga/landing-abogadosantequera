'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { ArrowDownCircle, Award, ShieldCheck } from 'react-bootstrap-icons';
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
        background: '#000',
        position: 'relative',
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.8))',
          zIndex: 1
        }}
      ></div>
      
      <div
        style={{
          position: 'absolute',
          right: -300,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 2
        }}
      ></div>
      
      <Container className="h-100 d-flex flex-column justify-content-center" style={{ position: 'relative', zIndex: 5 }}>
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
                  fontSize: isMobile ? '3rem' : '4.5rem',
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
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '800px',
                  margin: '0 auto 2rem',
                  lineHeight: 1.4,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
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
                  gap: '2rem',
                  marginBottom: '3rem',
                  flexWrap: 'wrap'
                }}
              >
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    fontWeight: 300
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
                    fontSize: '1rem',
                    fontWeight: 300
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
                    fontSize: '1rem',
                    fontWeight: 300
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
                  gap: '1.5rem',
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
                      padding: '12px 24px',
                      fontSize: '1rem',
                      fontWeight: 500,
                      borderRadius: '30px',
                      boxShadow: '0 4px 15px rgba(196, 30, 58, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Consulta gratuita
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
                      padding: '12px 24px',
                      fontSize: '1rem',
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
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={() => document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2
        }}
      >
        <ArrowDownCircle size={35} />
      </motion.div>
    </section>
  );
}; 