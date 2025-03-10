import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"
import { createClient } from "../../prismicio"
import SelectDropdown from "../../components/SelectDropdown"
import { Lines } from "../../components/Lines"
import Head from "next/head"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const allProjects = await client.getAllByType("project")
  const footer = await client.getSingle("footer")
  const navigation = await client.getSingle("navigation")

  const sectors = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name", "sector.name", "sector.description"],
  })

  const projects = await client.getByUID("projects_page", "projects-page", {
    fetchLinks: ["project.name", "project.hero_image", "project.sector"],
  })

  return {
    props: { sectors, projects, allProjects, footer, navigation }, // Will be passed to the sectors component as props
  }
}

export default function Projects(props) {
  const { sectors, projects, allProjects } = props

  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme] = useState("grid")
  const [sortedSectors, setSortedSectors] = useState()

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
      document.body.classList.add("projects-page")

      document.body.classList.remove("sector")
      document.body.classList.remove("homepage")
      document.body.classList.remove("single-project")
    }

    setLoaded(true)

    setSortedSectors(
      sectors.sort((a, b) => {
        return a.data.order - b.data.order
      })
    )
  }, [])
  return (
    <>
      <Head>
        <title>{projects?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={projects?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={projects?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={projects?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={projects?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto z-10 relative px-4 md:px-0 mb-60">
        <div className="grid grid-cols-4 mt-10 md:mt-40 relative">
          <div className="col-start-1 col-span-4 md:col-span-2">
            <ScrollAnimate className="mb-20 md:mb-0">
              <h2 className="uppercase projects-header">
                Projects
                <sup>
                  <small>{allProjects?.length}</small>
                </sup>
              </h2>
            </ScrollAnimate>
          </div>
          <div className="grid col-span-4 md:col-span-2 grid-cols-4 items-center col-start-1 md:col-start-3">
            <div className={`grid grid-cols-2 col-span-2 mx-4 relative`}>
              <div
                className={`active-highlight absolute ${
                  theme === "grid" ? "" : "list"
                }`}
              ></div>
              <button
                className={`filter-button ${theme === "grid" ? "active" : ""}`}
                onClick={() => setTheme("grid")}
              >
                Grid
              </button>
              <button
                className={`filter-button ${theme === "list" ? "active" : ""}`}
                onClick={() => setTheme("list")}
              >
                List
              </button>
            </div>
            <SelectDropdown
              className="col-span-2"
              items={sortedSectors}
              defaultText="Project Types..."
            />
          </div>
        </div>
        <div
          className={`grid ${
            theme === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          } mt-20 md:mt-40 gap-y-16`}
        >
          {projects?.data?.slices[0]?.items?.map((project, index) => {
            const projectSector = project.project

            const sectorInfo = sectors.find(
              (item) => item.uid === projectSector?.data?.sector?.uid
            )

            if (project?.project?.data !== undefined) {
              return (
                <ScrollAnimate className="mr-4">
                  <Project
                    theme={theme}
                    image={
                      project?.project?.data?.hero_image?.url === undefined
                        ? "https://images.prismic.io/vcbo/f1555895-ef3f-4b44-8084-8528938bdd79_fallback-image.png?auto=compress,format"
                        : project?.project?.data?.hero_image?.url
                    }
                    sector={sectorInfo?.data?.name[0]?.text}
                    blurb={sectorInfo?.data?.description[0]?.text}
                    sectorLink={project?.project?.data?.sector?.url}
                    projectLink={project?.project?.data?.sector?.url}
                  />
                </ScrollAnimate>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}
