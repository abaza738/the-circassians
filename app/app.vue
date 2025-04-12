<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'The Circassians',
  bodyAttrs: {
    class: 'flex flex-col bg-accent-50 dark:bg-night text-night dark:text-accent-50 min-h-[100dvh]'
  }
})
</script>
