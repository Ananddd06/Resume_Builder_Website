import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclude libraries that need to be bundled manually
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      // Use "@" as a shortcut for the "./src" directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the browser in development
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    sourcemap: true, // Generate source maps for debugging
    emptyOutDir: true, // Clear the output directory before building
  },
  base: './', // Ensures proper relative paths in production builds
});
