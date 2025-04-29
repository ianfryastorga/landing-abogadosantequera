'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { GeoAlt, Telephone, Envelope, Clock, Whatsapp, Calendar2Check } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import BlobAnimation from './BlobAnimation';

// Componente para crear puntos flotantes con estela luminosa
const FloatingParticle = ({ index, count }: { index: number, count: number }) => {
  // Generar posiciones y características aleatorias
  const size = Math.random() * 6 + 3;
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = Math.random() * 10 + 15;
  const opacity = Math.random() * 0.4 + 0.3;
  
  // Calcular la posición final basada en el índice para crear un movimiento en espiral
  const angle = (index / count) * Math.PI * 2;
  const radius = Math.random() * 30 + 20;
  
  // Color basado en el índice
  const hue = (index % 2 === 0) ? 0 : 355; // Variación entre blanco y rojo
  const saturation = (index % 2 === 0) ? '0%' : '80%';
  const lightness = (index % 2 === 0) ? '100%' : '40%';
  const alpha = opacity;
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`,
        left: `${initialX}%`,
        top: `${initialY}%`,
        filter: 'blur(1px)',
        zIndex: 1,
        boxShadow: index % 2 === 0 ? 
          '0 0 8px rgba(255, 255, 255, 0.3)' : 
          '0 0 12px rgba(196, 30, 58, 0.4)'
      }}
      animate={{
        x: [0, Math.cos(angle) * radius],
        y: [0, Math.sin(angle) * radius],
        opacity: [0, opacity, 0],
        scale: [0, 1, 0.8, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Componente para crear el efecto de haz de luz que atraviesa la pantalla
const LightBeam = ({ index }: { index: number }) => {
  const width = index % 2 === 0 ? '200%' : '150%';
  const height = (index % 3 === 0) ? '2px' : '1px';
  const delay = index * 2;
  const duration = (index % 2 === 0) ? 8 : 12;
  const rotate = -15 + (index * 10);
  const top = 20 + (index * 15) + '%';
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width,
        height,
        background: index % 2 === 0 ? 
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' : 
          'linear-gradient(90deg, transparent, rgba(196, 30, 58, 0.2), transparent)',
        transform: `rotate(${rotate}deg)`,
        top,
        left: '-50%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
      animate={{
        left: ['-50%', '100%']
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Componente para el efecto de nebulosa flotante
const NebulaEffect = ({ index }: { index: number }) => {
  const size = 300 + (index * 100);
  const posX = index % 2 === 0 ? -size/3 : 100 - size/3;
  const posY = 20 + (index * 30);
  const delay = index * 0.5;
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: index % 2 === 0 ? 
          'radial-gradient(circle, rgba(196, 30, 58, 0.12) 0%, rgba(196, 30, 58, 0) 70%)' : 
          'radial-gradient(circle, rgba(30, 30, 30, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
        left: `${posX}%`,
        top: `${posY}%`,
        filter: 'blur(60px)',
        zIndex: 0,
        opacity: 0.7
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.7, 0.4],
        x: [0, 20, 0],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const Contact = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Manejar movimiento del mouse para efectos de parallax
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  // Calcular valores para efectos de parallax
  const moveX = (mousePosition.x - 0.5) * 40;
  const moveY = (mousePosition.y - 0.5) * 40;
  
  // Generar arrays para elementos visuales
  const particles = Array.from({ length: 30 }, (_, i) => i);
  const lightBeams = Array.from({ length: 3 }, (_, i) => i);
  const nebulas = Array.from({ length: 3 }, (_, i) => i);

  return (
    <section 
      id="contact" 
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
      ref={containerRef}
    >
      {/* Fondo animado de Blob */}
      <BlobAnimation />
      
      {/* Fondo oscuro semi-transparente para mejorar legibilidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(25, 25, 25, 0.9) 100%)',
        zIndex: 0
      }} />
      
      {/* Fondo de estrellas/partículas */}
      {particles.map((i) => (
        <FloatingParticle key={i} index={i} count={particles.length} />
      ))}
      
      {/* Efectos de luz que atraviesan la pantalla */}
      {lightBeams.map((i) => (
        <LightBeam key={i} index={i} />
      ))}
      
      {/* Efectos de nebulosa */}
      {nebulas.map((i) => (
        <NebulaEffect key={i} index={i} />
      ))}
      
      {/* Elementos decorativos de fondo con movimiento parallax */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.15) 0%, rgba(196, 30, 58, 0) 70%)',
          right: '-200px',
          top: '-100px',
          filter: 'blur(90px)',
          zIndex: 0,
          x: moveX * -0.5,
          y: moveY * -0.5
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 20,
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
          left: '-150px',
          bottom: '0px',
          filter: 'blur(70px)',
          zIndex: 0,
          x: moveX * 0.5,
          y: moveY * 0.5
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Efecto de desenfoque en movimiento (blur glow) */}
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(196, 30, 58, 0.05) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          opacity: 0.8,
          x: moveX,
          y: moveY
        }}
      />
      
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
          <motion.div 
            style={{
              display: 'inline-block',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'rgba(196, 30, 58, 0.9)',
              marginBottom: '16px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              position: 'relative'
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Pequeño punto decorativo */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '-15px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'rgba(196, 30, 58, 0.7)',
                transform: 'translateY(-50%)',
                boxShadow: '0 0 10px rgba(196, 30, 58, 0.5)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  '0 0 5px rgba(196, 30, 58, 0.3)',
                  '0 0 10px rgba(196, 30, 58, 0.7)',
                  '0 0 5px rgba(196, 30, 58, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {t('contact.title')}
            {/* Pequeño punto decorativo */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                right: '-15px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'rgba(196, 30, 58, 0.7)',
                transform: 'translateY(-50%)',
                boxShadow: '0 0 10px rgba(196, 30, 58, 0.5)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  '0 0 5px rgba(196, 30, 58, 0.3)',
                  '0 0 10px rgba(196, 30, 58, 0.7)',
                  '0 0 5px rgba(196, 30, 58, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
          
          <motion.h2 
            style={{
              fontSize: '2.8rem',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '24px',
              letterSpacing: '-0.5px',
              position: 'relative'
            }}
            whileHover={{ scale: 1.02 }}
          >
            {t('contact.heading')}
          </motion.h2>
          
          <motion.div 
            style={{
              width: '40px',
              height: '3px',
              background: 'rgba(196, 30, 58, 0.9)',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }}
            whileInView={{
              width: ['0px', '40px']
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 300
            }}
            whileHover={{ scale: 1.01 }}
          >
            {t('contact.description')}
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="justify-content-center">
            <Col lg={8} xl={7}>
              <motion.div 
                variants={itemVariants}
                style={{
                  borderRadius: '24px',
                  padding: '60px 40px',
                  background: 'rgba(40, 40, 40, 0.4)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2), 0 15px 40px rgba(196, 30, 58, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3), 0 15px 40px rgba(196, 30, 58, 0.1)'
                }}
              >
                {/* Borde brillante animado */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '24px',
                    padding: '1px',
                    background: 'linear-gradient(135deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none'
                  }}
                  animate={{
                    background: [
                      'linear-gradient(135deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
                      'linear-gradient(225deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
                      'linear-gradient(315deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
                      'linear-gradient(45deg, transparent, rgba(196, 30, 58, 0.3), transparent)',
                      'linear-gradient(135deg, transparent, rgba(196, 30, 58, 0.3), transparent)'
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Efecto de círculo brillante */}
                <motion.div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '300px',
                    borderRadius: '0 0 0 300px',
                    background: 'radial-gradient(circle at top right, rgba(196, 30, 58, 0.3), rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    filter: 'blur(30px)'
                  }}
                  animate={{
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Bruma colorida interior */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at bottom left, rgba(196, 30, 58, 0.1), transparent 70%)',
                    zIndex: 0,
                    opacity: 0.6
                  }}
                  animate={{
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Efecto de línea brillante horizontal */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '30%',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    zIndex: 0
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  style={{
                    marginBottom: '30px',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                >
                    <Calendar2Check size={50} style={{ 
                      color: '#C41E3A', 
                      filter: 'drop-shadow(0 0 10px rgba(196, 30, 58, 0.5))' 
                    }} />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                    color: '#FFFFFF'
                  }}
                  whileHover={{ scale: 1.02, color: '#FFFFFF' }}
                >
                  {t('contact.card.title')}
                </motion.h3>
                
                <motion.p 
                  style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: '40px',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 300
                  }}
                >
                  {t('contact.card.description')}
                </motion.p>
                
                <motion.a 
                  href={`https://wa.me/${antequeraConfig.contactInfo.phone.replace(/\D/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '16px 32px',
                    background: 'rgba(196, 30, 58, 0.9)',
                    borderRadius: '40px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    boxShadow: '0 5px 15px rgba(196, 30, 58, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid rgba(196, 30, 58, 0.7)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 5px 25px rgba(196, 30, 58, 0.4)'
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Whatsapp size={22} /> {t('contact.card.button')}
                </motion.a>
                
                <motion.div 
                  style={{
                    marginTop: '60px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <motion.h4 
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      marginBottom: '30px',
                      position: 'relative'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {t('contact.info.title')}
                  </motion.h4>
                  
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      maxWidth: '400px',
                      margin: '0 auto'
                    }}
                  >
                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <motion.div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A',
                          boxShadow: '0 0 15px rgba(196, 30, 58, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          background: 'rgba(196, 30, 58, 0.2)',
                          boxShadow: '0 0 20px rgba(196, 30, 58, 0.3)'
                        }}
                      >
                        <GeoAlt size={18} />
                      </motion.div>
                      <span 
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.6,
                          textAlign: 'left'
                        }}
                      >
                        {antequeraConfig.contactInfo.address}
                      </span>
                    </motion.div>
                    
                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <motion.div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A',
                          boxShadow: '0 0 15px rgba(196, 30, 58, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          background: 'rgba(196, 30, 58, 0.2)',
                          boxShadow: '0 0 20px rgba(196, 30, 58, 0.3)'
                        }}
                      >
                        <Telephone size={18} />
                      </motion.div>
                      <motion.a 
                        href={`tel:${antequeraConfig.contactInfo.phone}`}
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          textAlign: 'left'
                        }}
                        whileHover={{ color: '#fff', scale: 1.02 }}
                      >
                        {antequeraConfig.contactInfo.phone}
                      </motion.a>
                    </motion.div>
                    
                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <motion.div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A',
                          boxShadow: '0 0 15px rgba(196, 30, 58, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          background: 'rgba(196, 30, 58, 0.2)',
                          boxShadow: '0 0 20px rgba(196, 30, 58, 0.3)'
                        }}
                      >
                        <Envelope size={18} />
                      </motion.div>
                      <motion.a 
                        href={`mailto:${antequeraConfig.contactInfo.email}`}
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          textAlign: 'left'
                        }}
                        whileHover={{ color: '#fff', scale: 1.02 }}
                      >
                        {antequeraConfig.contactInfo.email}
                      </motion.a>
                    </motion.div>
                    
                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <motion.div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(196, 30, 58, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#C41E3A',
                          boxShadow: '0 0 15px rgba(196, 30, 58, 0.2)'
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          background: 'rgba(196, 30, 58, 0.2)',
                          boxShadow: '0 0 20px rgba(196, 30, 58, 0.3)'
                        }}
                      >
                        <Clock size={18} />
                      </motion.div>
                      <span 
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.6,
                          textAlign: 'left'
                        }}
                      >
                        {t('contact.schedule')}: {antequeraConfig.businessHours.weekdays}<br />
                  
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}; 