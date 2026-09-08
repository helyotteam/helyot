/**
 * Photo mappings for service × location pages and location hubs.
 * All paths are real files in public/images/.
 * Swap any path here and every dependent page updates on build.
 */
import type { ServiceCategory } from './servicesData';

/** Atmospheric hero photo per service category */
export const categoryHero: Record<ServiceCategory, string> = {
  spaces:     '/images/gallery-hero-2.webp',
  commercial: '/images/projects/city-office.webp',
  specialist: '/images/projects/marina-penthouse.webp',
  trades:     '/images/projects/spa-bathroom.webp',
};

/** Full-bleed parallax band photo per category (different from hero) */
export const categoryBand: Record<ServiceCategory, string> = {
  spaces:     '/images/projects/germasogeia-villa.webp',
  commercial: '/images/portfolio/city-center-office-2.webp',
  specialist: '/images/projects/agios-kitchen.webp',
  trades:     '/images/projects/marina-kitchen.webp',
};

/** Location hub / hero photo per location slug.
 *  East-coast cities use quality generic shots until real local photos are added. */
export const locationPhoto: Record<string, string> = {
  'limassol':             '/images/limassol-real.webp',
  'germasogeia':          '/images/areas/germasogeia.webp',
  'agios-tychonas':       '/images/areas/agios-tychonas.webp',
  'potamos-germasogeias': '/images/areas/potamos.webp',
  'limassol-city-centre': '/images/areas/city-centre.webp',
  'limassol-marina':      '/images/projects/marina-penthouse.webp',
  'paphos':               '/images/projects/agios-villa.webp',
  'larnaca':              '/images/gallery/apartment-after-1.webp',
  'nicosia':              '/images/projects/city-office.webp',
  'ayia-napa':            '/images/gallery/villa-after-1.webp',
  'protaras':             '/images/gallery/villa-after-2.webp',
  'paralimni':            '/images/gallery/apartment-after-2.webp',
};
