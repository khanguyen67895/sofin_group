export interface NewsItem {
  id: string
  image: string
  category: string
  date: string
  title: string
  detail: string
  url?: string
}

export interface NewsDetail extends NewsItem {
  content?: string
  contentText?: string
  paragraphs?: string[]
  images?: string[]
  tags?: string[]
  source?: string
}
