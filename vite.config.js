import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/r2-z1-03-bilingual-learning-tool/",
  server: {
    watch: {
      usePolling: true
    }
  }
})
