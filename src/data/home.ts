import type { ImageMetadata } from 'astro';

// ---------- Métricas ----------
export const heroStats = [
  { value: '+20k', label: 'Clientes potenciales generados' },
  { value: '+60', label: 'Proyectos terminados' },
  { value: '+1 mill', label: 'Pesos invertidos en pauta' },
];

export const resultStats = [
  { value: '+5 años', label: 'De experiencia' },
  { value: '+20k', label: 'Clientes potenciales generados' },
  { value: '+1 mill', label: 'De pesos invertidos' },
  { value: '+60', label: 'Negocios impulsados' },
];

// ---------- Servicios ----------
export const services = [
  {
    title: 'Diseño Web',
    href: '/diseno-web/',
    description:
      'Un sitio que responde las dudas de tu cliente, carga rápido y lleva a una sola acción. Tu MVP en línea en 10 días.',
    bullets: ['MVP en 10 días', 'Sistema para agendar', 'Un año de soporte y panel'],
  },
  {
    title: 'Generación de Leads',
    href: '/generacion-de-leads/',
    description:
      'Campañas en Meta y Google con embudos que filtran y califican. A ti solo llegan los que sí quieren comprar.',
    bullets: ['Meta y Google Ads', 'Embudos que califican', 'Seguimiento hasta la cita'],
  },
];

// ---------- Clientes (logos) ----------
const logoFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/clients/*.png', { eager: true });

const clientNames: Record<string, string> = {
  'Academia-de-liderazgo-logo': 'Academia de Liderazgo',
  'Alhab-logo': 'Alhab',
  'Ciasa-logo': 'Ciasa',
  'Cordemex': 'Cordemex',
  'El-campeon-logo': 'El Campeón',
  'Epp-loog': 'EPP',
  'Gabriela-tierra-logo': 'Gaby Tierra Joyería',
  'Garma-logo': 'Garma',
  'Group-832': 'Cliente Neopoint',
  'Guillermina-pesquera-logo': 'Guillermina Pesquera',
  'Holos-888': 'Holos 888',
  'La-gladiola': 'La Gladiola',
  'Milan-y-silva-logos': 'Milán y Silva',
  'Ocg-logo': 'OCG',
  'Omniclean-robotics-logo': 'Omniclean Robotics',
  'Rafael-rojas-logo': 'Rafael Rojas',
  'Real-del-alba': 'Real del Alba',
  'Santo-chicharron-logo': 'Santo Chicharrón',
  'Scclmex-logo': 'SCCL México',
  'Studio-luto': 'Studio Luto',
  'elena-brows': 'Elena Brows',
  'jaime-acevedo-logo': 'Jaime Acevedo',
  'jf-logo': 'JF',
  'orion-arquitectos-logo': 'Orión Arquitectos',
  'valorance': 'Valorance',
};

export const clients = Object.entries(logoFiles)
  .map(([path, mod]) => {
    const key = path.split('/').pop()!.replace('.png', '');
    return { name: clientNames[key] ?? key, image: mod.default };
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'es'));

// ---------- Testimonios (antes eran imágenes; ahora texto real) ----------
export const testimonials = [
  { quote: 'Excelente atención y servicio. Su trabajo es profesional y de calidad, siempre abiertos a recomendaciones.', author: 'Juan OM' },
  { quote: 'Excelente trabajo, siempre muy atentos y claros :D', author: 'Isis Guzmán' },
  { quote: 'Súper recomendado y atento.', author: 'Sara Cruces' },
  { quote: 'Tengo más de 2 años trabajando con ellos y en lo personal es una gran herramienta que me ha ayudado a crecer mi negocio.', author: 'Natura Red Hiddenita' },
  { quote: '100% confiable. Lo recomiendo ampliamente.', author: 'Ma. Bertha Morales' },
  { quote: 'Excelente.', author: 'Virginia Camacho Sánchez' },
  { quote: 'Excelente servicio en todo lo que se brinda de información.', author: 'Juan David Paredón Romero' },
  { quote: 'Una agencia con gran talento, todos sus servicios son excelentes, buena atención y sobre todo buenos resultados.', author: 'Jessica Bernal' },
  { quote: 'Neopoint es un equipo altamente profesional en la gestión de nuestras redes sociales de negocio.', author: 'Dulce Barrón' },
  { quote: 'Excelente atención y servicio al cliente, me aclararon todas mis dudas, excelente trabajo, mejoró mucho mi emprendimiento.', author: 'Karla Daniela' },
  { quote: 'El servicio excelente y con resultados inmediatos.', author: 'Manuel Vargas' },
  { quote: 'Buen servicio y atención personalizada, me han ayudado a crecer, excelente disposición para crear justo lo que cada quien necesita.', author: 'Edna Tamara Meneses' },
  { quote: '¡Excelentes servicios! ¡Muy recomendable!', author: 'Jesús Mendoza' },
  { quote: 'Buena publicidad.', author: 'Claudia Ochoa Espinoza' },
  { quote: 'Recomendado completamente. Estoy muy contento con el servicio de la empresa, muy profesional y muy buen trato.', author: 'Israel Meneses' },
  { quote: '¡Muy confiable! Recomendado 👍🏻', author: 'J P' },
];
