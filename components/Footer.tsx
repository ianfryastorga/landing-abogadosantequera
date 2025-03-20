'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { Envelope, Phone, GeoAlt, Clock } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Container>
          <Row className="gy-4 justify-content-between">
            <Col md={5} lg={5}>
              <h3 className="footer-title">
                {antequeraConfig.name}
              </h3>
              
              <p className="footer-description">
                Somos un bufete de abogados comprometido con brindar servicios legales de la más alta calidad, enfocados en resolver las necesidades específicas de cada cliente con excelencia y precisión.
              </p>
            </Col>
            
            <Col md={6} lg={6}>
              <h4 className="footer-heading">Información de contacto</h4>
              
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="contact-label">
                    <GeoAlt className="icon me-2" /> Dirección
                  </span>
                  <span className="contact-text">
                    {antequeraConfig.contactInfo.address}
                  </span>
                </li>
                
                <li className="footer-contact-item">
                  <span className="contact-label">
                    <Phone className="icon me-2" /> Teléfono
                  </span>
                  <a href={`tel:${antequeraConfig.contactInfo.phone}`} className="contact-link">
                    {antequeraConfig.contactInfo.phone}
                  </a>
                </li>
                
                <li className="footer-contact-item">
                  <span className="contact-label">
                    <Envelope className="icon me-2" /> Email
                  </span>
                  <a href={`mailto:${antequeraConfig.contactInfo.email}`} className="contact-link">
                    {antequeraConfig.contactInfo.email}
                  </a>
                </li>
                
                <li className="footer-contact-item">
                  <span className="contact-label">
                    <Clock className="icon me-2" /> Horario
                  </span>
                  <span className="contact-text">
                    Lunes a Viernes: {antequeraConfig.businessHours.weekdays}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}; 