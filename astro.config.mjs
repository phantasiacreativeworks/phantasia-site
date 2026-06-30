import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://phantasiacreative.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // keep noindex routes (404, paginated blog pages) out of the sitemap
      filter: (page) => !page.includes('/404') && !page.includes('/blog/page/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
