'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { antequeraConfig } from '../config';
import { Quote, StarFill } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

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

  return (
    <section 
      id="testimonials" 
      style={{
        padding: '100px 0',
        backgroundImage: 'linear-gradient(rgba(42, 67, 101, 0.9), rgba(42, 67, 101, 0.9)), url(https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=2832&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        fontFamily: 'Poppins, sans-serif',
        color: '#fff'
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 
            style={{
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '2.5rem'
            }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p 
            style={{
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.9
            }}
          >
            La confianza y satisfacción de nuestros clientes es nuestro mayor testimonio
          </p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {antequeraConfig.testimonials.map((testimonial, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="border-0 h-100"
                style={{
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Card.Body className="p-4">
                  <div 
                    style={{
                      color: antequeraConfig.colors.accent,
                      marginBottom: '1.25rem',
                      fontSize: '2rem'
                    }}
                  >
                    <Quote />
                  </div>
                  
                  <Card.Text
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      minHeight: isMobile ? 'auto' : '120px'
                    }}
                  >
                    {testimonial.testimonial}
                  </Card.Text>
                  
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '15px'
                      }}
                    >
                      <img 
                        src={testimonial.image} 
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
                          fontWeight: 600,
                          fontSize: '1rem',
                          marginBottom: '0.2rem'
                        }}
                      >
                        {testimonial.name}
                      </h5>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          margin: 0,
                          opacity: 0.8
                        }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    style={{
                      marginTop: '15px'
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarFill 
                        key={i} 
                        style={{
                          color: '#FFD700',
                          marginRight: '3px'
                        }}
                        size={14}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}; 