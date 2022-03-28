import React from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, TextField, Typography } from '@mui/material'

import NumberFormat from 'react-number-format'
import Header from '../components/Header'
import Form from '../components/Form'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Renda Planejada | _você no controle</title>
        <meta
          name='description'
          content='Renda Planejada é uma ferramenta de planejamento orçamentário pessoal, sendo como
          um guia para controle de despesas utilizando regras de aplicação de capital.'
        />
      </Head>
      <Header />
      <Form />
    </>
  )
}

export default Home
