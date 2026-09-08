# Renovation Limassol — Complete Website v2.0

Production-ready Astro 4 website for a premium renovation company in Limassol, Cyprus.
Liquid Glass design system · EN/RU i18n · PWA · AMP blog · AI Configurator · AR Colour Try · Leaflet map · Netlify Functions.

---

## 1. Prerequisites

- Node.js 20+
- npm 9+
- A Netlify account (for deployment and Functions)

---

## 2. Install & Run

```bash
npm install
npm run dev          # → http://localhost:4321
npm run build        # Production build → dist/
npm run preview      # Preview the build
```

---

## 3. Replace Placeholder Values

Search and replace these strings across the project:

| Placeholder | File(s) | Replace with |
|---|---|---|
| `G-XXXXXXXX` | `BaseLayout.astro`, `CookieConsent.astro` | Your GA4 Measurement ID |
| `XXXXXXXXXXXXXXXX` (Maps CID) | `src/i18n/ui.ts` | Google Maps CID from Business Profile |
| `+357 96 000 000` | `src/i18n/ui.ts` | Your real phone number |
| `info@renovation-limassol.com` | `src/i18n/ui.ts` | Your contact email |
| `data@renovation-limassol.com` | `src/i18n/ui.ts` | Your GDPR data email |
| `renovation-limassol.com` | `astro.config.mjs`, i18n | Your domain |
| `REPLACE_WITH_REAL_ID` | Portfolio MDX files | Real Matterport tour IDs |

---

## 4. Environment Variables (Netlify)

In Netlify dashboard → Site → Environment Variables:

```
WEBHOOK_URL=https://your-webhook.com/endpoint
TELEGRAM_BOT_TOKEN=1234567890:AAxxxxxxxxxxxxxx
TELEGRAM_CHAT_ID=-1001234567890
```

---

## 5. Google Analytics 4 Setup

1. Create a GA4 property at analytics.google.com
2. Copy Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace `G-XXXXXXXX` in:
   - `src/layouts/BaseLayout.astro` (2 occurrences)
   - `src/components/ui/CookieConsent.astro` (1 occurrence)

GA4 fires **only after** the user accepts analytics cookies.

---

## 6. Telegram Bot Setup

1. Message `@BotFather` on Telegram → `/newbot` → copy the token
2. Add the bot to your group/channel
3. Send a test message, then open:
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
4. Find `chat.id` in the response — this is your `TELEGRAM_CHAT_ID`

---

## 7. Google Maps CID

1. Open Google Maps → find your business listing
2. Click Share → Copy Link
3. The URL contains `?cid=XXXXXXXXXX` — copy the number
4. Replace both `XXXXXXXXXXXXXXXX` values in `src/i18n/ui.ts`

---

## 8. Deploy to Netlify

**Option A — GitHub (recommended):**
1. Push to GitHub
2. Netlify: "New site from Git" → select repo
3. Build: `npm run build` | Publish: `dist` | Functions: `netlify/functions`

**Option B — CLI:**
```bash
npx netlify-cli deploy --prod --dir=dist
```

---

## 9. Add Blog Posts

Create `.mdx` files in `src/content/blog_en/` (EN) or `src/content/blog_ru/` (RU):

```yaml
---
title: "Post title"
description: "Meta description"
publishedDate: "2025-06-01"
ogImage: "/images/blog/image.jpg"
minuteRead: 5
tags: ["renovation", "tips"]
---
```

AMP versions are **auto-generated** at `/amp/blog/[slug]`.

---

## 10. Add Portfolio Cases

Create `.mdx` files in `src/content/portfolio/`:

```yaml
---
title: "Project Title"
area: "Germasogeia"
type: "apartment"
sqm: 95
duration: "7 weeks"
year: 2025
level: "standard"
coverImage: "/images/portfolio/project.jpg"
images: ["/images/portfolio/project-1.jpg"]
tours: []
---
```

---

## 11. Enable PWA

PWA is already configured. To verify:
1. Run `npm run build && npm run preview`
2. Open Chrome DevTools → Application → Manifest — verify all icons load
3. Application → Service Workers — check `sw.js` is registered
4. Add real icon PNGs in `public/icons/` (72×72 to 512×512 px)
5. Test install prompt on mobile Chrome

---

## 12. AR Colour Try-On (arConfig.ts)

