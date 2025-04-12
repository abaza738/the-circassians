<template>
  <div class="flex-1 flex flex-col items-center justify-center gap-4">
    <div class="flex items-center gap-4">
      <Icon name="solar:danger-triangle-broken" class="text-3xl text-amber-400" />
      <span class="text-2xl">Page Under Construction</span>
    </div>

    <UiButton @click="$router.back()">Go Back</UiButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'wip'
})
</script>
