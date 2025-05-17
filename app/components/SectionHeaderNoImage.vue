<script setup lang="ts">
const { title, subtitle } = defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="header-no-image">
    <h2 class="text-2xl sm:text-4xl font-bold">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.header-no-image {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
