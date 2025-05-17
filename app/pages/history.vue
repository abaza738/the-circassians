<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  name: 'history',
})

const i18n = useI18n()

useHead({
  titleTemplate: title => `${title} | ${i18n.t('history.title')}`,
})

defineOgImageComponent('Default', {
  title: i18n.t('history.title'),
  description: i18n.t('history.introduction.title'),
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
        <SectionHeaderNoImage :title="$t('history.introduction.title')" />
        <p>{{ $t('history.introduction.text1') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.war.title')" />
        <p>{{ $t('history.war.text1') }}</p>
        <p>{{ $t('history.war.text2') }}</p>
        <p>{{ $t('history.war.text3') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.genocide.title')" />
        <p>{{ $t('history.genocide.text1') }}</p>
        <p>{{ $t('history.genocide.text2') }}</p>
        <p>{{ $t('history.genocide.text3') }}</p>
        <p>{{ $t('history.genocide.text4') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.tragedy.title')" />
        <p>{{ $t('history.tragedy.text1') }}</p>
        <p>{{ $t('history.tragedy.text2') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.exile.title')" />
        <p>{{ $t('history.exile.text1') }}</p>
        <p>{{ $t('history.exile.text2') }}</p>
        <p>{{ $t('history.exile.text3') }}</p>
        <p>{{ $t('history.exile.text4') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.diaspora.title')" />
        <p>{{ $t('history.diaspora.text1') }}</p>
        <p>{{ $t('history.diaspora.text2') }}</p>
      </section>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.modernStruggle.title')" />
        <p>{{ $t('history.modernStruggle.text1') }}</p>
        <p>{{ $t('history.modernStruggle.text2') }}</p>
        <p>{{ $t('history.modernStruggle.text3') }}</p>
      </section>
    </div>
  </div>
</template>
