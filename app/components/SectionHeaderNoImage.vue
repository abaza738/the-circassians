<script setup lang="ts">
const { title, subtitle } = defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="header-no-image">
    <h2 class="text-xl sm:text-2xl font-semibold text-night dark:text-accent-50">
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
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
}
</style>