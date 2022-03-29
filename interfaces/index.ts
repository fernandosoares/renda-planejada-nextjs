export interface IArticles {
  articles: IArticle[]
}

export interface IArticle {
  source: ISource
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: null
}

export interface ISource {
  id: string
  name: string
}
