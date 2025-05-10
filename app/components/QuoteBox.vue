<script setup lang="ts">
defineProps<{
  quote?: string
  author?: string
}>()
</script>

<template>
  <blockquote class="relative p-4 bg-accent-50/80 dark:bg-night/80 rounded-lg shadow-md border-0 w-full h-full">
    <UIcon name="material-symbols:format-quote" class="absolute left-2 top-2 size-4 rotate-180 rtl:rotate-0" />
    <p class="relative text-night dark:text-accent-200 text-sm z-10">
      <em>{{ quote }}</em>
    </p>
    <div class="pb-2 mt-4 text-night/50 dark:text-white/50 text-sm">
      ~ {{ author }}
    </div>
  </blockquote>
</template>

<style scoped>
blockquote {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0;
  min-height: 100px;
}
</style>
