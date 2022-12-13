import Link from "next/link"
import "../styles/globals.css"
import "../styles/components.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "../prismicio"

export default function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <div className="page-wrapper">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </PrismicPreview>
    </PrismicProvider>
  )
}
