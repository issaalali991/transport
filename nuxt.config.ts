// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primevue/themes/aura';
import path from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/strapi',
    '@primevue/nuxt-module'
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },


  strapi: {
    url: 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    cookie: { maxAge: 60 * 60 * 24 * 30 },
    cookieName: 'strapi_jwt',
  },


})