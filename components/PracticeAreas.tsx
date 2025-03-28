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
        style={{
          padding: '120px 0',
          background: '#fff',
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
            viewport={{ once: true, amount: 0.3 }}
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
              {t('practice.title')}
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
              {t('practice.title')}
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
              {t('practice.subtitle')}
            </p>
          </motion.div>
          
          <Row className="g-4">
            {antequeraConfig.practiceAreas.map((area, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div 
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    height: '100%',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 15px 50px rgba(0,0,0,0.08)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleShow(area)}
                >
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: getIconBackground(area.icon),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}
                  >
                    <div 
                      style={{
                        width: '30px',
                        height: '30px',
                        color: getIconColor(area.icon),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 300
                      }}
                    >
                      {getIcon(area.icon)}
                    </div>
                  </div>
                  
                  <h3 
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      marginBottom: '16px',
                      color: '#000'
                    }}
                  >
                    {getTranslatedTitle(area.title)}
                  </h3>
                  
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(0,0,0,0.6)',
                      marginBottom: '24px',
                      lineHeight: 1.6,
                      flex: 1,
                      fontWeight: 300
                    }}
                  >
                    {getTranslatedDescription(area.description)}
                  </p>
                  
                  <div 
                    style={{
                      fontSize: '0.9rem',
                      color: getIconColor(area.icon),
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: `rgba(${getIconColor(area.icon).replace(/[^\d,]/g, '')}, 0.08)`,
                      width: 'fit-content',
                      margin: '0 auto',
                      gap: '6px'
                    }}
                  >
                    {t('practice.readMore')} <ChevronRight size={14} />
                  </div>
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
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
            }}
            backdropClassName="practice-area-modal-backdrop"
            fullscreen="lg-down"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="modal-inner-container"
            >
              {selectedArea && (
                <>
                  <Button 
                    variant="link" 
                    onClick={handleClose} 
                    className="close-button"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </Button>
                  
                  <div className="modal-header">
                    <div className="modal-icon-wrapper">
                      {getIcon(selectedArea.icon, 36)}
                    </div>
                    
                    <h2 className="modal-title">
                      {getTranslatedTitle(selectedArea.title)}
                    </h2>
                  </div>
                  
                  <Modal.Body className="modal-body">
                    <div className="modal-content-wrapper">
                      <div className="modal-description-container custom-scrollbar">
                        {formatDetailedDescription(getDetailedDescription(selectedArea)).map((paragraph, idx) => (
                          <div 
                            key={idx}
                            className="modal-paragraph-container"
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </Modal.Body>
                </>
              )}
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        /* Modal styling */
        .practice-area-modal .modal-content {
          border-radius: 24px;
          border: none;
          box-shadow: 0 25px 100px rgba(0,0,0,0.25);
          overflow: hidden;
          height: auto;
          max-height: 90vh;
          background: #fff;
          position: relative;
          will-change: transform, opacity;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        
        .modal-inner-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }
        
        .practice-area-modal .modal-dialog {
          max-width: 1000px;
          margin: 30px auto;
          width: calc(100% - 40px);
          height: auto;
        }
        
        .practice-area-modal-backdrop {
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
        }
        
        .modal-header {
          text-align: center;
          padding: 40px 40px 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: none;
          background: #fff;
        }
        
        .modal-icon-wrapper {
          width: 100px;
          height: 100px;
          border-radius: 20px;
          background: rgba(196, 30, 58, 0.08);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 25px;
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }
        
        .modal-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(1.4);
        }
        
        .close-button {
          position: absolute;
          top: 25px;
          right: 25px;
          z-index: 100;
          color: rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.25s ease;
          border: none;
        }
        
        .close-button:hover {
          background: #fff;
          transform: rotate(90deg) scale(1.1);
          color: #C41E3A;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .modal-title {
          font-size: 2.6rem;
          font-weight: 600;
          color: #000;
          margin: 0 0 20px;
          text-align: center;
          letter-spacing: -0.5px;
          line-height: 1.2;
          max-width: 85%;
        }
        
        .modal-body {
          padding: 0 0 20px;
          background: #fff;
          position: relative;
          overflow: visible;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .modal-content-wrapper {
          padding: 0 60px;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: visible;
        }
        
        .modal-description-container {
          height: auto;
          overflow-y: auto;
          padding-right: 35px;
          padding-left: 10px;
          padding-bottom: 40px;
          scrollbar-width: thin;
          margin-bottom: 0;
          font-size: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
          -webkit-overflow-scrolling: touch;
          max-height: 50vh;
          overscroll-behavior: contain;
        }
        
        /* Estilo personalizado para scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C41E3A;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a81831;
        }
        
        .modal-paragraph-container {
          margin-bottom: 0;
        }
        
        .modal-paragraph-container:last-child {
          margin-bottom: 0;
        }
        
        .modal-subheading {
          font-size: 1.8rem;
          font-weight: 600;
          color: #000;
          margin: 10px 0 20px;
          letter-spacing: -0.3px;
        }
        
        .modal-paragraph {
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.75);
          line-height: 1.7;
          margin-bottom: 0;
          font-weight: 400;
          max-width: 95%;
          letter-spacing: -0.2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .practice-area-modal .modal-dialog {
            max-width: 90%;
          }
          
          .modal-content-wrapper {
            padding: 0 60px;
          }
          
          .modal-title {
            font-size: 2.6rem;
          }
          
          .modal-paragraph {
            font-size: 1.2rem;
            max-width: 100%;
          }
        }
        
        @media (max-width: 992px) {
          .practice-area-modal .modal-dialog {
            max-width: 90%;
          }
          
          .modal-content-wrapper {
            padding: 0 50px;
          }
          
          .modal-title {
            font-size: 2.4rem;
          }
          
          .modal-paragraph {
            font-size: 1.2rem;
          }
          
          .modal-subheading {
            font-size: 1.6rem;
          }
          
          .modal-icon-wrapper {
            width: 100px;
            height: 100px;
          }
        }
        
        @media (max-width: 768px) {
          .practice-area-modal .modal-dialog {
            margin: 0;
            max-width: 100%;
            height: 100%;
            width: 100%;
          }
          
          .practice-area-modal .modal-content {
            max-height: 100vh;
            height: 100%;
            border-radius: 0;
          }
          
          .modal-content-wrapper {
            padding: 0 30px;
          }
          
          .modal-title {
            font-size: 2.2rem;
            max-width: 90%;
          }
          
          .modal-header {
            padding: 50px 30px 15px;
          }
          
          .modal-description-container {
            max-height: none !important;
            height: calc(100vh - 250px) !important;
            padding-right: 20px;
            gap: 25px;
          }
          
          .close-button {
            top: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            position: fixed;
          }
          
          .modal-paragraph {
            font-size: 1.15rem;
          }
          
          .modal-subheading {
            font-size: 1.5rem;
            margin: 5px 0 15px;
          }
          
          .modal-icon-wrapper {
            width: 90px;
            height: 90px;
          }
        }
        
        @media (max-width: 480px) {
          .practice-area-modal .modal-dialog {
            margin: 0;
            max-width: 100%;
          }
          
          .modal-content-wrapper {
            padding: 0 25px;
          }
          
          .modal-icon-wrapper {
            width: 80px;
            height: 80px;
          }
          
          .modal-title {
            font-size: 2rem;
            margin-bottom: 20px;
          }
          
          .modal-header {
            padding: 40px 20px 10px;
          }
          
          .modal-description-container {
            height: calc(100vh - 220px) !important;
            gap: 20px;
          }
          
          .close-button {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
          }
          
          .modal-paragraph {
            font-size: 1.1rem;
            max-width: 100%;
          }
          
          .modal-subheading {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}; 