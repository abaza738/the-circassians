<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <UDropdownMenu :items="locales">
    <template #item="{ item }">
      <div class="flex items-center gap-2 cursor-pointer" @click="setLocale(item.code)">
        <img :src="`/images/lang/${item.code}.png`" :alt="`${item.code}-language-flag`" class="object-contain h-[1.25rem]">
        <span class="text-xs">{{ item.name }}</span>
      </div>
    </template>

    <template #default>
      <div class="flex items-center gap-2 cursor-pointer">
        <img :src="`/images/lang/${locale}.png`" :alt="`${locale}-language-flag`" class="object-contain h-[1.25rem]">
        <span>{{ locale.toUpperCase() }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>
