<script setup lang="ts">
const { attribution, img, position = 'center' } = defineProps<{
  img: string
  position?: string
  attribution?: string
}>()
</script>

<template>
  <div class="root" :style="{ backgroundImage: `url(${img})`, backgroundPosition: position }">
    <div class="overlay" />
    <div class="content">
      <slot />
    </div>
    <span v-if="attribution" class="attribution">
      {{ attribution }}
    </span>
  </div>
</template>

<style scoped>
.root {
  color: var(--color-accent-50);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: calc(var(--spacing) * 4);
  padding: calc(var(--spacing) * 4);
  border-radius: var(--radius-md);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95));
  }

  .content {
    z-index: 5;
  }

  .attribution {
    inset-inline: calc(var(--spacing) * 2);
    margin-inline-start: auto;
    text-align: end;
    color: rgba(255, 255, 255, 0.5);
    font-size: var(--text-xs);
    z-index: 5;
  }
}
</style>
