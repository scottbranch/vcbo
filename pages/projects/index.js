import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"
import { DownArrow } from "../../components/DownArrow"
import Link from "next/link"
import { createClient } from "../../prismicio"
import SelectDropdown from "../../components/SelectDropdown"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name"],
  })

  const projects = await client.getAllByType("project", {
    fetchLinks: ["sector.name", "sector.description"],
  })

  return {
    props: { page, projects }, // Will be passed to the page component as props
  }
}

export default function Projects(props) {
  const { page, projects } = props

  const [theme, setTheme] = useState("grid")
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    console.log({ projects })
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  }, [])
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-4 md:col-span-2">
          <ScrollAnimate>
            <h2>
              Projects
              <sup>
                <small>{projects.length}</small>
              </sup>
            </h2>
          </ScrollAnimate>
        </div>
        <div className="flex items-center col-start-1 md:col-start-3 col-span-8 gap-4">
          <SelectDropdown items={page} defaultText="Project Types..." />
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
        {projects.map((project) => {
          return (
            <ScrollAnimate>
              <Project
                theme={theme}
                image={project?.data?.hero_image?.url}
                sector={project?.data?.sector?.data?.name[0].text}
                blurb={project?.data?.sector?.data?.description[0]?.text}
                sectorLink={project?.data?.sector?.url}
                projectLink={project?.url}
              />
            </ScrollAnimate>
          )
        })}
      </div>
    </div>
  )
}
