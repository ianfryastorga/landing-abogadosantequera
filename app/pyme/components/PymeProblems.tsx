'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  CurrencyDollar,
  ExclamationTriangle,
  FileText,
  Building,
  QuestionCircle
} from 'react-bootstrap-icons';

export const PymeProblems = () => {
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
      icon: <CurrencyDollar size={32} />,
      title: 'Cliente que no paga',
      color: '#C41E3A'
    },
    {
      icon: <ExclamationTriangle size={32} />,
      title: 'Demanda laboral inesperada', 
      color: '#C41E3A'
    },
    {
      icon: <FileText size={32} />,
      title: 'Contrato que no entiendes',
      color: '#C41E3A'
    },
    {
      icon: <Building size={32} />,
      title: 'Sociedades mal hechas',
      color: '#C41E3A'
    },
    {
      icon: <QuestionCircle size={32} />,
      title: 'Dudas legales que nadie resuelve',
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
      id="pyme-problems"
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
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-150px',
          top: '20%',
          filter: 'blur(80px)',
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
              Tener una pyme es pelear mil batallas.
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
                maxWidth: '700px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.6,
                fontWeight: 300,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Pero cuando se suma un problema legal...
            </p>
            
            <p 
              style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                color: '#fff',
                maxWidth: '800px',
                margin: '0 auto 3rem',
                lineHeight: 1.5,
                fontWeight: 500,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              se vuelve algo que te quita tiempo, dinero y cabeza.
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
                    minHeight: isMobile ? '180px' : '200px'
                  }}
                >
                  <motion.div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `rgba(196, 30, 58, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
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
    </section>
  );
};