import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { services } from '../lib/servicesData';
import { locations, matrixLocations } from '../lib/citiesData';

// Use astro.config site URL or fallback
const BASE = 'https://helyot.com';

// All public pages — noindex pages (privacy, terms, cookies) are excluded
const pages = [
  // ── Main EN pages ──────────────────────────────────────
  { url: '/',                                   p: '1.0', freq: 'weekly'  },
  { url: '/en/services/',                       p: '0.9', freq: 'monthly' },
  { url: '/en/about/',                          p: '0.8', freq: 'monthly' },
  { url: '/en/process/',                        p: '0.8', freq: 'monthly' },
  { url: '/en/contact/',                        p: '0.8', freq: 'monthly' },
  { url: '/en/blog/',                           p: '0.9', freq: 'weekly'  },

  // ── EN Service pages ───────────────────────────────────
  { url: '/en/services/apartment-renovation/',  p: '0.9', freq: 'monthly' },
  { url: '/en/services/villa-renovation/',      p: '0.9', freq: 'monthly' },
  { url: '/en/services/bathroom-renovation/',   p: '0.8', freq: 'monthly' },
  { url: '/en/services/kitchen-renovation/',    p: '0.8', freq: 'monthly' },
  { url: '/en/services/office-fit-out/',        p: '0.8', freq: 'monthly' },
  { url: '/en/services/interior-design/',       p: '0.8', freq: 'monthly' },
  { url: '/en/services/energy-modernization/',  p: '0.8', freq: 'monthly' },
  { url: '/en/services/smart-home/',            p: '0.7', freq: 'monthly' },
  { url: '/en/services/flooring/',              p: '0.7', freq: 'monthly' },
  { url: '/en/services/waterproofing/',         p: '0.7', freq: 'monthly' },
  { url: '/en/services/facade/',                p: '0.7', freq: 'monthly' },
  { url: '/en/services/windows-doors/',         p: '0.7', freq: 'monthly' },
  { url: '/en/services/pool-renovation/',       p: '0.7', freq: 'monthly' },
  { url: '/en/services/terrace-outdoor/',       p: '0.7', freq: 'monthly' },
  { url: '/en/services/hotel-renovation/',      p: '0.7', freq: 'monthly' },
  { url: '/en/services/retail-restaurant/',     p: '0.7', freq: 'monthly' },
  { url: '/en/services/joinery/',               p: '0.6', freq: 'monthly' },
  { url: '/en/services/plastering/',            p: '0.6', freq: 'monthly' },
  { url: '/en/services/painting/',              p: '0.6', freq: 'monthly' },
  { url: '/en/services/electrical-plumbing/',   p: '0.6', freq: 'monthly' },
  { url: '/en/services/structural-extensions/', p: '0.6', freq: 'monthly' },

  // EN blog posts are generated from the collection below, same as RU —
  // the hardcoded list they used to live in had drifted six articles behind.

  // ── RU pages ───────────────────────────────────────────
  { url: '/ru/',                                p: '0.9', freq: 'weekly'  },
  { url: '/ru/about/',                          p: '0.8', freq: 'monthly' },
  { url: '/ru/process/',                        p: '0.8', freq: 'monthly' },
  { url: '/ru/kontakty/',                       p: '0.8', freq: 'monthly' },
  { url: '/ru/blog/',                           p: '0.8', freq: 'weekly'  },

  // ── Portfolio case studies ─────────────────────────────
  { url: '/en/portfolio/limassol-marina-penthouse/', p: '0.8', freq: 'monthly' },
  { url: '/en/portfolio/agios-tychonas-villa/',      p: '0.8', freq: 'monthly' },
  { url: '/en/portfolio/germasogeia-apartment/',     p: '0.7', freq: 'monthly' },
  { url: '/en/portfolio/city-center-office/',        p: '0.7', freq: 'monthly' },
  { url: '/ru/portfolio/limassol-marina-penthouse/', p: '0.7', freq: 'monthly' },
  { url: '/ru/portfolio/agios-tychonas-villa/',      p: '0.7', freq: 'monthly' },
  { url: '/ru/portfolio/germasogeia-apartment/',     p: '0.7', freq: 'monthly' },
  { url: '/ru/portfolio/city-center-office/',        p: '0.7', freq: 'monthly' },
  { url: '/en/careers/',                             p: '0.6', freq: 'monthly' },
  { url: '/ru/careers/',                             p: '0.6', freq: 'monthly' },
  { url: '/en/faq/',                                 p: '0.7', freq: 'monthly' },
  { url: '/ru/faq/',                                 p: '0.7', freq: 'monthly' },
  { url: '/en/gallery/',                             p: '0.8', freq: 'weekly' },
  { url: '/ru/gallery/',                             p: '0.8', freq: 'weekly' },
  { url: '/ru/uslugi/',                              p: '0.9', freq: 'weekly' },
  { url: '/calculators/renovation/',                 p: '0.6', freq: 'monthly' },
  { url: '/calculators/payback/',                    p: '0.6', freq: 'monthly' },
];

// ── Parent service pages, both langs (generated from data) ──
for (const s of services) {
  pages.push({ url: `/ru/uslugi/${s.slug}/`, p: '0.7', freq: 'monthly' });
}

// ── Location hubs (generated from data) ──────────────────
for (const l of locations) {
  const p = l.type === 'city' ? '0.9' : '0.8';
  pages.push({ url: `/en/renovation/${l.slug}/`, p, freq: 'weekly' });
  pages.push({ url: `/ru/remont/${l.slug}/`,     p, freq: 'weekly' });
}

// ── Service × Location matrix (generated from data) ──────
// Only the locations the matrix still covers — see matrixLocations.
for (const s of services) {
  for (const l of matrixLocations) {
    const p = l.type === 'city' ? '0.7' : '0.6';
    pages.push({ url: `/en/services/${s.slug}/${l.slug}/`, p, freq: 'monthly' });
    pages.push({ url: `/ru/uslugi/${s.slug}/${l.slug}/`,   p, freq: 'monthly' });
  }
}

export const GET: APIRoute = async () => {
  const now = new Date().toISOString().split('T')[0];

  // ── Blog posts (generated from content collections, never drifts) ──
  const allPages = [...pages];
  try {
    const ruPosts = await getCollection('blog_ru');
    for (const post of ruPosts) allPages.push({ url: `/ru/blog/${post.slug}/`, p: '0.7', freq: 'monthly' });
    const enPosts = await getCollection('blog_en');
    for (const post of enPosts) allPages.push({ url: `/en/blog/${post.slug}/`, p: '0.7', freq: 'monthly' });
  } catch {}

  // trailingSlash: 'never' in astro.config — sitemap URLs must match canonicals
  const loc = (u: string) => u === '/' ? `${BASE}/` : `${BASE}${u.replace(/\/+$/, '')}`;
  const urls = allPages.map(page =>
    `  <url>
    <loc>${loc(page.url)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.p}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
