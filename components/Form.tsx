import * as React from 'react'
import NumberFormat from 'react-number-format'

import { TextField, Container, Grid, Button } from '@mui/material'
import { ICustomInputProps, IFormState } from '../interfaces'

// @ts-ignore
const NumberFormatCustom = React.forwardRef<NumberFormat, ICustomInputProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              //@ts-ignore
              value: values.value,
            },
          })
        }}
        thousandSeparator='.'
        decimalSeparator=','
        decimalScale={0}
        isNumericString
        prefix='R$ '
      />
    )
  }
)

export default function Form() {
  const [state, setState] = React.useState<IFormState>({
    email: '',
    income: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Qual seu e-mail?'
            placeholder='Ex. email@dominio.com'
            variant='outlined'
            name='email'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Informe sua renda líquida'
            value={state.income}
            onChange={handleChange}
            name='income'
            id='formatted-income-input'
            InputProps={{
              inputComponent: NumberFormatCustom as any,
            }}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Button variant='outlined'>PLANEJAR MEU ORÇAMENTO</Button>
        </Grid>
      </Grid>
    </Container>
  )
}
