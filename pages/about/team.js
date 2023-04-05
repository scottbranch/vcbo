import ScrollAnimate from "../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { Lines } from "../../components/Lines"
import { HeadshotWrapper } from "../../components/HeadshotWrapper"
import { HeadshotWrapperSegment } from "../../components/HeadshotWrapperSegment"
import { createClient } from "../../prismicio"
import { BackArrow } from "../../components/BackArrow"
import Link from "next/link"
import TeamDropdown from "../../components/teamDropdown"

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

    console.log("stuff ", team?.data?.slices)
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
        <div className="grid grid-cols-4 mt-12 mb-20 md:mb-36">
          <h1 className="col-span-2">Team</h1>
          <TeamDropdown
            className="col-start-1 col-span-4 mt-10 mt-0 md:col-start-4"
            defaultText="All Team"
            items={team?.data?.slices}
          />
        </div>
        <div className="col-span-8 mt-8 md:mt-40 mb-10 team-segment principals">
          <ScrollAnimate>
            <h3 className="mb-5 md:mb-8 pl-3">Principals</h3>
            <HeadshotWrapper headshots={team?.data?.leadership} />
          </ScrollAnimate>
        </div>
        {team?.data?.slices?.map((item, index) => {
          const formattedTitle = item?.primary?.team_segment[0]?.text
            .replace(/\s+/g, "-")
            .toLowerCase()

          console.log(formattedTitle)
          return (
            <ScrollAnimate className={`mb-20 team-segment ${formattedTitle}`}>
              <h3 className="mb-5 md:mb-8 pl-3">
                {item?.primary?.team_segment[0]?.text}
              </h3>
              <HeadshotWrapperSegment headshots={item?.items} />
            </ScrollAnimate>
          )
        })}
      </div>
    </>
  )
}
