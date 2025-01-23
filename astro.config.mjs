// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: '/sapientiel/', 
	site: 'https://fenrirwolf4566.github.io',
	integrations: [mdx(), sitemap()],
});
