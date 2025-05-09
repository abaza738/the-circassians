<script setup lang="ts">
import { ref } from 'vue';
import QuoteBox from '@/components/Ui/QouteBox.vue';

const quotes = ref([
  {
    quote: `"their only crime was not being Russian."`,
    author: "William Gifford Palgrave",
  },
    {
    quote: `"This time, I am limiting myself on this. In the future, I will have no mercy for the guilty brigands; their villages will be destroyed, properties taken, wives and children will be slaughtered."`,
    author: "General Ivan Delpotso, May 1818 In the Village of Tram, East Circassia",
  },
  {
    quote: `"We need the Circassian lands, but we don't have any need of the Circassians themselves."`,
    author: "General Yermolov",
  },
    {
    quote: `"In this year of 1864 a deed has been accomplished almost without precedent in history: not one of the mountaineer inhabitants remains on their former places of residence, and measures are being taken to cleanse the region in order to prepare it for the new Russian population."`,
    author: "Main Staff of the Caucasian Army",
  },
    {
    quote: `"On the road our eyes were met with a staggering image: corpses of women, children, elderly persons, torn to pieces and half-eaten by dogs; deportees emaciated by hunger and disease, almost too weak to move their legs, collapsing from exhaustion and becoming prey to dogs while still alive."`,
    author: "May 1864 by Ivan Drodzov, a Russian Officer ",
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
  <div class="relative w-full max-w-xl mx-auto bg-transparent rounded-lg shadow-md  md:right-[20%] h-[220px]">
    <QuoteBox
      :quote="quotes.at(currentIndex)?.quote"
      :author="quotes.at(currentIndex)?.author"
    />
    <!-- Navigation Arrows -->
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
