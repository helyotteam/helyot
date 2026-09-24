import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// The site ships no framework components — every page is .astro. React,
// react-dom, framer-motion, leaflet and alpinejs were installed against
// features that were later removed; none of them appeared in a single source
// file or in the built bundle, so they were uninstalled rather than kept
// "ready". Add an integration when a .tsx component actually exists.

export default defineConfig({
  site: 'https://helyot.com',
  trailingSlash: 'never',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
});
