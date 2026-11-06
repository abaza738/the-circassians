<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <button
    type="button"
    popovertarget="lang-menu"
    class="lang-trigger flex items-center gap-2 cursor-pointer"
    :aria-label="$t('navbar.language')"
  >
    <img :src="`/images/lang/${locale}.png`" :alt="`${locale}-language-flag`" class="object-contain h-5">
    <span>{{ locale.toUpperCase() }}</span>
  </button>

  <div id="lang-menu" popover class="lang-menu p-1 rounded-md shadow-lg bg-accent-50 dark:bg-night text-night dark:text-accent-50">
    <ul class="flex flex-col">
      <li v-for="item in locales" :key="item.code">
        <button
          type="button"
          popovertarget="lang-menu"
          popovertargetaction="hide"
          class="flex items-center gap-2 w-full p-1.5 rounded-md cursor-pointer hover:bg-night/10 dark:hover:bg-accent-50/10"
          @click="setLocale(item.code)"
        >
          <img :src="`/images/lang/${item.code}.png`" :alt="`${item.code}-language-flag`" class="object-contain h-5">
          <span class="text-xs">{{ item.name }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang-trigger {
  anchor-name: --lang-menu;
}

.lang-menu {
  position-anchor: --lang-menu;
  position-area: block-end span-inline-start;
  margin: 0.25rem 0 0;
}
</style>
