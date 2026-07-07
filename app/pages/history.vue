<script setup lang="ts">
definePageMeta({
  layout: 'inner',
  name: 'history',
})

const { t, tm, rt } = useI18n()

useHead({
  titleTemplate: title => `${title} | ${t('history.title')}`,
})

useSeoMeta({
  title: t('history.title'),
  description: t('history.introduction.title'),
  ogTitle: t('history.title'),
  ogDescription: t('history.introduction.title'),
})

const data = computed(() =>
  (tm('history.events') as any[]).map(event => ({
    year: event.year,
    title: rt(event.title),
    description: rt(event.description),
  }))
)
</script>

<template>
  <div class="page py-8">
    <div class="container sm:mx-auto flex flex-col gap-8">
      <h1 class="text-center text-4xl sm:text-[4rem] font-bold">
        {{ $t('history.title') }}
      </h1>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.introduction.title')" />
        <p>{{ $t('history.introduction.text1') }}</p>
      </section>

      <Divider class="my-4" />

      <Timeilne :data />

      <article>
        <h3 class="text-red-600 text-6xl sm:text-8xl font-bold text-center">
          1864
        </h3>

        <p>{{ $t('history.genocide_article.p1') }}</p>
        <p>{{ $t('history.genocide_article.p2') }}</p>
        <p>{{ $t('history.genocide_article.p3') }}</p>
        <p>{{ $t('history.genocide_article.p4') }}</p>
      </article>
    </div>
  </div>
</template>
