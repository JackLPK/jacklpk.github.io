import { useEffect } from "react"

import { useDarkTheme, useToggleDarkTheme } from "../contexts/ThemeContext"
import { MoonIcon, SunIcon } from "./Icons"

export default function DarkThemeButton() {
  const isDarkTheme = useDarkTheme() as boolean
  const toggleDarkTheme = useToggleDarkTheme() as () => null

  useEffect(() => {
    const rootHtmlElement = document.querySelector("html") as HTMLHtmlElement

    if (isDarkTheme) {
      rootHtmlElement.classList.add("dark")
    } else {
      rootHtmlElement.classList.remove("dark")
    }
  }, [isDarkTheme])

  return (
    <div className="cursor-pointer text-primary" onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <SunIcon width={32} height={32} />
      ) : (
        <MoonIcon width={32} height={32} />
      )}
    </div>
  )
}
