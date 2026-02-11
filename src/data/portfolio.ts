// Portfolio Data - Data-driven structure for easy maintenance

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  contribution: string;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface Skill {
  name: string;
  category: 'tech' | 'ia' | 'tools' | 'soft';
}

export interface Education {
  title: string;
  institution: string;
  year: string;
  category: 'degree' | 'course' | 'ia' | 'diploma';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "María Fernanda Moreno",
  role: "AI Automation & Full Stack Builder | Desarrollo Web en Vibe Coding y Optimización de Procesos con IA",
  subtitle: "Ayudo a empresas a escalar mediante el desarrollo de interfaces modernas y la integración estratégica de IA para automatizar tareas repetitivas.",
  linkedin: "https://www.linkedin.com/in/mafetechdev",
  //github: "https://github.com/MafeTech24",
  initials: "MF",
};

export const aboutText = `Soy una desarrolladora enfocada en la intersección del código y la Inteligencia Artificial para crear soluciones que no solo se ven bien, sino que trabajan por vos. Mi enfoque principal es el Vibe Coding: utilizar la IA para acelerar el desarrollo y entregar productos de alta calidad en tiempos récord.\n
¿Qué puedo aportar a tu proyecto?

- Desarrollo Full Stack (MERN): Construyo interfaces modernas, rápidas y escalables con React y TypeScript, asegurando que cada componente esté optimizado para la mejor experiencia de usuario.

- IA & Automatización de Procesos: Me especializo en diseñar flujos de trabajo inteligentes con n8n y Make, integrando herramientas como Google Workspace e IA para eliminar tareas repetitivas y reducir errores operativos.

- Estrategia 360° (CX + Digital Marketing): Gracias a mi trayectoria en Customer Experience y formación en Marketing Digital y Social Media, no solo escribo código; diseño soluciones orientadas a la conversión y el posicionamiento. Identifico los puntos de dolor de tu negocio para crear productos técnicos que potencien tu presencia digital y mejoren la relación con tus clientes de forma medible.`;
export const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Empatía y motivación",
  "Eficiencia y organización",
  "Resolución de problemas",
];

export const techSkills: Skill[] = [
  { name: "JavaScript", category: "tech" },
  { name: "React.js", category: "tech" },
  { name: "Node.js", category: "tech" },
  { name: "Express", category: "tech" },
  { name: "MongoDB", category: "tech" },
  { name: "Vite", category: "tech" },
  { name: "JWT", category: "tech" },
  { name: "APIs REST", category: "tech" },
  { name: "Cloudinary", category: "tech" },
  { name: "n8n", category: "ia" },
  { name: "Gemini", category: "ia" },
  { name: "GPT", category: "ia" },
  { name: "Prompt Engineering", category: "ia" },
  { name: "IA Multimodal", category: "ia" },
  { name: "GitHub", category: "tools" },
  { name: "Google Workspace", category: "tools" },
  { name: "Trello", category: "tools" },
  { name: "Canva Pro", category: "tools" },
  { name: "UX/UI básico", category: "soft" },
  { name: "Diseño asistido por IA", category: "ia" },
  { name: "Generación de imágenes y video con IA", category: "ia" },
  { name: "Firebase", category: "tech" },
  { name: "Supabase", category: "tech" },
  { name: "SQL", category: "tech" },
  { name: "Lovable", category: "ia" },
  { name: "Google Studio AI", category: "ia" },
  { name: "Google Antigravity", category: "tools" }
];

