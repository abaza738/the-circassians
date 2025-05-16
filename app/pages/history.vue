<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  title: 'The Historical Timeline of the Circassians',
  name: 'history',
})

const i18n = useI18n()
defineOgImageComponent('Default', {
  title: i18n.t('diaspora.title'),
  description: i18n.t('diaspora.introduction.title'),
})
</script>

<template>
  <div class="page">
    <div class="container mx-auto flex-1 flex flex-col py-8">
      <h1 class="text-3xl font-bold mb-6">
        The Historical Timeline of the Circassians
      </h1>
  <section class="mb-8 mt-4">
        <SectionHeaderNoImage :title="$t('historicalTimeline.introduction.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.introduction.text1') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.war.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.war.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.war.text2') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.war.text3') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.genocide.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.genocide.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.genocide.text2') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.genocide.text3') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.genocide.text4') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.tragedy.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.tragedy.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.tragedy.text2') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.exile.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.exile.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.exile.text2') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.exile.text3') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.exile.text4') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.diaspora.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.diaspora.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.diaspora.text2') }}</p>
      </section>

      <section class="mb-8">
        <SectionHeaderNoImage :title="$t('historicalTimeline.modernStruggle.title')" />
        <p class="text-lg mt-4">{{ $t('historicalTimeline.modernStruggle.text1') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.modernStruggle.text2') }}</p>
        <p class="text-lg mt-4">{{ $t('historicalTimeline.modernStruggle.text3') }}</p>
      </section>
      

    </div>
  </div>
</template>
