

<!-- <template>
  <div class="page">
    <section class="container relative flex-1 flex flex-col items-start justify-center h-[100vh] gap-8 px-4 md:px-8 mx-auto">
      <div class="absolute top-0 left-0 w-full h-full z-[0]">
        <video class="h-full object-cover" autoplay loop muted playsinline>
          <source src="/video/hero.mp4" >
        </video>
      </div>
      <div class="absolute top-0 left-0 w-full h-full z-[0] bg-night-50/90 dark:bg-night/90" />
      <NuxtImg
        v-motion
        :initial="{ opacity: 0, scale: 2 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :duration="2000"
        src="/images/full-circassian-flag.svg"
        class="w-auto h-[70px] sm:h-[100px] rounded z-10"
      />

      <h1
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="1300"
        class="text-4xl sm:text-5xl lg:text-6xl z-10"
      >
        {{ $t('title') }}
      </h1>

      <h3
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="1600"
        class="text-2xl sm:text-4xl z-10"
      >
        Nation <span class="font-bold">Erased</span> — People <span class="font-bold">Live</span>
      </h3>

      <article
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="1900"
        class="z-10"
        >
        <p>For over a century, the Circassians resisted Russian conquest—until 1864, when war turned to genocide.
          <br>Hundreds of thousands were killed or exiled across the Black Sea, never to return.
          <br>This is their story—remembered, reclaimed, and finally told.
        </p>

        <div class="mt-8">
          <NuxtLink
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :duration="1000"
            :delay="2200"
            :to="{ name: 'who' }"
          >
            <UiDisplayButton class="me-4">Who We Are</UiDisplayButton>
          </NuxtLink>

          <NuxtLink
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :duration="1000"
            :delay="2400"
            :to="{ name: 'where' }"
          >
            <UiDisplayButton class="me-4">Where We Are Now</UiDisplayButton>
          </NuxtLink>

          <NuxtLink
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :duration="1000"
            :delay="2600"
            :to="{ name: 'history' }"
          >
            <UiDisplayButton class="me-4">History</UiDisplayButton>
          </NuxtLink>
        </div>
           <div class="mt-6 ml-0 md:ml-4">
        <QuoteBoxCarousel />
      </div>
      </article>
    </section>
  </div>
</template> -->


<template>
  <div class="page">
    <section class="container relative flex-1 flex flex-col items-start justify-center h-[100vh] gap-8 px-4 md:px-8 mx-auto">
      <div class="absolute top-0 left-0 w-full h-full z-[0]">
        <video class="h-full object-cover" autoplay loop muted playsinline>
          <source src="/video/hero.mp4">
        </video>
      </div>

      <!-- Overlay -->
      <div class="absolute top-0 left-0 w-full h-full z-[0] bg-night-50/90 dark:bg-night/90" />
      <NuxtImg
        v-motion
        :initial="{ opacity: 0, scale: 2 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :duration="2000"
        src="/images/full-circassian-flag.svg"
        class="w-auto h-[70px] sm:h-[100px] rounded z-10"
      />

      <h1
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
        :delay="1300"
        class="text-4xl sm:text-5xl lg:text-6xl z-10"
      >
        {{ $t('title') }}
      </h1>

      <div class="flex flex-col md:flex-row gap-8 items-start w-full">
        <!-- Main Content -->
        <article
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="1000"
          :delay="1900"
          class="z-10 md:w-2/3"
        >
          <h3
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :duration="1000"
            :delay="1600"
            class="text-2xl sm:text-4xl z-10"
          >
            Nation <span class="font-bold">Erased</span> — People <span class="font-bold">Live</span>
          </h3>

          <p class="mt-4">
            For over a century, the Circassians resisted Russian conquest—until 1864, when war turned to genocide.
            <br>Hundreds of thousands were killed or exiled across the Black Sea, never to return.
            <br>This is their story—remembered, reclaimed, and finally told.
          </p>

          <div class="mt-8">
            <NuxtLink
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              :duration="1000"
              :delay="2200"
              :to="{ name: 'who' }"
            >
              <UiDisplayButton class="me-4">Who We Are</UiDisplayButton>
            </NuxtLink>

            <NuxtLink
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              :duration="1000"
              :delay="2400"
              :to="{ name: 'where' }"
            >
              <UiDisplayButton class="me-4">Where We Are Now</UiDisplayButton>
            </NuxtLink>

            <NuxtLink
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1 }"
              :duration="1000"
              :delay="2600"
              :to="{ name: 'history' }"
            >
              <UiDisplayButton class="me-4">History</UiDisplayButton>
            </NuxtLink>
          </div>
        </article>

        <!-- QuoteBox Carousel -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :duration="1000"
          :delay="2200"
          class="md:w-1/3 flex justify-center items-start"
        >
          <QuoteBoxCarousel />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import QuoteBox from '@/components/Ui/QouteBox.vue'
import QuoteBoxCarousel from '@/components/Ui/QouteBoxCarousel.vue';
definePageMeta({
  name: 'home'
})

</script>

<style scoped>
.hover {
  animation: hover 2s ease-in-out infinite;
}
</style>
