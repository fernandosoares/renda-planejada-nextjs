import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import type { AppProps } from 'next/app'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
