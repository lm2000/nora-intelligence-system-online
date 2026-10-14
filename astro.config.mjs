import { defineConfig } from 'astro/config';

const SITE_BASE = process.env.SITE_BASE || undefined;
const SITE_URL = process.env.SITE_URL || 'https://nora-intelligence-system.com/';

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  trailingSlash: 'always',
  output: 'static',
  outDir: process.env.SITE_OUT_DIR || './dist',
  build: {
    format: 'directory'
  }
});