import React, { ChangeEvent, useRef, useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'

import NumberFormat from 'react-number-format'
import { ICustomInputProps, IFormState } from '../interfaces'

const Form: React.FC = () => {
  const [state, setState] = useState<IFormState>({ email: '', income: 0 })

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, email: e.target.value.trim() })
  }
  const handleIncomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, income: parseInt(e.target.value) })
  }

  console.log(state)

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
                value: parseInt(values.value),
              },
            })
          }}
          decimalScale={0}
          thousandSeparator='.'
          decimalSeparator=','
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
            value={state.email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            key='income'
            variant='outlined'
            inputMode='email'
            label='Informe sua renda líquida mensal'
            InputProps={{ inputComponent: NumberFormatCustom as any }}
            value={state.income}
            onChange={handleIncomeChange}
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