export const education: Education[] = [
  // Degrees
  /*{
    title: "Licenciatura en Producción de Bio-Imágenes",
    institution: "Universidad Nacional de Córdoba",
    year: "2004",
    category: "degree",
  },*/
  {
    title: "Carrera Fullstack (MERN)",
    institution: "Coderhouse",
    year: "2024 – Actualidad",
    category: "degree",
  },
  {
    title: "Marketing Digital, Community Manager y Redes Sociales",
    institution: "Coderhouse",
    year: "2025",
    category: "course",
  },
  {
   title: "Diplomatura en E-commerce, Marketing Digital y Redes Sociales",
    institution: "UTN Córdoba",
    year: "2021",
    category: "diploma",
  },
 
  // IA & Automation
  {
    title: "Carrera de AI Automation",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso de Creación de Productos desde Cero con IA (Vibe Coding)",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso N8N: Crea automatizaciones inteligentes",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  {
    title: "Curso de RAG y Agentes de IA",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  
  {
    title: "Inmersión de IA con Google Gemini",
    institution: "Alura Latam",
    year: "2025",
    category: "ia",
  },
  // Diplomas & Courses
 /**  {
   title: "Diplomatura en E-commerce, Marketing Digital y Redes Sociales",
    institution: "UTN Córdoba",
    year: "2021",
    category: "diploma",
  },
  {
    title: "Marketing Digital, Community Manager y Redes Sociales",
    institution: "Coderhouse",
    year: "2025",
    category: "course",
  }, **/
];

export const experiences: Experience[] = [
  {
    title: "Freelance Web Developer (Frontend)",
    company: "Proyectos Independientes",
    period: "Dic 2024 – Actualidad",
    description: "Desarrollo y mantenimiento de sitios web para clientes. Integración de formularios, analítica y assets. Debugging y documentación funcional.",
  },
  {
    title: "Trabajo independiente – Emprendimiento Propio (Distribución)",
    company: "Emprendimiento Propio",
    period: "2018 – Actualidad",
    description: "Gestión integral de operaciones: soporte al cliente, priorización de urgencias, trazabilidad de pedidos, comunicación clara y resolución rápida de problemas.",
  },
  {
    title: "Realización de Estudios de Imágenes Médicas",
    company: "IMC – Servicio de Técnicas No Invasivas",
    period: "2012 – 2018",
    description: "Trato directo, soporte y contención a pacientes. Gestión y coordinación de prácticas médicas y turnos.",
  },
  {
    title: "Atención al Cliente - Call Center Inbound",
    company: "Sur Contact Center (Claro *611) · Allus (Telefónica 112) · SOS Asistencia",
    period: "2007 – 2012",
    description: "Gestión integral de consultas y reclamos, brindando soluciones efectivas. Registro y seguimiento en sistemas de gestión.",
  },
];

export const projects: Project[] = [ 
  {
  id: "document-processing-pipeline",
  title: "Sistema Inteligente de Procesamiento de Documentos",
  problem: "Procesamiento manual de facturas y documentos administrativos consume tiempo y genera errores. Falta automatización para extraer datos, validar y organizar documentos en volúmenes altos.",
  solution: "Pipeline event-driven que recibe documentos desde múltiples canales (webhook), extrae datos automáticamente mediante OCR simulado + IA, valida mediante confianza, elimina duplicados con deduplicación por hash, y registra todo en base de datos con auditoría completa.",
  stack: ["n8n", "Supabase", "Google Sheets", "Google Cloud", "JavaScript/Code", "Webhooks", "Hash-based Deduplication"],
  contribution: "• Arquitectura multi-capa: ingesta → normalización → deduplicación → procesamiento → persistencia → logging.\n• Implementación de deduplicación inteligente usando MD5 hash para evitar duplicados.\n• Nodos Code para normalización de inputs desde diferentes orígenes.\n• Integración Supabase para persistencia con auditoría automática.\n• Dashboard en tiempo real en Google Sheets con logging de cada operación.\n• Simulación de OCR con extracción de datos estructurados en JSON.\n• Manejo de condicionales para routing inteligente de documentos.",
  image: "procesoTramitacionDoc.jpg",
  //github: "https://github.com/tu-usuario/document-processing-pipeline",
  //loom: "https://loom.com/share/tu-video-id (agregar mañana después de grabar)"
  },
  {
  id: "chatbot-furnarius",
  title: "Asistente Inteligente de CX — Furnarius Eventos",
  problem: "Falta de respuesta inmediata a consultas complejas de ambientación y mobiliario, afectando la conversión de clientes potenciales.",
  solution: "Flujo de IA conversacional que procesa entradas de audio y texto, automatizando la calificación de leads y la respuesta personalizada mediante modelos de lenguaje avanzados.",
  stack: ["n8n", "Webhooks", "IA / LLM", "HTTP Request", "WhatsApp API"],
  contribution: "• Diseño de flujo lógico para el procesamiento de archivos de audio.\n• Implementación de nodos de decisión (Switch) para rutas de atención.\n• Integración de agentes de IA para respuestas naturales y contextuales.\n• Optimización de la experiencia del usuario (CX) en el canal de contacto.",
  image: "chatbotFurnarius.jpg", 
  },  
{
  id: "chatbot-llm-oracle",
  title: "Arquitectura de Chatbot con Lógica de Datos Asíncrona",
  problem: "Dificultad de los sistemas tradicionales para gestionar consultas complejas que requieren tiempos de procesamiento variables sin bloquear la experiencia del usuario.",
  solution: "Desarrollo de un motor de consultas inteligente que conecta con LLMs de última generación. Implementa nodos de espera y división de datos para garantizar respuestas precisas y fluidas en cualquier volumen de demanda.",
  stack: ["n8n", "LLM Integration", "Advanced Logic Nodes", "JSON Manipulation"],
  contribution: "• Desarrollo de una interfaz de comunicación fluida con agentes de IA.\n• Implementación de lógica de 'Split Out' para descomponer consultas complejas en tareas procesables.\n• Gestión de latencia mediante nodos de espera controlada para estabilidad total.\n• Arquitectura certificada bajo estándares de Oracle Next Education.",
  image: "conexionLLMS.jpg",
},
  {
  id: "furnariusEventos",
  title: "Furnarius Eventos — Sitio web institucional (Cliente real- Maqueta)",
  problem: "Empresa del rubro eventos sin presencia digital profesional, lo que limitaba su visibilidad, comunicación de servicios y captación de nuevos clientes.",
  solution: "Experiencia web inmersiva utilizando IA para la generación de prototipos visuales de alta fidelidad. Se logró una comunicación clara de servicios personalizados y una vitrina de proyectos ejecutados.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "• Relevamiento estratégico de objetivos de negocio y CX.\n• Uso de IA Generativa para recursos gráficos de alto impacto.\n• Arquitectura de UI orientada a la generación de leads (consultas).\n• Optimización de performance para carga de galerías de alta resolución.",
  liveUrl: "https://furnarius-eventos.vercel.app/",
  //repoUrl: "https://github.com/MafeTech24/furnariusEventos",
  image: "furnarius.jpg",
  },
  {
  id: "elReydelNorte",
  title: "El Rey del Norte — Catálogo Digital Estratégico",
  problem: "Falta de un canal centralizado para exhibir stock, lo que generaba procesos de venta lentos y una imagen de marca informal frente a la competencia.",  
  solution: "Desarrollo de un catálogo interactivo optimizado para conversión. Implementación de una interfaz visualmente imponente que organiza productos por categorías, facilitando la decisión de compra del cliente final.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "• Consultoría de negocio para definir la jerarquía de productos.\n• Diseño de UI enfocado en la visualización de alta calidad.\n• Estructura escalable para actualización constante de stock.\n• Optimización de velocidad de carga para dispositivos móviles.",
  liveUrl: "https://elreydelnorte-2.vercel.app/",
  //repoUrl: "https://github.com/ProyectosVibeCoding/elreydelnorte2",
  image: "elReyNorte.jpg",
  },
  {
  id: "artesaniaVeta",
  title: "Artesanía & Veta — Portfolio de Diseño de Autor",
  problem: "Dificultad para transmitir el valor artesanal y la exclusividad de las piezas a través de canales tradicionales, limitando el alcance a un público premium.",
  solution: "Sitio web de alta estética visual con enfoque en Storytelling. Se priorizó la jerarquía visual y el detalle de los materiales para posicionar la marca en el segmento de muebles de lujo.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "• Curaduría visual y diseño de identidad digital.\n• Desarrollo responsive con enfoque en la experiencia táctil/visual.\n• Implementación de secciones de 'Proceso Creativo' para aumentar el valor percibido.\n• Optimización de imágenes para mantener calidad sin sacrificar rendimiento.",
  liveUrl: "https://artesaniaveta.vercel.app/",
  //repoUrl: "https://github.com/ProyectosVibeCoding/artesaniaMadera",
  image: "artesani&beta.jpg",
  },
  {
  id: "pixelymoda",
  title: "Pixel&Moda — E-commerce (Proyecto Final React))",
  problem: "Proyecto académico que requería migrar un e-commerce a React, aplicando buenas prácticas de desarrollo frontend y una arquitectura escalable.",
  solution: "Desarrollo de una aplicación e-commerce en React con enfoque en componentización, reutilización de componentes y manejo de estado, priorizando mantenibilidad y experiencia de usuario. Incluye navegación, catálogo de productos, flujos de interacción y estructura preparada para escalar.",
  stack: ["React", "Vite", "JavaScript", "Bootstrap", "GitHub"],
  contribution: "• Diseño de la arquitectura de componentes. \n• Implementación de routing y navegación. \n• Manejo de estado global para el carrito de compras. \n• Desarrollo de componentes reutilizables. \n• Optimización de rendimiento y experiencia de usuario.",
  liveUrl: "https://pixelymoda.vercel.app/",
  //repoUrl: "https://github.com/MafeTech24/ProyectoFinalMoreno",
  image: "logoPyM.jpg",
  },
{
  id: "n8n-reuniones",
  title: "Sistema de Actas e Insights con IA (Google Workspace)",
  problem: "Procesamiento manual de grabaciones de reuniones, resultando en pérdida de información crítica y falta de seguimiento de tareas.",
  solution: "Arquitectura de flujo automatizado que transforma audio en documentos de gestión. Utiliza IA para extraer puntos clave y actualizar tableros Kanban de forma autónoma.",
  stack: ["n8n", "Google Drive", "Google Docs", "Google Sheets", "IA (LLM)"],
  contribution: "• Ingeniería de prompts para la extracción precisa de tareas.\n• Integración de APIs de Google para gestión documental.\n• Diseño de lógica de actualización asíncrona en Sheets.\n• Testing de precisión en transcripción y categorización.",
  //repoUrl: "https://github.com/MafeTech24/n8n-actas-kanban-google-workspace",
  image: "n8n-workflow.jpg",
},  
  {
    id: "cristianmartinez",
    title: "Sitio Web Profesional – Abogado Cristian Martínez",
    problem: "El cliente necesitaba presencia web profesional para captar clientes.",
    solution: "Sitio web moderno con todos los medios de Contacto y diseño profesional.",
    stack: ["HTML", "CSS", "JavaScript","bootstrap","Sass","Github", "Vercel"],
    contribution: "Desarrollo completo, relevamiento de necesidades y publicación.",
    liveUrl: "https://cristianmartinez-abogado.vercel.app/",
    image: "cristianMartinez.png",
  },
  {
    id: "abyco",
    title: "AB&CO — Hub de Servicios Profesionales Integrales",
    problem: "Dispersión en la comunicación de servicios multidisciplinarios, lo que dificultaba que el cliente comprendiera la propuesta de valor integral del estudio.",
    solution: "Diseño de una arquitectura de información estratégica que organiza las áreas (Legal, Contable, Tech) de forma independiente pero cohesiva, reforzando la autoridad del staff.",
    stack: ["HTML", "CSS", "JavaScript", "bootstrap", "Github", "Vercel"],
    contribution: "• Definición de UX estratégica para segmentación de clientes.\n• Diseño de interfaz sobria y profesional acorde al sector corporativo.\n• Integración de formularios inteligentes para pre-calificación de prospectos.\n• Acompañamiento en la estrategia de comunicación y branding digital.",    liveUrl: "https://abyco-asesoriaintegral.vercel.app/index.html#",
    image: "abyco.jpg",
  },
  {
    id: "silviamariella",
    title: "Sitio Web – Silvia Mariella & José Tomás",
    problem: "Necesidad sitio web para eventos y proyecto personal.",
    solution: "Landing page elegante con diseño personalizado.",
    stack: ["HTML", "CSS", "JavaScript","bootstrap", "Github", "Vercel"],
    contribution: "Diseño, desarrollo y deploy en Vercel.",
    liveUrl: "https://silviamariella-josetomas.vercel.app/",
    image: "silviayJose.jpg",
  },      
  {
    id: "dulceybella",
    title: "Dulce y Bella - Distribuidora de Perfumes (Proyecto Final JS)",
    problem: "Proyecto académico: crear un e-commerce funcional con JS puro.",
    solution: "Catálogo de productos, carrito de compras y flujo de compra completo.",
    stack: ["JavaScript", "HTML", "bootstrap", "Github", "Vercel"],
    contribution: "Desarrollo completo del frontend y lógica del carrito.",
    liveUrl: "https://dulceybellaperfumes.vercel.app/",
    //repoUrl: "https://github.com/MafeTech24/proyectoFinalMorenoMariaFernanda",
    image: "dulceybella.jpg",
  },  
  //{
    //id: "api-rest-1",
    //title: "API REST (Node/Express)",
    //problem: "En carga / Próximamente",
    //solution: "En carga / Próximamente",
    //stack: ["Node.js", "Express", "MongoDB"],
    //contribution: "En carga / Próximamente",
    //isPlaceholder: true
  //},
  // { id: "api-rest-2",
  //  title: "API REST (Node/Express)",
  //  problem: "En carga / Próximamente",
  //  solution: "En carga / Próximamente",
  //  stack: ["Node.js", "Express", "MongoDB"],
  //  contribution: "En carga / Próximamente",
  //  isPlaceholder: true
  //},
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre mí" },
  { href: "#education", label: "Estudios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
];
