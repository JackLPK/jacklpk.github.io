import "semantic-ui-css/semantic.min.css"
import "../styles/globals.scss"

import type { AppProps } from "next/app"
import { CookiesProvider } from "react-cookie"

import { ThemeProvider } from "../contexts/ThemeContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </CookiesProvider>
    </>
  )
}
