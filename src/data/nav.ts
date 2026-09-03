export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Portafolio', href: '/portafolio/' },
  { label: 'Diseño Web', href: '/diseno-web/' },
  { label: 'Generación de Leads', href: '/generacion-de-leads/' },
  { label: 'Nosotros', href: '/nosotros/' },
];

export const footerNav = {
  servicios: [
    { label: 'Diseño Web', href: '/diseno-web/' },
    { label: 'Generación de Leads', href: '/generacion-de-leads/' },
  ],
  empresa: [
    { label: 'Portafolio', href: '/portafolio/' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Agendar asesoría', href: 'https://cal.com/neopoint-agency-rq1nwu/neopoint-web-studio' },
  ],
  legal: [{ label: 'Política de privacidad', href: '/politica-privacidad/' }],
} as const;
