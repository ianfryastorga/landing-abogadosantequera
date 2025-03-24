'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { antequeraConfig } from '@/config';
import { 
  CreditCard2Front,
  Briefcase, 
  Building, 
  Calculator,
  House,
  ShieldLock,
  People
} from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export const PracticeAreas = () => {
  const { t } = useLanguage();
  
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
                  flexDirection: 'column'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 50px rgba(0,0,0,0.08)'
                }}
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
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}; 