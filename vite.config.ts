import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/70bc11b2-c78f-41a3-9d80-7cd38d33cd8d/preview',
  plugins: [react()],
  server: {
    port: 5199,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5199,
    },
  },
})
