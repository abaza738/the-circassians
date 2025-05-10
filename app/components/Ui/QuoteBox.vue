
<template>
  <blockquote class="relative p-4 mt-2 bg-white rounded-lg shadow-md border-0 w-full h-full">
    <span class="icon-[tabler--quote] text-gray-300 absolute -left-2 -top-2 size-4 rotate-180 rtl:rotate-0"></span>
    <div class="relative z-10">
      <p class="text-gray-800 text-sm">
        <em>{{ quote || "No quote available" }}</em>
      </p>
    </div>
    <footer class="pb-2 mt-4">
      <div class="text-gray-500 text-sm font-semibold">~ {{ author || "Unknown Author" }}</div>
    </footer>
  </blockquote>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    default: " ",
  },
  author: {
    type: String,
    default: " ",
  },
});
</script>

<style scoped>
blockquote {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0;
  min-height: 100px;
}
.icon-[tabler--quote] {
  font-size: 2rem;
  color: #d1d5db;
}
</style>