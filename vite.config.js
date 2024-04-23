import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Import the visualizer with a different method
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true
    })
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react';
          if (id.includes('node_modules/react-dom')) return 'react-dom';
          if (id.includes('firestore/dist/index.esm2017.js')) return 'firestore';
          if (id.includes('chart.js')) return 'chartjs';
          // Other conditions...
          return 'vendor-other';
        }
        
      }
    },
    chunkSizeWarningLimit: 800
  }
});
