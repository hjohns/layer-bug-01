import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        class: 'dark', // Set this to 'light' by default
      },
    },
  },

  extends: [
    'app/base'
  ],

  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss"],
  primevue: {
    importTheme: {from: resolve('./app/base/assets/theme/mytheme.ts')},
  },
  css: [
    'primeicons/primeicons.css'
  ]
})