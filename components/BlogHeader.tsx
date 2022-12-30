import Link from "next/link"

import { useDarkTheme, useToggleDarkTheme } from "../contexts/ThemeContext"
import styles from "../styles/BlogHeader.module.scss"

export default function BlogHeader() {
  const isDarkTheme = useDarkTheme() as boolean
  const toggleDarkTheme = useToggleDarkTheme() as () => null

  // console.log(isDarkTheme)
  // console.log(toggleDarkTheme)

  const headerStyles = `${styles.header} ${isDarkTheme && styles.dark}`
  // console.log(headerStyles)

  return (
    <div className={headerStyles}>
      <Link href={"/blogs"}>
        <h1>Home</h1>
      </Link>
      <div className={styles.radio}>
        <span>Dark? </span>
        <button className={styles.toggle} onClick={toggleDarkTheme}>
          {isDarkTheme ? "LIGHT!" : "DARK!"}
        </button>
      </div>
    </div>
  )
}