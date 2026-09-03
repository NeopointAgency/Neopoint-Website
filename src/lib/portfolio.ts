import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'portfolio'>;

/** Ruta pública de un proyecto (se conservan las URLs de WordPress). */
export function projectHref(p: Project) {
  return p.data.category === 'funnel' ? `/portafoliofunnels/${p.id}/` : `/portafolio/${p.id}/`;
}

export async function getProjects() {
  const all = await getCollection('portfolio');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects(limit = 6) {
  const all = await getProjects();
  return all.filter((p) => p.data.featured && p.data.cover).slice(0, limit);
}
