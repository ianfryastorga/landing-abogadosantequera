'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { antequeraConfig } from '../config';
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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      }}
    >
      <div 
        className="hero-overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
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
              <motion.div variants={itemVariants} className="hero-badge">
                <Award size={16} className="me-2" /> Excelencia Jurídica
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-title">
                {antequeraConfig.name}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="hero-slogan">
                {antequeraConfig.slogan}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="hero-separator"
              >
                <span></span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="hero-features"
              >
                <motion.div 
                  className="hero-feature"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={18} /> Asesoría Especializada
                </motion.div>
                <motion.div 
                  className="hero-feature"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={18} /> Soluciones Efectivas
                </motion.div>
                <motion.div 
                  className="hero-feature"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShieldCheck size={18} /> Atención Personalizada
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="buttons-container"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={scrollToContact}
                    className="btn-contact-hero"
                  >
                    Consulta gratuita
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    href="#practice-areas"
                    className="btn-services-hero"
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
        className="scroll-indicator" 
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
        <ArrowDownCircle size={40} />
      </motion.div>
    </section>
  );
}; 