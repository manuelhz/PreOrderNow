import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with  /api/v1 to backend server
      '/api/v1': {
        target: 'http://backend:8080',
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // If backend uses self-signed SSL certs (for development only)
      }
    }
  }
})
