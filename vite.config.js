import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("API Base URL:", API_BASE_URL); // Debugging


// https://vite.dev/config/
VITE_API_BASE_URL="https://ebooks-backend-production.up.railway.app"

export default defineConfig({
  plugins: [react()],
})
