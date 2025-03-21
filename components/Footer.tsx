'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { Envelope, Phone, GeoAlt, Clock } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        background: '#000',
        color: '#fff',
        padding: '80px 0 30px',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: '-200px',
          left: '-200px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.1) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0
        }}
      ></div>
      
      <Container style={{ position: 'relative', zIndex: 5 }}>
        <Row className="gy-5 justify-content-between mb-5">
          <Col md={5} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  letterSpacing: '-0.5px'
                }}
              >
                {antequeraConfig.name}
              </h3>
              
              <div 
                style={{
                  width: '30px',
                  height: '2px',
                  background: '#C41E3A',
                  marginBottom: '20px',
                  borderRadius: '2px'
                }}
              ></div>
              
              <p 
                style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '30px',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: '400px'
                }}
              >
                Somos un bufete de abogados comprometido con brindar servicios legales de la más alta calidad, enfocados en resolver las necesidades específicas de cada cliente con excelencia y precisión.
              </p>
            </motion.div>
          </Col>
          
          <Col md={6} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  letterSpacing: '0.3px',
                  color: 'rgba(255,255,255,0.9)'
                }}
              >
                Información de contacto
              </h4>
              
              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                <li 
                  style={{
                    display: 'flex',
                    marginBottom: '15px'
                  }}
                >
                  <div 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(196, 30, 58, 0.1)',
                      color: '#C41E3A',
                      marginRight: '15px',
                      flexShrink: 0
                    }}
                  >
                    <GeoAlt size={15} />
                  </div>
                  <div>
                    <span 
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '3px'
                      }}
                    >
                      Dirección
                    </span>
                    <span 
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 300
                      }}
                    >
                      {antequeraConfig.contactInfo.address}
                    </span>
                  </div>
                </li>
                
                <li 
                  style={{
                    display: 'flex',
                    marginBottom: '15px'
                  }}
                >
                  <div 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(196, 30, 58, 0.1)',
                      color: '#C41E3A',
                      marginRight: '15px',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={15} />
                  </div>
                  <div>
                    <span 
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '3px'
                      }}
                    >
                      Teléfono
                    </span>
                    <a 
                      href={`tel:${antequeraConfig.contactInfo.phone}`} 
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.9)',
                        textDecoration: 'none',
                        fontWeight: 300,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    >
                      {antequeraConfig.contactInfo.phone}
                    </a>
                  </div>
                </li>
                
                <li 
                  style={{
                    display: 'flex',
                    marginBottom: '15px'
                  }}
                >
                  <div 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(196, 30, 58, 0.1)',
                      color: '#C41E3A',
                      marginRight: '15px',
                      flexShrink: 0
                    }}
                  >
                    <Envelope size={15} />
                  </div>
                  <div>
                    <span 
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '3px'
                      }}
                    >
                      Email
                    </span>
                    <a 
                      href={`mailto:${antequeraConfig.contactInfo.email}`} 
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.9)',
                        textDecoration: 'none',
                        fontWeight: 300,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    >
                      {antequeraConfig.contactInfo.email}
                    </a>
                  </div>
                </li>
                
                <li 
                  style={{
                    display: 'flex'
                  }}
                >
                  <div 
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(196, 30, 58, 0.1)',
                      color: '#C41E3A',
                      marginRight: '15px',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={15} />
                  </div>
                  <div>
                    <span 
                      style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: '3px'
                      }}
                    >
                      Horario
                    </span>
                    <span 
                      style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 300
                      }}
                    >
                      Lunes a Viernes: {antequeraConfig.businessHours.weekdays}
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
        
        <div 
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300
          }}
        >
          <p style={{ margin: 0 }}>
            © {currentYear} {antequeraConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}; 