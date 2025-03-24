'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { GeoAlt, Telephone, Envelope, Clock, Whatsapp, Calendar2Check } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

export const Contact = () => {
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
      id="contact" 
      style={{
        padding: '120px 0',
        background: '#f9f9f9',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: '-300px',
          left: '-300px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.05) 0%, rgba(196, 30, 58, 0) 70%)',
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
            Contacto
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
            Agenda una Consulta
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
            Contáctanos por WhatsApp y uno de nuestros abogados especializados te atenderá para evaluar tu caso sin compromiso
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="justify-content-center">
            <Col lg={8} xl={7}>
              <motion.div 
                variants={itemVariants}
                style={{
                  borderRadius: '16px',
                  padding: '60px 40px',
                  background: '#000',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '300px',
                    borderRadius: '0 0 0 300px',
                    background: 'radial-gradient(circle at top right, rgba(196, 30, 58, 0.2), rgba(0,0,0,0) 70%)',
                    zIndex: 0
                  }}
                ></div>
                
                <div
                  style={{
                    marginBottom: '30px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <Calendar2Check size={50} style={{ color: '#C41E3A' }} />
                </div>
                
                <h3 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Consulta por WhatsApp
                </h3>
                
                <p 
                  style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: '40px',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 300
                  }}
                >
                  Nuestras consultas te permiten discutir brevemente tu caso con un abogado especializado y determinar los mejores pasos a seguir para tu situación legal.
                </p>
                
                <motion.a 
                  href={`https://wa.me/${antequeraConfig.contactInfo.phone.replace(/\D/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px 32px',
                    background: '#C41E3A',
                    borderRadius: '40px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 4px 25px rgba(196, 30, 58, 0.4)'
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Whatsapp size={22} /> Contactar por WhatsApp
                </motion.a>
                
                <div 
                  style={{
                    marginTop: '60px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <h4 
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      marginBottom: '30px',
                      position: 'relative'
                    }}
                  >
                    Información de Contacto
                  </h4>
                  
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      maxWidth: '400px',
                      margin: '0 auto'
                    }}
                  >
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A'
                        }}
                      >
                        <GeoAlt size={18} />
                      </div>
                      <span 
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.6,
                          textAlign: 'left'
                        }}
                      >
                        {antequeraConfig.contactInfo.address}
                      </span>
                    </div>
                    
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A'
                        }}
                      >
                        <Telephone size={18} />
                      </div>
                      <a 
                        href={`tel:${antequeraConfig.contactInfo.phone}`}
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          textAlign: 'left'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                      >
                        {antequeraConfig.contactInfo.phone}
                      </a>
                    </div>
                    
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A'
                        }}
                      >
                        <Envelope size={18} />
                      </div>
                      <a 
                        href={`mailto:${antequeraConfig.contactInfo.email}`}
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          textAlign: 'left'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                      >
                        {antequeraConfig.contactInfo.email}
                      </a>
                    </div>
                    
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A'
                        }}
                      >
                        <Clock size={18} />
                      </div>
                      <span 
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.6,
                          textAlign: 'left'
                        }}
                      >
                        Lunes a Viernes: {antequeraConfig.businessHours.weekdays}<br />
                        Sábado: {antequeraConfig.businessHours.saturday}<br />
                        Domingo: {antequeraConfig.businessHours.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}; 