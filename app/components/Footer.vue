<template>
  <footer class="grid place-items-center w-full p-6 sm:p-12 border-t-2 border-accent-400 bg-primary-800 text-accent-50">
    <img src="/images/adiga.svg" alt="adiga flag" class="w-[100px] sm:w-[150px]">

    <h4>The Circassians &copy; 2025 - {{ new Date().getFullYear() }}</h4>

    <NuxtLink
      href="https://github.com/abaza738/the-circassians"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm flex items-center gap-1 mt-4 text-accent-100 hover:text-accent-300 transition-colors"
      aria-label="View on GitHub"
      external
    >
      <Icon name="mdi:github" />
      <span>Contribute</span>
    </NuxtLink>
  </footer>
</template>
