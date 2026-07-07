<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <UDropdownMenu :items="locales">
    <template #item="{ item }">
      <NuxtLink class="flex items-center gap-2 cursor-pointer" :to="switchLocalePath(item.code)">
        <img :src="`/images/lang/${item.code}.png`" :alt="`${item.code}-language-flag`" class="object-contain h-10">
        <span class="text-lg">{{ item.name }}</span>
      </NuxtLink>
    </template>

    <template #default>
      <div class="flex items-center gap-2 cursor-pointer">
        <img :src="`/images/lang/${locale}.png`" :alt="`${locale}-language-flag`" class="object-contain h-10">
        <span>{{ locale.toUpperCase() }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>
