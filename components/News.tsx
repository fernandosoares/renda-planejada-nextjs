import { Container, Grid, Image, Text, Title } from '@mantine/core'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { FileUnknown } from 'tabler-icons-react'
import { IArticle, IArticles } from '../interfaces'
import { useStyles } from '../styles/news'

const News: React.FC<IArticles> = ({ articles }: IArticles) => {
  const { classes } = useStyles()

  return (
    <Container>
      <h2 className={classes.heading}>Últimas notícias</h2>
      <Grid gutter='lg'>
        {articles.map((article: IArticle) => {
          const date = moment(article.publishedAt).format('DD/MM/YYYY HH\\hMM')
          return (
            <Grid.Col key={article.title} xs={12} md={3}>
              <Link href={article.url}>
                <a className={classes.a} target='_blank'>
                  {article.urlToImage ? (
                    <Image
                      radius='sm'
                      src={article.urlToImage}
                      alt={article.title}
                      height='120px'
                    />
                  ) : (
                    <div className={classes.noimage}>
                      <FileUnknown color='#F0F0F0' size={48} strokeWidth={2} />
                    </div>
                  )}
                  <Text className={classes.date}>{date}</Text>
                  <Title className={classes.title} order={4}>
                    {article.title}
                  </Title>
                </a>
              </Link>
            </Grid.Col>
          )
        })}
      </Grid>
    </Container>
  )
}

export default News
