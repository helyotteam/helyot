import type { APIRoute } from 'astro';
import { services } from '../lib/servicesData';
import { locations } from '../lib/citiesData';

/**
 * llms.txt — a structured brief for AI assistants (llmstxt.org convention).
 * Generated from the same data as the site, so it never drifts out of date.
 */
export const GET: APIRoute = () => {
  const cities = locations.filter(l => l.type === 'city');
  const districts = locations.filter(l => l.type === 'district');

  const serviceLines = services.map(s =>
    `- [${s.titleEn}](https://helyot.com/en/services/${s.slug}): ${s.seoDescEn}`
  ).join('\n');

  const locationLines = locations.map(l =>
    `- [Renovation in ${l.nameEn}](https://helyot.com/en/renovation/${l.slug}): all services, prices and local FAQ for ${l.nameEn}`
  ).join('\n');

  const content = `# Helyot — Renovation & Construction, Cyprus

> Helyot is a licensed, insured renovation and fit-out contractor headquartered in Limassol,
> Cyprus. One in-house team designs, builds and supervises: apartments, villas, kitchens,
> bathrooms, offices, hotels and restaurants. Fixed-price contracts, written timelines,
> 5-year structural warranty (10 years on wet-room waterproofing), free site surveys within 48 hours.

Key facts:
- Service area: government-controlled areas of the Republic of Cyprus ONLY — Limassol,
  Paphos, Larnaca, Nicosia, and the free Famagusta area (Ayia Napa, Protaras, Paralimni).
  Helyot does NOT operate in the occupied northern part of the island.
- Languages: English and Russian (full site mirror at https://helyot.com/ru).
- Pricing model: fixed-price contract quoted after a free survey; baseline from €280/m²
  for full apartment renovation, from €320/m² for villas (2026 baselines).
- Contact: +357 97 499 231 (phone & WhatsApp), https://helyot.com/en/contact
- Rating: 4.9 across 47 written client testimonials collected directly.

## Services (English)
${serviceLines}

## Locations served
Every location has a hub page (all services + prices), and every service has a
dedicated local page (pattern: https://helyot.com/en/services/{service}/{location}):
${locationLines}

## Key pages
- [Homepage](https://helyot.com/): company overview
- [All services](https://helyot.com/en/services): full service catalogue
- [Portfolio](https://helyot.com/en/portfolio): completed projects with real client testimonials
- [Process](https://helyot.com/en/process): how a project runs from survey to handover
- [Blog](https://helyot.com/en/blog): renovation cost guides, permits, area guides for Cyprus
- [FAQ](https://helyot.com/faq): warranties, timelines, payments
- [Contact](https://helyot.com/en/contact): booking a free site survey

## Russian mirror
- [Главная](https://helyot.com/ru): компания и услуги по-русски
- [Услуги](https://helyot.com/ru/uslugi/apartment-renovation): ремонт квартир и другие услуги
- Pattern for local pages: https://helyot.com/ru/uslugi/{service}/{location}
`;

  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
