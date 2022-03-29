import { createStyles } from '@mantine/core'

export const useStyles = createStyles({
  heading: {
    marginTop: '2rem',
    color: '#333',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'none',
    color: '#333',
  },
  title: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '.75rem',
    color: '#555',
    marginTop: '.5rem',
  },
  noimage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
    borderRadius: '.25rem',
    backgroundColor: 'rgba(0,0,0,.25)',
  },
})
