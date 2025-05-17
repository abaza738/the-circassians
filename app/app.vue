<script setup lang="ts">
const i18n = useI18n()

defineOgImageComponent('Default', {
  title: i18n.t('title'),
})

useSeoMeta({
  title: i18n.t('title'),
  description: i18n.t('description'),

  ogType: 'website',
  ogSiteName: i18n.t('title'),
  ogTitle: i18n.t('title'),
  ogDescription: i18n.t('description'),
})

useHead({
  title: () => i18n.t('title'),
  bodyAttrs: {
    class: 'flex flex-col bg-accent-50 dark:bg-night text-night dark:text-accent-50 min-h-[100dvh]',
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/lang/ad.png' },
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
