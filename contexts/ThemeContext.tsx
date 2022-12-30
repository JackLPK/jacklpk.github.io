import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()
const ToggleThemeContext = createContext()

export function useDarkTheme() {
  return useContext(ThemeContext)
}

export function useToggleDarkTheme() {
  return useContext(ToggleThemeContext)
}

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  // const ThemeContext = createContext({ isDarkTheme, setIsDarkTheme })

  const toggleDarkTheme = () => {
    setIsDarkTheme((prevState) => !prevState)
  }

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ToggleThemeContext.Provider value={toggleDarkTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
