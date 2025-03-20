'use client';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { GeoAlt, Telephone, Envelope, Clock, Whatsapp, Calendar2Check, Send } from 'react-bootstrap-icons';
import { useState } from 'react';

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

  return (
    <section id="contact" className="contact-section" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(/images/contact-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Agenda una Consulta Gratuita</h2>
          <p className="section-subtitle">
            Completa el formulario y uno de nuestros abogados especializados te contactará para evaluar tu caso sin compromiso
          </p>
        </div>
        
        <Row className="g-4">
          <Col lg={7}>
            <Card className="shadow h-100">
              <Card.Body className="p-4">
                {formSubmitted ? (
                  <div className="text-center py-5">
                    <div className="mb-4" style={{ color: antequeraConfig.colors.accent, fontSize: '3rem' }}>
                      <Calendar2Check />
                    </div>
                    <h3 className="mb-3">¡Gracias por contactarnos!</h3>
                    <p className="mb-4">
                      Hemos recibido tu solicitud de consulta. Nos pondremos en contacto contigo lo antes posible para agendar una reunión con uno de nuestros abogados especialistas.
                    </p>
                    <Button 
                      variant="outline-primary" 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2"
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nombre completo</Form.Label>
                          <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu nombre"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ingresa tu teléfono"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Asunto</Form.Label>
                          <Form.Select 
                            name="asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                            required
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
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Describe brevemente tu consulta legal"
                      />
                    </Form.Group>
                    
                    <div className="text-center">
                      <Button 
                        variant="primary" 
                        type="submit"
                        size="lg"
                        className="px-4"
                      >
                        <Send className="me-2" /> Enviar consulta
                      </Button>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={5}>
            <div className="contact-info-card h-100">
              <h3>Información de Contacto</h3>
              <p>
                Estamos ubicados en el centro de Santiago. No dude en contactarnos por cualquiera de estos medios para resolver sus consultas.
              </p>
              
              <div className="contact-item">
                <GeoAlt size={20} className="icon" />
                <span className="text">{antequeraConfig.contactInfo.address}</span>
              </div>
              
              <div className="contact-item">
                <Telephone size={20} className="icon" />
                <span className="text">{antequeraConfig.contactInfo.phone}</span>
              </div>
              
              <div className="contact-item">
                <Envelope size={20} className="icon" />
                <span className="text">{antequeraConfig.contactInfo.email}</span>
              </div>
              
              <div className="contact-item">
                <Clock size={20} className="icon" />
                <span className="text">
                  Lunes a Viernes: {antequeraConfig.businessHours.weekdays}<br />
                  Sábado: {antequeraConfig.businessHours.saturday}<br />
                  Domingo: {antequeraConfig.businessHours.sunday}
                </span>
              </div>
              
              <a 
                href={`#contact`} 
                className="whatsapp-button"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Esta función estaría disponible en la versión completa del sitio.');
                }}
              >
                <Whatsapp size={20} /> Consulta por WhatsApp
              </a>
              
              <div className="calendar-note mt-4 p-3" style={{ backgroundColor: 'rgba(196, 30, 58, 0.1)', borderRadius: '8px' }}>
                <Calendar2Check size={20} className="mb-2" style={{ color: antequeraConfig.colors.accent }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>¿Por qué agendar una consulta?</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                  Nuestras consultas gratuitas de 15 minutos le permiten discutir brevemente su caso con un abogado especializado y determinar los mejores pasos a seguir para su situación legal.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}; 