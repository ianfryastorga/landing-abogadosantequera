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
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

interface AreaTranslations {
  [key: string]: {
    en: string;
    es: string;
  };
}

export const PracticeAreas = () => {
  const { t, language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<null | {
    title: string;
    description: string;
    detailedDescription: string;
    icon: string;
  }>(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  
  const handleShow = (area: any) => {
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

**Environmental Law**: We provide guidance to our clients in all areas of Environmental Law, including administrative conflicts, litigation, inspections, territorial planning assessment and ecological responsibility, permit acquisition, as well as all elements connected with the Environmental Impact Assessment System (SEIA). The firm has extensive experience in processes related to environmental issues, providing advice to achieve international standards, in financing arrangements, ESG-related matters, issues associated with the REP Law, community dialogues, and the implementation of ILO Convention 169.

**International Trade**: We provide support to our clients in all aspects of the import and export sector from regulatory, commercial, and legal perspectives. We facilitate commercial and legal relations with local customs officials, carriers, and the National Customs Service, concerning the obtaining of licenses and permits for the entry of regulated products. We have extensive experience in analyzing compliance with customs regulations, in drafting and negotiating international distribution and logistics contracts, as well as in document management before the National Customs Service and in resolving disputes related to customs and commercial matters.`;
        
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

**Energy**: We offer a comprehensive service that includes regulatory issues, project creation, negotiation of energy contracts, infrastructure agreements, initiative financing, mergers, acquisitions, and business associations. Likewise, the firm has provided advice to bidders and applicants in multiple bidding processes, both in the public and private sectors.`;
        
        default:
          return area.detailedDescription;
      }
    }
    
    // Para español, usamos la descripción original
    return area.detailedDescription;
  };
  
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
  
  return (
    <>
      <section 
        id="practice-areas" 
        className="practice-areas"
      >
        {/* Elementos decorativos de fondo */}
        <div className="decorative-circle right-top"></div>
        <div className="decorative-circle left-bottom"></div>
        
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
            >
              ÁREAS DE PRÁCTICA
            </motion.div>
            
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
            >
              {t('practice.title')}
            </motion.h2>
            
            <motion.div 
              className="section-separator"
              initial={{ opacity: 0, width: '0px' }}
              whileInView={{ opacity: 1, width: '40px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.3, 1.0] }}
              viewport={{ once: true }}
            >
              {t('practice.subtitle')}
            </motion.p>
          </motion.div>
          
          <Row className="g-4">
            {antequeraConfig.practiceAreas.map((area, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div 
                  className="area-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1 + 0.2,
                    ease: [0.25, 0.4, 0.3, 1.0]
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -12,
                    boxShadow: '0 30px 70px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.05)',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleShow(area)}
                >
                  {/* Elemento decorativo de fondo */}
                  <div className="decorative-circle" />
                  
                  <motion.div 
                    className="icon-container"
                    whileHover={{ 
                      scale: 1.08,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                  >
                    <motion.div 
                      style={{
                        color: getIconColor(area.icon),
                        filter: 'drop-shadow(0 2px 4px rgba(196, 30, 58, 0.2))',
                        fontSize: 36
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {getIcon(area.icon, 36)}
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="card-title"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ 
                      color: '#C41E3A',
                      y: -2
                    }}
                  >
                    {getTranslatedTitle(area.title)}
                  </motion.h3>
                  
                  <motion.div 
                    className="card-separator"
                    whileHover={{
                      scaleX: 1.5,
                      width: 50,
                      opacity: 1
                    }}
                  />
                  
                  <p className="card-text">
                    {getTranslatedDescription(area.description)}
                  </p>
                  
                  <motion.div 
                    className="read-more-btn"
                    whileHover={{ 
                      scale: 1.08,
                      y: -2,
                      background: `rgba(${getIconColor(area.icon).replace(/[^\d,]/g, '')}, 0.12)`,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {t('practice.readMore')} 
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  </motion.div>
                </motion.div>
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
            fullscreen="lg-down"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              className="modal-inner-container"
              layoutId="modal-content"
            >
              {selectedArea && (
                <>
                  <Button 
                    variant="link" 
                    onClick={handleClose} 
                    className="close-button"
                    aria-label="Close"
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
                    >
                      {getTranslatedTitle(selectedArea.title)}
                    </motion.h2>
                  </motion.div>
                  
                  <Modal.Body className="modal-body">
                    <div className="modal-content-wrapper">
                      <motion.div 
                        className="modal-description-container custom-scrollbar"
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
                          >
                            {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                              <h4 className="modal-subheading">
                                {paragraph.replace(/\*\*/g, '')}
                              </h4>
                            ) : (
                              <p className="modal-paragraph">
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
      `}</style>
    </>
  );
}; 