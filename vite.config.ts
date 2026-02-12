import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/worktime-calc/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      target: 'chrome70',
      cssTarget: 'chrome70',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'icons': ['lucide-react']
          }
        }
      }
    },
    plugins: [
      react(),
      legacy({
        targets: ['chrome >= 70', 'ios >= 12', 'not IE 11'],
        renderLegacyChunks: true,
        polyfills: true
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
