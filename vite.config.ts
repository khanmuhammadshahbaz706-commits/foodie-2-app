import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, './src'),
    },
  },
  build: {
    sourcemap: false,
    minify: true,
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 5173),
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 4173),
    strictPort: true,
  },
})
