'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Lightbulb,
  Heart,
  Eye,
  CurrencyDollar,
  Award
} from 'react-bootstrap-icons';

export const FamiliaSolution = () => {
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
      icon: <Lightbulb size={32} />,
      title: 'Respuestas rápidas',
      description: 'No te dejamos esperando. Respondemos tus consultas de forma ágil y oportuna.',
      color: '#C41E3A'
    },
    {
      icon: <Heart size={32} />,
      title: 'Acompañamiento real',
      description: 'Estamos contigo en cada paso del proceso, brindándote el apoyo que necesitas.',
      color: '#C41E3A'
    },
    {
      icon: <Eye size={32} />,
      title: 'Claridad legal',
      description: 'Te explicamos todo en términos claros y comprensibles, sin tecnicismos confusos.',
      color: '#C41E3A'
    },
    {
      icon: <CurrencyDollar size={32} />,
      title: 'Honorarios sin sorpresas',
      description: 'Transparencia total en costos desde el primer momento. Sin cobros ocultos.',
      color: '#C41E3A'
    }
  ];

  return (
    <section 
      id="familia-solution"
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
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-150px',
          bottom: '-100px',
          filter: 'blur(80px)',
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
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          left: '-100px',
          top: '10%',
          filter: 'blur(60px)',
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
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                margin: '0 auto 1rem',
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Antequera Abogados lleva más de 30 años ayudando a familias como la tuya.
            </p>
            
            <p 
              style={{
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
                lineHeight: 1.6,
                fontWeight: 300,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Sabemos que necesitas:
            </p>
          </motion.div>

          <Row className="g-4 mb-5">
            {solutions.map((solution, index) => (
              <Col xs={12} sm={6} lg={3} key={index}>
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
                    padding: '30px 25px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: '280px'
                  }}
                >
                  <motion.div
                    style={{
                      width: '80px',
                      height: '80px',
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
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '15px',
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                      lineHeight: 1.3
                    }}
                  >
                    ✅ {solution.title}
                  </h4>
                  
                  <p 
                    style={{
                      fontSize: '0.95rem',
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

          {/* Texto de autoridad */}
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              background: 'rgba(40, 40, 40, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(196, 30, 58, 0.2)',
              borderRadius: '16px',
              padding: isMobile ? '30px 20px' : '40px 50px',
              margin: '0 auto',
              maxWidth: '800px'
            }}
          >
            <motion.div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(196, 30, 58, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                color: '#C41E3A'
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Award size={28} />
            </motion.div>
            
            <p 
              style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: '#fff',
                fontWeight: 500,
                lineHeight: 1.6,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                fontStyle: 'italic',
                margin: '0 0 25px 0'
              }}
            >
              "Cada persona tiene una historia y una familia que cuidar. Nuestra misión es ayudarte a lograrlo."
            </p>
            
            <WhatsAppButton
              text="Diagnóstico Legal Gratuito"
              message="Hola, necesito ayuda legal familiar. Me gustaría agendar un diagnóstico legal gratuito."
              size={isMobile ? 'medium' : 'large'}
              variant="primary"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};