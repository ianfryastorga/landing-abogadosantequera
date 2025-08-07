'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Briefcase,
  ArrowLeft
} from 'react-bootstrap-icons';
import { antequeraConfig } from '@/config';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';

export const PymeClosing = () => {
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
      id="pyme-closing"
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
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.12) 0%, rgba(196, 30, 58, 0) 70%)',
          left: '-250px',
          top: '50%',
          transform: 'translateY(-50%)',
          filter: 'blur(120px)',
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
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-200px',
          bottom: '-150px',
          filter: 'blur(100px)',
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
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(196, 30, 58, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 35px',
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
              <Briefcase size={40} />
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
              Somos un partner que resuelve rápido y cuida tu negocio.
              <br />
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
              Hablemos sin compromisos
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
              Estaremos felices de ayudar.
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
              padding: isMobile ? '35px 25px' : '45px 55px',
              margin: '0 auto',
              maxWidth: '650px'
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
              Diagnóstico legal gratuito
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <WhatsAppButton
                text="WhatsApp"
                message="Hola, necesito un partner legal para mi empresa. Me gustaría agendar un diagnóstico legal gratuito."
                size={isMobile ? 'medium' : 'large'}
                variant="primary"
              />
            </motion.div>

            <p 
              style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: '20px 0 0 0',
                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
            </p>
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