import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// @astrojs/react + framer-motion are installed and ready.
// Activate when adding the first .tsx component:
//   import react from '@astrojs/react';
//   integrations: [..., react({ include: ['**/*.tsx', '**/*.jsx'] })]

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
  vite: {
    ssr: { noExternal: ['alpinejs'] },
    optimizeDeps: { exclude: ['leaflet'] },
  },
});
