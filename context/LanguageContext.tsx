'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    'menu.home': 'Inicio',
    'menu.practice': 'Áreas de Práctica',
    'menu.contact': 'Contacto',
    'menu.consultation': 'Consulta',

    // Hero
    'hero.badge': 'Excelencia Jurídica',
    'hero.slogan': 'Abogados comprometidos con la excelencia y resultados efectivos para cada cliente.',
    'hero.feature1': 'Asesoría Especializada',
    'hero.feature2': 'Soluciones Efectivas',
    'hero.feature3': 'Atención Personalizada',
    'hero.cta.consultation': 'Consulta',
    'hero.cta.services': 'Nuestros servicios',

    // Practice Areas
    'practice.title': 'Áreas de Práctica',
    'practice.subtitle': 'Ofrecemos asesoramiento legal especializado en diversas áreas del derecho',
    'practice.cta': 'Solicitar consulta',

    // Contact
    'contact.title': 'Contacto',
    'contact.heading': 'Agenda una Consulta',
    'contact.description': 'Contáctanos por WhatsApp y uno de nuestros abogados especializados te atenderá para evaluar tu caso sin compromiso',
    'contact.card.title': 'Consulta por WhatsApp',
    'contact.card.description': 'Nuestras consultas te permiten discutir brevemente tu caso con un abogado especializado y determinar los mejores pasos a seguir para tu situación legal.',
    'contact.card.button': 'Contactar por WhatsApp',
    'contact.info.title': 'Información de Contacto',
    'contact.schedule': 'Lunes a Viernes',
    'contact.saturday': 'Sábado',
    'contact.sunday': 'Domingo',

    // Footer
    'footer.about': 'Somos un bufete de abogados comprometido con brindar servicios legales de la más alta calidad, enfocados en resolver las necesidades específicas de cada cliente con excelencia y precisión.',
    'footer.contact': 'Información de contacto',
    'footer.address': 'Dirección',
    'footer.phone': 'Teléfono',
    'footer.email': 'Email',
    'footer.schedule': 'Horario',
    'footer.copyright': 'Todos los derechos reservados.',
  },
  en: {
    // Header
    'menu.home': 'Home',
    'menu.practice': 'Practice Areas',
    'menu.contact': 'Contact',
    'menu.consultation': 'Consultation',

    // Hero
    'hero.badge': 'Legal Excellence',
    'hero.slogan': 'Attorneys committed to excellence and effective results for each client.',
    'hero.feature1': 'Specialized Advice',
    'hero.feature2': 'Effective Solutions',
    'hero.feature3': 'Personalized Attention',
    'hero.cta.consultation': 'Consultation',
    'hero.cta.services': 'Our services',

    // Practice Areas
    'practice.title': 'Practice Areas',
    'practice.subtitle': 'We offer specialized legal advice in various areas of law',
    'practice.cta': 'Request consultation',

    // Contact
    'contact.title': 'Contact',
    'contact.heading': 'Schedule a Consultation',
    'contact.description': 'Contact us via WhatsApp and one of our specialized attorneys will assist you to evaluate your case without commitment',
    'contact.card.title': 'WhatsApp Consultation',
    'contact.card.description': 'Our consultations allow you to briefly discuss your case with a specialized attorney and determine the best steps to follow for your legal situation.',
    'contact.card.button': 'Contact via WhatsApp',
    'contact.info.title': 'Contact Information',
    'contact.schedule': 'Monday to Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',

    // Footer
    'footer.about': 'We are a law firm committed to providing the highest quality legal services, focused on solving the specific needs of each client with excellence and precision.',
    'footer.contact': 'Contact information',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.schedule': 'Hours',
    'footer.copyright': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 