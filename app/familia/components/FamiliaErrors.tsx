'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  XCircle,
  CheckCircle,
  Building,
  Chat,
  CurrencyDollar
} from 'react-bootstrap-icons';

export const FamiliaErrors = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const errorPoints = [
    {
      icon: <Building size={28} />,
      text: 'Los estudios grandes son fríos, caros y distantes.'
    },
    {
      icon: <Chat size={28} />,
      text: 'Los abogados suelen usar tecnicismos que confunden más.'
    },
    {
      icon: <CurrencyDollar size={28} />,
      text: 'Y muchas veces, nadie se da el tiempo de explicarte realmente qué está pasando.'
    }
  ];

  const solutionPoints = [
    {
      icon: <CheckCircle size={28} />,
      text: 'Con nosotros: Hablas directo con el abogado.',
      highlight: true
    },
    {
      icon: <CheckCircle size={28} />,
      text: 'Te hablamos claro, simple y con foco en darte tranquilidad.',
      highlight: true
    },
    {
      icon: <CheckCircle size={28} />,
      text: 'Somos transparentes desde el principio con el valor del servicio.',
      highlight: true
    }
  ];

  return (
    <section 
      id="familia-errors"
      style={{
        padding: isMobile ? '80px 0' : '120px 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.05) 0%, rgba(196, 30, 58, 0) 70%)',
          left: '-100px',
          top: '30%',
          filter: 'blur(40px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 
              style={{
                fontSize: isMobile ? '2.2rem' : '2.8rem',
                fontWeight: 600,
                color: '#1A1A1A',
                marginBottom: '1.5rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              El error común
            </h2>
            
            <div 
              style={{
                width: '60px',
                height: '3px',
                background: '#C41E3A',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}
            />
            
          </motion.div>

          <Row className="g-5">
            {/* Columna de errores comunes */}
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 
                  style={{
                    fontSize: isMobile ? '1.5rem' : '1.8rem',
                    fontWeight: 600,
                    color: '#C41E3A',
                    marginBottom: '2rem',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    textAlign: 'center'
                  }}
                >
                  ❌ Lo que NO queremos para ti
                </h3>
                
                <div style={{ space: '2rem' }}>
                  {errorPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px',
                        marginBottom: '2rem',
                        padding: '20px',
                        background: 'rgba(196, 30, 58, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(196, 30, 58, 0.1)'
                      }}
                    >
                      <div 
                        style={{
                          color: '#C41E3A',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <XCircle size={24} />
                      </div>
                      <p 
                        style={{
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          color: '#333',
                          margin: 0,
                          lineHeight: 1.6,
                          fontWeight: 400,
                          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Columna de nuestras soluciones */}
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 
                  style={{
                    fontSize: isMobile ? '1.5rem' : '1.8rem',
                    fontWeight: 600,
                    color: '#25A855',
                    marginBottom: '2rem',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    textAlign: 'center'
                  }}
                >
                  ✅ Lo que SÍ hacemos por ti
                </h3>
                
                <div style={{ space: '2rem' }}>
                  {solutionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px',
                        marginBottom: '2rem',
                        padding: '20px',
                        background: 'rgba(37, 168, 85, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(37, 168, 85, 0.1)'
                      }}
                    >
                      <div 
                        style={{
                          color: '#25A855',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <CheckCircle size={24} />
                      </div>
                      <p 
                        style={{
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          color: '#333',
                          margin: 0,
                          lineHeight: 1.6,
                          fontWeight: point.highlight ? 500 : 400,
                          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};