import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { researchTables } from './src/lib/research-tables.mjs';

const SITE_URL = process.env.SITE_URL || 'https://nora-intelligence-system.com/';

export default defineConfig({
  site: SITE_URL,
  markdown: { processor: satteri({ hastPlugins: [researchTables] }) },
  trailingSlash: 'always',
  output: 'static',
  outDir: process.env.SITE_OUT_DIR || './dist',
  build: {
    format: 'directory'
  }
});