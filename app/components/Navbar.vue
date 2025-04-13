<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <ul class="flex items-center gap-6 container mx-auto p-4 md:px-0">
      <NuxtLink :to="{ name: 'home' }">
        <h2 class="text-lg m-0">The Circassians</h2>
      </NuxtLink>
      <li>
        <NuxtLink :to="{ name: 'wip' }">About</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'wip' }">Map</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'wip' }">History</NuxtLink>
      </li>
  
      <div class="flex-1" />
  
      <button class="text-lg" @click="toggleDarkMode">
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

function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>
