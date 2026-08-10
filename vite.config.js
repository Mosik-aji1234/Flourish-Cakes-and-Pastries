import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon-1080.png'],
      manifest: {
        name: 'Flourish Cakes & Pastries',
        short_name: 'Flourish',
        description: 'Beautiful custom cakes, pastries, and special treats for every occasion in Lagos.',
        theme_color: '#5b1737',
        background_color: '#fffaf6',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait-primary',
        lang: 'en-NG',
        categories: ['food', 'shopping', 'lifestyle'],
        icons: [
          {
            src: '/pwa-icon-1080.png',
            sizes: '1080x1080',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
