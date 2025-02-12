import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
VITE_API_BASE_URL="https://ebooks-backend-production.up.railway.app"

export default defineConfig({
  plugins: [react()],
})
