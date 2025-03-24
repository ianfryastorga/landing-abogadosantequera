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
    }
  };
  
  // Traducciones de las descripciones cortas
  const descriptionTranslations: AreaTranslations = {
    'Contratos, obligaciones y responsabilidad civil. Protegemos sus intereses personales con soluciones jurídicas efectivas.': {
      en: 'Contracts, obligations, and civil liability. We protect your personal interests with effective legal solutions.',
      es: 'Contratos, obligaciones y responsabilidad civil. Protegemos sus intereses personales con soluciones jurídicas efectivas.'
    },
    'Representación experta tanto para empleadores como trabajadores, garantizando cumplimiento normativo y resolución de conflictos.': {
      en: 'Expert representation for both employers and employees, ensuring regulatory compliance and conflict resolution.',
      es: 'Representación experta tanto para empleadores como trabajadores, garantizando cumplimiento normativo y resolución de conflictos.'
    },
    'Asesoramiento integral para empresas en constitución, contratos comerciales y gobierno corporativo.': {
      en: 'Comprehensive advice for companies in formation, commercial contracts, and corporate governance.',
      es: 'Asesoramiento integral para empresas en constitución, contratos comerciales y gobierno corporativo.'
    },
    'Optimización fiscal legal, planificación tributaria estratégica y representación ante entidades fiscales.': {
      en: 'Legal tax optimization, strategic tax planning, and representation before tax authorities.',
      es: 'Optimización fiscal legal, planificación tributaria estratégica y representación ante entidades fiscales.'
    },
    'Transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.': {
      en: 'Real estate transactions, leases, permits, and regularizations with full legal security.',
      es: 'Transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.'
    },
    'Defensa penal especializada, representación y asesoría en procesos penales con estrategias efectivas y personalizadas.': {
      en: 'Specialized criminal defense, representation, and advice in criminal proceedings with effective and personalized strategies.',
      es: 'Defensa penal especializada, representación y asesoría en procesos penales con estrategias efectivas y personalizadas.'
    },
    'Divorcios, cuidado personal, pensiones alimenticias y otros asuntos familiares con enfoque humano y profesional.': {
      en: 'Divorces, personal care, alimony, and other family matters with a human and professional approach.',
      es: 'Divorcios, cuidado personal, pensiones alimenticias y otros asuntos familiares con enfoque humano y profesional.'
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
    // Esta es una traducción simplificada para demostración
    if (language === 'en') {
      switch(area.title) {
        case 'Derecho Civil':
          return `Our team specializes in Civil Law, offering expert advice in all branches of this matter. We specialize in drafting, reviewing, and negotiating all types of civil and commercial contracts, ensuring the protection of our clients' interests through appropriate clauses and balanced conditions.

In the field of obligations and civil liability, we represent our clients in claims for damages, whether due to contractual breaches or non-contractual liability. Our approach is based on a comprehensive analysis of the facts, applicable jurisprudence, and particular circumstances of each case to design optimal legal strategies.

Additionally, we provide specialized services in inheritance matters, including wills, hereditary partitions, and estate administration, guaranteeing the correct patrimonial transmission according to the testator's will and current legal provisions.`;
        case 'Derecho Laboral':
          return `In our Labor Law area, we offer a comprehensive service that covers all legal needs in the field of labor relations, for both companies and workers.

For employers, we provide advice on the preparation and review of employment contracts, internal regulations, and company policies, ensuring compliance with current labor regulations. We represent companies in collective negotiation processes, dismissal procedures, and restructurings, minimizing legal risks and labor contingencies.

For workers, we offer specialized defense in cases of unjustified dismissals, labor discrimination, harassment, wage claims, and violation of fundamental rights. Our goal is to guarantee respect for labor rights through effective and personalized legal representation.

Additionally, we advise on social security, occupational risk prevention, and the management of administrative procedures before the Labor Inspection and other regulatory entities, always seeking efficient solutions that safeguard our clients' interests.`;
        case 'Derecho Corporativo':
          return `The Corporate Law area of Antequera Abogados is oriented to provide integral legal solutions for companies in all their stages of development, from their constitution to expansion, merger, or acquisition processes.

Our services include advice on choosing the most appropriate corporate structure according to the business project, drafting corporate bylaws, shareholder agreements, and family protocols that guarantee a fluid operation and prevent future conflicts.

In corporate governance matters, we assist administrative and management bodies in complying with their fiduciary duties, implementing good practices, and designing internal procedures that ensure transparency and responsibility in business management.

We also offer advice on financing operations, corporate restructurings, due diligence, joint ventures, and strategic alliances, providing legal security and minimizing risks in all corporate decisions. Our approach combines deep technical knowledge with a practical vision oriented to results.`;
        case 'Derecho Tributario':
          return `Our Tax Law department offers a specialized service in tax planning for individuals and legal entities, always within strict compliance with current tax regulations.

We conduct a detailed analysis of our clients' tax situation to identify optimization opportunities, applicable tax benefits, and legal mechanisms that allow efficient taxation. Our goal is to minimize the tax burden within the legal framework, avoiding unnecessary risks.

We provide advice on national and international taxation, including double taxation agreements, transfer pricing, and structuring of cross-border operations. Our experience covers direct taxes (Income Tax, Corporate Tax) and indirect taxes (VAT, special taxes).

We represent our clients before the tax administration in verification, inspection, and collection procedures, as well as in the filing of administrative and contentious-administrative appeals when necessary, defending their rights and interests with firmness and technical rigor.`;
        case 'Derecho Inmobiliario':
          return `The Real Estate Law area of Antequera Abogados offers a comprehensive service that covers all legal aspects related to real estate, for both individuals and companies in the sector.

Our practice includes advice on real estate purchases and sales, conducting a thorough study of documentation, verification of charges and encumbrances, and supervision of the entire process until its registration, guaranteeing maximum legal security in each transaction.

In terms of leases, we draft and review contracts for both residential and commercial use, ensuring the protection of the interests of owners and tenants and preventing future conflicts through clear and balanced clauses.

We provide specialized advice on urban planning and construction, including licenses, permits, construction regulations, and management of administrative procedures before competent bodies. We also offer services in horizontal property, owner communities, and easements.

For real estate developers and investors, we provide assistance in the legal structuring of projects, real estate due diligence, construction contracts, and comprehensive management of real estate developments, optimizing both legal and fiscal aspects.`;
        case 'Derecho Penal':
          return `Our Criminal Law department is made up of lawyers with extensive experience in criminal defense and a deep knowledge of the Chilean criminal procedural system.

We provide legal assistance from the investigation phase, accompanying our clients in statements before the prosecutor's office, police, or courts, designing solid defense strategies based on a thorough analysis of the facts and available evidence.

Our experience covers both economic crimes (fraud, scam, misappropriation, corporate crimes, money laundering) and crimes against people, against property, traffic crimes, and those related to road safety.

In each case, we develop a personalized strategy that can include from negotiating agreements with the prosecutor's office to representation in oral trial, always seeking the best possible outcome for our client. Our commitment is to offer technical defense of the highest quality, maintaining constant and transparent communication about the development of the procedure and the options available at each phase.

We also offer preventive advice to companies for the implementation of criminal compliance programs that minimize risks of corporate criminal liability.`;
        case 'Derecho de Familia':
          return `In our Family Law area, we address all legal issues related to family relationships, combining technical rigor with sensitivity and empathy towards the personal circumstances of each client.

We offer advice and representation in divorce processes, both by mutual agreement and contentious, working to achieve solutions that minimize emotional and economic impact, especially when minor children are involved.

We manage procedures related to filiation, personal care, direct and regular relationship, as well as the determination and modification of alimony, always with the primary objective of protecting the best interests of children and adolescents.

Our services also include drafting marriage settlements, cohabitation agreements and regulatory pacts, as well as the processing of guardianship and custody procedures.

We promote, when possible, alternative methods of conflict resolution such as family mediation, seeking collaborative agreements that preserve family relationships and avoid unnecessary judicialization.

Each case is treated with absolute confidentiality and respect, offering personalized accompaniment throughout the legal process and providing clear guidance on the available options and their implications.`;
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
    return text.split('\n\n').filter(paragraph => paragraph.trim().length > 0);
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
      
      <AnimatePresence>
        {showModal && (
          <Modal 
            show={showModal} 
            onHide={handleClose} 
            centered
            dialogClassName="practice-area-modal"
            aria-labelledby="practice-area-modal"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
            }}
            backdropClassName="practice-area-modal-backdrop"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {selectedArea && (
                <>
                  <div className="modal-header-image" style={{ background: getIconBackground(selectedArea.icon) }}>
                    <div className="modal-icon-container">
                      <div className="modal-area-icon" style={{ color: getIconColor(selectedArea.icon) }}>
                        {getIcon(selectedArea.icon, 32)}
                      </div>
                    </div>
                    <Button 
                      variant="link" 
                      onClick={handleClose} 
                      className="close-button"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                  
                  <Modal.Body 
                    style={{ 
                      padding: '0 0 30px 0',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="modal-content-container">
                      <h2 className="modal-title">
                        {getTranslatedTitle(selectedArea.title)}
                      </h2>
                      
                      <div className="modal-description-container">
                        {formatDetailedDescription(getDetailedDescription(selectedArea)).map((paragraph, idx) => (
                          <motion.p 
                            key={idx} 
                            className="modal-paragraph"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5 }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="modal-cta-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <a 
                          href="#contact" 
                          className="modal-cta-button"
                          onClick={handleClose}
                          style={{ background: getIconColor(selectedArea.icon) }}
                        >
                          {t('contact.title')} <ArrowRight size={16} />
                        </a>
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
        /* Modal styling */
        .practice-area-modal .modal-content {
          border-radius: 16px;
          border: none;
          box-shadow: 0 10px 50px rgba(0,0,0,0.12);
          overflow: hidden;
          max-height: 85vh;
        }
        
        .practice-area-modal .modal-dialog {
          max-width: 600px;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        
        .practice-area-modal-backdrop {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
        }
        
        .modal-header-image {
          position: relative;
          height: 120px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal-icon-container {
          width: 80px;
          height: 80px;
          border-radius: 40px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 5px solid white;
          position: relative;
          z-index: 10;
        }
        
        .modal-area-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          color: rgba(0, 0, 0, 0.5);
          background: white;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          border: none;
          z-index: 10;
        }
        
        .close-button:hover {
          background: #f8f8f8;
          transform: rotate(90deg);
          color: #000;
        }
        
        .modal-content-container {
          padding: 0 30px;
        }
        
        .modal-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #000;
          margin: 20px 0;
          text-align: center;
        }
        
        .modal-description-container {
          max-height: 50vh;
          overflow-y: auto;
          padding-right: 15px;
          margin-bottom: 30px;
          scrollbar-width: thin;
        }
        
        .modal-description-container::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-description-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .modal-description-container::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        
        .modal-description-container::-webkit-scrollbar-thumb:hover {
          background: #bbb;
        }
        
        .modal-paragraph {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
          line-height: 1.7;
          margin-bottom: 15px;
          font-weight: 300;
        }
        
        .modal-cta-container {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        
        .modal-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #C41E3A;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .modal-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          color: white;
        }
        
        @media (max-width: 768px) {
          .practice-area-modal .modal-dialog {
            margin: 10px;
            max-width: calc(100% - 20px);
          }
          
          .modal-content-container {
            padding: 0 20px;
          }
          
          .modal-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}; 