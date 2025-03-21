// Configuración personalizada para el sitio de Antequera Abogados

export const antequeraConfig = {
  // Información básica del bufete
  name: 'Antequera Abogados',
  slogan: 'Excelencia jurídica',
  
  // Colores de marca (estilo minimalista - Steve Jobs)
  colors: {
    primary: '#1A1A1A', // Negro elegante
    secondary: '#0F0F0F', // Negro más oscuro
    accent: '#C41E3A', // Rojo borgoña elegante 
    text: '#333333', // Negro suave para texto
    textLight: '#777777', // Gris para texto secundario
    background: '#FFFFFF', // Fondo blanco puro
    backgroundAlt: '#F7F7F7' // Gris muy claro para secciones alternativas
  },
  
  // Información de contacto
  contactInfo: {
    address: 'Paseo Ahumada 312, oficina 236, Santiago',
    phone: '+56 9 9907 7518',
    email: 'antequeraabogados@gmail.com',
    whatsapp: '+56 9 9907 7518'
  },
  
  // Horarios de atención
  businessHours: {
    weekdays: '9:00 - 19:00',
    saturday: 'Cerrado',
    sunday: 'Cerrado'
  },
  
  // Áreas de práctica
  practiceAreas: [
    {
      title: 'Derecho Civil',
      description: 'Contratos, obligaciones y responsabilidad civil. Protegemos sus intereses personales con soluciones jurídicas efectivas.',
      icon: 'scale'
    },
    {
      title: 'Derecho Laboral',
      description: 'Representación experta tanto para empleadores como trabajadores, garantizando cumplimiento normativo y resolución de conflictos.',
      icon: 'briefcase'
    },
    {
      title: 'Derecho Corporativo',
      description: 'Asesoramiento integral para empresas en constitución, contratos comerciales y gobierno corporativo.',
      icon: 'building'
    },
    {
      title: 'Derecho Tributario',
      description: 'Optimización fiscal legal, planificación tributaria estratégica y representación ante entidades fiscales.',
      icon: 'calculator'
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.',
      icon: 'house'
    },
    {
      title: 'Derecho Penal',
      description: 'Defensa penal especializada, representación y asesoría en procesos penales con estrategias efectivas y personalizadas.',
      icon: 'shield'
    },
    {
      title: 'Derecho de Familia',
      description: 'Divorcios, cuidado personal, pensiones alimenticias y otros asuntos familiares con enfoque humano y profesional.',
      icon: 'people'
    }
  ],
  
  // Equipo de abogados
  team: [
    {
      name: 'Carlos Antequera',
      position: 'Socio Director',
      specialty: 'Derecho Corporativo y Tributario',
      bio: 'Más de 20 años de experiencia asesorando a empresas nacionales e internacionales. Licenciado en Derecho por la Universidad de Chile y Máster en Derecho Tributario.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop'
    },
    {
      name: 'Valentina Morales',
      position: 'Socia',
      specialty: 'Derecho Laboral',
      bio: 'Especialista en derecho laboral con amplia experiencia en negociaciones colectivas y litigios laborales. Licenciada en Derecho por la Universidad Católica.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop'
    },
    {
      name: 'Rodrigo Sánchez',
      position: 'Asociado Senior',
      specialty: 'Litigios Civiles',
      bio: 'Experto en litigación civil y comercial con un historial de éxito en casos complejos. Licenciado en Derecho por la Universidad de Concepción.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop'
    }
  ],
  
  // Testimonios de clientes
  testimonials: [
    {
      name: 'Patricia Mendoza',
      company: 'Empresa Constructora Andes S.A.',
      testimonial: 'El equipo de Antequera Abogados nos brindó un servicio excepcional durante todo nuestro proceso de restructuración corporativa. Su asesoría fue fundamental para tomar decisiones informadas.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop'
    },
    {
      name: 'Juan Carlos Ramírez',
      company: 'Importadora Global',
      testimonial: 'Su equipo demostró un profundo conocimiento en derecho tributario que nos permitió optimizar nuestra planificación fiscal de manera legal y eficiente.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop'
    },
    {
      name: 'María Elena Torres',
      company: 'Cliente particular',
      testimonial: 'Gracias al profesionalismo y dedicación de Antequera Abogados, mi caso de derecho laboral se resolvió favorablemente en un tiempo récord.',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470&auto=format&fit=crop'
    }
  ],
  
  // SEO y metadatos
  seo: {
    title: 'Antequera Abogados | Servicios Legales de Excelencia',
    description: 'Bufete de abogados especializado en derecho civil, penal, familiar, laboral, corporativo y tributario. Soluciones jurídicas efectivas en Santiago.',
    keywords: 'abogados, servicios legales, derecho civil, derecho penal, derecho de familia, asesoría legal, Santiago'
  }
}; 