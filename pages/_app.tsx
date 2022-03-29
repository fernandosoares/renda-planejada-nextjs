import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
