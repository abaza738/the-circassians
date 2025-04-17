<template>
  <button class="cta py-4 px-10 rounded transition-all duration-300 text-sm font-bold tracking-widest uppercase outline-none border-none">
    <slot />
  </button>
</template>

<style scoped>
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
