<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  name: 'about',
})

const i18n = useI18n()

useHead({
  titleTemplate: title => `${title} | ${i18n.t('about.title')}`,
})

defineOgImageComponent('Default', {
  title: i18n.t('about.title'),
})

useSeoMeta({
  title: i18n.t('about.title'),
  description: i18n.t('about.introduction.title'),
  ogTitle: i18n.t('about.title'),
  ogDescription: i18n.t('about.introduction.title'),
})
</script>

<template>
  <div class="page">
    <div class="container flex-1 flex flex-col py-8 mx-auto">
      <SectionHeader
        img="/images/circassian-genocide-remembrance-day-nalchik.jpg"
        attribution="Circassian Roots - Pinterest: https://www.pinterest.com/circassianroots/"
        position="center 60%"
        class="h-[500px]"
      >
        <h1 class="text-center text-4xl sm:text-[4rem] font-bold">
          {{ $t('about.title') }}
        </h1>
      </SectionHeader>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-men-in-traditional-clothing.jpg"
        position="center 25%"
        attribution="Circassian Roots - Pinterest: https://www.pinterest.com/circassianroots/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.introduction.title') }}
        </h2>
      </SectionHeader>

      <div>
        <p>{{ $t('about.introduction.text') }}</p>
      </div>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassians-belonging-to-the-bzhedug-tribe-19th-century.jpg"
        position="center 30%"
        attribution="Circassian Roots - Pinterest: https://www.pinterest.com/circassianroots/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.origins.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.origins.text1') }}</p>
      <p>{{ $t('about.origins.text2') }}</p>
      <p>{{ $t('about.origins.text3') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-flag.jpg"
        position="center 55%"
        attribution="Circassian Roots - Pinterest: https://www.pinterest.com/circassianroots/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.languageAndCulture.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.languageAndCulture.text1') }}</p>
      <p>{{ $t('about.languageAndCulture.text2') }}</p>
      <p>{{ $t('about.languageAndCulture.text3') }}</p>
      <p>{{ $t('about.languageAndCulture.text4') }}</p>
      <p>{{ $t('about.languageAndCulture.text5') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-fighter.jpg"
        position="center 40%"
        attribution="Elias A. Shawash - Pinterest: https://www.pinterest.com/elias1957sh4835/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.war.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.war.text1') }}</p>
      <p>{{ $t('about.war.text2') }}</p>
      <p>{{ $t('about.war.text3') }}</p>
      <p>{{ $t('about.war.text4') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-dancer-jerash.jpg"
        position="center 45%"
        attribution="Bushra Nabas - Pinterest: https://www.pinterest.com/bnapashqwa/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.diaspora.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.diaspora.text1') }}</p>
      <p>{{ $t('about.diaspora.text2') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-band-myst.jpg"
        attribution="Circassian Roots - Pinterest: https://www.pinterest.com/circassianroots/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.contributions.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.contributions.text1') }}</p>
      <p>{{ $t('about.contributions.text2') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-musical-instruments.jpg"
        position="center 30%"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.preserving.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.preserving.text1') }}</p>
      <p>{{ $t('about.preserving.text2') }}</p>

      <Divider class="my-4" />

      <SectionHeader
        class="h-[300px]"
        img="/images/circassian-children.jpg"
        position="center 60%"
        attribution="Bushra Nabas - Pinterest: https://www.pinterest.com/bnapashqwa/"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          {{ $t('about.connecting.title') }}
        </h2>
      </SectionHeader>

      <p>{{ $t('about.connecting.text1') }}</p>
      <p>{{ $t('about.connecting.text2') }}</p>
    </div>
  </div>
</template>
