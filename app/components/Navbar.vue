<template>
  <nav class="w-full border-b border-white/10">
    <ul class="flex items-center gap-4 container mx-auto py-4">
      <NuxtLink :to="{ name: 'home' }">
        <h2 class="m-0">The Circassians</h2>
      </NuxtLink>
  
      <div class="flex-1" />
  
      <li>
        <NuxtLink :to="{ name: 'wip' }">About</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'wip' }">Map</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'wip' }">History</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
