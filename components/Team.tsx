'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';

export const Team = () => {
  return (
    <section 
      id="team" 
      style={{
        padding: '100px 0',
        backgroundColor: '#fff',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 
            style={{
              color: antequeraConfig.colors.primary,
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '2.5rem'
            }}
          >
            Nuestro Equipo
          </h2>
          <p 
            style={{
              color: antequeraConfig.colors.textLight,
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Contamos con un equipo de abogados altamente calificados y con amplia experiencia en sus áreas de especialización
          </p>
        </div>
        
        <Row className="g-4">
          {antequeraConfig.team.map((member, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="border-0 shadow-sm h-100"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div 
                  style={{
                    height: '300px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={`/images/team/member-${index + 1}.jpg`}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '8px 20px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      gap: '10px'
                    }}
                  >
                    <a 
                      href="#" 
                      style={{
                        backgroundColor: '#fff',
                        color: '#0077B5',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={`mailto:${antequeraConfig.contactInfo.email}`}
                      style={{
                        backgroundColor: '#fff',
                        color: antequeraConfig.colors.accent,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <EnvelopeFill size={18} />
                    </a>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <Card.Title 
                    style={{
                      fontWeight: 600,
                      fontSize: '1.35rem',
                      color: antequeraConfig.colors.primary,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {member.name}
                  </Card.Title>
                  
                  <p
                    style={{
                      color: antequeraConfig.colors.accent,
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {member.position}
                  </p>
                  
                  <p
                    style={{
                      color: antequeraConfig.colors.textLight,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginBottom: '1rem'
                    }}
                  >
                    {member.specialty}
                  </p>
                  
                  <Card.Text
                    style={{
                      color: antequeraConfig.colors.text,
                      fontSize: '0.9rem',
                      lineHeight: 1.6
                    }}
                  >
                    {member.bio}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}; 