import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['website', 'funnel']),
      sector: z.string(),
      order: z.number(),
      featured: z.boolean().default(false),
      /** mockup = foto de laptop (proyectos anteriores); desktop = captura real con marco de navegador; mobile = captura de celular con marco de teléfono */
      preview: z.enum(['mockup', 'desktop', 'mobile']).default('mockup'),
      url: z.string().url().optional(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      results: z
        .array(z.object({ value: z.string(), label: z.string(), note: z.string().optional() }))
        .default([]),
      /** Video testimonial alojado en /public (mp4 con subtítulos quemados) */
      testimonial: z
        .object({ video: z.string(), poster: z.string(), quote: z.string(), author: z.string(), role: z.string().optional(), vertical: z.boolean().default(false) })
        .optional(),
    }),
});

export const collections = { portfolio };
