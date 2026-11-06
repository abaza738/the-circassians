<script setup lang="ts">
const colorMode = useColorMode()
const menu = useTemplateRef<HTMLDialogElement>('menu')

function toggleDarkMode() {
  colorMode.preference = colorMode.value === 'light'
    ? 'dark'
    : 'light'
}
</script>

<template>
  <nav class="sticky top-0 w-full text-sm text-accent-50 border-b-2 border-accent bg-primary-800/80 backdrop-blur-md z-20">
    <div class="container grid grid-cols-[auto_1fr_auto] items-center mx-auto gap-6 p-4 md:px-0 text-lg">
      <NuxtLink to="/" aria-label="home-page" class="hidden sm:inline me-auto">
        <img src="/images/adiga.svg" alt="circassian-flag" class="h-8">
      </NuxtLink>

      <button
        type="button"
        class="flex sm:hidden p-1.5 rounded-md cursor-pointer hover:bg-primary/10"
        :aria-label="$t('navbar.menu')"
        @click="menu?.showModal()"
      >
        <Icon name="solar:hamburger-menu-linear" class="size-5" />
      </button>

      <dialog
        ref="menu"
        :aria-label="$t('title')"
        class="fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-y-auto text-base bg-accent-50 dark:bg-night text-night dark:text-accent-50 open:flex -translate-x-full open:translate-x-0 starting:open:-translate-x-full transition-all transition-discrete duration-200"
      >
        <header class="flex items-center justify-between min-h-16 p-4 bg-primary border-b-2 border-accent-400 text-accent-50">
          <h2 class="font-semibold">
            {{ $t('title') }}
          </h2>
          <button type="button" class="flex p-1.5 cursor-pointer" :aria-label="$t('navbar.close')" @click="menu?.close()">
            <Icon name="mdi:close" class="size-5" />
          </button>
        </header>

        <div class="flex-1">
          <ul class="flex flex-col justify-center" @click="menu?.close()">
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
        </div>

        <Footer />
      </dialog>

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
