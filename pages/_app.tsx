import "../styles/globals.scss"
import "semantic-ui-css/semantic.min.css"
import type { AppProps } from "next/app"
import { CookiesProvider } from "react-cookie"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  )
}
