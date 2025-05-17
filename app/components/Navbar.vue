<script setup lang="ts">
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <div class="container grid grid-cols-[auto_1fr_auto] items-center mx-auto gap-6 p-4 md:px-0">
      <NuxtLink to="/" aria-label="home-page" class="me-auto">
        <img src="/images/adiga.svg" alt="circassian-flag" class="h-[2rem]">
      </NuxtLink>

      <ul class="hidden sm:flex items-center justify-center gap-8">
        <li>
          <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/about' }">
            {{ $t('navbar.about') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/diaspora' }">
            {{ $t('navbar.diaspora') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink active-class="font-bold text-accent-100" :to="{ path: '/history' }">
            {{ $t('navbar.history') }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Wrapper for end controls -->
      <div id="end-controls" class="flex items-center justify-end gap-6 ms-auto">
        <!-- <LangSelect /> -->
  
        <!-- <span class="border-l border-white/50 h-[1rem]" /> -->
        <div class="cursor-pointer text-lg leading-none" @click="toggleDarkMode">
          <Transition mode="out-in">
            <Icon
              v-if="colorMode.value === 'dark'"
              name="solar:sun-2-bold"
              title="Switch to Light mode"
              aria-label="Switch to Light mode"
            />
            <Icon
              v-else
              name="solar:moon-outline"
              title="Switch to Dark mode"
              aria-label="Switch to Dark mode"
            />
          </Transition>
        </div>
      </div>
    </div>
  </nav>
</template>
