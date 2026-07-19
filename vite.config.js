import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: aastha381.github.io/portfolio-react/
export default defineConfig({
  base: '/portfolio-react/',
  plugins: [react()],
})
