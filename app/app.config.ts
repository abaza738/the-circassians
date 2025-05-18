export default defineAppConfig({
  ui: {
    slideover: {
      slots: {
        header: 'flex items-center justify-between bg-primary border-b-2 border-accent-400',
        title: '!m-0 text-accent-50',
        close: 'text-accent-50',
        content: 'fixed bg-accent-50 dark:bg-night',
        body: 'p-0',
        footer: 'p-0',
      },
    },
  },
})
