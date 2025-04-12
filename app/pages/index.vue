<template>
  <div class="flex-1 flex flex-col p-4 gap-4">
    <div class="container text-center flex-1 flex flex-col items-center justify-center gap-8 mx-auto">
      <div>
        <h1 class="m-0 text-4xl sm:text-5xl lg:text-6xl">The Circassian <span class="text-red-600">Genocide</span></h1>
      </div>

      <h3 class="text-2xl sm:text-4xl">Nation <span class="text-red-600">Erased</span> — People <span
          class="text-primary-600">Live</span></h3>

      <article>
        <p>For over a century, the Circassians resisted Russian conquest—until 1864, when war turned to genocide.
          <br>Hundreds of thousands were killed or exiled across the Black Sea, never to return.
          <br>This is their story—remembered, reclaimed, and finally told.
        </p>

        <button class="cta my-8 py-4 px-10 rounded transition-all duration-300 text-sm font-bold tracking-widest uppercase outline-none border-none">
          Who We Are?
        </button>
        <p><Icon name="solar:alt-arrow-down-line-duotone" class="hover text-2xl" /></p>
      </article>
    </div>
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
  border: 2px solid #ffffff10;
  border-right: 2px solid #ffffff20;
  border-bottom: 2px solid #ffffff20;
  
  &:hover {
    background-color: #ffffff08;
    border-top: 2px solid #ffffff20;
    border-left: 2px solid #ffffff20;
    border-right: 2px solid #ffffff40;
    border-bottom: 2px solid #ffffff40;
  }
}
</style>
