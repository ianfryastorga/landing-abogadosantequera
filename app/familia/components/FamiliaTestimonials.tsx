'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  StarFill,
  Quote,
  Person
} from 'react-bootstrap-icons';

export const FamiliaTestimonials = () => {
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

  // Testimonios placeholders como se especificó que están pendientes
  const testimonials = [
    {
      quote: "Sentí que, por primera vez, alguien entendía lo que estaba viviendo.",
      author: "María González",
      case: "Divorcio y custodia compartida",
      rating: 5,
      image: "👩‍💼" // Emoji placeholder mientras llegan las fotos reales
    },
    {
      quote: "No me sentí juzgada. Me explicaron todo con calma y logré un acuerdo justo.",
      author: "Carmen Silva",
      case: "Pensión alimenticia",
      rating: 5,
      image: "👩‍⚖️"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarFill 
        key={i} 
        size={16} 
        style={{ 
          color: i < rating ? '#FFD700' : '#E5E5E5',
          marginRight: '2px'
        }} 
      />
    ));
  };

  return (
    <section 
      id="familia-testimonials"
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
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.03) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-150px',
          top: '20%',
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
                color: '#1A1A1A',
                marginBottom: '1.5rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              Prueba social
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

          <Row className="g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col xs={12} md={6} lg={5} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(196, 30, 58, 0.1)',
                    borderRadius: '16px',
                    padding: '30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Icono de comillas */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '30px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#C41E3A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>"</span>
                  </motion.div>

                  {/* Estrellas de calificación */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '20px',
                      marginTop: '10px'
                    }}
                  >
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonio */}
                  <blockquote 
                    style={{
                      fontSize: isMobile ? '1.1rem' : '1.2rem',
                      color: '#333',
                      lineHeight: 1.6,
                      fontWeight: 400,
                      fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontStyle: 'italic',
                      margin: '0 0 25px 0',
                      flex: 1
                    }}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Información del autor */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginTop: 'auto'
                    }}
                  >
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(196, 30, 58, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px'
                      }}
                    >
                      {testimonial.image}
                    </div>
                    
                    <div>
                      <h5 
                        style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#1A1A1A',
                          margin: '0 0 5px 0',
                          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        {testimonial.author}
                      </h5>
                      <p 
                        style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          margin: 0,
                          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        {testimonial.case}
                      </p>
                    </div>
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