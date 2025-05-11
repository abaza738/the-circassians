<script setup lang="ts">
const { title, description } = defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="h-full w-full flex border-solid border-[#fdfb3b] border-[12px] text-white">
    <img src="/images/og-image.jpg" alt="og-image" class="absolute top-0 left-0 w-full h-full z-[0]">

    <div class="flex-1 flex flex-col items-center justify-center w-full max-w-2/3 h-full m-auto p-16 text-center z-10">
      <Adiga width="240" height="120" class="text-[#fdfb3b]" />
      <h1 class="text-[64px] font-black">
        {{ title }}
      </h1>
      <p v-if="description" class="text-2xl text-white/70">
        {{ description }}
      </p>
      <p class="text-2xl font-bold">
        the-circassians.org
      </p>
    </div>
  </div>
</template>
