import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/max-dev/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
})