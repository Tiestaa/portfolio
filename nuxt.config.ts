// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Press+Start+2P': true,
      VT323: [400],
    },
    display: 'swap',
  },

  css: [
    'nes.css/css/nes.min.css',
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Portfolio – Francesco',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio personale in stile 8-bit di Francesco.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
})
