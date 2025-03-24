'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { useEffect, useState } from 'react';
import { 
  CreditCard2Front,
  Briefcase, 
  Building, 
  Calculator,
  House,
  ShieldLock,
  People
} from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

export const PracticeAreas = () => {
  // Mapeo de iconos según el identificador en la configuración
  const getIcon = (iconName: string) => {
    const iconSize = 40;
    
    switch (iconName) {
      case 'scale':
        return <CreditCard2Front size={iconSize} />;
      case 'briefcase':
        return <Briefcase size={iconSize} />;
      case 'building':
        return <Building size={iconSize} />;
      case 'calculator':
        return <Calculator size={iconSize} />;
      case 'house':
        return <House size={iconSize} />;
      case 'shield':
        return <ShieldLock size={iconSize} />;
      case 'people':
        return <People size={iconSize} />;
      default:
        return <CreditCard2Front size={iconSize} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="practice-areas" 
      style={{
        padding: '120px 0',
        backgroundColor: '#fff',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <Container>
        <motion.div 
          style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div 
            style={{
              display: 'inline-block',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#C41E3A',
              marginBottom: '16px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Nuestros Servicios
          </div>
          
          <h2 
            style={{
              fontSize: '2.8rem',
              fontWeight: 600,
              color: '#000',
              marginBottom: '24px',
              letterSpacing: '-0.5px'
            }}
          >
            Áreas de Práctica
          </h2>
          
          <div 
            style={{
              width: '40px',
              height: '3px',
              background: '#C41E3A',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }}
          ></div>
          
          <p 
            style={{
              fontSize: '1.2rem',
              color: 'rgba(0,0,0,0.6)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            Nuestro equipo ofrece asesoría legal especializada con un enfoque personalizado para cada cliente
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4">
            {antequeraConfig.practiceAreas.map((area, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div 
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div 
                    style={{
                      background: '#fff',
                      borderRadius: '16px',
                      padding: '40px 30px',
                      height: '100%',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.06)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '120px',
                        height: '120px',
                        borderRadius: '0 0 0 120px',
                        background: 'radial-gradient(circle at top right, rgba(196, 30, 58, 0.08), rgba(196, 30, 58, 0))',
                        zIndex: 0
                      }}
                    ></div>
                    
                    <div
                      style={{
                        color: '#C41E3A',
                        marginBottom: '24px',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {getIcon(area.icon)}
                    </div>
                    
                    <h3 
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        marginBottom: '16px',
                        color: '#000',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {area.title}
                    </h3>
                    
                    <div 
                      style={{
                        width: '30px',
                        height: '2px',
                        background: '#C41E3A',
                        marginBottom: '16px',
                        position: 'relative',
                        zIndex: 1
                      }}
                    ></div>
                    
                    <p 
                      style={{
                        color: 'rgba(0,0,0,0.6)',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        fontWeight: 300,
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
        
        <motion.div 
          style={{
            textAlign: 'center',
            marginTop: '60px'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p 
            style={{
              fontSize: '1.2rem',
              marginBottom: '24px',
              color: 'rgba(0,0,0,0.7)',
              fontWeight: 300
            }}
          >
            ¿Necesita asesoría en un área específica? 
          </p>
          <motion.a 
            href="#contact" 
            style={{
              display: 'inline-block',
              background: '#C41E3A',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: '0 4px 15px rgba(196, 30, 58, 0.2)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 20px rgba(196, 30, 58, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar consulta
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}; 