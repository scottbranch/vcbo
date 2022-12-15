import { useEffect, useState } from "react"
import ScrollAnimate from "../../../components/ScrollAnimate"
import { Button } from "../../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import { FilteredProject } from "../../../components/FilteredProject"
import SelectDropdown from "../../../components/SelectDropdown"
import { AdditionalProject } from "../../../components/AdditionalProject"

// Fetch sector content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("sector", params.uid)
  const projects = await client.getByType("project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })
  const dropdownItems = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name"],
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

  const pages = await client.getAllByType("sector")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Sectors(props) {
  const { page, projects, dropdownItems } = props

  const [projectResults, setProjectResults] = useState(projects.results)
  const [reducedProjects, setReducedProjects] = useState([])

  const pageData = page.data

  useEffect(() => {
    console.log({ page })
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")

    const filteredProjects = projectResults.filter(
      (project) => project.data.sector.uid === page.uid
    )

    setProjectResults(filteredProjects)

    console.log({ projectResults })

    let reducedProjects = Object.values(
      filteredProjects.reduce((acc, current) => {
        acc[current.data.specialty.uid] = acc[current.data.specialty.uid] ?? []
        acc[current.data.specialty.uid].push(current)
        return acc
      }, {})
    )
    setReducedProjects(reducedProjects)
  }, [])

  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
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
        <div className="flex items-center col-start-1 md:col-start-5 col-span-8 gap-4">
          <SelectDropdown
            items={dropdownItems}
            defaultText={page?.data?.name[0]?.text}
          />
        </div>
      </div>
      <ScrollAnimate>
        <h3 className="mt-20 mb-20">{page?.data?.name[0]?.text}</h3>
      </ScrollAnimate>
      {reducedProjects.map((array) => {
        return (
          <div className="grid grid-cols-4 mt-10 gap-x-8">
            <ScrollAnimate className="col-span-4 mb-2">
              <h4>{array[0]?.data?.specialty?.data?.name[0]?.text}</h4>
            </ScrollAnimate>
            {array.map((project) => {
              return (
                <ScrollAnimate className="col-span-1">
                  <FilteredProject
                    title={project?.data?.name[0]?.text}
                    specialty={project?.data?.specialty?.data?.name[0]?.text}
                    image={
                      project?.data?.hero_image?.url === undefined
                        ? "https://images.prismic.io/vcbo/f1555895-ef3f-4b44-8084-8528938bdd79_fallback-image.png?auto=compress,format"
                        : project?.data?.hero_image?.url
                    }
                    url={project?.url}
                  />
                </ScrollAnimate>
              )
            })}
          </div>
        )
      })}
      <div className="additiona-project-container">
        <AdditionalProject />
        <AdditionalProject />
        <AdditionalProject />
        <AdditionalProject />
        <AdditionalProject />
        <AdditionalProject />
        <AdditionalProject />
      </div>
    </div>
  )
}
