<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <ul class="flex items-center gap-6 container mx-auto p-4 md:px-0">
      <NuxtLink to="/">
        <h2 class="text-lg m-0">The Circassians</h2>
      </NuxtLink>
      <li>
        <NuxtLink to="/wip">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/wip">Map</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/wip">History</NuxtLink>
      </li>

      <div class="flex-1" />

      <a v-for="l in locales" :key="l.code" href="#" @click.prevent.stop="setLocale(l.code)">
        <img :src="`/images/${l.code}.png`" :alt="`${l.name}-language-flag`" class="h-[1.25rem]">
      </a>

      <span class="border-l border-white/50 h-[1rem]" />

      <button class="text-lg aspect-square leading-none" @click="toggleDarkMode">
        <Transition mode="out-in">
          <Icon v-if="colorMode.value === 'light'" name="solar:sun-2-bold" />
          <Icon v-else name="solar:moon-outline" />
        </Transition>
      </button>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const { locales, setLocale } = useI18n()

function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>
