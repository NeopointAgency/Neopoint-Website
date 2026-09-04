/** Páginas locales de diseño web (no van en el menú; sí en footer y sitemap). */
export type City = {
  slug: string;
  name: string;
  state: string;
  /** Cómo detectar proyectos de esa ciudad en el campo `sector` de la colección */
  match: RegExp;
  /** Frase de cercanía */
  near: string;
  /** Frase para el hero */
  intro: string;
};

export const cities: City[] = [
  {
    slug: 'celaya',
    name: 'Celaya',
    state: 'Guanajuato',
    match: /celaya/i,
    near: 'Somos de aquí. Nos vemos en persona o por videollamada, sin intermediarios.',
    intro: 'No una página por tener una página. Un sitio que aparece en Google, responde las dudas de tu cliente y lo lleva a escribirte.',
  },
  {
    slug: 'queretaro',
    name: 'Querétaro',
    state: 'Querétaro',
    match: /quer[eé]taro/i,
    near: 'Estamos a 40 minutos. Nos vemos en persona en Querétaro o por videollamada, como prefieras.',
    intro: 'Querétaro crece rápido y tu competencia ya está en Google. Un sitio que aparece, convence y lleva a tu cliente a escribirte.',
  },
];
