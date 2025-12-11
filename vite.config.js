import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: `${__dirname}/src/lib`
    }
  },
  server: {
    port: 5173,
    fs: {
      allow: ['.']
    }
  },
  build: {
    target: 'esnext'
  }
});
