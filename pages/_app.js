import "../styles/globals.css"
import "../styles/components.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
