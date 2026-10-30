import { defineConfig } from 'astro/config';

const SITE_URL = process.env.SITE_URL || 'https://nora-intelligence-system.com/';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  output: 'static',
  outDir: process.env.SITE_OUT_DIR || './dist',
  build: {
    format: 'directory'
  }
});