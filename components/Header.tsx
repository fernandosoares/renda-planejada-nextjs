import React from 'react'

import { Container, Grid, Text, Title } from '@mantine/core'
import { useStyles } from '../styles/header'

const Header: React.FC = () => {
  const { classes } = useStyles()

  return (
    <>
      <Container size='lg' className={classes.header}>
        <Grid justify='center'>
          <Grid.Col xs={12} md={8}>
            <Title order={1}>Renda Planejada</Title>
            <Text component='p'>_você no controle</Text>
            <Grid justify='center'>
              <Grid.Col span={12}>
                <Title order={2}>
                  Renda Planejada é uma ferramenta de planejamento orçamentário
                  pessoal, sendo como um guia para controle de despesas
                  utilizando regras de aplicação de capital.
                </Title>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Grid justify='center'>
          <Grid.Col span={12}>
            <Text align='center' component='p'>
              Vamos lá?
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default Header
