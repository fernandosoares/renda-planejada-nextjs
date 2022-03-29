import { Button, Container, Grid, Input } from '@mantine/core'
import React from 'react'
import { At, CurrencyReal } from 'tabler-icons-react'

const Form: React.FC = () => {
  return (
    <Container>
      <Grid gutter='md'>
        <Grid.Col xs={12} md={6}>
          <Input
            radius='lg'
            size='xl'
            icon={<At />}
            placeholder='Qual seu e-mail?'
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <Input
            radius='lg'
            size='xl'
            type='number'
            icon={<CurrencyReal />}
            placeholder='Informe sua renda líquida'
          />
        </Grid.Col>
        <Grid.Col span={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button size='xl' radius='lg'>
            PLANEJAR MEU ORÇAMENTO
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Form
