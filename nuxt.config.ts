// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      appear: true,
      mode: 'out-in'
    },
    rootAttrs: {
      class: 'flex-1 flex flex-col'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['assets/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',

    '@vueuse/motion/nuxt'
  ],

  // Modules options
  colorMode: {
    classSuffix: ''
  },
  fonts: {
    families: [
      { name: 'Rubik Wet Paint', provider: 'google' },
      { name: 'Playfair Display', provider: 'google' },
      { name: 'Manrope', provider: 'google' }
    ]
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts', isCatchallLocale: true },
      { code: 'ad', name: 'Circassian', file: 'ad.ts' },
      { code: 'tr', name: 'Turkish', file: 'tr.ts' }
    ]
  },
  tailwindcss: {
    editorSupport: true,
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            night: {
              50: '#f4f9f8',
              100: '#d9eeea',
              200: '#b2ddd6',
              300: '#84c4bb',
              400: '#5aa79f',
              500: '#418b85',
              600: '#326f6b',
              700: '#2b5a57',
              800: '#264948',
              900: '#233e3d',
              950: '#081212',
              DEFAULT: '#081212',
            },
            primary: {
              50: '#eefce9',
              100: '#daf8cf',
              200: '#b8f1a5',
              300: '#8ae670',
              400: '#63d645',
              500: '#43bc26',
              600: '#30961a',
              700: '#246b17',
              800: '#235b19',
              900: '#214d1a',
              950: '#0c2a09',
              DEFAULT: '#246b17',
            },
            accent: {
              50: '#fdfee8',
              100: '#fafec3',
              200: '#fbfe8a',
              300: '#fdfb3b',
              400: '#faee15',
              500: '#ead508',
              600: '#caa804',
              700: '#a17907',
              800: '#855f0e',
              900: '#714d12',
              950: '#422906',
              DEFAULT: '#fdfb3b',
            },
          },
          fontFamily: {
            heading: ['"Playfair Display"'],
            display: ['"Rubik Wet Paint"']
          }
        }
      }
    }
  }
})