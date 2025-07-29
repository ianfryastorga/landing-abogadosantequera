'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Heart,
  CurrencyDollar,
  Calendar,
  GeoAlt,
  People
} from 'react-bootstrap-icons';

export const FamiliaProblems = () => {
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

  const problems = [
    {
      icon: <Heart size={32} />,
      title: 'Divorcio complicado',
      color: '#C41E3A'
    },
    {
      icon: <CurrencyDollar size={32} />,
      title: 'Pensión no pagada', 
      color: '#C41E3A'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Problemas de visitas',
      color: '#C41E3A'
    },
    {
      icon: <GeoAlt size={32} />,
      title: 'Permiso para salir del país',
      color: '#C41E3A'
    },
    {
      icon: <People size={32} />,
      title: 'Conflicto con abuelos',
      color: '#C41E3A'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  return (
    <section 
      id="familia-problems"
      style={{
        padding: isMobile ? '80px 0' : '120px 0',
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.98) 0%, rgba(25, 25, 25, 0.95) 50%, rgba(20, 20, 20, 0.98) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Fondo decorativo */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-100px',
          top: '20%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
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
              Cuando hay niños, tensión emocional y miedo al futuro...
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
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.6,
                fontWeight: 300,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Lo legal no es solo un trámite. Es tu paz mental y la de tus hijos.
            </p>
            
            <p 
              style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                margin: '0 auto 3rem',
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Necesitas claridad y cercanía, para devolver la estabilidad a tu familia.
            </p>
          </motion.div>

          <Row className="g-4 justify-content-center">
            {problems.map((problem, index) => (
              <Col xs={12} sm={6} md={4} lg={2} key={index}>
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
                    padding: '30px 20px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: isMobile ? '160px' : '180px'
                  }}
                >
                  <motion.div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: `rgba(196, 30, 58, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      color: problem.color
                    }}
                    whileHover={{
                      background: `rgba(196, 30, 58, 0.2)`,
                      scale: 1.1
                    }}
                  >
                    {problem.icon}
                  </motion.div>
                  
                  <h5 
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#fff',
                      margin: 0,
                      lineHeight: 1.3,
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    {problem.title}
                  </h5>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <style jsx>{`
        @media (max-width: 768px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .problems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};