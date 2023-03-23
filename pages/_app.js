import Link from "next/link"
import "../styles/globals.css"
import "../styles/components.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "../prismicio"
import Head from "next/head"
import Script from "next/script"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-F963Y1THH7"
      />
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F963Y1THH7', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
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
            <Footer data={pageProps?.footer?.data} />
          </div>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}
