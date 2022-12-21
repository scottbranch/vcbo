import ScrollAnimate from "../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { Lines } from "../components/Lines"
import { HeadshotWrapper } from "../components/HeadshotWrapper"
import { createClient } from "../prismicio"
import { PrismicRichText } from "@prismicio/react"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const about = await client.getByUID("about_page", "about")

  return {
    props: { about }, // Will be passed to the sectors component as props
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
      <Lines loaded={loaded} />
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-8">
          <div className="col-span-12 md:col-span-6">
            <ScrollAnimate>
              <h3 className="md:ml-4 mb-10 mt-40">
                {about?.data?.title_text[0]?.text}
              </h3>
            </ScrollAnimate>
          </div>
          <div className="col-span-8 md:col-span-5 md:col-start-4">
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
          <div className="col-span-8 mx-auto">
            <ScrollAnimate>
              <img className="md:block hidden" src="about-grid.png" />
              <img
                className="md:hidden w-full mt-14"
                src="about-grid-mobile.png"
              />
            </ScrollAnimate>
          </div>
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
