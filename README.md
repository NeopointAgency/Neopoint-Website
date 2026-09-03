# neopoint.mx — sitio en Astro

Migración del sitio de Neopoint (antes WordPress + Elementor) a **Astro 7** con **Tailwind CSS 4** y TypeScript. Sitio 100 % estático: sin base de datos, sin plugins, sin JavaScript de terceros.

## Stack

- **Astro 7** — salida estática, imágenes optimizadas (`astro:assets`), fuentes auto-hospedadas (Rethink Sans vía Fonts API), sitemap.
- **Tailwind CSS 4** — tokens de diseño en `src/styles/global.css` (`@theme`).
- **TypeScript estricto**.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:4321)
cp .env.example .env  # opcional: IDs de GA4 / Meta Pixel
npm run build      # genera el sitio en dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

```
src/
  components/
    layout/    Header, Footer
    sections/  Hero, ClientsMarquee, Services, Portfolio, Results, Testimonials,
               FinalCta, Showcase (portafolio con monitor fijo), ProjectDetail,
               WebProcessScene (animación CSS del hero de diseño web, 16 s en bucle)
    ui/        Button, Monitor, ProjectCard, PageHero, SectionHeading, FeatureGrid, Faq, Logo,
               GraphicCard (tarjeta ilustrada con degradado)
    graphics/  ilustraciones CSS/SVG para GraphicCard: Sitemap, Seo, Editor, Code, Ad, Funnel, Chat
  content/portfolio/*.md   un archivo por proyecto (colección de contenido)
  content.config.ts        esquema de la colección
  data/
    site.ts    nombre, URL, descripción, correo, enlace de Cal.com, redes
    nav.ts     menú principal y del footer
    home.ts    métricas, servicios, clientes, testimonios
  layouts/Base.astro   <head> con SEO, Open Graph, JSON-LD, fuentes; prop `theme`
  lib/portfolio.ts     helpers de la colección (orden, destacados, rutas)
  pages/
    index.astro, diseno-web/, generacion-de-leads/, nosotros/, politica-privacidad/, 404
    portafolio/index.astro          showcase (tema oscuro)
    portafolio/[slug].astro         detalle de sitio web
    portafoliofunnels/[slug].astro  detalle de funnel (URL heredada de WP)
  assets/    logos de clientes, imágenes de portafolio por proyecto, marca
  styles/global.css    tokens (claro/oscuro), utilidades card, reveal, prosa
public/
  favicon.png, og-neopoint.png, robots.txt
```

## Editar contenido

- **Home, servicios, testimonios, clientes**: `src/data/home.ts`.
- **Proyectos del portafolio**: un archivo Markdown por proyecto en `src/content/portfolio/`. El frontmatter define título, categoría (`website` | `funnel`), sector, orden, `featured`, URL, portada y galería; el cuerpo es la descripción. Las imágenes van en `src/assets/portfolio/<slug>/`.
- **Aviso de privacidad**: `src/pages/politica-privacidad/index.astro`. Confirma el correo en `site.contactEmail`.

## Diseño

Estilo minimalista inspirado en moritzpetersen.com: botones de radio 14px sin sombras, tarjetas con borde fino y radio 20px, tipografía Rethink Sans en pesos medium/semibold, acento lima solo en detalles. La página de portafolio usa `theme="dark"` y el componente `Showcase`: la lista resalta el proyecto activo al hacer scroll o hover y el monitor cambia de pantalla. Las tarjetas de servicios (home), pilares (diseño web) y método (leads) son tarjetas ilustradas (`GraphicCard` + `src/components/graphics/`): área visual con degradado oscuro, baldosas flotantes y gráficos en CSS/SVG escalados con unidades `cqw`. Las secciones oscuras usan la utilidad `ink-glow` (halos que se desplazan lentamente, estilo portafolio) y las tarjetas sobre fondo oscuro `card-ink`. El hero de diseño web lleva `WebProcessScene`: una escena en CSS puro (sin video ni librerías) donde un cursor investiga el negocio, reúne palabras clave y voz del cliente, arma el mockup, lo convierte en un proyecto real y lo suma a la fila del portafolio. Los textos y el proyecto están al inicio del componente; con movimiento reducido se muestra el cuadro final. El hero del home es oscuro, con dos carriles de tarjetas de proyectos en desplazamiento horizontal infinito (se pausan al pasar el cursor; trazo animado y sombra en hover) bajo un degradado que deja visible el lado derecho.

## URLs

Se conserva la estructura de WordPress (`/diseno-web/`, `/generacion-de-leads/`, `/portafolio/<slug>/`, `/nosotros/`, `/politica-privacidad/`) con barra final, para no perder posicionamiento. Esas páginas aún están por migrar.

## Pendientes

- [ ] Confirmar `contactEmail` en `src/data/site.ts` (se usa en el aviso de privacidad)
- [ ] Revisar textos nuevos de Nosotros, FAQ y sectores (leads)
- [x] Analytics / Meta Pixel: `src/components/layout/Analytics.astro`, activado con `PUBLIC_GA_ID` y `PUBLIC_META_PIXEL` (ver `.env.example`)
- [ ] Deploy (Vercel, Netlify o Cloudflare Pages: `npm run build` → carpeta `dist/`)
- [x] Redirecciones 301 para `/lp-attractleads/` → `/generacion-de-leads/` y `/elementor-1495/` → `/` (en `astro.config.mjs`)
