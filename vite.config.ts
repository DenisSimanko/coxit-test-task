import { fileURLToPath, URL } from 'node:url';
import basicSsl from '@vitejs/plugin-basic-ssl';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/compositions': {
        target: 'https://onair.radioapi.io/thisisgo/go/onair.json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/compositions/, '')
      }
    }
  }
});
