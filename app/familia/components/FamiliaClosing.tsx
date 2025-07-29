'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Chat,
  Heart,
  ArrowLeft,
  Telephone
} from 'react-bootstrap-icons';
import { antequeraConfig } from '@/config';
import Link from 'next/link';

export const FamiliaClosing = () => {
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

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, necesito asesoría legal familiar. Me gustaría coordinar una consulta gratuita para discutir mi situación.');
    window.open(`https://wa.me/${antequeraConfig.contactInfo.whatsapp.replace(/\s+/g, '')}?text=${message}`, '_blank');
  };

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

  return (
    <section 
      id="familia-closing"
      style={{
        padding: isMobile ? '80px 0' : '120px 0',
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 0.98) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.12) 0%, rgba(196, 30, 58, 0) 70%)',
          left: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          filter: 'blur(100px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-150px',
          bottom: '-100px',
          filter: 'blur(80px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
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
            <motion.div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(196, 30, 58, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: '#C41E3A'
              }}
              whileHover={{ scale: 1.1 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={36} />
            </motion.div>

            <h2 
              style={{
                fontSize: isMobile ? '2.2rem' : '3rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '2rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}
            >
              No es solo un problema legal.
              <br />
              Es mucho más que eso.
            </h2>
            
            <div 
              style={{
                width: '80px',
                height: '3px',
                background: '#C41E3A',
                margin: '0 auto 2rem',
                borderRadius: '2px'
              }}
            />
            
            <p 
              style={{
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '700px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.6,
                fontWeight: 400,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Es tu tranquilidad y la de tu familia.
            </p>
            
            <p 
              style={{
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
                lineHeight: 1.6,
                fontWeight: 300,
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Hablemos sin compromiso. Una conversación puede ayudar.
            </p>
          </motion.div>

          {/* CTA Principal */}
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              background: 'rgba(40, 40, 40, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: isMobile ? '30px 20px' : '40px 50px',
              margin: '0 auto',
              maxWidth: '600px'
            }}
          >
            <h3 
              style={{
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '1.5rem',
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Escríbenos para coordinar tu consulta gratuita
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={openWhatsApp}
                style={{
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  padding: isMobile ? '15px 30px' : '18px 40px',
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  margin: '0 auto'
                }}
              >
                <Chat size={24} />
                📲 WhatsApp - Consulta Gratuita
              </Button>
            </motion.div>

            <p 
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: '15px 0 0 0',
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Respuesta inmediata • Sin compromiso • Completamente confidencial
            </p>
          </motion.div>

          {/* Información de contacto adicional */}
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              marginTop: '3rem'
            }}
          >
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href={`tel:${antequeraConfig.contactInfo.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(135deg, #C41E3A 0%, #A01729 100%)',
                  color: '#fff',
                  padding: '16px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  boxShadow: '0 8px 25px rgba(196, 30, 58, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  cursor: 'pointer',
                  minWidth: '180px',
                  justifyContent: 'center'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 12px 35px rgba(196, 30, 58, 0.35)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Telephone size={18} />
                Llamar ahora
              </motion.a>
              
              <motion.a
                href={`mailto:${antequeraConfig.contactInfo.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'transparent',
                  color: '#fff',
                  padding: '16px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  minWidth: '180px',
                  justifyContent: 'center'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  background: 'rgba(255, 255, 255, 0.05)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ fontSize: '18px' }}>📧</span>
                Enviar email
              </motion.a>
            </div>
          </motion.div>

          {/* Botón para volver a la landing principal */}
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              paddingTop: '3rem',
              marginTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={16} />
                Volver a la página principal
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};