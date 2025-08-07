'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Person,
  ChatDots,
  Eye,
  Award
} from 'react-bootstrap-icons';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const PymeSolution = () => {
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

  const solutions = [
    {
      icon: <Person size={32} />,
      title: 'Trabajamos directo contigo',
      description: 'Sin intermediarios. Hablas directamente con un abogado, no con terceros.',
      color: '#C41E3A'
    },
    {
      icon: <ChatDots size={32} />,
      title: 'Te explicamos las cosas como son',
      description: 'Sin tecnicismos confusos. En palabras que cualquier empresario entiende.',
      color: '#C41E3A'
    },
    {
      icon: <Eye size={32} />,
      title: 'Opciones claras para que tú decidas',
      description: 'Te mostramos todas las alternativas para que tomes la mejor decisión para tu negocio.',
      color: '#C41E3A'
    }
  ];

  return (
    <section 
      id="pyme-solution"
      style={{
        padding: isMobile ? '80px 0' : '120px 0',
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.98) 0%, rgba(25, 25, 25, 0.95) 50%, rgba(20, 20, 20, 0.98) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-200px',
          bottom: '-150px',
          filter: 'blur(100px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          left: '-150px',
          top: '10%',
          filter: 'blur(80px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
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
                color: '#fff',
                marginBottom: '1.5rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              Nuestro servicio
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
            
            <p 
              style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
                margin: '0 auto 3rem',
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Antequera Abogados tiene más de 30 años ayudando a pymes a protegerse legalmente sin gastar de más.
            </p>
          </motion.div>

          <Row className="g-4 mb-5">
            {solutions.map((solution, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10
                  }}
                  style={{
                    background: 'rgba(40, 40, 40, 0.6)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '35px 30px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: '300px'
                  }}
                >
                  <motion.div
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      background: `rgba(196, 30, 58, 0.15)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      color: solution.color
                    }}
                    whileHover={{
                      background: `rgba(196, 30, 58, 0.25)`,
                      scale: 1.1,
                      boxShadow: '0 10px 30px rgba(196, 30, 58, 0.2)'
                    }}
                  >
                    {solution.icon}
                  </motion.div>
                  
                  <h4 
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '15px',
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: 1.3
                    }}
                  >
                    {solution.title}
                  </h4>
                  
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      margin: 0,
                      lineHeight: 1.6,
                      fontWeight: 300,
                      fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {solution.description}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Texto de autoridad y lema */}
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              background: 'rgba(40, 40, 40, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(196, 30, 58, 0.2)',
              borderRadius: '16px',
              padding: isMobile ? '35px 25px' : '45px 55px',
              margin: '0 auto',
              maxWidth: '900px'
            }}
          >
            <h3 
              style={{
                fontSize: isMobile ? '1.8rem' : '2.2rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '2rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                textAlign: 'center'
              }}
            >
              Asesoría
            </h3>
            
            <motion.div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(196, 30, 58, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: '#C41E3A'
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Award size={32} />
            </motion.div>
            
            <p 
              style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                color: '#fff',
                fontWeight: 500,
                lineHeight: 1.6,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontStyle: 'italic',
                margin: '0 0 25px 0'
              }}
            >
              🎯 "Asesoría legal para tu día a día. Sin tecnicismos. Con experiencia que da confianza."
            </p>
            
            <WhatsAppButton
              text="Diagnóstico Legal Gratuito"
              message="Hola, necesito un partner legal para mi empresa. Me gustaría agendar un diagnóstico legal gratuito."
              size={isMobile ? 'medium' : 'large'}
              variant="primary"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};