import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** MPA : chaque page HTML doit être une entrée, sinon Vercel ne déploie que index.html dans dist/. */
export default defineConfig({
  server: {
    open: '/index.html',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shops: resolve(__dirname, 'shops.html'),
        scarves: resolve(__dirname, 'scarves.html'),
        account: resolve(__dirname, 'account.html'),
        cart: resolve(__dirname, 'cart.html'),
        ourStory: resolve(__dirname, 'our-story.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
      },
    },
  },
})