To update the colour palette:
1. Open `src/lib/arConfig.ts`
2. Edit the `wallColors` array — add/remove colours with name (EN/RU), hex, and RGB values
3. Maximum 12 colours recommended for good UX

---

## 13. AI Configurator (aiConfiguratorData.ts)

To update pricing or variants:
1. Open `src/lib/aiConfiguratorData.ts`
2. Edit `variantsByLevel` to change plan descriptions
3. Edit `src/lib/calculatorData.ts` → `pricePerSqm` for current market rates

---

## 14. Add Map Pins (projectsMapData.ts)

To add a new project pin:
1. Open `src/lib/projectsMapData.ts`
2. Add entry to the `projects` array:
```typescript
{
  id: 'p8',
  lat: 34.7100, lng: 33.0500,
  type: 'apartment',
  titleEn: 'Project Name',
  titleRu: 'Название проекта',
  area: 'Germasogeia',
  sqm: 85,
  year: 2025,
  image: '/images/portfolio/project.jpg',
  caseUrl: '/en/portfolio/project-slug',
}
```

---

## 15. Add 360° Virtual Tours

1. Upload your space to Matterport (my.matterport.com)
2. Get the share URL (format: `https://my.matterport.com/show/?m=XXXX`)
3. In your portfolio MDX file, add:
```yaml
tours:
  - type: "matterport"
    url: "https://my.matterport.com/show/?m=YOUR_ID"
```

---

## 16. Verify Accessibility (WCAG 2.1 AA)

1. Install axe DevTools Chrome extension (free tier)
2. Open any page → axe DevTools → Analyze
3. Fix any "Critical" or "Serious" issues
4. Key checks: colour contrast, form labels, focus indicators, ARIA roles
5. Run `npx pa11y http://localhost:4321` for CLI audit

---

## 17. Deploy with PWA Verification

After deploying:
1. Open site on mobile Chrome
2. Tap "Add to Home Screen" prompt — should appear within 30 seconds
3. Install and verify offline page works (disable Wi-Fi)
4. Check Lighthouse → PWA score (target: 100)

---

## 18. Hyperlocal Pages (Area Pages)

To add a new area:
1. Copy `src/pages/areas/germasogeia.astro` as template
2. Update: h1, description, stats, neighbourhood landmarks
3. Add RU version in `src/pages/ru/raiony/`
4. Update `src/i18n/routing.ts` with the new route
5. Add internal links from main service pages

---

## 19. Update the Mascot (Mascot.astro)

The mascot is a pure SVG component at `src/components/ui/Mascot.astro`.

To update:
- Edit the SVG directly (engineers, designer, site manager characters)
- Swap for a real PNG/WebP: replace `<svg>` with `<img src="/images/mascot/mascot.png">`
- Add animated variants in `public/images/mascot/`

---

## 20. Verify Liquid Glass Effect

1. Open the site on a modern mobile browser (iOS Safari or Chrome Android)
2. Scroll through the page — cards should have visible blur + border glow
3. If glass effect is absent: check `backdrop-filter` support (iOS 15.4+, Chrome 76+)
4. Fallback is handled via `rgba()` background — always readable
5. Glass styles live in `src/styles/glass.css` — tweak `--glass-bg` and `--glass-border` variables as needed

---

## Project Structure Summary

```
src/
├── components/
│   ├── sections/     18 section components (Hero, ARColorTry, AIConfigurator, MapProjects...)
│   ├── shared/       Header, Footer, SEO
│   └── ui/           Button, GlassCard, CookieConsent, Mascot, PromoBanner...
├── content/
│   ├── blog_en/      5 English blog posts (MDX)
│   ├── blog_ru/      5 Russian blog posts (MDX)
│   └── portfolio/    4 portfolio cases (MDX, 2 with 360° tours)
├── i18n/             ui.ts (80+ keys), routing.ts
├── layouts/          BaseLayout, BlogLayout, ServiceLayout, AmpLayout
├── lib/              utils, calculatorData, aiConfiguratorData, projectsMapData, arConfig, webhook
├── pages/            50+ pages (EN/RU, areas, calculators, AMP)
├── pwa/              (PWA files in public/)
└── styles/           global.css, glass.css

public/
├── sw.js             Service worker (stale-while-revalidate + cache-first)
├── manifest.json     PWA manifest
└── offline.html      Offline fallback page
```
