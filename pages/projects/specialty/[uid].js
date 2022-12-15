import { useEffect, useState } from "react"
import ScrollAnimate from "../../../components/ScrollAnimate"
import { Button } from "../../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import { FilteredProject } from "../../../components/FilteredProject"
import SelectDropdown from "../../../components/SelectDropdown"

// Fetch specialty content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("specialty", params.uid)
  const projects = await client.getByType("project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })
  const dropdownItems = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name", "sector.name"],
  })

  return {
    props: {
      page,
      projects,
      dropdownItems,
    },
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("specialty")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Sectors(props) {
  const { page, projects, dropdownItems } = props

  const [projectResults, setProjectResults] = useState(projects.results)

  const pageData = page.data

  useEffect(() => {
    console.log({ page })
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")

    const filteredProjects = projectResults.filter(
      (project) => project.data.specialty.uid === page.uid
    )

    setProjectResults(filteredProjects)

    console.log({ projectResults })
  }, [])

  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-2 mt-40 gap-x-8">
        <div className="col-start-1 col-span-4 md:col-span-2">
          <ScrollAnimate>
            <h2>
              Projects
              <sup>
                <small>{projectResults.length}</small>
              </sup>
            </h2>
          </ScrollAnimate>
        </div>
        <div className="flex items-center col-start-1 md:col-start-4 col-span-8 gap-4">
          <SelectDropdown
            items={dropdownItems}
            defaultText={page?.data?.name[0]?.text}
          />
        </div>
      </div>
      <ScrollAnimate>
        <h3 className="mt-20 mb-20">
          {page?.data?.name[0]?.text},{" "}
          {projectResults[0]?.data?.sector?.data?.name[0]?.text}
        </h3>
      </ScrollAnimate>
      <div className="grid grid-cols-2 gap-4">
        {projectResults.map((project) => {
          return (
            <ScrollAnimate>
              <FilteredProject
                title={project?.data?.name[0]?.text}
                specialty={project?.data?.specialty?.data?.name[0]?.text}
                image={project?.data?.hero_image?.url}
                url={project?.url}
              />
            </ScrollAnimate>
          )
        })}
      </div>
    </div>
  )
}
