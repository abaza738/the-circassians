<script setup lang="ts">
const props = defineProps<{
  quotes: { quote: string, author: string }[]
}>()

const currentIndex = ref(0)
useInterval(15e3, { callback: () => nextQuote() })

function nextQuote() {
  currentIndex.value = (currentIndex.value + 1) % props.quotes.length
}

function prevQuote() {
  currentIndex.value
    = (currentIndex.value - 1 + props.quotes.length) % props.quotes.length
}
</script>

<template>
  <div class="relative rounded-lg px-4 shadow-md w-full">
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
      class="carousel-button next"
      type="button"
      @click="nextQuote"
    >
      <UIcon name="i-solar-alt-arrow-right-outline" />
    </button>
  </div>
</template>

<style scoped>
.carousel-button {
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing) calc(var(--spacing) * 2);

  &.prev {
    inset-inline-start: calc(var(--spacing) * -4);
  }

  &.next {
    inset-inline-end: calc(var(--spacing) * -4);
  }
}
</style>
