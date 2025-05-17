<script setup lang="ts">
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <ul class="flex items-center gap-6 container mx-auto p-4 md:px-0">
      <NuxtLink to="/" aria-label="home-page">
        <img src="/images/adiga.svg" alt="adiga flag" class="h-[2rem]">
      </NuxtLink>
      <li class="hidden sm:block">
        <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/about' }">
          About
        </NuxtLink>
      </li>
      <li class="hidden sm:block">
        <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/history' }">
          History
        </NuxtLink>
      </li>
      <li class="hidden sm:block">
        <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/diaspora' }">
          Diaspora
        </NuxtLink>
      </li>

      <div class="flex-1" />

      <!-- <LangSelect /> -->

      <!-- <span class="border-l border-white/50 h-[1rem]" /> -->

      <div class="cursor-pointer text-lg leading-none" @click="toggleDarkMode">
        <Transition mode="out-in">
          <Icon v-if="colorMode.value === 'dark'" name="solar:sun-2-bold" title="Switch to Light mode" />
          <Icon v-else name="solar:moon-outline" title="Switch to Dark mode" />
        </Transition>
      </div>
    </ul>
  </nav>
</template>
