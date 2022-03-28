import { createTheme } from '@mui/material/styles'
import '@fontsource/sora/800.css'
import '@fontsource/sora/700.css'
import '@fontsource/sora/500.css'
import '@fontsource/sora/400.css'

export const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
    primary: {
      main: '#555555',
    },
    secondary: {
      main: '#0B3954',
    },
  },
  shape: {
    borderRadius: '1rem',
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.title-icon': {
            marginRight: '1rem',
            fontSize: '4.5rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: '.25rem',
        },
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          padding: '0.75rem 4.5rem',
          fontSize: '1rem',
          borderWidth: '0.35rem',
          margin: '1rem 0',
          '&:hover': {
            borderWidth: '0.35rem',
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: '#555',
    },
    fontFamily: ['Sora', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '4.5rem',
      color: '#393E41',
      '&.title': {
        marginTop: '7.5rem',
        display: 'flex',
        aliginItems: 'center',
        justifyContent: 'center',
      },
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
      '&.site-description': {
        margin: '4rem auto',
      },
    },
    caption: {
      '&.subtitle': {
        fontSize: '.875rem',
        fontWeight: 400,
      },
    },
    body1: {
      '&.go': {
        fontSize: '1.25rem',
        marginBottom: '2rem',
      },
    },
  },
})
