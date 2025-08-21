import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'project-theme-data',
})

export const toggleDark = useToggle(isDark)
