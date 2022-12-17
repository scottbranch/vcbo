import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"
import { createClient } from "../../prismicio"
import SelectDropdown from "../../components/SelectDropdown"

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

  const [theme, setTheme] = useState("grid")
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
      document.body.classList.add("projects-page")
      document.body.classList.remove("sector")
    }
  }, [])
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-4 md:col-span-2">
          <ScrollAnimate>
            <h2>
              Projects
              <sup>
                <small>{projects?.data?.slices[0]?.items?.length}</small>
              </sup>
            </h2>
          </ScrollAnimate>
        </div>
        <div className="flex items-center col-start-1 md:col-start-3 col-span-8 gap-4">
          <SelectDropdown items={sectors} defaultText="Project Types..." />
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
      </div>
      <div
        className={`grid mx-5 md:mx-0 ${
          theme === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        } mt-40 gap-x-4 gap-y-16`}
      >
        {projects?.data?.slices[0]?.items?.map((project, index) => {
          const projectSector = project.project

          const sectorInfo = sectors.find(
            (item) => item.uid === projectSector?.data?.sector?.uid
          )

          if (project?.project?.data !== undefined) {
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
  )
}
