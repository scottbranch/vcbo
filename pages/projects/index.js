import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"
import { createClient } from "../../prismicio"
import SelectDropdown from "../../components/SelectDropdown"
import { Lines } from "../../components/Lines"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const sectors = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name", "sector.name", "sector.description"],
  })

  const projects = await client.getByUID("projects_page", "projects-page", {
    fetchLinks: ["project.name", "project.hero_image", "project.sector"],
  })

  return {
    props: { sectors, projects }, // Will be passed to the sectors component as props
  }
}

export default function Projects(props) {
  const { sectors, projects } = props

  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme] = useState("grid")
  const [sortedSectors, setSortedSectors] = useState()

  useEffect(() => {
    console.log({ sectors })
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
      <Lines loaded={loaded} />
      <div className="container mx-auto z-10 relative px-4 md:px-0">
        <div className="grid grid-cols-4 mt-10 md:mt-40 relative">
          <div className="col-start-1 col-span-4 md:col-span-2">
            <ScrollAnimate className="mb-20 md:mb-0">
              <h2 className="uppercase">
                Projects
                <sup>
                  <small>{projects?.data?.slices[0]?.items?.length}</small>
                </sup>
              </h2>
            </ScrollAnimate>
          </div>
          <div className="grid col-span-4 md:col-span-2 grid-cols-4 items-center col-start-1 md:col-start-3 gap-4">
            <SelectDropdown
              className="col-span-2"
              items={sortedSectors}
              defaultText="Project Types..."
            />
            <button
              className={`filter-button col-span-1 ${
                theme === "grid" ? "active" : ""
              }`}
              onClick={() => setTheme("grid")}
            >
              Grid
            </button>
            <button
              className={`filter-button  col-span-1 ${
                theme === "list" ? "active" : ""
              }`}
              onClick={() => setTheme("list")}
            >
              List
            </button>
          </div>
        </div>
        <div
          className={`grid ${
            theme === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          } mt-20 md:mt-40 gap-x-4 gap-y-16`}
        >
          {projects?.data?.slices[0]?.items?.map((project, index) => {
            const projectSector = project.project

            const sectorInfo = sectors.find(
              (item) => item.uid === projectSector?.data?.sector?.uid
            )

            if (project?.project?.data !== undefined) {
              console.log(project?.project)
              return (
                <ScrollAnimate>
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
