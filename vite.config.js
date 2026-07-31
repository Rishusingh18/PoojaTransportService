import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  root: '.',
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        service: resolve(__dirname, 'service.html'),
        contact: resolve(__dirname, 'contact.html'),
        dehradun: resolve(__dirname, 'cities/packers-movers-dehradun.html'),
        greaterNoida: resolve(__dirname, 'cities/packers-movers-greater-noida.html'),
        kanpur: resolve(__dirname, 'cities/packers-movers-kanpur.html'),
        lucknow: resolve(__dirname, 'cities/packers-movers-lucknow.html'),
        varanasi: resolve(__dirname, 'cities/packers-movers-varanasi.html')
      }
    }
  }
});
