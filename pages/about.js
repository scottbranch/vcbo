import ScrollAnimate from "../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { Lines } from "../components/Lines"
import { HeadshotWrapper } from "../components/HeadshotWrapper"
import { createClient } from "../prismicio"
import { PrismicRichText } from "@prismicio/react"
import Head from "next/head"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const about = await client.getByUID("about_page", "about")
  const footer = await client.getSingle("footer")

  return {
    props: { about, footer }, // Will be passed to the sectors component as props
  }
}

export default function About(props) {
  const { about } = props
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
        <title>{about?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={about?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={about?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={about?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={about?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto px-4 md:px-0 mb-60">
        <div className="grid grid-cols-8">
          <div className="col-span-12 md:col-span-6">
            <ScrollAnimate>
              <h3 className="md:ml-4 mb-10 mt-40 about-header">
                {about?.data?.title_text[0]?.text}
              </h3>
            </ScrollAnimate>
          </div>
          <div className="col-span-8 md:col-span-7 md:col-start-3">
            <ScrollAnimate>
              <img src={about?.data?.featured_image?.url} />
            </ScrollAnimate>
          </div>
          <div className="col-span-8 md:col-span-4 md:col-start-5 mt-14 md:mt-28 ml-4">
            <ScrollAnimate>
              <p className="large mb-5">
                {about?.data?.text_blurb_1[0]?.title[0]?.text}
              </p>
              <PrismicRichText
                field={about?.data?.text_blurb_1[0]?.paragraph}
              />
            </ScrollAnimate>
          </div>
          <ScrollAnimate className="grid col-span-8 mx-auto grid-cols-8 mt-20 md:mt-0">
            <img
              className="col-span-4 md:col-span-2 col-start-1 w-11/12 mx-auto"
              src={about?.data?.grid_image_1?.url}
            />
            <img
              className="col-span-4 md:col-span-2 col-start-5 md:col-start-3 mt-10 md:mt-96 pt-20 w-11/12 md:mx-auto"
              src={about?.data?.grid_image_2?.url}
            />
            <img
              className="col-span-4 md:col-span-2 col-start-1 md:col-start-5 mt-40 md:mt-56 w-11/12 mx-auto"
              src={about?.data?.grid_image_3?.url}
            />
            <img
              className="col-span-4 md:col-span-2 col-start-5 md:col-start-7 mt-4 md:mt-56 w-11/12"
              src={about?.data?.grid_image_4?.url}
            />
          </ScrollAnimate>
          <div className="col-span-8 md:col-span-4 mt-14 md:mt-28">
            <ScrollAnimate>
              <p className="large mb-5">
                {about?.data?.text_blurb_2[0]?.title[0]?.text}
              </p>
              <PrismicRichText
                field={about?.data?.text_blurb_2[0]?.paragraph}
              />
            </ScrollAnimate>
          </div>
          <div className="col-start-3 col-span-6 md:col-start-3 mt-8 md:mt-20 md:col-span-4">
            <ScrollAnimate>
              <img src={about?.data?.featured_image_2?.url} />
            </ScrollAnimate>
          </div>
          <div className="col-span-8 md:col-start-3 md:col-span-4 mt-14 md:mt-28 ml-4">
            <ScrollAnimate>
              <p className="large mb-5">
                {about?.data?.text_blurb_3[0]?.title[0]?.text}
              </p>
              <PrismicRichText
                field={about?.data?.text_blurb_3[0]?.paragraph}
              />
            </ScrollAnimate>
          </div>
          <div className="col-span-6 md:col-span-2"></div>
          <div className="col-span-8 mt-8 md:mt-40 mb-10">
            <ScrollAnimate>
              <h3>Leadership</h3>
            </ScrollAnimate>
          </div>
          <HeadshotWrapper headshots={about?.data?.leadership} />
        </div>
      </div>
    </>
  )
}
