<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  title: 'The Circassian Diaspora',
  name: 'diaspora',
})

const i18n = useI18n()
defineOgImageComponent('Default', {
  title: i18n.t('diaspora.title'),
  description: i18n.t('diaspora.introduction.title'),
})
</script>

<template>
  <div class="page">
    <div class="container flex-1 flex flex-col py-8 mx-auto">
      <h1 class="text-3xl font-bold">
        {{ $t('diaspora.title') }}
      </h1>
 
      <div class="flex flex-row gap-4 mb-4 mt-6 ">
        <figure class="flex-1 justify-center items-center text-center ">
          <img src="/images/maps/genoicde_routes_1.jpg" alt="Circassian Exile Migration Paths" class="w-3/5 rounded-lg shadow-md mx-auto">
          <figcaption class="text-center mt-2 text-md text-gray-600">
            Circassian Exile Migration Paths to the Ottoman Empire and the Balkans
          </figcaption>
        </figure>
      </div>

      <div class="w-full border-t border-night/10 dark:border-accent-50/25 my-1" />

      <!-- The Heart of Circassia -->
      <SectionHeaderNoImage :title="$t('diaspora.beginning.title')" />
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.beginning.text1') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.beginning.text2') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.beginning.text3') }}
      </p>

      <div class="w-full border-t border-night/10 dark:border-accent-50/25 my-1" />

      <!-- The Diaspora Experience -->
      <SectionHeaderNoImage :title="$t('diaspora.exile.title')" />
      <div class="flex flex-col justify-center items-center gap-4 mb-4 mt-6">
        <figure class=" text-center items-center">
          <img src="/images/maps/ethnic-map-of-circassians-in-the-18th-century-compared-to-21st-century.webp" alt="Circassian Population Distribution" class="w-4/5  rounded-lg shadow-md mx-auto">
          <figcaption class="text-center mt-2 text-md text-gray-600">
            Circassian Population Distribution Before and After the Genocide
          </figcaption>
        </figure>
      </div>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.exile.text1') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.exile.text2') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.exile.text3') }}
      </p>

      <div class="w-full border-t border-night/10 dark:border-accent-50/25 my-1" />

      <!-- Modern Diaspora Dynamics -->
      <SectionHeaderNoImage :title="$t('diaspora.today.title')" />
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.today.text1') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.today.text2') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.today.text3') }}
      </p>

      <div class="w-full border-t border-night/10 dark:border-accent-50/25 my-1 " />

      <!-- Cultural Revival -->
      <SectionHeaderNoImage :title="$t('diaspora.revival.title')" />
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.revival.text1') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.revival.text2') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.revival.text3') }}
      </p>

      <div class="w-full border-t border-night/10 dark:border-accent-50/25 my-1 " />

      <!-- The Future -->
      <SectionHeaderNoImage :title="$t('diaspora.future.title')" />
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.future.text1') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.future.text2') }}
      </p>
      <p class="text-lg mt-2 mb-2">
        {{ $t('diaspora.future.text3') }}
      </p>
    </div>
  </div>
</template>
