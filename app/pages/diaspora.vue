<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  name: 'diaspora',
})

const i18n = useI18n()

useHead({
  titleTemplate: title => `${title} | ${i18n.t('diaspora.title')}`,
})

defineOgImageComponent('Default', {
  title: i18n.t('diaspora.title'),
  description: i18n.t('diaspora.introduction.title'),
})
</script>

<template>
  <div class="page">
    <div class="container flex-1 flex flex-col py-8 mx-auto">
      <div class="flex gap-4 mb-4 mt-6 ">
        <figure class="flex flex-col items-center justify-center gap-2">
          <img src="/images/maps/genoicde_routes_1.jpg" alt="Circassian Exile Migration Paths" class="w-4/5 rounded-lg shadow-md mx-auto">
          <figcaption class="text-center text-sm text-gray-600">
            Circassian Exile Migration Paths to the Ottoman Empire and the Balkans
          </figcaption>
        </figure>
      </div>
      <h1 class="text-center text-4xl sm:text-[4rem] font-bold">
        {{ $t('diaspora.title') }}
      </h1>

      <Divider class="my-4" />

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

      <Divider class="my-4" />

      <!-- The Diaspora Experience -->
      <SectionHeaderNoImage :title="$t('diaspora.exile.title')" />
      <div class="flex flex-col justify-center items-center gap-4 mb-4 mt-6">
        <figure class="flex flex-col items-center justify-center gap-2">
          <img src="/images/maps/ethnic-map-of-circassians-in-the-18th-century-compared-to-21st-century.webp" alt="Circassian Population Distribution" class="w-4/5  rounded-lg shadow-md mx-auto">
          <figcaption class="text-center text-sm text-gray-600">
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

      <Divider class="my-4" />

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

      <Divider class="my-4" />

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

      <Divider class="my-4" />

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
