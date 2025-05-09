<template>
  <blockquote class="relative p-2 mt-2 mb-2  bg-white rounded-lg shadow-md border-0 h-[220px]">
    <span class="icon-[tabler--quote] text-gray-300 absolute -left-2 -top-2 size-4 rotate-180 rtl:rotate-0"></span>
    <div class="relative z-10">
      <p class="text-gray-800 text-base">
        <em>{{ quote }}</em>
      </p>
    </div>
    <footer class="pb-2 mt-2">
      <div class="text-gray-500 text-sm font-semibold">~ {{ author }}</div>
    </footer>
  </blockquote>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    default: "Insert a meaningful quote here.",
  },
  author: {
    type: String,
    default: "Anonymous",
  },
});
</script>

<style scoped>
blockquote {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0
}
.icon-[tabler--quote] {
  font-size: 2rem;
  color: #d1d5db;
}
</style>
