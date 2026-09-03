// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://neopoint.mx',
  // Mantiene las URLs de WordPress (/diseno-web/, /portafolio/jf/, …)
  trailingSlash: 'always',
  // URLs viejas de WP sin equivalente. En estático Astro genera páginas con
  // <meta http-equiv="refresh">; con adapter de Vercel/Netlify/Cloudflare
  // se convierten en 301 reales.
  redirects: {
    '/lp-attractleads/': { status: 301, destination: '/generacion-de-leads/' },
    '/elementor-1495/': { status: 301, destination: '/' },
  },
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Rethink Sans',
      cssVariable: '--font-rethink',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      optimizedFallbacks: true,
    },
  ],
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
