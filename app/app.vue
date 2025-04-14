<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const i18n = useI18n()

useHead({
  title: () => i18n.t('title'),
  bodyAttrs: {
    class: 'flex flex-col bg-accent-50 dark:bg-night text-night dark:text-accent-50 min-h-[100dvh]'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/ad.png' }
  ]
})
</script>
