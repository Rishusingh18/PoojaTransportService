import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'non-blocking-css',
      transformIndexHtml(html) {
        return html
          .replace(
            /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
            '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
          )
          .replace(/<link rel="modulepreload" crossorigin href="\/assets\/vendor-data-[^"]+\.js">\n?/g, '');
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  root: '.',
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        service: resolve(__dirname, 'service.html'),
        contact: resolve(__dirname, 'contact.html'),
        admin: resolve(__dirname, 'admin.html'),
        dehradun: resolve(__dirname, 'cities/packers-movers-dehradun.html'),
        greaterNoida: resolve(__dirname, 'cities/packers-movers-greater-noida.html'),
        kanpur: resolve(__dirname, 'cities/packers-movers-kanpur.html'),
        lucknow: resolve(__dirname, 'cities/packers-movers-lucknow.html'),
        varanasi: resolve(__dirname, 'cities/packers-movers-varanasi.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('@supabase') || id.includes('date-fns')) {
              return 'vendor-data';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
          }
        }
      }
    }
  }
});
