import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={11} md={10} lg={6}>
          <Typography variant='h1' className='title'>
            <PieChartOutlineIcon className='title-icon' />
            Renda Planejada
          </Typography>
          <Typography
            variant='caption'
            align='center'
            display='block'
            className='subtitle'
          >
            _você no controle
          </Typography>
          <Typography variant='h2' align='center' className='site-description'>
            Renda Planejada é uma ferramenta de planejamento orçamentário
            pessoal, sendo como um guia para controle de despesas utilizando
            regras de aplicação de capital.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Typography variant='body1' className='go'>
          Vamos lá?
        </Typography>
      </Grid>
    </>
  )
}

export default Header
