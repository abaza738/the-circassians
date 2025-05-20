export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'bg-accent-50 dark:bg-night min-w-auto ring-0',
        group: 'flex flex-col',
      },
    },
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
