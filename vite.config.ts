/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@holiday-lab/cheese': resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'cheese',
      formats: ['cjs', 'es', 'umd'],
      fileName: 'index',
    },
    minify: false,
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
