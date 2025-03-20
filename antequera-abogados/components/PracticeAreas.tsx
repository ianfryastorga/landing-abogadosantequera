'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { antequeraConfig } from '../config';
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

export const PracticeAreas = () => {
  // Mapeo de iconos según el identificador en la configuración
  const getIcon = (iconName: string) => {
    const iconSize = 40;
    
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="practice-areas" className="practice-areas">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-preheading">Nuestros Servicios</div>
          <h2 className="section-title">
            Áreas de Práctica
          </h2>
          <div className="section-separator"></div>
          <p className="section-subtitle">
            Nuestro equipo ofrece asesoría legal especializada con un enfoque personalizado para cada cliente
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4">
            {antequeraConfig.practiceAreas.map((area, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div variants={cardVariants}>
                  <Card className="area-card h-100">
                    <Card.Body className="p-4">
                      <div className="icon-container">
                        {getIcon(area.icon)}
                      </div>
                      
                      <Card.Title className="card-title">
                        {area.title}
                      </Card.Title>
                      
                      <div className="card-separator"></div>
                      
                      <Card.Text className="card-text">
                        {area.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
        
        <motion.div 
          className="text-center mt-5 cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="lead cta-text">
            ¿Necesita asesoría en un área específica? 
          </p>
          <motion.a 
            href="#contact" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar consulta gratuita
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}; 