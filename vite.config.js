import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // When you call axios.get('/api/v1/menu') locally:
      '/api': {
        target: 'http://localhost:5000', // Your local Spring Boot port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' before sending to Spring
      },

      '/engine': {
        target: 'http://localhost:5000', // Your local Spring Boot port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' before sending to Spring
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.js',
    },
  }
})
