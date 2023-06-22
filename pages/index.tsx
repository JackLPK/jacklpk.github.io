import Head from "next/head"
import Link from "next/link"

import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SocialLinks from "../components/SocialLinks"

function Navbar() {
  return (
    <>
      <nav className="absolute mt-3 flex w-full justify-center space-x-20 text-3xl font-bold text-slate-600 underline">
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/blogs/"} className="animate-none">
          Blogs
        </Link>
      </nav>
    </>
  )
}

type Props = {
  buildTimestamp: string
}

export default function Home(props: Props) {
  return (
    <>
      {/* prettier-ignore */}
      <Head>
        <title>PKLJack&apos;s Website</title>
        <meta name="description" content="I am Jack, a Computer Science student from University of Nottingham. I love learning new tech, building projects, and sharing my experience. I have experience in Machine Learning, full stack web development, Python, JavaScript, R, Java, Linux..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PKLJack"/>
        <meta name="google-site-verification" content="oUpuPUQv7YvZejqbVBaI4xwvrcxO6xftiekO8gSXzgc" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@PKL_Jack"/>
        <meta name="twitter:creator" content="@PKL_Jack"/>
        <meta name="twitter:title" content="PKLJack's Website"/>
        <meta name="twitter:description" content="Hi there! I am Jack, a Computer Science student from University of Nottingham. I love learning new tech, building projects, and sharing my experience. I have experience in Machine Learning, full stack web development, Python, JavaScript, R, Java, Linux..."/>
        <meta name="twitter:image" content="https://pkljack.github.io/icons/android-chrome-512x512.png"/>

        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <AboutMe />
      <SocialLinks />
      <Projects />
      <Footer buildTimestamp={props.buildTimestamp} />
    </>
  )
}

export async function getStaticProps() {
  const dateString = new Date().toISOString()
  const buildTimestamp = `${dateString.split('T')[0]} ${dateString.split('T')[1].slice(0, 8)} UTC` // prettier-ignore

  return {
    props: { buildTimestamp: buildTimestamp },
  }
}
