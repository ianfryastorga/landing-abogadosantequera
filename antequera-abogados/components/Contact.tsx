'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { antequeraConfig } from '../config';
import { GeoAlt, Telephone, Envelope, Clock, Whatsapp, Calendar2Check } from 'react-bootstrap-icons';
import { useEffect } from 'react';

export const Contact = () => {
  // Cargar el script de Calendly cuando el componente se monte
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="contact-section" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Agenda una Consulta Gratuita</h2>
          <p className="section-subtitle">
            15 minutos con uno de nuestros abogados especializados para evaluar su caso sin compromiso
          </p>
        </div>
        
        <Row className="g-4">
          <Col lg={7}>
            <div className="calendly-container" style={{ 
              minHeight: '650px', 
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/antequera-abogados/consulta-gratuita-15min" 
                style={{ minWidth: '320px', height: '650px' }}
              ></div>
            </div>
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
                href={`https://wa.me/${antequeraConfig.contactInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-button"
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