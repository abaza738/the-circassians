<script setup lang="ts">
definePageMeta({
  name: 'wip',
})
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center gap-4">
    <div class="flex items-center gap-4">
      <Icon name="solar:danger-triangle-broken" class="text-3xl text-amber-400" />
      <span class="text-2xl">Page Under Construction</span>
    </div>

    <UButton @click="$router.back()">
      Go Back
    </UButton>
  </div>
</template>
