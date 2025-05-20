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
})

useSeoMeta({
  title: i18n.t('history.title'),
  description: i18n.t('history.introduction.title'),
  ogTitle: i18n.t('history.title'),
  ogDescription: i18n.t('history.introduction.title'),
})

const data = [
  {
    year: 1711,
    title: 'Russian Invasion of Circassia Begins',
    description: 'Tsar Peter the Great ordered an invasion of Circassia. This campaign resulted in the deaths of over 43,000 Circassians and the plundering of vast resources, including livestock and goods. Although the Russian forces eventually withdrew, this incursion marked the beginning of a series of aggressive campaigns aimed at subjugating Circassia, foreshadowing the onset of the Russo-Caucasian War in 1763.',
  },
  {
    year: 1736,
    title: 'Kabardian Circassians Ally with Russia',
    description: 'Empress Anna Ivanovna called upon the Circassians of Kabarda to rise against their common enemy. In response to her promise to recognize Kabarda’s independence, the Circassians joined the Russian side that same year.',
  },
  {
    year: 1739,
    title: 'Treaty of Belgrade and Betrayal of Kabarda',
    description: 'The Russo-Turkish War ended with the Treaty of Belgrade. Despite Kabarda’s long-standing alliance with Russia, dating back to 1557 and reaffirmed during the war, Kabarda was excluded from the peace negotiations. While the treaty acknowledged Kabarda’s independence from both Russia and the Ottoman Empire, Russia soon violated its terms. Ultimately, Circassians were classified as \'neutral\' rather than allies, despite their military support against the Ottomans. This marked a significant shift in Russia\'s attitude toward Circassians and the broader North Caucasian peoples.',
  },
  {
    year: 1763,
    title: 'Construction of Mozdok Fort and Start of Russo-Caucasian War',
    description: 'In a move to solidify its dominance in the Caucasus, the Russian Empire began constructing a military fort in Mozdok, a town originally established by Circassians in 1759. The construction, carried out without Circassian consent, signaled imperial ambitions and sparked fierce resistance led by Prince Misost Bematiqwa. This event is widely regarded as the beginning of the Russo-Caucasian War.',
  },
  {
    year: 1765,
    title: 'Circassians Refuse Russian Sovereignty',
    description: 'Empress Catherine II issued an ultimatum to the Circassians: accept Russian sovereignty or face military subjugation by Russian and Kalmyk forces. The Circassians resolutely refused.',
  },
  {
    year: 1799,
    title: 'Russian Raids Against Western Circassians',
    description: 'Russian General Fyodor Bursak launched a series of raids against Western Circassians, ordering the destruction of villages—including those allied with Russia.',
  },
  {
    year: 1805,
    title: 'Russian Atrocities During Kabardian Plague',
    description: 'A devastating plague struck Kabarda, weakening its population. Exploiting this vulnerability, Russian General Glazenap ordered the burning of eighty villages to terrorize the Circassians into submission and exact revenge for a 1804 counterattack.',
  },
  {
    year: 1808,
    title: 'Russian Decision for Circassian Elimination',
    description: 'A Russian commission in St. Petersburg decided that victory in the Caucasus required the elimination of the Circassians from their homeland.',
  },
  {
    year: 1817,
    title: 'General Yermolov Implements Terror Strategy',
    description: 'General Yermolov arrived in the Caucasus with a strategy centered on terror, deemed by the Russians as the \'most effective\' method. Russian forces destroyed entire villages suspected of aiding resistance fighters, and carried out widespread assassinations, kidnappings, and executions. To deprive the resistance of local support, Russian troops also systematically destroyed crops, livestock, and civilian infrastructure.',
  },
  {
    year: 1820,
    title: 'Fall of Kabarda (Eastern Circassia)',
    description: 'Kabarda (Eastern Circassia) fell to Russian forces, forcing the remaining population to flee into the mountains. The region was then resettled by Kuban Cossacks.',
  },
  {
    year: 1827,
    title: 'Circassian Confederation Established',
    description: 'The Circassian Confederation was officially established under the leadership of Ismail Berzeg.',
  },
  {
    year: 1829,
    title: 'Treaty of Adrianople and Circassian Rejection',
    description: 'The Treaty of Adrianople was signed, with the Ottoman Empire ceding Circassia to Russia. The Circassians rejected the treaty, asserting that their territory had always been independent and thus could not be transferred by the Ottomans. In protest, Circassian envoys were sent to England, France, and the Ottoman Empire to declare the treaty null and void.',
  },
  {
    year: 1833,
    title: 'General Zass Assumes Command',
    description: 'General Zass assumed command. His reputation for brutality earned him the moniker Shaytaan (Devil) among the Circassians.',
  },
  {
    year: 1839,
    title: 'Hawduqo Mansur Unifies Circassia; Anapa Declared Capital',
    description: 'Ismail Berzeg was succeeded by Hawduqo Mansur, who successfully unified much of Circassia under his leadership. That same year, Anapa was declared the official capital of Circassia.',
  },
  {
    year: 1860,
    title: 'Circassian National Congress Establishes Parliament',
    description: 'A national congress of Circassian representatives convened in Sochi, establishing a parliament as the highest legislative authority of Circassia. Sochi was designated the capital, and Qerandiqo Berzeg was elected as the head of both the parliament and the Circassian nation.',
  },
]
</script>

<template>
  <div class="page py-8">
    <div class="container sm:mx-auto flex flex-col gap-8">
      <h1 class="text-center text-4xl sm:text-[4rem] font-bold">
        {{ i18n.t('history.title') }}
      </h1>

      <Divider class="my-4" />

      <section>
        <SectionHeaderNoImage :title="$t('history.introduction.title')" />
        <p>{{ $t('history.introduction.text1') }}</p>
      </section>

      <Divider class="my-4" />

      <Timeilne :data />

      <article>
        <h3 class="text-red-600 text-6xl sm:text-8xl font-bold text-center">1864</h3>

        <p>The Russian Empire systematically expelled approximately 1.5 million Circassians from their ancestral lands in the northwest Caucasus, forcing them into exile primarily within the Ottoman Empire.</p>
        <p>This mass deportation was marked by extreme brutality: villages were razed, civilians were massacred, and starvation was employed as a weapon.</p>
        <p>The journey to exile proved deadly for many; countless individuals succumbed to disease, starvation, or drowning during maritime transport, with some reports indicating that bodies were left unburied, falling victim to scavenging animals.</p>
        <p>By the late 19th century, only a small fraction—estimated between 3% and 10%—of the original Circassian population remained in their homeland. The survivors established diasporic communities across the Ottoman Empire, including regions that are now Turkey, Jordan, and Syria. Today, the Circassian genocide is recognized as one of the most extensive and devastating acts of ethnic cleansing in the 19th century.</p>
      </article>
    </div>
  </div>
</template>
