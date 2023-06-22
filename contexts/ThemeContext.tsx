import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(false)
const ToggleThemeContext = createContext<Function | null>(null)

export function useDarkTheme() {
  return useContext(ThemeContext)
}

export function useToggleDarkTheme() {
  return useContext(ToggleThemeContext)
}

export function ThemeProvider(props: any) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    setIsDarkTheme((prevState) => !prevState)
  }

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ToggleThemeContext.Provider value={toggleDarkTheme}>
        {props.children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
