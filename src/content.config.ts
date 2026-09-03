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
      url: z.string().url().optional(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      results: z
        .array(z.object({ value: z.string(), label: z.string(), note: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { portfolio };
