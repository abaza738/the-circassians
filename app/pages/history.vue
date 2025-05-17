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
      <h1 class="text-center text-4xl sm:text-[4rem] font-bold">
        The Historical Timeline of the Circassians
      </h1>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.introduction.title')" />
        <p>{{ $t('historicalTimeline.introduction.text1') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.war.title')" />
        <p>{{ $t('historicalTimeline.war.text1') }}</p>
        <p>{{ $t('historicalTimeline.war.text2') }}</p>
        <p>{{ $t('historicalTimeline.war.text3') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.genocide.title')" />
        <p>{{ $t('historicalTimeline.genocide.text1') }}</p>
        <p>{{ $t('historicalTimeline.genocide.text2') }}</p>
        <p>{{ $t('historicalTimeline.genocide.text3') }}</p>
        <p>{{ $t('historicalTimeline.genocide.text4') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.tragedy.title')" />
        <p>{{ $t('historicalTimeline.tragedy.text1') }}</p>
        <p>{{ $t('historicalTimeline.tragedy.text2') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.exile.title')" />
        <p>{{ $t('historicalTimeline.exile.text1') }}</p>
        <p>{{ $t('historicalTimeline.exile.text2') }}</p>
        <p>{{ $t('historicalTimeline.exile.text3') }}</p>
        <p>{{ $t('historicalTimeline.exile.text4') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.diaspora.title')" />
        <p>{{ $t('historicalTimeline.diaspora.text1') }}</p>
        <p>{{ $t('historicalTimeline.diaspora.text2') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('historicalTimeline.modernStruggle.title')" />
        <p>{{ $t('historicalTimeline.modernStruggle.text1') }}</p>
        <p>{{ $t('historicalTimeline.modernStruggle.text2') }}</p>
        <p>{{ $t('historicalTimeline.modernStruggle.text3') }}</p>
      </section>
    </div>
  </div>
</template>
