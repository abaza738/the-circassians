// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      appear: true,
      mode: 'out-in',
    },
    rootAttrs: {
      class: 'flex-1 flex flex-col',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['assets/main.css'],

  runtimeConfig: {
    public: {
      scripts: {
        googleTagManager: {
          id: '',
        },
      },
    },
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/scripts',
    // 'nuxt-og-image', // disabled: incompatible with unhead@2.x
  ],

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  routeRules: {
    '/ad': { redirect: { to: '/ad-cr', statusCode: 301 } },
    '/ad/**': { redirect: { to: '/ad-cr/**', statusCode: 301 } },
  },

  // Modules options
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
  fonts: {
    families: [
      { name: 'Rubik Wet Paint', provider: 'google', global: true },
      { name: 'Lora', provider: 'google', global: true },
      { name: 'Manrope', provider: 'google', global: true },
      { name: 'Noto Sans', provider: 'google', global: true },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts', isCatchallLocale: true },
      { code: 'ad-cr', name: 'Адыгабзэ', file: 'ad-cr.ts' },
      { code: 'ad-la', name: 'Adıǵabze', file: 'ad-la.ts' },
      { code: 'fr', name: 'Français', file: 'fr.ts' },
      { code: 'tr', name: 'Türkçe', file: 'tr.ts' },
    ],
  },
  scripts: {
    registry: {
      googleTagManager: true,
    },
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'error', 'warning', 'accent', 'night', 'success', 'info'],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
})
