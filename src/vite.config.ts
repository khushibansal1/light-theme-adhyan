import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Configure the dev server to handle client-side routing
    // This will serve index.html for all routes that don't match a file
    historyApiFallback: true,
  },
  preview: {
    // Same configuration for preview server
    historyApiFallback: true,
  },
});