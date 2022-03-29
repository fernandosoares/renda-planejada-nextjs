// React
import React from 'react'

// NextJS Types
import type { NextPage } from 'next'

// NextJS Components
import Head from 'next/head'

// Components
import Header from '../components/Header'
import Form from '../components/Form'
import News from '../components/News'
import { IArticles } from '../interfaces'

const Home: NextPage<IArticles> = (props: IArticles) => {
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
      <News articles={props.articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(
    'https://newsapi.org/v2/top-headlines?country=br&pageSize=8&apiKey=751d734ab25243a7a6e06e4371df1c8d'
  )
  const json = await data.json()
  return {
    props: {
      articles: [...json.articles],
    },
    revalidate: 3600,
  }
}

export default Home
