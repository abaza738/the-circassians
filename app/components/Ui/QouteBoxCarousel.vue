<script setup lang="ts">
import { ref } from 'vue';
import QuoteBox from '@/components/Ui/QouteBox.vue';

const quotes = ref([
  {
    quote: `"their only crime was not being Russian."`,
    author: "William Gifford Palgrave",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
]);

const currentIndex = ref(0);

const nextQuote = () => {
  currentIndex.value = (currentIndex.value + 1) % quotes.value.length;
};

const prevQuote = () => {
  currentIndex.value =
    (currentIndex.value - 1 + quotes.value.length) % quotes.value.length;
};
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto bg-transparent rounded-lg shadow-md">
    <QuoteBox
      :quote="quotes.at(currentIndex)?.quote"
      :author="quotes.at(currentIndex)?.author"
    />
    <!-- Navigation Arrows -->
    <button 
      @click="prevQuote" 
      class="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gray-400 rounded-full p-2 hover:bg-gray-500"
    >
      ⬅
    </button>
    <button 
      @click="nextQuote" 
      class="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gray-400 rounded-full p-2 hover:bg-gray-500"
    >
      ➡
    </button>
  </div>
</template>
