'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { GeoAlt, Telephone, Envelope, Clock, Whatsapp, Calendar2Check, Send } from 'react-bootstrap-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    asunto: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No realizar petición HTTP, solo simular el envío
    console.log('Formulario enviado:', formData);
    setFormSubmitted(true);
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      asunto: ''
    });
  };

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
            Agenda una Consulta Gratuita
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
            Completa el formulario y uno de nuestros abogados especializados te contactará para evaluar tu caso sin compromiso
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-5">
            <Col lg={7}>
              <motion.div 
                variants={itemVariants}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '40px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  height: '100%'
                }}
              >
                {formSubmitted ? (
                  <div 
                    style={{
                      textAlign: 'center',
                      padding: '40px 20px'
                    }}
                  >
                    <div 
                      style={{ 
                        color: '#C41E3A', 
                        fontSize: '4rem',
                        marginBottom: '24px'
                      }}
                    >
                      <Calendar2Check />
                    </div>
                    <h3 
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 600,
                        marginBottom: '20px',
                        color: '#000'
                      }}
                    >
                      ¡Gracias por contactarnos!
                    </h3>
                    <p 
                      style={{
                        fontSize: '1.1rem',
                        color: 'rgba(0,0,0,0.6)',
                        marginBottom: '30px',
                        lineHeight: 1.6,
                        maxWidth: '500px',
                        margin: '0 auto 30px'
                      }}
                    >
                      Hemos recibido tu solicitud de consulta. Nos pondremos en contacto contigo lo antes posible para agendar una reunión con uno de nuestros abogados especialistas.
                    </p>
                    <motion.button 
                      onClick={() => setFormSubmitted(false)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #C41E3A',
                        color: '#C41E3A',
                        padding: '12px 24px',
                        borderRadius: '30px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 4px 15px rgba(196, 30, 58, 0.1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enviar otra consulta
                    </motion.button>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group 
                          style={{ marginBottom: '24px' }}
                        >
                          <Form.Label 
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: 'rgba(0,0,0,0.7)',
                              marginBottom: '8px'
                            }}
                          >
                            Nombre completo
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu nombre"
                            style={{
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              border: '1px solid rgba(0,0,0,0.1)',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.01)'
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group 
                          style={{ marginBottom: '24px' }}
                        >
                          <Form.Label 
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: 'rgba(0,0,0,0.7)',
                              marginBottom: '8px'
                            }}
                          >
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu email"
                            style={{
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              border: '1px solid rgba(0,0,0,0.1)',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.01)'
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group 
                          style={{ marginBottom: '24px' }}
                        >
                          <Form.Label 
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: 'rgba(0,0,0,0.7)',
                              marginBottom: '8px'
                            }}
                          >
                            Teléfono
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ingresa tu teléfono"
                            style={{
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              border: '1px solid rgba(0,0,0,0.1)',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.01)'
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group 
                          style={{ marginBottom: '24px' }}
                        >
                          <Form.Label 
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: 'rgba(0,0,0,0.7)',
                              marginBottom: '8px'
                            }}
                          >
                            Asunto
                          </Form.Label>
                          <Form.Select 
                            name="asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                            required
                            style={{
                              padding: '12px 16px',
                              fontSize: '0.95rem',
                              border: '1px solid rgba(0,0,0,0.1)',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.01)',
                              height: 'auto'
                            }}
                          >
                            <option value="">Selecciona un área legal</option>
                            {antequeraConfig.practiceAreas.map((area, index) => (
                              <option key={index} value={area.title}>
                                {area.title}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group 
                      style={{ marginBottom: '30px' }}
                    >
                      <Form.Label 
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'rgba(0,0,0,0.7)',
                          marginBottom: '8px'
                        }}
                      >
                        Mensaje
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Describe brevemente tu consulta legal"
                        style={{
                          padding: '16px',
                          fontSize: '0.95rem',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0,0,0,0.01)'
                        }}
                      />
                    </Form.Group>
                    
                    <div style={{ textAlign: 'center' }}>
                      <motion.button 
                        type="submit"
                        style={{
                          background: '#C41E3A',
                          color: '#fff',
                          border: 'none',
                          padding: '14px 32px',
                          borderRadius: '30px',
                          fontSize: '1rem',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(196, 30, 58, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 4px 20px rgba(196, 30, 58, 0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send size={16} /> Enviar consulta
                      </motion.button>
                    </div>
                  </Form>
                )}
              </motion.div>
            </Col>
            
            <Col lg={5}>
              <motion.div 
                variants={itemVariants}
                style={{
                  borderRadius: '16px',
                  padding: '40px',
                  height: '100%',
                  background: '#000',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    borderRadius: '0 0 0 200px',
                    background: 'radial-gradient(circle at top right, rgba(196, 30, 58, 0.2), rgba(0,0,0,0) 70%)',
                    zIndex: 0
                  }}
                ></div>
                
                <h3 
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Información de Contacto
                </h3>
                
                <p 
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '30px',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 300
                  }}
                >
                  Estamos ubicados en el centro de Santiago. No dude en contactarnos por cualquiera de estos medios para resolver sus consultas.
                </p>
                
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(196, 30, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                      color: '#C41E3A'
                    }}
                  >
                    <GeoAlt size={16} />
                  </div>
                  <span 
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.6
                    }}
                  >
                    {antequeraConfig.contactInfo.address}
                  </span>
                </div>
                
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(196, 30, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                      color: '#C41E3A'
                    }}
                  >
                    <Telephone size={16} />
                  </div>
                  <a 
                    href={`tel:${antequeraConfig.contactInfo.phone}`}
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
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
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(196, 30, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                      color: '#C41E3A'
                    }}
                  >
                    <Envelope size={16} />
                  </div>
                  <a 
                    href={`mailto:${antequeraConfig.contactInfo.email}`}
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
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
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(196, 30, 58, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0,
                      color: '#C41E3A'
                    }}
                  >
                    <Clock size={16} />
                  </div>
                  <span 
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.6
                    }}
                  >
                    Lunes a Viernes: {antequeraConfig.businessHours.weekdays}<br />
                    Sábado: {antequeraConfig.businessHours.saturday}<br />
                    Domingo: {antequeraConfig.businessHours.sunday}
                  </span>
                </div>
                
                <motion.a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Esta función estaría disponible en la versión completa del sitio.');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '30px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    background: 'rgba(255,255,255,0.15)'
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Whatsapp size={18} /> Consulta por WhatsApp
                </motion.a>
                
                <div 
                  style={{
                    marginTop: '30px',
                    padding: '24px',
                    borderRadius: '12px',
                    background: 'rgba(196, 30, 58, 0.1)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{
                      color: '#C41E3A',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}
                  >
                    <Calendar2Check size={18} />
                  </div>
                  <h4 
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}
                  >
                    ¿Por qué agendar una consulta?
                  </h4>
                  <p 
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.8)',
                      marginBottom: 0,
                      lineHeight: 1.6,
                      fontWeight: 300
                    }}
                  >
                    Nuestras consultas gratuitas de 15 minutos le permiten discutir brevemente su caso con un abogado especializado y determinar los mejores pasos a seguir para su situación legal.
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}; 