import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <Grid container lg spacing={4} justifyContent='center'>
        <Grid item xs={12} md={6}>
          <Typography variant='h1' align='center'>
            Renda Planejada
          </Typography>
          <Typography variant='caption' align='center' display='block'>
            _você no controle
          </Typography>
          <Typography variant='h2' align='center'>
            Renda Planejada é uma ferramenta de planejamento orçamentário
            pessoal, sendo como um guia para controle de despesas utilizando
            regras de aplicação de capital.
          </Typography>
        </Grid>
      </Grid>
      <Grid container lg justifyContent='center'>
        <Typography variant='body1'>Vamos lá?</Typography>
      </Grid>
    </>
  )
}

export default Header
