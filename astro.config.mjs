import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
// import vercel from '@astrojs/vercel/server';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind()],
});
