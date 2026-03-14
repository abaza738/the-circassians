<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="relative h-full w-full flex border-solid border-[#fdfb3b] border-12 text-white">
    <img src="/images/og-image.png" alt="og-image" class="absolute top-0 left-0 w-full h-full z-0">

    <div class="flex-1 flex flex-col items-center justify-center gap-16 w-full max-w-full h-full m-auto p-16 text-center z-10">
      <Adiga width="240" height="120" class="text-[#fdfb3b]" />
      <h1 class="text-[64px] tracking-wider font-medium max-w-full" style="font-family: 'Lora';">
        {{ title }}
      </h1>
      <p v-if="description" class="text-3xl font-bold max-w-full" style="font-family: 'Manrope';">
        {{ description }}
      </p>
      <p class="absolute bottom-20 left-20 text-2xl">
        circassian-genocide.org
      </p>
    </div>
  </div>
</template>
