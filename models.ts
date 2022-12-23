export type CardData = {
  title: string
  image: string
  alt: string
  date: string | null
  description: JSX.Element
  sourceUrl: string
  siteUrl: string | null
  tags: string[]
}

// Tag and how many times it appeared in data
export type TagData = {
  name: string
  count: number
}
