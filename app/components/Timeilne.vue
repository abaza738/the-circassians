<script setup lang="ts">
defineProps<{
  data: { year: number, title: string, description: string }[]
}>()
</script>

<template>
  <div>
    <template v-for="(item, index) in data" :key="item.year">
      <div
        class="workaround flex items-center justify-start gap-8 overflow-hidden"
        :class="{ 'sm:flex-row-reverse': index % 2 === 1 }"
      >
        <h3
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 100 + index * 25,
              duration: 500,
              ease: 'easeOutQuad',
            },
          }"
          class="w-[3ch] sm:flex-1 !m-0 text-2xl sm:text-[60px] font-bold"
          :class="{ 'sm:text-end': index % 2 === 0 }"
        >
          {{ item.year }}
        </h3>

        <div class="relative border-r border-primary h-full">
          <div class="absolute top-1/2 left-1/2 -translate-1/2 size-4 rounded-full bg-night dark:bg-accent-50 outline-2 outline-primary border-2 border-accent-50 dark:border-night" />
        </div>

        <article
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 1 ? -25 : 25 }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 100 + index * 25,
              duration: 500,
              ease: 'easeOutQuad',
            },
          }"
          class="flex-1 !m-0 py-8"
          :class="{ 'sm:text-end': index % 2 === 1 }"
          dir="ltr"
        >
          <h4 class="text-xl font-bold">
            {{ item.title }}
          </h4>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </template>
  </div>
</template>

<style scoped>
.workaround {
  background: linear-gradient(90deg, transparent 0ch, transparent 66px, var(--color-primary) 66px, var(--color-primary) 68px, transparent 68px);

}
@media (width >= 40rem) {
  .workaround {
    background: linear-gradient(90deg, transparent 0px, transparent calc(50% - 1px), var(--color-primary) calc(50% - 1px), var(--color-primary) calc(50% + 1px), transparent calc(50% + 1px));
  }
}
</style>
