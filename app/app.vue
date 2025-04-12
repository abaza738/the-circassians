<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Circassians',
  bodyAttrs: {
    class: 'flex flex-col bg-night text-accent-50 min-h-[100dvh]'
  }
})
</script>
