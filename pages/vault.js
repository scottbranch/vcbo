import ScrollAnimate from "../components/ScrollAnimate"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"
import { Lines } from "../components/Lines"
import { createClient } from "../prismicio"
import { PrismicRichText } from "@prismicio/react"
import Head from "next/head"
import { FilteredProject } from "../components/FilteredProject"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const unlistedPage = await client.getByUID("unlisted_page", "vault")
  const footer = await client.getSingle("footer")
  const navigation = await client.getSingle("navigation")

  return {
    props: { unlistedPage, footer, navigation }, // Will be passed to the sectors component as props
  }
}

export default function Services(props) {
  const { unlistedPage } = props
  const [loaded, setLoaded] = useState(false)
  const [activeClass, setActiveClass] = useState("")

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
      document.body.classList.add("projects-page")

      document.body.classList.remove("sector")
      document.body.classList.remove("homepage")
      document.body.classList.remove("single-project")
    }

    setLoaded(true)

    console.log("unlisted page ", unlistedPage)
  }, [])

  const showColumn = (name) => {
    setActiveClass(`${name} hovered`)
  }

  const hideColumn = (name) => {
    setActiveClass("")
  }

  const handleClickScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Head>
        {/* <title>{services?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={services?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={services?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={services?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={services?.data?.social_meta_image?.url}
        /> */}
      </Head>
      <Lines loaded={loaded} />
      <div className="container relative mx-auto services-page px-4 md:px-0 mb-60">
        <h1 className="mt-10 md:mt-60 mb-10 md:mb-20">
          {unlistedPage?.data?.heading[0]?.text}
        </h1>
        <div className="grid grid-cols-4" id="architecture">
          <div className="grid grid-cols-2 col-span-4 md:col-span-2">
            <ScrollAnimate>
              <h3 className="col-start-1 col-span-2 mb-10 md:mb-0">
                {unlistedPage?.data?.sub_heading[0]?.text}
              </h3>
            </ScrollAnimate>
            <ScrollAnimate className="col-start-1 col-span-4 md:col-span-1 md:col-start-2 mt-10 md:mt-20 md:mt-60 ml-4 mr-4">
              <PrismicRichText field={unlistedPage?.data?.body} />
            </ScrollAnimate>
          </div>
          <ScrollAnimate className="block col-start-1 md:col-start-3 col-span-4 md:col-span-2 w-full">
            <img
              className="col-start-1 md:col-start-3 col-span-4 md:col-span-2 w-full mt-10 md:mt-60"
              src={unlistedPage?.data?.hero_image?.url}
            />
          </ScrollAnimate>
        </div>
        <ScrollAnimate className="md:grid md:grid-cols-4 mt-40">
          <h3 className="col-start-1">
            {unlistedPage?.data?.publications_heading[0]?.text}
          </h3>
          <p className="col-start-4 large mb-10 mt-5 md:mb-0 md:mt-0">
            {unlistedPage?.data?.publications_description[0]?.text}
          </p>
        </ScrollAnimate>
        <div className="grid grid grid-cols-4 mt-5 md:mt-20 mt-5 md:mt-10">
          {unlistedPage?.data?.files.map((item, index) => {
            return (
              <FilteredProject
                className="md:col-span-1 mb-5 mr-4"
                title={item?.title[0]?.text}
                specialty={item?.sub_heading[0]?.text}
                image={item?.image?.url}
                url={item?.link?.url}
                target={item?.link?.target}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
