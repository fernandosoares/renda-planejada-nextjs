import React from 'react'

import { Container, Grid, Text, Title } from '@mantine/core'

const Header: React.FC = () => {
  return (
    <>
      <Container size='lg'>
        <Grid justify='center'>
          <Grid.Col xs={12} md={6}>
            <Title color='gray' align='center' order={1}>
              Renda Planejada
            </Title>
            <Text align='center' component='p'>
              _você no controle
            </Text>
            <Grid justify='center'>
              <Grid.Col span={12}>
                <Title order={2} align='center'>
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
