import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { createClient } from "../../../prismicio"
import * as prismicH from "@prismicio/helpers"
import { PrismicRichText } from "@prismicio/react"
import { Lines } from "../../../components/Lines"

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const article = await client.getByUID("article", params.uid)

  return {
    props: { article }, // Will be passed to the sectors component as props
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("article")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Article(props) {
  const { article } = props
  const date = new Date(article?.first_publication_date)
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
      <Lines loaded={loaded} />
      <div className="container mx-auto mt-20 md:mt-40 article px-4 md:px-0 relative z-10">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-2 flex content-end flex-wrap">
            <div className="w-full">
              <ScrollAnimate>
                <h1>{article?.data?.title[0]?.text}</h1>
              </ScrollAnimate>
            </div>
            <div className="mt-16">
              <ScrollAnimate>
                <h4>{`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</h4>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <ScrollAnimate>
              <img src={article?.data?.hero_image?.url} />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 md:mt-40">
          <div className="col-start-1 md:col-start-2 col-span-4 md:col-span-2 article-body">
            <PrismicRichText field={article?.data?.content} />
          </div>
        </div>
      </div>
    </>
  )
}
