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
      description: 'Representación y asesoría en litigios civiles y comerciales complejos, conflictos entre socios y otras disputas legales con soluciones efectivas.',
      icon: 'scale',
      detailedDescription: `Antequera Abogados cuenta con una destacada trayectoria en la atención y asistencia que proporciona a sus clientes en la resolución de casos civiles y comerciales complicados, conflictos entre socios, problemas de insolvencia y reestructuración de empresas, así como en asuntos ambientales y sanciones, litigios penales, de construcción y disputas relacionadas con concesiones, entre otros.`
    },
    {
      title: 'Derecho Laboral',
      description: 'Asesoría en contratación, finalizaciones laborales, compensaciones, subcontrataciones y políticas corporativas tanto para empleadores como trabajadores.',
      icon: 'briefcase',
      detailedDescription: `Antequera Abogados posee una amplia trayectoria en la contratación y finalización de relaciones laborales, tanto individuales como colectivas, así como en la elaboración de paquetes de compensación que incluyen opciones de acciones, auditorías de cumplimiento normativo, subcontrataciones, políticas corporativas, investigaciones internas, y cuestiones laborales vinculadas a fusiones y adquisiciones, en adición a asuntos de seguridad social e impuestos aplicables a los trabajadores.

En lo relacionado a la subcontratación de servicios, Antequera Abogados brinda asesoría continua a empresas subcontratistas y propietarios en proyectos, identificando y reduciendo los riesgos y responsabilidades legales implicadas.`
    },
    {
      title: 'Derecho Corporativo',
      description: 'Asistencia integral en ESG, derecho ambiental, comercio internacional y cumplimiento normativo para empresas nacionales e internacionales.',
      icon: 'building',
      detailedDescription: `Antequera Abogados cuenta con una amplia experiencia brindando asesoría a empresas y entidades del estado en diversos asuntos relacionados con la aplicación de factores ambientales, sociales y de gobernanza (ESG), tanto para aquellos que invierten como para los que reciben inversiones.

En relación con ESG, los servicios que ofrece Antequera Abogados incluyen la identificación de riesgos y oportunidades que surgen de nuevas tendencias, directrices no obligatorias y reformas legales en los distintos ámbitos y sectores en los que sus clientes están involucrados.

Derecho Ambiental: Brindamos orientación a nuestros clientes en todas las áreas del Derecho Ambiental, incluyendo conflictos administrativos, litigios, inspecciones, evaluación de la planificación territorial y responsabilidad ecológica, adquisición de permisos, así como en todos los elementos conectados con el Sistema de Evaluación de Impacto Ambiental (SEIA). La firma posee una amplia trayectoria en procesos relacionados con temas ambientales, proporcionando asesoramiento para alcanzar estándares a nivel internacional, en gestiones de financiamiento, cuestiones relacionadas con ESG, temas asociados a la Ley REP, diálogos con comunidades y la ejecución del Convenio 169 de la OIT.

Comercio Internacional: Proporcionamos apoyo a nuestros clientes en todos los aspectos del sector de importación y exportación desde perspectivas reguladoras, comerciales y legales. Facilitamos las relaciones comerciales y legales con funcionarios aduaneros locales, transportistas y el Servicio Nacional de Aduanas, en lo que concierne a la obtención de licencias y permisos para la entrada de productos regulados. Contamos con amplia experiencia en el análisis del cumplimiento de normativas aduaneras, en la redacción y negociación de contratos internacionales de distribución y logística, así como en la gestión de documentos ante el Servicio Nacional de Aduanas y en la resolución de disputas relacionadas con asuntos aduaneros y comerciales.`
    },
    {
      title: 'Derecho Tributario',
      description: 'Equipo multidisciplinario de abogados, contadores y economistas que brindan asesoría fiscal nacional e internacional con enfoque práctico.',
      icon: 'calculator',
      detailedDescription: `El departamento fiscal de Antequera Abogados se compone de un equipo multidisciplinario de abogados, contadores y economistas, con un amplio conocimiento tanto a nivel nacional como internacional.

La firma se involucra de manera activa en la organización de transacciones complejas de gran relevancia, en litigios, planeación tributaria y procesos de auditoría, siempre con un enfoque práctico destinado a ofrecer soluciones efectivas y completas.`
    },
    {
      title: 'Derecho Inmobiliario',
      description: 'Servicios legales para transacciones inmobiliarias, arrendamientos, permisos y regularizaciones con total seguridad jurídica.',
      icon: 'house',
      detailedDescription: `El área de Derecho Inmobiliario de Antequera Abogados ofrece un servicio integral que abarca todos los aspectos legales relacionados con bienes inmuebles, tanto para particulares como para empresas del sector.

Nuestra práctica incluye el asesoramiento en compraventas de inmuebles, realizando un exhaustivo estudio de la documentación, verificación de cargas y gravámenes, y supervisión de todo el proceso hasta su inscripción registral, garantizando la máxima seguridad jurídica en cada transacción.

En materia de arrendamientos, redactamos y revisamos contratos tanto de uso residencial como comercial, asegurando la protección de los intereses de propietarios e inquilinos y previniendo conflictos futuros mediante cláusulas claras y equilibradas.`
    },
    {
      title: 'Derecho Penal',
      description: 'Especialización en litigios complejos, consultoría en delitos económicos, fiscales, cibercrímenes y prevención de riesgos penales.',
      icon: 'shield',
      detailedDescription: `El bufete de Antequera Abogados se especializa en litigios complejos. El equipo proporciona consultorías en áreas como delitos económicos, fiscales, violaciones a leyes anticorrupción, cibercrímenes, lavado de activos, y violaciones a normativas de propiedad industrial e intelectual, entre otros.

Antequera Abogados cuenta con un grupo penal con diversas especialidades que le permite asistir a clientes desde las fases iniciales, priorizando la prevención y evaluación de posibles riesgos, además de realizar una planificación adecuada, investigaciones internas y tácticas de respuesta ante cualquier eventualidad penal, defendiendo los intereses de sus clientes en instancias tanto administrativas como judiciales en todo el país.`
    },
    {
      title: 'Derecho de Familia',
      description: 'Especialización en asuntos familiares como separaciones, pensiones alimenticias, derechos de visita, custodia y adopción con servicios de alta calidad.',
      icon: 'people',
      detailedDescription: `Antequera Abogados tiene una gran especialización y vasta experiencia en asuntos familiares, ofreciendo un servicio de gran calidad a nuestros clientes. Nos especializamos en separaciones unilaterales, separaciones consensuadas, separaciones por falta, pensiones alimenticias, derechos de visita, custodia, adopción, reclamaciones de paternidad, declaración de bienes familiares, entre otros.`
    },
    {
      title: 'Derecho Administrativo',
      description: 'Asesoramiento en derecho constitucional, administrativo, energía, contratación pública y representación ante entidades gubernamentales.',
      icon: 'building-lock',
      detailedDescription: `Antequera Abogados cuenta con una fuerte trayectoria en ofrecer asesoramiento a clientes en asuntos de derecho constitucional y administrativo, abarcando temas complejos que surgen en negociaciones, investigaciones, fases previas a posibles litigios o a lo largo de disputas judiciales.

La asesoría de Antequera Abogados abarca una amplia variedad de tópicos, como consultas legales, análisis jurídicos y comparecencias ante la Corte, Corte Constitucional, además de brindar asesoramientos que fomentan la transparencia en la información pública y asesorías legislativas para organismos tanto públicos como privados.

El despacho tiene experiencia en la presentación de solicitudes ante la Contraloría General de la República, así como en la defensa de individuos ante entidades públicas y tribunales en procesos sancionadores en diferentes áreas.

Energía: Ofrecemos un servicio integral que incluye temas normativos, la creación de proyectos, la negociación de contratos de energía, acuerdos de infraestructura, financiamiento de iniciativas, fusiones, adquisiciones y asociaciones empresariales. Asimismo, el despacho ha proporcionado asesoramiento a licitadores y postulantes en múltiples procesos de licitación, tanto en el ámbito público como privado.`
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