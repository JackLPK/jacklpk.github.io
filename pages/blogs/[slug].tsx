import { marked } from "marked"
import Head from "next/head"
import Link from "next/link"

import DarkThemeButton from "../../components/DarkThemeButton"
import { ArrowLeftIcon } from "../../components/Icons"
import SocialLinks from "../../components/SocialLinks"
import { getBlogs, getBlogSlugs } from "../../lib/utilsServer"
import { Blog as BlogType } from "../../models"

function LinkMe() {
  return (
    <>
      <div className="space-y-4 rounded-xl bg-stone-200 p-5 dark:bg-stone-700">
        <h2 className="text-3xl font-bold text-primary">PKLJack</h2>
        <p className="text-md">
          Personal blog by{" "}
          <a
            href="https://www.linkedin.com/in/pui-kit-li-793555177/"
            className="font-bold"
          >
            PKLJack
          </a>
        </p>
        <p className="text-md">
          I <strong>learn</strong>, I <strong>build</strong>, I{" "}
          <strong>share</strong>
        </p>
        <SocialLinks />
      </div>
    </>
  )
}

function BackButton() {
  return (
    <Link href={"/blogs"} className="flex items-center gap-2 text-primary">
      <ArrowLeftIcon />
      Back
    </Link>
  )
}

export default function Blog(props: BlogType) {
  const {
    frontmatter: { title, tags, created_at, excerpt },
    content,
  } = props

  const tagElements = (
    <div>
      Tags:
      <ul className="ml-2 inline-flex flex-row gap-3">
        {tags.map((text, i) => (
          <li key={i} className="text-primary before:content-['#']">
            {text}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <Head>
        <title>{`${title} — PKLJack`}</title>
        <meta name="description" content={excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PKLJack" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-stone-100 px-4 dark:bg-stone-900 dark:text-slate-200">
        <main className="container">
          <div className="flex items-center justify-between py-10">
            <BackButton />
            <DarkThemeButton />
          </div>
          <article className="mb-8">
            <h1 className="pb-10 text-6xl font-bold text-primary">{title}</h1>
            {/* Meta */}
            <div>Posted on: {created_at}</div>
            {tagElements}
            {/* Blog */}
            <div
              className="blog_content"
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            ></div>
          </article>
          <LinkMe />
          <div className="py-10">
            <BackButton />
          </div>
        </main>
      </div>
    </>
  )
}

type ContextType = {
  params: {
    slug: string
  }
}

export async function getStaticProps(context: ContextType) {
  const {
    params: { slug },
  } = context

  const blog = getBlogs().filter((blog) => blog.frontmatter.slug === slug)[0]

  return { props: blog }
}

export async function getStaticPaths() {
  const paths = getBlogSlugs().map((slug: string) => {
    return {
      params: { slug },
    }
  })

  return { paths: paths, fallback: false }
}
