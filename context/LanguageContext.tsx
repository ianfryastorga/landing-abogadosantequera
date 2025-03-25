'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

const translations: Translations = {
  hero: {
    title: {
      es: 'Excelencia jurídica a su servicio',
      en: 'Legal excellence at your service'
    },
    subtitle: {
      es: 'Soluciones legales efectivas para particulares y empresas',
      en: 'Effective legal solutions for individuals and businesses'
    },
    cta: {
      es: 'Solicitar consulta',
      en: 'Request consultation'
    },
    badge: {
      es: 'Excelencia Jurídica',
      en: 'Legal Excellence'
    },
    slogan: {
      es: 'Abogados comprometidos con la excelencia y resultados efectivos para cada cliente.',
      en: 'Attorneys committed to excellence and effective results for each client.'
    },
    feature1: {
      es: 'Asesoría Especializada',
      en: 'Specialized Advice'
    },
    feature2: {
      es: 'Soluciones Efectivas',
      en: 'Effective Solutions'
    },
    feature3: {
      es: 'Atención Personalizada',
      en: 'Personalized Attention'
    },
    'cta.consultation': {
      es: 'Consulta',
      en: 'Consultation'
    },
    'cta.services': {
      es: 'Nuestros servicios',
      en: 'Our services'
    }
  },
  header: {
    home: {
      es: 'Inicio',
      en: 'Home'
    },
    about: {
      es: 'Sobre Nosotros',
      en: 'About Us'
    },
    services: {
      es: 'Servicios',
      en: 'Services'
    },
    team: {
      es: 'Equipo',
      en: 'Team'
    },
    contact: {
      es: 'Contacto',
      en: 'Contact'
    },
    consultation: {
      es: 'Solicitar consulta',
      en: 'Request consultation'
    }
  },
  practice: {
    title: {
      es: 'Áreas de Práctica',
      en: 'Practice Areas'
    },
    subtitle: {
      es: 'Ofrecemos asesoramiento legal especializado en diversas áreas del derecho para atender todas sus necesidades.',
      en: 'We offer specialized legal advice in various areas of law to meet all your needs.'
    },
    readMore: {
      es: 'Leer más',
      en: 'Read more'
    },
    cta: {
      es: 'Solicitar consulta',
      en: 'Request consultation'
    }
  },
  team: {
    title: {
      es: 'Nuestro Equipo',
      en: 'Our Team'
    },
    subtitle: {
      es: 'Abogados especializados con amplia experiencia para resolver sus casos.',
      en: 'Specialized attorneys with extensive experience to solve your cases.'
    },
    contactUs: {
      es: 'Contáctenos',
      en: 'Contact us'
    }
  },
  testimonial: {
    title: {
      es: 'Testimonios',
      en: 'Testimonials'
    },
    subtitle: {
      es: 'Lo que dicen nuestros clientes sobre nuestros servicios.',
      en: 'What our clients say about our services.'
    }
  },
  contact: {
    title: {
      es: 'Contáctenos',
      en: 'Contact Us'
    },
    subtitle: {
      es: 'Estamos a su disposición para atender sus consultas legales.',
      en: 'We are at your disposal to address your legal inquiries.'
    },
    heading: {
      es: 'Agenda una Consulta',
      en: 'Schedule a Consultation'
    },
    description: {
      es: 'Contáctanos por WhatsApp y uno de nuestros abogados especializados te atenderá para evaluar tu caso sin compromiso',
      en: 'Contact us via WhatsApp and one of our specialized attorneys will assist you to evaluate your case without commitment'
    },
    name: {
      es: 'Nombre',
      en: 'Name'
    },
    email: {
      es: 'Correo electrónico',
      en: 'Email'
    },
    phone: {
      es: 'Teléfono',
      en: 'Phone'
    },
    message: {
      es: 'Mensaje',
      en: 'Message'
    },
    send: {
      es: 'Enviar mensaje',
      en: 'Send message'
    },
    info: {
      es: 'Información de contacto',
      en: 'Contact information'
    },
    address: {
      es: 'Dirección',
      en: 'Address'
    },
    whatsapp: {
      es: 'WhatsApp',
      en: 'WhatsApp'
    },
    schedule: {
      es: 'Lunes a Viernes',
      en: 'Monday to Friday'
    },
    saturday: {
      es: 'Sábado',
      en: 'Saturday'
    },
    sunday: {
      es: 'Domingo',
      en: 'Sunday'
    },
    'card.title': {
      es: 'Consulta por WhatsApp',
      en: 'WhatsApp Consultation'
    },
    'card.description': {
      es: 'Nuestras consultas te permiten discutir brevemente tu caso con un abogado especializado y determinar los mejores pasos a seguir para tu situación legal.',
      en: 'Our consultations allow you to briefly discuss your case with a specialized attorney and determine the best steps to follow for your legal situation.'
    },
    'card.button': {
      es: 'Contactar por WhatsApp',
      en: 'Contact via WhatsApp'
    },
    'info.title': {
      es: 'Información de Contacto',
      en: 'Contact Information'
    }
  },
  footer: {
    about: {
      es: 'Antequera Abogados es un bufete jurídico con más de 30 años de experiencia, dedicado a brindar soluciones legales de alta calidad. Nuestro equipo de profesionales altamente cualificados se caracteriza por su enfoque personalizado y compromiso con la excelencia en cada caso.',
      en: 'Antequera Abogados is a law firm with over 30 years of experience, dedicated to providing high-quality legal solutions. Our team of highly qualified professionals is characterized by their personalized approach and commitment to excellence in every case.'
    },
    services: {
      es: 'Servicios',
      en: 'Services'
    },
    contact: {
      es: 'Contacto',
      en: 'Contact'
    },
    copyright: {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.'
    },
    address: {
      es: 'Dirección',
      en: 'Address'
    },
    phone: {
      es: 'Teléfono',
      en: 'Phone'
    },
    email: {
      es: 'Email',
      en: 'Email'
    },
    schedule: {
      es: 'Horario',
      en: 'Hours'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    if (keys.length !== 2) {
      // Manejar casos especiales como 'hero.cta.consultation' dividiendo en 3 partes
      if (keys.length === 3) {
        const [section, subsection, item] = keys;
        const combinedKey = `${subsection}.${item}`;
        if (translations[section] && translations[section][combinedKey]) {
          return translations[section][combinedKey][language] || key;
        }
      }
      return key;
    }

    const [section, item] = keys;

    if (!translations[section] || !translations[section][item]) {
      return key;
    }
    return translations[section][item][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 