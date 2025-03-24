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
   
  },
  
  // Áreas de práctica
  practiceAreas: [
    {
      title: 'Derecho Civil',
      description: 'Contratos, obligaciones y responsabilidad civil. Protegemos sus intereses personales con soluciones jurídicas efectivas.',
      icon: 'scale',
      detailedDescription: `Nuestro equipo especializado en Derecho Civil ofrece asesoramiento experto en todas las ramas de esta materia. Nos especializamos en la redacción, revisión y negociación de todo tipo de contratos civiles y mercantiles, asegurando la protección de los intereses de nuestros clientes mediante cláusulas adecuadas y condiciones equilibradas.

En el ámbito de obligaciones y responsabilidad civil, representamos a nuestros clientes en reclamaciones por daños y perjuicios, ya sea por incumplimientos contractuales o responsabilidad extracontractual. Nuestro enfoque se basa en un análisis exhaustivo de los hechos, jurisprudencia aplicable y circunstancias particulares de cada caso para diseñar estrategias legales óptimas.

Adicionalmente, brindamos servicios especializados en materia sucesoria, incluyendo testamentos, particiones hereditarias y administración de herencias, garantizando la correcta transmisión patrimonial conforme a la voluntad del testador y las disposiciones legales vigentes.`
    },
    {
      title: 'Derecho Laboral',
      description: 'Representación experta tanto para empleadores como trabajadores, garantizando cumplimiento normativo y resolución de conflictos.',
      icon: 'briefcase',
      detailedDescription: `En nuestra área de Derecho Laboral ofrecemos un servicio integral que abarca todas las necesidades jurídicas en el ámbito de las relaciones laborales, tanto para empresas como para trabajadores.

Para empleadores, proporcionamos asesoramiento en la elaboración y revisión de contratos de trabajo, reglamentos internos y políticas de empresa, asegurando el cumplimiento de la normativa laboral vigente. Representamos a empresas en procesos de negociación colectiva, procedimientos de despido y reestructuraciones, minimizando riesgos legales y contingencias laborales.

Para trabajadores, ofrecemos defensa especializada en casos de despidos injustificados, discriminación laboral, acoso, reclamaciones salariales y vulneración de derechos fundamentales. Nuestro objetivo es garantizar el respeto de los derechos laborales mediante una representación legal efectiva y personalizada.

Adicionalmente, asesoramos en materia de seguridad social, prevención de riesgos laborales y en la gestión de procedimientos administrativos ante la Inspección del Trabajo y otras entidades reguladoras, buscando siempre soluciones eficientes que salvaguarden los intereses de nuestros clientes.`
    },
    {
      title: 'Derecho Corporativo',
      description: 'Asesoramiento integral para empresas en constitución, contratos comerciales y gobierno corporativo.',
      icon: 'building',
      detailedDescription: `El área de Derecho Corporativo de Antequera Abogados está orientada a proporcionar soluciones jurídicas integrales para empresas en todas sus etapas de desarrollo, desde su constitución hasta procesos de expansión, fusión o adquisición.

Nuestros servicios incluyen el asesoramiento en la elección de la estructura societaria más adecuada según el proyecto empresarial, la redacción de estatutos sociales, pactos de accionistas y protocolos familiares que garanticen una operativa fluida y prevengan conflictos futuros.

En materia de gobierno corporativo, asistimos a órganos de administración y dirección en el cumplimiento de sus deberes fiduciarios, implementación de buenas prácticas y diseño de procedimientos internos que aseguren transparencia y responsabilidad en la gestión empresarial.

Ofrecemos también asesoramiento en operaciones de financiación, reestructuraciones societarias, due diligence, joint ventures y alianzas estratégicas, aportando seguridad jurídica y minimizando riesgos en todas las decisiones corporativas. Nuestro enfoque combina un profundo conocimiento técnico con una visión práctica y orientada a resultados.`
    },
    {
      title: 'Derecho Tributario',
      description: 'Optimización fiscal legal, planificación tributaria estratégica y representación ante entidades fiscales.',
      icon: 'calculator',
      detailedDescription: `Nuestro departamento de Derecho Tributario ofrece un servicio especializado en la planificación fiscal para personas físicas y jurídicas, siempre dentro del estricto cumplimiento de la normativa tributaria vigente.

Realizamos un análisis pormenorizado de la situación fiscal de nuestros clientes para identificar oportunidades de optimización, beneficios fiscales aplicables y mecanismos legales que permitan una tributación eficiente. Nuestro objetivo es minimizar la carga impositiva dentro del marco legal, evitando riesgos innecesarios.

Proporcionamos asesoramiento en fiscalidad nacional e internacional, incluyendo convenios de doble imposición, precios de transferencia y estructuración de operaciones transfronterizas. Nuestra experiencia abarca impuestos directos (Impuesto sobre la Renta, Impuesto sobre Sociedades) e indirectos (IVA, impuestos especiales).

Representamos a nuestros clientes ante la administración tributaria en procedimientos de comprobación, inspección y recaudación, así como en la interposición de recursos administrativos y contencioso-administrativos cuando sea necesario, defendiendo sus derechos e intereses con firmeza y rigor técnico.`
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.',
      icon: 'house',
      detailedDescription: `El área de Derecho Inmobiliario de Antequera Abogados ofrece un servicio integral que abarca todos los aspectos legales relacionados con bienes inmuebles, tanto para particulares como para empresas del sector.

Nuestra práctica incluye el asesoramiento en compraventas de inmuebles, realizando un exhaustivo estudio de la documentación, verificación de cargas y gravámenes, y supervisión de todo el proceso hasta su inscripción registral, garantizando la máxima seguridad jurídica en cada transacción.

En materia de arrendamientos, redactamos y revisamos contratos tanto de uso residencial como comercial, asegurando la protección de los intereses de propietarios e inquilinos y previniendo conflictos futuros mediante cláusulas claras y equilibradas.

Proporcionamos asesoramiento especializado en urbanismo y construcción, incluyendo licencias, permisos, regulaciones de obra y gestión de procedimientos administrativos ante los organismos competentes. También ofrecemos servicios en materia de propiedad horizontal, comunidades de propietarios y servidumbres.

Para promotores e inversores inmobiliarios, brindamos asistencia en la estructuración legal de proyectos, due diligence inmobiliaria, contratos de construcción y gestión integral de desarrollos inmobiliarios, optimizando tanto aspectos legales como fiscales.`
    },
    {
      title: 'Derecho Penal',
      description: 'Defensa penal especializada, representación y asesoría en procesos penales con estrategias efectivas y personalizadas.',
      icon: 'shield',
      detailedDescription: `Nuestro departamento de Derecho Penal está formado por abogados con amplia experiencia en la defensa penal y un profundo conocimiento del sistema procesal penal chileno.

Proporcionamos asistencia legal desde la fase de investigación, acompañando a nuestros clientes en declaraciones ante fiscalía, policía o juzgados, diseñando estrategias de defensa sólidas basadas en un análisis minucioso de los hechos y las pruebas disponibles.

Nuestra experiencia abarca tanto delitos económicos (fraude, estafa, apropiación indebida, delitos societarios, blanqueo de capitales) como delitos contra las personas, contra la propiedad, delitos de tráfico y aquellos relacionados con la seguridad vial.

En cada caso, desarrollamos una estrategia personalizada que puede incluir desde la negociación de acuerdos con la fiscalía hasta la representación en juicio oral, siempre buscando el mejor resultado posible para nuestro cliente. Nuestro compromiso es ofrecer una defensa técnica de máxima calidad, manteniendo una comunicación constante y transparente sobre el desarrollo del procedimiento y las opciones disponibles en cada fase.

También ofrecemos asesoramiento preventivo a empresas para la implementación de programas de compliance penal que minimicen riesgos de responsabilidad penal corporativa.`
    },
    {
      title: 'Derecho de Familia',
      description: 'Divorcios, cuidado personal, pensiones alimenticias y otros asuntos familiares con enfoque humano y profesional.',
      icon: 'people',
      detailedDescription: `En nuestra área de Derecho de Familia abordamos todas las cuestiones legales relacionadas con las relaciones familiares, combinando rigor técnico con sensibilidad y empatía hacia las circunstancias personales de cada cliente.

Ofrecemos asesoramiento y representación en procesos de divorcio, tanto de mutuo acuerdo como contenciosos, trabajando para alcanzar soluciones que minimicen el impacto emocional y económico, especialmente cuando hay hijos menores involucrados.

Gestionamos procedimientos relacionados con la filiación, cuidado personal, relación directa y regular, así como la determinación y modificación de pensiones alimenticias, siempre con el objetivo primordial de proteger el interés superior de los niños, niñas y adolescentes.

Nuestros servicios incluyen también la redacción de capitulaciones matrimoniales, acuerdos de convivencia y pactos reguladores, así como la tramitación de procedimientos de guardas, tutelas y curatelas.

Promovemos, cuando es posible, métodos alternativos de resolución de conflictos como la mediación familiar, buscando acuerdos colaborativos que preserven las relaciones familiares y eviten la judicialización innecesaria.

Cada caso es tratado con absoluta confidencialidad y respeto, ofreciendo un acompañamiento personalizado durante todo el proceso legal y proporcionando orientación clara sobre las opciones disponibles y sus implicaciones.`
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