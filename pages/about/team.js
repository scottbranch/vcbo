import ScrollAnimate from "../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { Lines } from "../../components/Lines"
import { HeadshotWrapper } from "../../components/HeadshotWrapper"
import { createClient } from "../../prismicio"
import { BackArrow } from "../../components/BackArrow"
import Link from "next/link"
import Head from "next/head"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const team = await client.getByUID("team_page", "team")
  const footer = await client.getSingle("footer")

  return {
    props: { team, footer }, // Will be passed to the sectors component as props
  }
}

export default function About(props) {
  const { team } = props
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

    console.log({ team })
  }, [])

  return (
    <>
      <Lines loaded={loaded} />
      <div className="container mx-auto px-4 md:px-0 mb-60">
        <div className="breadcrumb flex col-span-4 relative mt-20">
          <BackArrow className="mr-2" />
          <Link href="/about" className="breadcrumb-sector about-breadcrumb">
            About
            <span>|</span>
          </Link>
          <p className="about-breadcrumb-team">Team</p>
        </div>
        <h1 className="mt-12 mb-20 md:mb-36">Team</h1>
        {team?.data?.slices?.map((item, index) => (
          <ScrollAnimate className="mb-20">
            <h3 className="mb-5 md:mb-8 pl-3">
              {item?.primary?.team_segment[0]?.text}
            </h3>
            <HeadshotWrapper headshots={item?.items} />
          </ScrollAnimate>
        ))}
      </div>
    </>
  )
}
