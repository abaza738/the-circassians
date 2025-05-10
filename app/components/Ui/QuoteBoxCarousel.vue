
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import QuoteBox from '~/components/Ui/QuoteBox.vue';

// Props
const props = defineProps<{
  quotes: { quote: string; author: string }[];
}>();

// Reactive index
const currentIndex = ref(0);

// Watch for changes in quotes to reset index
watch(
  () => props.quotes,
  (newQuotes) => {
    if (newQuotes.length > 0) {
      currentIndex.value = 0;
    }
  }
);

// Handlers for navigation
const nextQuote = () => {
  currentIndex.value = (currentIndex.value + 1) % props.quotes.length;
};

const prevQuote = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.quotes.length) % props.quotes.length;
};
</script>


<template>
  <div class="relative w-full max-w-xl mx-auto bg-transparent rounded-lg shadow-md  md:right-[20%] h-[220px]">
    <QuoteBox
      :quote="quotes.at(currentIndex)?.quote"
      :author="quotes.at(currentIndex)?.author"
    />

        <div class="flex justify-center mt-4 gap-4">
      <button 
        @click="prevQuote" 
        class="bg-gray-400 rounded-full p-2 hover:bg-gray-500 hover:scale-105 transition duration-200 z-10"
      >
        ⬅
      </button>
      <button 
        @click="nextQuote" 
        class="bg-gray-400 rounded-full p-2 hover:bg-gray-500 hover:scale-105 transition duration-200 z-10"
      >
        ➡
      </button>
    </div>
  </div>
</template>
