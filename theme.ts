import { MantineThemeOverride } from '@mantine/core'

import '@fontsource/sora/400.css'
import '@fontsource/sora/500.css'
import '@fontsource/sora/600.css'
import '@fontsource/sora/700.css'
import '@fontsource/sora/800.css'

export const theme: MantineThemeOverride = {
  fontFamily: ['Sora', 'sans-serif'].join(','),
  headings: {
    fontFamily: ['Sora', 'sans-serif'].join(','),
    sizes: {
      h1: {
        fontSize: '4.5rem',
      },
    },
  },
}
