'use client';

import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { 
  CreditCard2Front,
  Briefcase, 
  Building, 
  Calculator,
  House,
  ShieldLock,
  People,
  X,
  ChevronRight,
  ArrowRight
} from 'react-bootstrap-icons';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import BlobAnimation from './BlobAnimation';
import Link from 'next/link';

interface AreaTranslations {
  [key: string]: {
    en: string;
    es: string;
  };
}

// Componente para crear puntos flotantes con estela luminosa
const FloatingParticle = ({ index, count }: { index: number, count: number }) => {
  // Usar valores más simples y menos cálculos
  const size = (index % 3) + 3; // Simplificar cálculo
  const initialX = (index * 17) % 100; // Distribuir uniformemente
  const initialY = (index * 13) % 100;
  const delay = index * 0.2; // Retraso predecible
  const duration = 15 + (index % 5); // Menos variación
  
  // Simplificar cálculos angulares
  const angle = (index / count) * Math.PI * 2;
  const radius = 25;
  
  // Solo dos colores alternativos en vez de cálculos complejos
  const isWhite = index % 2 === 0;
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: isWhite ? 'rgba(255, 255, 255, 0.4)' : 'rgba(196, 30, 58, 0.4)',
        left: `${initialX}%`,
        top: `${initialY}%`,
        filter: 'blur(1px)',
        zIndex: 1,
        // Eliminar boxShadow para mejor rendimiento
      }}
      animate={{
        x: [0, Math.cos(angle) * radius],
        y: [0, Math.sin(angle) * radius],
        opacity: [0, 0.4, 0]
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
  // Simplificar cálculos
  const width = index % 2 === 0 ? '150%' : '120%';
  const height = '1px';
  const delay = index * 3;
  const duration = 10;
  const rotate = index * 10;
  const top = 20 + (index * 20) + '%';
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        width,
        height,
        background: index % 2 === 0 ? 
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' : 
          'linear-gradient(90deg, transparent, rgba(196, 30, 58, 0.15), transparent)',
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
  const size = 300 + (index * 150);
  const posX = index % 2 === 0 ? -size/3 : 100 - size/3;
  const posY = 20 + (index * 40);
  
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: index % 2 === 0 ? 
          'radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0) 70%)' : 
          'radial-gradient(circle, rgba(30, 30, 30, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        left: `${posX}%`,
        top: `${posY}%`,
        filter: 'blur(60px)',
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
};

export const PracticeAreas = () => {
  const { t, language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<null | {
    title: string;
    description: string;
    detailedDescription: string;
    icon: string;
  }>(null);
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar si las animaciones están completas
  const [animationComplete, setAnimationComplete] = useState(false);
  
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
  
  useEffect(() => {
    // Marcar las animaciones como completas después de 1.5 segundos
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => setShowModal(false);
  
  const handleShow = (area: any) => {
    // Si es derecho de familia, navegar a la página específica
    if (area.title === 'Derecho de Familia') {
      window.location.href = '/familia';
      return;
    }
    setSelectedArea(area);
    setShowModal(true);
  };
  
  // Traducciones de las áreas de práctica
  const practiceAreaTranslations: AreaTranslations = {
    'Derecho Civil': {
      en: 'Civil Law',
      es: 'Derecho Civil'
    },
    'Derecho Laboral': {
      en: 'Labor Law',
      es: 'Derecho Laboral'
    },
    'Derecho Corporativo': {
      en: 'Corporate Law',
      es: 'Derecho Corporativo'
    },
    'Derecho Tributario': {
      en: 'Tax Law',
      es: 'Derecho Tributario'
    },
    'Derecho Inmobiliario': {
      en: 'Real Estate Law',
      es: 'Derecho Inmobiliario'
    },
    'Derecho Penal': {
      en: 'Criminal Law',
      es: 'Derecho Penal'
    },
    'Derecho de Familia': {
      en: 'Family Law',
      es: 'Derecho de Familia'
    },
    'Derecho Administrativo': {
      en: 'Administrative Law',
      es: 'Derecho Administrativo'
    }
  };
  
  // Traducciones de las descripciones cortas
  const descriptionTranslations: AreaTranslations = {
    'Representación y asesoría en litigios civiles y comerciales complejos, conflictos entre socios y otras disputas legales con soluciones efectivas.': {
      en: 'Representation and advice in complex civil and commercial litigation, partner disputes, and other legal conflicts with effective solutions.',
      es: 'Representación y asesoría en litigios civiles y comerciales complejos, conflictos entre socios y otras disputas legales con soluciones efectivas.'
    },
    'Asesoría en contratación, finalizaciones laborales, compensaciones, subcontrataciones y políticas corporativas tanto para empleadores como trabajadores.': {
      en: 'Advice on hiring, employment terminations, compensation, subcontracting, and corporate policies for both employers and workers.',
      es: 'Asesoría en contratación, finalizaciones laborales, compensaciones, subcontrataciones y políticas corporativas tanto para empleadores como trabajadores.'
    },
    'Asistencia integral en ESG, derecho ambiental, comercio internacional y cumplimiento normativo para empresas nacionales e internacionales.': {
      en: 'Comprehensive assistance in ESG, environmental law, international trade, and regulatory compliance for national and international companies.',
      es: 'Asistencia integral en ESG, derecho ambiental, comercio internacional y cumplimiento normativo para empresas nacionales e internacionales.'
    },
    'Equipo multidisciplinario de abogados, contadores y economistas que brindan asesoría fiscal nacional e internacional con enfoque práctico.': {
      en: 'Multidisciplinary team of lawyers, accountants, and economists providing national and international tax advice with a practical approach.',
      es: 'Equipo multidisciplinario de abogados, contadores y economistas que brindan asesoría fiscal nacional e internacional con enfoque práctico.'
    },
    'Servicios legales para transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.': {
      en: 'Legal services for real estate transactions, leases, permits, and regularizations with complete legal security.',
      es: 'Servicios legales para transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.'
    },
    'Especialización en litigios complejos, consultoría en delitos económicos, fiscales, cibercrímenes y prevención de riesgos penales.': {
      en: 'Specialization in complex litigation, consulting on economic crimes, tax offenses, cybercrimes, and prevention of criminal risks.',
      es: 'Especialización en litigios complejos, consultoría en delitos económicos, fiscales, cibercrímenes y prevención de riesgos penales.'
    },
    'Especialización en asuntos familiares como separaciones, pensiones alimenticias, derechos de visita, custodia y adopción con servicios de alta calidad.': {
      en: 'Specialization in family matters such as separations, alimony, visitation rights, custody, and adoption with high-quality services.',
      es: 'Especialización en asuntos familiares como separaciones, pensiones alimenticias, derechos de visita, custodia y adopción con servicios de alta calidad.'
    },
    'Asesoramiento en derecho constitucional, administrativo, energía, contratación pública y representación ante entidades gubernamentales.': {
      en: 'Advice on constitutional law, administrative law, energy, public procurement, and representation before government entities.',
      es: 'Asesoramiento en derecho constitucional, administrativo, energía, contratación pública y representación ante entidades gubernamentales.'
    }
  };
  
  // Función para obtener título traducido
  const getTranslatedTitle = (originalTitle: string) => {
    return practiceAreaTranslations[originalTitle]?.[language] || originalTitle;
  };
  
  // Función para obtener descripción corta traducida
  const getTranslatedDescription = (originalDesc: string) => {
    return descriptionTranslations[originalDesc]?.[language] || originalDesc;
  };
  
  // Generar arrays más pequeños para elementos visuales
  const particles = Array.from({ length: 15 }, (_, i) => i); // Reducir de 30 a 15
  const lightBeams = Array.from({ length: 2 }, (_, i) => i); // Reducir de 3 a 2
  const nebulas = Array.from({ length: 2 }, (_, i) => i); // Reducir de 3 a 2
  
  // Calcular valores para efectos de parallax
  const moveX = (mousePosition.x - 0.5) * 40;
  const moveY = (mousePosition.y - 0.5) * 40;
  
  // Mapeo de iconos según el identificador en la configuración
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'scale':
        return <CreditCard2Front size={size} />;
      case 'briefcase':
        return <Briefcase size={size} />;
      case 'building':
        return <Building size={size} />;
      case 'calculator':
        return <Calculator size={size} />;
      case 'house':
        return <House size={size} />;
      case 'shield':
        return <ShieldLock size={size} />;
      case 'people':
        return <People size={size} />;
      default:
        return <CreditCard2Front size={size} />;
    }
  };
  
  // Función para dividir el texto detallado en párrafos
  const formatDetailedDescription = (text: string) => {
    // Dividir por párrafos y filtrar líneas vacías
    const paragraphs = text.split('\n\n').filter(paragraph => paragraph.trim().length > 0);
    
    // Procesar cada párrafo para mejorar el formato
    return paragraphs.map(paragraph => {
      // Destacar texto en negrita (entre **)
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return paragraph; // Ya manejamos esto en el renderizado
      }
      
      return paragraph;
    });
  };
  
  // Obtener el color de fondo para el icono según el área
  const getIconBackground = (iconName: string) => {
    // Color rojo para todos
    return 'linear-gradient(135deg, rgba(196, 30, 58, 0.08) 0%, rgba(196, 30, 58, 0.15) 100%)';
  };
  
  // Obtener el color del icono según el área
  const getIconColor = (iconName: string) => {
    // Color rojo para todos
    return '#C41E3A';
  };
  
  // Textos traducidos para las descripciones detalladas
  const getDetailedDescription = (area: any) => {
    // Si estamos en inglés, devolvemos una versión en inglés de la descripción detallada
    if (language === 'en') {
      switch(area.title) {
        case 'Derecho Civil':
          return `Antequera Abogados has a distinguished track record in providing client assistance for solving complex civil and commercial cases, partner conflicts, insolvency issues, company restructuring, as well as environmental matters and sanctions, criminal litigation, construction, and disputes related to concessions, among others.`;
        
        case 'Derecho Laboral':
          return `Antequera Abogados has extensive experience in hiring and termination of labor relationships, both individual and collective, as well as in the preparation of compensation packages including stock options, regulatory compliance audits, subcontracting, corporate policies, internal investigations, and labor issues related to mergers and acquisitions, in addition to social security and tax matters applicable to workers.

Regarding service subcontracting, Antequera Abogados provides continuous advice to subcontractor companies and project owners, identifying and reducing legal risks and liabilities involved.`;
        
        case 'Derecho Corporativo':
          return `Antequera Abogados has extensive experience providing advice to companies and state entities on various matters related to the application of environmental, social, and governance (ESG) factors, both for investors and investees.

In relation to ESG, the services offered by Antequera Abogados include identifying risks and opportunities arising from new trends, non-mandatory guidelines, and legal reforms across different fields and sectors in which their clients are involved.

Environmental Law: We provide guidance to our clients in all areas of Environmental Law, including administrative conflicts, litigation, inspections, territorial planning assessment and ecological responsibility, permit acquisition, as well as all elements connected with the Environmental Impact Assessment System (SEIA). The firm has extensive experience in processes related to environmental issues, providing advice to achieve international standards, in financing arrangements, ESG-related matters, issues associated with the REP Law, community dialogues, and the implementation of ILO Convention 169.

International Trade: We provide support to our clients in all aspects of the import and export sector from regulatory, commercial, and legal perspectives. We facilitate commercial and legal relations with local customs officials, carriers, and the National Customs Service, concerning the obtaining of licenses and permits for the entry of regulated products. We have extensive experience in analyzing compliance with customs regulations, in drafting and negotiating international distribution and logistics contracts, as well as in document management before the National Customs Service and in resolving disputes related to customs and commercial matters.`;
        
        case 'Derecho Tributario':
          return `The tax department of Antequera Abogados is composed of a multidisciplinary team of lawyers, accountants, and economists, with extensive knowledge both nationally and internationally.

The firm is actively involved in the organization of complex transactions of great relevance, in litigation, tax planning, and audit processes, always with a practical approach aimed at offering effective and complete solutions.`;
        
        case 'Derecho Inmobiliario':
          return `The Real Estate Law area of Antequera Abogados offers a comprehensive service that covers all legal aspects related to real estate, for both individuals and companies in the sector.

Our practice includes advice on real estate purchases and sales, conducting a thorough study of documentation, verification of charges and encumbrances, and supervision of the entire process until its registration, guaranteeing maximum legal security in each transaction.

In terms of leases, we draft and review contracts for both residential and commercial use, ensuring the protection of the interests of owners and tenants and preventing future conflicts through clear and balanced clauses.`;
        
        case 'Derecho Penal':
          return `The Antequera Abogados firm specializes in complex litigation. The team provides consultancy in areas such as economic crimes, tax violations, anti-corruption law violations, cybercrimes, money laundering, and violations of industrial and intellectual property regulations, among others.

Antequera Abogados has a criminal group with various specialties that allows it to assist clients from the initial phases, prioritizing prevention and assessment of possible risks, as well as carrying out adequate planning, internal investigations, and response tactics for any criminal eventuality, defending the interests of its clients in both administrative and judicial instances throughout the country.`;
        
        case 'Derecho de Familia':
          return `Antequera Abogados has a great specialization and vast experience in family matters, offering a high-quality service to our clients. We specialize in unilateral separations, consensual separations, separations due to fault, alimony, visitation rights, custody, adoption, paternity claims, declaration of family assets, among others.`;
        
        case 'Derecho Administrativo':
          return `Antequera Abogados has a strong track record in offering advice to clients on matters of constitutional and administrative law, covering complex issues that arise in negotiations, investigations, pre-litigation phases, or throughout judicial disputes.

The advice of Antequera Abogados covers a wide variety of topics, such as legal consultations, legal analyses, and appearances before the Court, Constitutional Court, in addition to providing advice that promotes transparency in public information and legislative advice for both public and private organizations.

The firm has experience in submitting requests to the Comptroller General of the Republic, as well as in defending individuals before public entities and courts in sanctioning processes in different areas.

Energy: We offer a comprehensive service that includes regulatory issues, project creation, negotiation of energy contracts, infrastructure agreements, initiative financing, mergers, acquisitions, and business associations. Likewise, the firm has provided advice to bidders and applicants in multiple bidding processes, both in the public and private sectors.`;
        
        default:
          return area.detailedDescription;
      }
    }
    
    // Para español, usamos la descripción original
    return area.detailedDescription;
  };
  
  return (
    <>
      <section 
        id="practice-areas" 
        className="practice-areas"
        style={{ 
          overflow: 'hidden', 
          position: 'relative',
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
        
        {/* Mostrar menos partículas para mejor rendimiento */}
        {particles.map((i) => (
          <FloatingParticle key={i} index={i} count={particles.length} />
        ))}
        
        {/* Efectos de luz que atraviesan la pantalla */}
        {lightBeams.map((i) => (
          <LightBeam key={i} index={i} />
        ))}
        
        {/* Efectos de nebulosa estáticos */}
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
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.3, 1.0] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="section-preheading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
              style={{ color: 'rgba(196, 30, 58, 0.9)' }}
            >
              ÁREAS DE PRÁCTICA
            </motion.div>
            
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
              style={{ color: '#FFFFFF', fontSize: '2.8rem', fontWeight: 600 }}
            >
              {t('practice.title')}
            </motion.h2>
            
            <motion.div 
              className="section-separator"
              initial={{ opacity: 0, width: '0px' }}
              whileInView={{ opacity: 1, width: '40px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
              style={{ background: 'rgba(196, 30, 58, 0.9)' }}
            />
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              {t('practice.subtitle')}
            </motion.p>
          </motion.div>
          
          <Row className="g-4">
            {antequeraConfig.practiceAreas.map((area, index) => (
              <Col md={6} lg={4} key={index}>
                <div 
                  className="area-card"
                  onClick={() => handleShow(area)}
                  style={{
                    background: 'rgba(40, 40, 40, 0.4)',
                    backdropFilter: 'blur(8px)', // Reducido de 12px a 8px
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '35px 30px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.42, 0, 0.58, 1)',
                    cursor: 'pointer',
                    transform: `translateY(${animationComplete ? '0' : '50px'})`,
                    opacity: animationComplete ? 1 : 0,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  
                  {/* Contenido de la tarjeta - simplificado */}
                  <div 
                    className="icon-container"
                    style={{
                      backgroundColor: 'rgba(196, 30, 58, 0.1)',
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div 
                      style={{
                        color: '#C41E3A',
                        fontSize: 32
                      }}
                    >
                      {getIcon(area.icon, 32)}
                    </div>
                  </div>
                  
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      color: '#FFFFFF',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {getTranslatedTitle(area.title)}
                  </h3>
                  
                  <div 
                    className="card-separator"
                    style={{
                      width: '30px',
                      height: '2px',
                      backgroundColor: 'rgba(196, 30, 58, 0.6)',
                      marginBottom: '15px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  
                  <p className="card-text" style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    marginBottom: '25px',
                    fontWeight: '300'
                  }}>
                    {getTranslatedDescription(area.description)}
                  </p>
                  
                  <div 
                    className="read-more-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      color: '#FFFFFF',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      borderRadius: '20px',
                      background: 'rgba(255, 0, 43, 0.88)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(196, 30, 58, 0.3)'
                    }}
                  >
                    {t('practice.readMore')} 
                    <span style={{ marginLeft: '4px' }}>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal 
            show={showModal} 
            onHide={handleClose} 
            centered
            size="xl"
            dialogClassName="practice-area-modal"
            aria-labelledby="practice-area-modal"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Poppins", sans-serif'
            }}
            backdropClassName="practice-area-modal-backdrop"
            scrollable={false}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="modal-inner-container"
              layoutId="modal-content"
              style={{ maxHeight: '85vh' }}
            >
              {selectedArea && (
                <>
                  <Button 
                    variant="link" 
                    onClick={handleClose} 
                    className="close-button"
                    aria-label="Close"
                    style={{ 
                      position: 'absolute', 
                      top: '15px', 
                      right: '15px',
                      zIndex: 10
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X size={22} />
                    </motion.div>
                  </Button>
                  
                  <motion.div 
                    className="modal-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ padding: '30px 30px 15px 30px' }}
                  >
                    <motion.div 
                      className="modal-icon-wrapper"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        {getIcon(selectedArea.icon, 45)}
                      </motion.div>
                    </motion.div>
                    
                    <motion.h2 
                      className="modal-title"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      style={{ margin: '20px 0' }}
                    >
                      {getTranslatedTitle(selectedArea.title)}
                    </motion.h2>
                  </motion.div>
                  
                  <Modal.Body className="modal-body" style={{ padding: '0 30px 30px 30px' }}>
                    <div className="modal-content-wrapper">
                      <motion.div 
                        className="modal-description-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                      >
                        {formatDetailedDescription(getDetailedDescription(selectedArea)).map((paragraph, idx) => (
                          <motion.div 
                            key={idx}
                            className="modal-paragraph-container"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.4 + (idx * 0.08),
                              ease: [0.25, 0.4, 0.3, 1.0]
                            }}
                            style={{ marginBottom: '20px' }}
                          >
                            {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                              <h4 className="modal-subheading" style={{ marginBottom: '15px', fontSize: '1.3rem', fontWeight: '600' }}>
                                {paragraph.replace(/\*\*/g, '')}
                              </h4>
                            ) : (
                              <p className="modal-paragraph" style={{ lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '15px' }}>
                                {paragraph}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </Modal.Body>
                </>
              )}
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        /* Estilos adicionales específicos */
        .section-header {
          text-align: center;
          margin-bottom: 90px;
        }
        
        .practice-area-modal .modal-content {
          border-radius: 20px;
          border: none;
          overflow: hidden;
          padding: 15px;
        }
        
        .practice-area-modal .modal-dialog {
          max-width: 90%;
          margin: 1.75rem auto;
        }
        
        .practice-area-modal .modal-body {
          padding: 0 30px 30px 30px;
          overflow-y: auto;
          max-height: calc(85vh - 150px);
        }
        
        .modal-inner-container {
          position: relative;
          padding: 10px;
        }
        
        .modal-paragraph-container {
          margin-bottom: 20px;
        }
        
        .modal-paragraph {
          line-height: 1.8;
          font-size: 1.05rem;
          color: #333;
        }
        
        .modal-subheading {
          margin-bottom: 15px;
          font-size: 1.3rem;
          font-weight: 600;
          color: #222;
        }
        
        .close-button {
          color: #333;
        }
        
        .modal-content-wrapper {
          overflow: visible;
        }
        
        .modal-description-container {
          overflow: visible;
        }
        
        /* Añadir efectos hover con CSS en lugar de JavaScript */
        .area-card {
          transform: translateY(0);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .area-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2), 0 15px 40px rgba(196, 30, 58, 0.1);
        }
        
        .area-card:hover .card-title {
          color: #C41E3A;
        }
        
        .area-card:hover .icon-container {
          background-color: rgba(196, 30, 58, 0.15);
          box-shadow: 0 5px 20px rgba(196, 30, 58, 0.2);
        }
        
        .area-card:hover .read-more-btn {
          background: rgba(196, 30, 58, 0.25);
          border: 1px solid rgba(196, 30, 58, 0.5);
          box-shadow: 0 5px 15px rgba(196, 30, 58, 0.2);
        }
        
        @media (max-width: 768px) {
          .practice-area-modal .modal-dialog {
            margin: 0.5rem;
            max-width: calc(100% - 1rem);
            max-height: 90vh;
          }
          
          .modal-inner-container {
            max-height: 80vh !important;
            padding: 10px 5px;
          }
          
          .modal-body {
            max-height: calc(80vh - 120px) !important;
            padding: 0 20px 20px 20px !important;
          }
          
          .modal-header {
            padding: 20px 20px 10px 20px !important;
          }
        }
      `}</style>
    </>
  );
}; 