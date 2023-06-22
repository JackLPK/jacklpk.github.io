import "../styles/globals.scss"

import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

import { ThemeProvider } from "../contexts/ThemeContext"

// import { CookiesProvider } from "react-cookie"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-iter",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <CookiesProvider> */}
      <ThemeProvider>
        <div className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      {/* </CookiesProvider> */}
    </>
  )
}
