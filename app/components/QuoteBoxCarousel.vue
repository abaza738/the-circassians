<script setup lang="ts">
const props = defineProps<{
  quotes: { quote: string, author: string }[]
}>()

const currentIndex = ref(0)
const interval = ref()

onMounted(() => {
  interval.value = setInterval(() => nextQuote(), 10e3)
})

function nextQuote() {
  currentIndex.value = (currentIndex.value + 1) % props.quotes.length
}

function prevQuote() {
  currentIndex.value
    = (currentIndex.value - 1 + props.quotes.length) % props.quotes.length
}

onUnmounted(() => clearInterval(interval.value))
</script>

<template>
  <div class="relative rounded-lg px-4 shadow-md w-full h-[200px]">
    <QuoteBox
      :quote="quotes.at(currentIndex)?.quote"
      :author="quotes.at(currentIndex)?.author"
    />

    <button
      class="carousel-button prev"
      type="button"
      @click="prevQuote"
    >
      <UIcon name="i-solar-alt-arrow-left-outline" />
    </button>

    <button 
      class="carousel-button  next"
      type="button"
      @click="nextQuote"
    >
      <UIcon name="i-solar-alt-arrow-right-outline" />
    </button>
  </div>
</template>

<style scoped>
.carousel-button {
  /* @apply absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full px-2 py-1 bg-primary-600 hover:bg-primary-700 z-10 cursor-pointer; */
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  padding: var(--spacing) calc(var(--spacing) * 2);

  &.prev {
    inset-inline-start: calc(var(--spacing) * -4);
  }

  &.next {
    inset-inline-end: calc(var(--spacing) * -4);
  }
}
</style>
