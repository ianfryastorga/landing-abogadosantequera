'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { Quote, StarFill } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
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

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      id="testimonials" 
      style={{
        padding: '120px 0',
        background: '#000',
        color: '#fff',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Efecto de gradiente */}
      <div 
        style={{
          position: 'absolute',
          top: '-300px',
          right: '-300px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.2) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 1
        }}
      ></div>
      
      <Container style={{ position: 'relative', zIndex: 5 }}>
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
            Testimonios
          </div>
          
          <h2 
            style={{
              fontSize: '2.8rem',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '24px',
              letterSpacing: '-0.5px'
            }}
          >
            Lo que dicen nuestros clientes
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
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            La confianza y satisfacción de nuestros clientes es nuestro mayor testimonio
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4 justify-content-center">
            {antequeraConfig.testimonials.map((testimonial, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    backdropFilter: 'blur(40px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '100px',
                      height: '100px',
                      borderRadius: '0 0 0 100px',
                      background: 'radial-gradient(circle at top right, rgba(196, 30, 58, 0.15), rgba(196, 30, 58, 0))',
                      zIndex: 0
                    }}
                  ></div>
                  
                  <div 
                    style={{
                      color: '#C41E3A',
                      marginBottom: '20px',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <Quote size={30} />
                  </div>
                  
                  <p 
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '30px',
                      minHeight: isMobile ? 'auto' : '120px',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '15px',
                        border: '2px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <img 
                        src={`/images/testimonials/person-${index + 1}.jpg`}
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div>
                      <h5 
                        style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          marginBottom: '3px',
                          color: '#fff'
                        }}
                      >
                        {testimonial.name}
                      </h5>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          margin: 0,
                          color: 'rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    style={{
                      marginTop: '15px',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarFill 
                        key={i} 
                        style={{
                          color: '#C41E3A',
                          marginRight: '3px'
                        }}
                        size={12}
                      />
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}; 