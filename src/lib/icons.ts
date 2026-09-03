/** Trazos SVG (24x24, stroke) reutilizables en FeatureGrid. */
export const icons = {
  map: `<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>`,
  search: `<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>`,
  brush: `<path d="M14 3l7 7-9 9H5v-7l9-9Z"/><path d="M12 5l7 7"/>`,
  bolt: `<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>`,
  chat: `<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.7A8 8 0 1 1 21 12Z"/>`,
  funnel: `<path d="M4 4h16l-6 8v6l-4 2v-8L4 4Z"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`,
  building: `<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M16 9h2a2 2 0 0 1 2 2v10"/><path d="M8 7h4M8 11h4M8 15h4M2 21h20"/>`,
  sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
  chip: `<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>`,
  compass: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>`,
  chart: `<path d="M4 20V4"/><path d="M4 20h16"/><path d="m7 15 4-5 3 3 5-7"/>`,
  handshake: `<path d="m11 17 2 2a2 2 0 0 0 2.8 0l4-4a2 2 0 0 0 0-2.8L15 7.4a2 2 0 0 0-2.8 0L11 8.6"/><path d="m8 14 2 2a2 2 0 0 0 2.8 0l3.5-3.5"/><path d="M4.2 12.2 3 11a2 2 0 0 1 0-2.8l4-4a2 2 0 0 1 2.8 0L11 5.4"/>`,
  heart: `<path d="M12 21s-7-4.6-9.3-8.6C.8 9 3 5 6.8 5c2 0 3.4 1 4.2 2.3C11.8 6 13.2 5 15.2 5 19 5 21.2 9 19.3 12.4 17 16.4 12 21 12 21Z"/>`,
  eye: `<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`,
  layers: `<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17 9 5 9-5"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  shield: `<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>`,
};
export type IconName = keyof typeof icons;
