import Head from "next/head"
import Link from "next/link"

import DarkThemeButton from "../../components/DarkThemeButton"
import { ArrowLeftIcon } from "../../components/Icons"
import { getBlogs, syncImages } from "../../lib/utilsServer"
import { Blog, FrontMatter } from "../../models"

type BlogCardProps = {
  blogMeta: FrontMatter
}

function BlogCard(props: BlogCardProps) {
  const {
    blogMeta: { slug, title, created_at, excerpt },
  } = props

  return (
    <>
      <div className="">
        <h3 className="my-2 text-2xl font-bold text-primary">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm">{created_at}</p>
        <p className="text-lg">{excerpt}</p>
      </div>
    </>
  )
}

type BlogProps = {
  blogs: Blog[]
}

export default function Blogs({ blogs }: BlogProps) {
  blogs.sort((a, b) => {
    if (a.frontmatter.created_at < b.frontmatter.created_at) {
      return 1
    } else if (a.frontmatter.created_at > b.frontmatter.created_at) {
      return -1
    } else {
      return 0
    }
  })

  return (
    <>
      <Head>
        <title>Blogs by PKLJack</title>
        <meta
          name="description"
          content="Personal blog by PKLJack. I learn, I build, I share."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-stone-100 dark:bg-stone-900 dark:text-slate-200">
        <div className="container px-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <h1 className="py-6 text-6xl font-bold text-primary">Blogs</h1>
            <DarkThemeButton />
          </header>

          {/* Back button */}
          <Link
            href={"/"}
            className="mb-2 flex items-center gap-1 text-primary"
          >
            <ArrowLeftIcon />
            Projects
          </Link>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {blogs.map((b, i) => {
              return <BlogCard key={i} blogMeta={b.frontmatter} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  syncImages()

  const blogs = getBlogs()

  return { props: { blogs } }
}
