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
  X
} from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export const PracticeAreas = () => {
  const { t, language } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<null | {
    title: string;
    detailedDescription: string;
  }>(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  
  const handleShow = (area: any) => {
    setSelectedArea(area);
    setShowModal(true);
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
  const getIcon = (iconName: string) => {
    const iconSize = 24;
    
    switch (iconName) {
      case 'scale':
        return <CreditCard2Front size={iconSize} />;
      case 'briefcase':
        return <Briefcase size={iconSize} />;
      case 'building':
        return <Building size={iconSize} />;
      case 'calculator':
        return <Calculator size={iconSize} />;
      case 'house':
        return <House size={iconSize} />;
      case 'shield':
        return <ShieldLock size={iconSize} />;
      case 'people':
        return <People size={iconSize} />;
      default:
        return <CreditCard2Front size={iconSize} />;
    }
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
                      background: 'rgba(196, 30, 58, 0.08)',
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
                        color: '#C41E3A',
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
                    {area.title}
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
                    {area.description}
                  </p>
                  
                  <div 
                    style={{
                      fontSize: '0.9rem',
                      color: '#C41E3A',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: 'rgba(196, 30, 58, 0.08)',
                      width: 'fit-content',
                      margin: '0 auto'
                    }}
                  >
                    {t('practice.readMore')}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered
        size="md"
        aria-labelledby="practice-area-modal"
        style={{ 
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
        }}
        dialogClassName="practice-area-modal"
      >
        <Modal.Header 
          style={{ 
            border: 'none', 
            paddingBottom: 0, 
            paddingTop: '20px',
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          <Modal.Title 
            id="practice-area-modal" 
            style={{ 
              fontSize: '1.8rem', 
              fontWeight: 600, 
              color: '#000',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>{selectedArea?.title}</div>
            <Button 
              variant="link" 
              onClick={handleClose} 
              style={{ 
                color: '#000',
                fontSize: '1.2rem',
                padding: '8px',
                border: 'none',
                background: 'transparent',
                boxShadow: 'none',
                marginRight: '-8px',
                marginTop: '-8px'
              }}
            >
              <X size={20} />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
          style={{ 
            padding: '12px 24px 24px',
            maxHeight: '60vh',
            overflowY: 'auto'
          }}
        >
          <div 
            style={{
              width: '30px',
              height: '2px',
              background: '#C41E3A',
              marginBottom: '16px',
              borderRadius: '2px'
            }}
          ></div>
          
          <div 
            style={{
              fontSize: '1rem',
              color: 'rgba(0,0,0,0.8)',
              lineHeight: 1.7,
              fontWeight: 300,
              whiteSpace: 'pre-line'
            }}
          >
            {selectedArea && getDetailedDescription(selectedArea)}
          </div>
        </Modal.Body>
      </Modal>
      
      <style jsx global>{`
        .practice-area-modal .modal-content {
          border-radius: 16px;
          border: none;
          box-shadow: 0 10px 50px rgba(0,0,0,0.12);
        }
        .practice-area-modal .modal-dialog {
          max-width: 550px;
        }
        @media (max-width: 768px) {
          .practice-area-modal .modal-dialog {
            margin: 1rem;
          }
        }
      `}</style>
    </>
  );
}; 