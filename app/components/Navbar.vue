<script setup lang="ts">
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <div class="container grid grid-cols-[auto_1fr_auto] items-center mx-auto gap-6 p-4 md:px-0 text-lg">
      <NuxtLink to="/" aria-label="home-page" class="hidden sm:inline me-auto">
        <img src="/images/adiga.svg" alt="circassian-flag" class="h-[2rem]">
      </NuxtLink>

      <LazyUSlideover side="left" :title="$t('title')">
        <UButton
          icon="solar:hamburger-menu-linear"
          variant="ghost"
          class="flex sm:hidden hover"
          aria-label="Mobile Side Menu"
          :ui="{ leadingIcon: 'text-accent-50' }"
        />

        <template #body>
          <ul class="flex flex-col justify-center">
            <NuxtLink active-class="font-bold dark:text-accent-100" :to="{ path: '/' }">
              <li class="p-6">
                {{ $t('navbar.home') }}
              </li>
            </NuxtLink>
            <NuxtLink active-class="font-bold dark:text-accent-100" :to="{ path: '/about' }">
              <li class="p-6">
                {{ $t('navbar.about') }}
              </li>
            </NuxtLink>
            <NuxtLink active-class="font-bold dark:text-accent-100" :to="{ path: '/diaspora' }">
              <li class="p-6">
                {{ $t('navbar.diaspora') }}
              </li>
            </NuxtLink>
            <NuxtLink active-class="font-bold dark:text-accent-100" :to="{ path: '/history' }">
              <li class="p-6">
                {{ $t('navbar.history') }}
              </li>
            </NuxtLink>
          </ul>
        </template>

        <template #footer>
          <Footer />
        </template>
      </LazyUSlideover>

      <ul class="hidden sm:flex items-center justify-center gap-8">
        <li>
          <NuxtLink class="hover:text-accent-100" active-class="font-bold text-accent-200" :to="{ path: '/' }">
            {{ $t('navbar.home') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-accent-100" active-class="font-bold text-accent-200" :to="{ path: '/about' }">
            {{ $t('navbar.about') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-accent-100" active-class="font-bold text-accent-200" :to="{ path: '/diaspora' }">
            {{ $t('navbar.diaspora') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-accent-100" active-class="font-bold text-accent-200" :to="{ path: '/history' }">
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
