import { Container, Grid, Image, Title } from '@mantine/core'
import React from 'react'
import { IArticle, IArticles } from '../interfaces'

const News: React.FC<IArticles> = ({ articles }: IArticles) => {
  return (
    <Container>
      <h2>Últimas notícias</h2>
      <Grid gutter='lg'>
        {articles.map((article: IArticle) => {
          return (
            <Grid.Col key={article.title} xs={12} md={3}>
              <Image
                radius='md'
                src={article.urlToImage}
                alt={article.title}
                height='120px'
              />
              <Title order={4}>{article.title}</Title>
            </Grid.Col>
          )
        })}
      </Grid>
    </Container>
  )
}

export default News
