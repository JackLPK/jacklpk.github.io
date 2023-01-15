import Head from "next/head"
import Link from "next/link"
import { Container } from "semantic-ui-react"

import AboutMe from "../components/AboutMe"
import FloatingSurvey from "../components/FloatingSurvey"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SocialLinks from "../components/SocialLinks"
import styles from "../styles/Home.module.scss"

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/blogs/"} className={styles.pulse}>
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
      <Head>
        <title>PKLJack&apos;s Website</title>
        <meta name="description" content="I am Jack, a Computer Science student from University of Nottingham. I love learning new tech, building projects, and sharing my experience. I have experience in Machine Learning, full stack web development, Python, JavaScript, R, Java, Linux..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PKLJack"/>

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@PKL_Jack"/>
        <meta name="twitter:creator" content="@PKL_Jack"/>
        <meta name="twitter:title" content="PKLJack's Website"/>
        <meta name="twitter:description" content="Hi there! I am Jack, a Computer Science student from University of Nottingham. I love learning new tech, building projects, and sharing my experience. I have experience in Machine Learning, full stack web development, Python, JavaScript, R, Java, Linux..."/>
        <meta name="twitter:image" content="https://pkljack.github.io/icons/android-chrome-512x512.png"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <Navbar />
        <Hero />
        <Container>
          <AboutMe />
          <SocialLinks />
          <FloatingSurvey>
            <Projects />
          </FloatingSurvey>
        </Container>
        <Footer buildTimestamp={props.buildTimestamp} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const dateString = new Date().toISOString()
  const buildTimestamp = `${dateString.split('T')[0]} ${dateString.split('T')[1].slice(0, 8)}` // prettier-ignore

  return {
    props: { buildTimestamp: buildTimestamp },
  }
}
