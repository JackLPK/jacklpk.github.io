import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { marked } from "marked"
import Head from "next/head"
import Link from "next/link"
import { Container } from "semantic-ui-react"

import BlogHeader from "../../components/BlogHeader"
import SocialLinks from "../../components/SocialLinks"
import { useDarkTheme } from "../../contexts/ThemeContext"
import styles from "../../styles/Blog.module.scss"

type Props = {
  frontmatter: any
  content: string
  year: string
  month: string
  day: string
  slug: string
}

function LinkMe() {
  return (
    <>
      <div className={styles.linkme}>
        <h2>PKLJack</h2>
        <p>
          Personal blog by{" "}
          <a href="https://www.linkedin.com/in/pui-kit-li-793555177/">
            PKLJack
          </a>
        </p>
        <p>
          I <strong>learn</strong>, I <strong>build</strong>, I{" "}
          <strong>share</strong>
        </p>
        <SocialLinks />
      </div>
    </>
  )
}

export default function Blog(props: Props) {
  const {
    frontmatter: { title, tags, created_at, excerpt },
    content,
  } = props

  const isDarkTheme = useDarkTheme()

  const pageStyles = `${styles.page} ${isDarkTheme && styles.dark}`

  if (!Array.isArray(tags)) {
    throw "Wrong type"
  }

  const tagElements = tags.map((text, i) => (
    <span key={i} className={styles.tag}>
      {text}
    </span>
  ))

  return (
    <>
      <Head>
        <title>{`${title} — PKLJack`}</title>
        <meta name="description" content={excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PKLJack"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pageStyles}>
        <Container className={styles.blog}>
          <BlogHeader />
          <main>
            <article>
              <div className={styles.meta}>
                <h1 className={styles.title}>{title}</h1>
                <div>Posted on: {created_at}</div>
                <div>
                  Tags: <span className={styles.tags}>{tagElements}</span>
                </div>
              </div>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
              ></div>
            </article>
            <div className={styles.prefooter}>
              <LinkMe />
              <Link href={"/blogs"} className={styles.goback}>
                Go Back
              </Link>
            </div>
          </main>
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  const { params } = context

  const localBlogsDir = path.resolve(process.env.NEXT_PUBLIC_BLOG_DIR as string)

  // prettier-ignore
  const blogFileName = fs.readdirSync(localBlogsDir)
    .find((filename) => filename.includes(params.slug))

  if (blogFileName === undefined) {
    throw new Error(`File Not Found: ${blogFileName}`)
  }

  const markdownWithMeta = fs.readFileSync(
    path.join(localBlogsDir, blogFileName),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug: params.slug,
    },
  }
}

export async function getStaticPaths() {
  const localBlogsDir = path.resolve(process.env.NEXT_PUBLIC_BLOG_DIR as string)

  const fileNames = fs.readdirSync(localBlogsDir)

  const paths = fileNames
    .filter((filename) => path.extname(filename) == ".md")
    .map((fileName) => {
      const [dateString, slug] = fileName.split(" ")

      return {
        params: {
          slug: slug.replace(".md", ""),
        },
      }
    })

  return { paths, fallback: false }
}
