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


/* EN service pages were a hand-written list here. It had 21 entries while the
   catalogue had 22, so house-construction — added later — never reached the
   sitemap at all. The RU half was already generated from data; the blog list
   had drifted the same way before and was fixed the same way. Both halves now
   come from `services`, so adding a service cannot silently skip indexing. */
const servicePriority: Record<string, string> = {
  'apartment-renovation': '0.9', 'villa-renovation': '0.9',
  'house-construction':   '0.9',
  'bathroom-renovation':  '0.8', 'kitchen-renovation':   '0.8',
  'office-fit-out':       '0.8', 'interior-design':      '0.8',
  'energy-modernization': '0.8',
  'smart-home':           '0.7', 'flooring':             '0.7',
  'waterproofing':        '0.7', 'facade':               '0.7',
  'windows-doors':        '0.7', 'pool-renovation':      '0.7',
  'terrace-outdoor':      '0.7', 'hotel-renovation':     '0.7',
  'retail-restaurant':    '0.7',
  'joinery':              '0.6', 'plastering':           '0.6',
  'painting':             '0.6', 'electrical-plumbing':  '0.6',
  'structural-extensions':'0.6',
};

// ── Parent service pages, both langs (generated from data) ──
for (const s of services) {
  const p = servicePriority[s.slug] ?? '0.7';
  pages.push({ url: `/en/services/${s.slug}/`, p, freq: 'monthly' });
  pages.push({ url: `/ru/uslugi/${s.slug}/`,   p, freq: 'monthly' });
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
