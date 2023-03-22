import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { createClient } from "../../../prismicio"
import * as prismicH from "@prismicio/helpers"
import { PrismicRichText } from "@prismicio/react"
import Link from "next/link"
import { Lines } from "../../../components/Lines"
import { BackArrow } from "../../../components/BackArrow"
import { Button } from "../../../components/Button"
import Head from "next/head"

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const position = await client.getByUID("position", params.uid)
  const footer = await client.getSingle("footer")

  return {
    props: { position, footer }, // Will be passed to the sectors component as props
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("position")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Article(props) {
  const { position } = props
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
      document.body.classList.remove("sector")
    }
    setLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>{position?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={position?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={position?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={position?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={position?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto mt-20 md:mt-40 article px-4 md:px-0 relative z-10 mb-60">
        <div className="breadcrumb flex col-span-4 relative">
          <BackArrow className="mr-2" />
          <Link href="/insights/careers">Back</Link>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-2 flex content-end flex-wrap mt-10 md:mt-20">
            <div className="w-full">
              <ScrollAnimate>
                <h1>{position?.data?.title[0]?.text}</h1>
              </ScrollAnimate>
            </div>
            <div className="mt-16 mb-10 md:mb-10">
              <ScrollAnimate>
                <h4>{position?.data?.team[0]?.text} · </h4>
                <h4>{position?.data?.location[0]?.text}</h4>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 md:mt-40">
          <div className="col-start-1 md:col-start-2 col-span-4 md:col-span-2 article-body ml-4 mr-4">
            <PrismicRichText field={position?.data?.description} />
            <Button
              className="mt-4 apply-button"
              link="mailto:info@vcbo.com"
              text="Apply"
            />
          </div>
        </div>
      </div>
    </>
  )
}
