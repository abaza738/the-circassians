<template>
  <div class="flex-1 flex flex-col">
    <section class="container relative flex-1 flex flex-col items-start justify-center h-[100vh] gap-8 px-4 md:px-8 mx-auto">
      <div class="absolute top-0 left-0 w-full h-full z-[0]">
        <video class="h-full object-cover" autoplay loop muted>
          <source src="/video/hero.mp4" >
        </video>
      </div>

      <!-- Overlay -->
      <div class="absolute top-0 left-0 w-full h-full z-[0] bg-night-50/90 dark:bg-night/90" />

      <NuxtImg src="/images/full-circassian-flag.svg" class="w-auto h-[70px] sm:h-[100px] rounded z-10" />

      <h1 class="text-4xl sm:text-5xl lg:text-6xl z-10">{{ $t('title') }}</h1>

      <h3 class="text-2xl sm:text-4xl z-10">Nation <span class="font-bold">Erased</span> — People <span class="font-bold">Live</span></h3>

      <article class="z-10">
        <p>For over a century, the Circassians resisted Russian conquest—until 1864, when war turned to genocide.
          <br>Hundreds of thousands were killed or exiled across the Black Sea, never to return.
          <br>This is their story—remembered, reclaimed, and finally told.
        </p>

        <button class="cta my-8 py-4 px-10 rounded transition-all duration-300 text-sm font-bold tracking-widest uppercase outline-none border-none">
          Learn More
        </button>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'home'
})
</script>

<style scoped>
.hover {
  animation: hover 2s ease-in-out infinite;
}

button.cta {
  --button-color: 0, 0, 0;
  .dark & {
    --button-color: 255, 255, 255;
  }

  border: 2px solid rgba(var(--button-color), 0.10);
  border-right: 2px solid rgba(var(--button-color), 0.20);
  border-bottom: 2px solid rgba(var(--button-color), 0.20);
  
  &:hover {
    background-color: rgba(var(--button-color), 0.08);
    border-top: 2px solid rgba(var(--button-color), 0.20);
    border-left: 2px solid rgba(var(--button-color), 0.20);
    border-right: 2px solid rgba(var(--button-color), 0.40);
    border-bottom: 2px solid rgba(var(--button-color), 0.40);
  }
}
</style>
