import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/react-emotion-face/',
  build: {
    outDir: resolve(__dirname, '../docs'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'react-emotion-face': resolve(__dirname, '../src/index.ts'),
    },
  },
  root: resolve(__dirname),
});
