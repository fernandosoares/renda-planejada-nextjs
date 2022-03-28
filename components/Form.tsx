import React from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'

import NumberFormat from 'react-number-format'

const Form: React.FC = () => {
  // @ts-ignore
  const NumberFormatCustom = React.forwardRef<NumberFormat>(
    function NumberFormatCustom(props, ref) {
      const { ...other } = props

      return (
        <NumberFormat
          {...other}
          getInputRef={ref}
          decimalScale={0}
          thousandSeparator='.'
          decimalSeparator=','
          isNumericString
          prefix='R$ '
        />
      )
    }
  )

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant='outlined'
            inputMode='email'
            label='Qual seu e-mail?'
            placeholder='Ex. email@dominio.com'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant='outlined'
            inputMode='email'
            label='Informe sua renda líquida mensal'
            InputProps={{ inputComponent: NumberFormatCustom as any }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Button variant='contained'>PLANEJAR MEU ORÇAMENTO</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
