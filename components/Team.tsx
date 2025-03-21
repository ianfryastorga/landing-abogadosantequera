'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { motion } from 'framer-motion';
import { Linkedin, EnvelopeFill } from 'react-bootstrap-icons';

export const Team = () => {
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
      id="team" 
      style={{
        padding: '120px 0',
        backgroundColor: '#f9f9f9',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      <Container>
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
            Profesionales
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
            Nuestro Equipo
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
            Contamos con un equipo de abogados altamente calificados y con amplia experiencia en sus áreas de especialización
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4">
            {antequeraConfig.team.map((member, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    height: '100%'
                  }}
                >
                  <div 
                    style={{
                      height: '320px',
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
                        objectFit: 'cover',
                        filter: 'grayscale(10%)'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 50%)'
                      }}
                    ></div>
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '12px'
                      }}
                    >
                      <motion.a 
                        href="#" 
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: '#0077B5',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(5px)'
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={16} />
                      </motion.a>
                      <motion.a 
                        href={`mailto:${antequeraConfig.contactInfo.email}`}
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: '#C41E3A',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(5px)'
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <EnvelopeFill size={16} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div 
                    style={{
                      padding: '30px'
                    }}
                  >
                    <h3 
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        color: '#000',
                        marginBottom: '4px',
                        letterSpacing: '-0.3px'
                      }}
                    >
                      {member.name}
                    </h3>
                    
                    <p
                      style={{
                        color: '#C41E3A',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        marginBottom: '12px'
                      }}
                    >
                      {member.position}
                    </p>
                    
                    <div 
                      style={{
                        width: '30px',
                        height: '2px',
                        background: '#C41E3A',
                        marginBottom: '12px',
                        opacity: 0.7
                      }}
                    ></div>
                    
                    <p
                      style={{
                        color: 'rgba(0,0,0,0.6)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        marginBottom: '12px'
                      }}
                    >
                      {member.specialty}
                    </p>
                    
                    <p
                      style={{
                        color: 'rgba(0,0,0,0.6)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        fontWeight: 300
                      }}
                    >
                      {member.bio}
                    </p>
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