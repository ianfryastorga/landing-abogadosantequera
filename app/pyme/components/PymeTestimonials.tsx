'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  StarFill
} from 'react-bootstrap-icons';

export const PymeTestimonials = () => {
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

  const testimonials = [
    {
      quote: "Rodrigo Antequera es un abogado que demuestra amplia experiencia, ser responsable, dedicado y empático con sus clientes, en las distintas situaciones en que lo he necesitado. Lo conocí hace 15 años, como profesor de Derecho Tributario, y luego, como abogado de cabecera de mi empresa de muebles. Siempre que lo recomiendo a cercanos, cumple fielmente y con profesionalismo.",
      author: "Luis Vargas M.",
      rating: 5,
      image: "👨"
    },
    {
      quote: "Don Rodrigo Antequera no solo es un excelente abogado, sino que también un ser humano empático con las dificultades de sus clientes. En mi empresa de construcción, siempre me he sentido seguro y apoyado en sus capacidades profesionales.",
      author: "Claudio Abarca",
      rating: 5,
      image: "👨"
    },
    {
      quote: "Conozco a Rodrigo Antequera hace más de 20 años, siempre he contado con su asesoría legal, en mi empresa de Head Hunter, porque siempre he obtenido excelentes resultados en las diversas áreas legales.",
      author: "Sergio Araya",
      rating: 5,
      image: "👨"
    },
    {
      quote: "He quedado muy agradecido de los servicios profesionales prestados por el abogado don Rodrigo Antequera a mi empresa de Corredores de Seguros. Gracias a su asesoría hemos podido solucionar varios problemas legales.",
      author: "Mauricio Vargas O.",
      rating: 5,
      image: "👨"
    },
    {
      quote: "Hace algún tiempo don Rodrigo Antequera, me ayudó frente a un despido injustificado, tomó mi caso, logró resolverlo con resultados totalmente satisfactorios y en muy poco tiempo.",
      author: "Marco Figueroa",
      rating: 5,
      image: "👨"
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
      id="pyme-testimonials"
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
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.03) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-200px',
          top: '20%',
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
                color: '#1A1A1A',
                marginBottom: '1.5rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              Testimonios de asesorías de PYMEs
            </h2>
            
            <div 
              style={{
                width: '60px',
                height: '3px',
                background: '#C41E3A',
                margin: '0 auto 3rem',
                borderRadius: '2px'
              }}
            />
          </motion.div>

          <Row className="g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
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
                    padding: '35px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Icono de comillas */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '35px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C41E3A 0%, #A01729 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 6px 20px rgba(196, 30, 58, 0.25)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>"</span>
                  </motion.div>

                  {/* Estrellas de calificación */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '25px',
                      marginTop: '15px'
                    }}
                  >
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonio */}
                  <blockquote 
                    style={{
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      color: '#333',
                      lineHeight: 1.6,
                      fontWeight: 400,
                      fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontStyle: 'italic',
                      margin: '0 0 30px 0',
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
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(196, 30, 58, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px'
                      }}
                    >
                      {testimonial.image}
                    </div>
                    
                    <div>
                      <h5 
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#1A1A1A',
                          margin: 0,
                          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        {testimonial.author}
                      </h5>
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