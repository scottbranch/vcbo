import Link from "next/link"
import "../styles/globals.css"
import "../styles/components.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "../prismicio"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <title>
            VCBO | Architecture, Interiors, Planning, and Sustainability
          </title>
          <meta
            name="description"
            content="VCBO | Architecture, Interiors, Planning, and Sustainability"
          />
        </Head>
        <div className="page-wrapper relative">
          <Header />
          <Component {...pageProps} />
          <Footer {...pageProps} />
        </div>
      </PrismicPreview>
    </PrismicProvider>
  )
}
