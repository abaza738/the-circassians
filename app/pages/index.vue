<script setup lang="ts">
import QuoteBoxCarousel from '~/components/QuoteBoxCarousel.vue'

definePageMeta({
  name: 'home',
})

useHead({
  titleTemplate: title => `${title}`,
})

const quotes = ref([])

async function loadQuotes() {
  try {
    const response = await fetch('/homepage_quotes.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    quotes.value = data
  }
  catch (error) {
    console.error('Failed to load quotes:', error)
  }
}

onMounted(() => {
  loadQuotes()
})
</script>

<template>
  <div class="page">
    <section class="relative flex-1 flex flex-col items-start justify-center h-[100vh] gap-8 p-4 md:p-8">
      <div class="absolute top-0 left-0 w-full h-full z-[0]">
        <video class="w-full h-full object-cover" autoplay loop muted playsinline preload="auto">
          <source src="/video/hero.mp4">
        </video>
      </div>

      <!-- Overlay -->
      <div class="absolute top-0 left-0 w-full h-full z-[0] bg-night-50/90 dark:bg-night/90" />

      <div class="container mx-auto flex flex-col items-start justify-center gap-8">
        <NuxtImg
          v-motion
          :initial="{ opacity: 0, scale: 2 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :duration="1000"
          :preload="true"
          src="/images/full-circassian-flag.svg"
          alt="The Circassian Flag"
          class="w-auto h-[70px] sm:h-[100px] rounded-md z-10"
        />

        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="1000"
          :delay="300"
          class="text-4xl sm:text-5xl lg:text-6xl z-10"
        >
          {{ $t('title') }}
        </h1>

        <div class="flex flex-col md:flex-row gap-8 items-start w-full">
          <!-- Main Content -->
          <article class="z-10 md:w-2/3">
            <h2
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="600"
              class="text-2xl sm:text-4xl z-10"
            >
              Nation <span class="font-bold">Erased</span> — People <span class="font-bold">Live</span>
            </h2>

            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="900"
              class="mt-4"
            >
              {{ $t('home.text1') }}
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="1100"
            >
              {{ $t('home.text2') }}
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="1400"
            >
              {{ $t('home.text3') }}
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="1700"
            >
              {{ $t('home.text4') }}
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="1000"
              :delay="2000"
            >
              {{ $t('home.text5') }}
            </p>

            <div class="mt-8">
              <NuxtLink
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1 }"
                :duration="1000"
                :delay="2300"
                :to="{ path: '/about' }"
              >
                <DisplayButton class="mb-4 me-4">
                  {{ $t('home.who_we_are') }}
                </DisplayButton>
              </NuxtLink>

              <NuxtLink
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1 }"
                :duration="1000"
                :delay="2600"
                :to="{ path: '/diaspora' }"
              >
                <DisplayButton class="mb-4 me-4">
                  {{ $t('home.where_we_are_now') }}
                </DisplayButton>
              </NuxtLink>

              <NuxtLink
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1 }"
                :duration="1000"
                :delay="2900"
                :to="{ path: '/history' }"
              >
                <DisplayButton class="mb-4 me-4">
                  {{ $t('home.history') }}
                </DisplayButton>
              </NuxtLink>
            </div>
          </article>

          <!-- QuoteBox Carousel -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
            :duration="1000"
            :delay="2900"
            class="w-full mx-auto md:w-1/3 flex justify-center items-start"
          >
            <!-- <QuoteBoxCarousel /> -->
            <QuoteBoxCarousel :quotes="quotes" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hover {
  animation: hover 2s ease-in-out infinite;
}
</style>
