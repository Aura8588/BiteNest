import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173, // ✅ Ensure this matches the URL you're trying to access
    open: true, // Opens browser automatically
  },
});

