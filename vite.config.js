import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from "path";

export default defineConfig({
  base: '/',
  plugins: [solidPlugin()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    copyPublicDir: true,
  },
});
