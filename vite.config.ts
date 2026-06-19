import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three',
              test: (module) => module.includes('node_modules/three') || module.includes('node_modules/@react-three'),
            },
            {
              name: 'gsap',
              test: (module) => module.includes('node_modules/gsap') || module.includes('node_modules/@gsap'),
            },
            {
              name: 'vendor',
              test: (module) => module.includes('node_modules/react') || module.includes('node_modules/react-dom') || module.includes('node_modules/react-router-dom'),
            },
          ]
        }
      }
    }
  }
})
