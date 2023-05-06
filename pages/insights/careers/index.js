import ScrollAnimate from "../../../components/ScrollAnimate"
import { useState, useEffect } from "react"
import { createClient } from "../../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import Head from "next/head"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const careers = await client.getByUID("careers_page", "careers")
  const footer = await client.getSingle("footer")

  return {
    props: { careers, footer }, // Will be passed to the sectors component as props
  }
}

export default function Careers(props) {
  const { careers } = props
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
        <title>{careers?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={careers?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={careers?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={careers?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={careers?.data?.social_meta_image?.url}
        />
      </Head>
      <div className="container mx-auto mt-40 px-4 md:px-0 mb-60 careers-page">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-2 flex content-end flex-wrap">
            <ScrollAnimate>
              <h1 className="w-full">{careers?.data?.headline[0]?.text}</h1>
            </ScrollAnimate>
            <ScrollAnimate className="mt-12 md:mt-16">
              <h4 className="w-full">{careers?.data?.subheader[0]?.text}</h4>
            </ScrollAnimate>
          </div>
          <ScrollAnimate className="col-span-4 md:col-span-2 mt-12 md:mt-0">
            <img src={careers?.data?.featured_image?.url} />
          </ScrollAnimate>
        </div>
        <div className="grid grid-cols-4 mt-24 md:mt-60">
          <ScrollAnimate className="col-span-4 md:col-span-1 mb-8 md:mb-0">
            <h4>
              Open
              <br className="hidden md:block" />
              Positions
            </h4>
          </ScrollAnimate>
          <ScrollAnimate className="col-span-2 md:col-span-1">
            <p className="small-subhead">POSITION</p>
            {careers?.data?.architectural_team?.map((item) => (
              <p className="mt-6">
                <a href={item?.link?.url} target={item?.link?.target}>
                  {item?.position[0]?.text}
                </a>
              </p>
            ))}
            {careers?.data?.interior_design_team?.map((item) => (
              <p className="mt-6">
                <a href={item?.link?.url} target={item?.link?.target}>
                  {item?.position[0]?.text}
                </a>
              </p>
            ))}
          </ScrollAnimate>
          <ScrollAnimate className="col-span-1">
            <p className="small-subhead">LOCATION</p>
            {careers?.data?.architectural_team?.map((item) => (
              <p className="mt-6">{item?.location[0]?.text}</p>
            ))}
            {careers?.data?.interior_design_team?.map((item) => (
              <p className="mt-6">{item?.location[0]?.text}</p>
            ))}
          </ScrollAnimate>
        </div>
        <ScrollAnimate className="grid grid-cols-4 mt-24 mb-24 md:mt-60 md:mb-60">
          <div className="col-span-4 md:col-span-1 mb-4 md:mb-0">
            <h4>Benefits</h4>
          </div>
          <div className="col-span-4 md:col-span-2 benefits-body">
            <PrismicRichText field={careers?.data?.benefits} />
          </div>
        </ScrollAnimate>
      </div>
    </>
  )
}
