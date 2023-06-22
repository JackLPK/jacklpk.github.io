export type CardData = {
  title: string
  image: string
  alt: string
  date: string | null
  descriptionJSX: JSX.Element
  descriptionHtml: string
  sourceUrl: string
  siteUrl: string | null
  tags: string[]
}

// Tag and how many times it appeared in data
export type TagData = {
  name: string
  count: number
}

export type FrontMatter = {
  title: string
  created_at: string
  updated_at: string
  slug: string
  excerpt: string
  tags: string[]
}

export type Blog = {
  frontmatter: FrontMatter
  content: string
}
