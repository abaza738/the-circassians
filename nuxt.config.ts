import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      appear: true,
      mode: 'out-in',
    },
    rootAttrs: {
      class: 'flex-1 flex flex-col isolate',
    },
  },
  compatibilityDate: '2026-11-05',
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
    '@nuxt/fonts', // explicit so nuxt-og-image can see it
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/scripts',
    'nuxt-og-image',
  ],

  routeRules: {
    // @see (nuxt-modules/og-image#772), delete once a release > 7.0.7 is installed
    '/_og/r.png': { redirect: '/_og/r/' },
  },

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  aiReady: false,
  skewProtection: false,
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
    families: [
      { name: 'Rubik Wet Paint', provider: 'google', global: true },
      { name: 'Lora', provider: 'google', global: true },
      { name: 'Manrope', provider: 'google', global: true },
    ],
  },
  icon: {
    cssLayer: 'base',
    clientBundle: { scan: true },
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts',
        isCatchallLocale: true,
      },
      // { code: 'ad', name: 'Адыгэбзэ', file: 'ad.ts' },
      // { code: 'fr', name: 'Français', file: 'fr.ts' },
      // { code: 'tr', name: 'Türkçe', file: 'tr.ts' },
    ],
  },
  scripts: {
    registry: {
      googleTagManager: { trigger: 'onNuxtReady' },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
})
