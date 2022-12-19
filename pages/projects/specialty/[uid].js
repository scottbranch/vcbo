import { useEffect, useState } from "react"
import ScrollAnimate from "../../../components/ScrollAnimate"
import { Button } from "../../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import { FilteredProject } from "../../../components/FilteredProject"
import SelectDropdown from "../../../components/SelectDropdown"
import { AdditionalProject } from "../../../components/AdditionalProject"
import { Lines } from "../../../components/Lines"

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

  const additionalProjects = await client.getAllByType("additional_project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })

  return {
    props: {
      page,
      projects,
      dropdownItems,
      additionalProjects,
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
  const { page, projects, dropdownItems, additionalProjects } = props

  const [projectResults, setProjectResults] = useState(projects?.results)
  const [loaded, setLoaded] = useState(false)

  const pageData = page?.data

  useEffect(() => {
    document.body.classList.add("dark-mode")
    document.body.classList.add("sector")
    document.body.classList.remove("projects-page")

    const filteredProjects = projectResults.filter(
      (project) => project.data.specialty.uid === page.uid
    )

    setProjectResults(filteredProjects)

    let scrollpos = window.scrollY
    let additionalProjectsContainer = document.querySelector(
      ".additional-project-container"
    )
    let pageWrapper = document.querySelector(".sector")

    const add_class_on_scroll = () => pageWrapper.classList.remove("dark-mode")
    const remove_class_on_scroll = () => pageWrapper.classList.add("dark-mode")

    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY
      if (document.body.classList.contains("sector")) {
        if (
          additionalProjectsContainer.getBoundingClientRect().y -
            additionalProjectsContainer.offsetHeight * 4 <
          0
        ) {
          add_class_on_scroll()
        } else {
          remove_class_on_scroll()
        }
      } else {
        add_class_on_scroll()
      }
    })

    setLoaded(true)
  }, [])

  return (
    <>
      <Lines loaded={loaded} />
      <div className="container mx-auto projects-page px-4 md:px-0">
        <div className="grid grid-cols-2 mt-10 md:mt-40 gap-x-8">
          <div className="col-start-1 col-span-4 md:col-span-2">
            <ScrollAnimate className="mb-10 md:mb-0">
              <h2>
                Projects
                <sup>
                  <small>{projectResults?.length}</small>
                </sup>
              </h2>
            </ScrollAnimate>
          </div>
          <div className="md:flex grid items-center col-start-1 md:col-start-4 col-span-2 gap-4">
            <SelectDropdown
              items={dropdownItems}
              defaultText={page?.data?.name[0]?.text}
            />
          </div>
        </div>
        <ScrollAnimate>
          <h3 className="mt-10 mb-5 md:mt-20 md:mb-20">
            {page?.data?.name[0]?.text},{" "}
            {projectResults?.length > 0
              ? projectResults[0]?.data?.sector?.data?.name[0]?.text
              : ""}
          </h3>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectResults?.map((project) => {
            return (
              <ScrollAnimate>
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
        <div className="additional-project-container">
          {additionalProjects?.map((item) => {
            return (
              <AdditionalProject
                name={item?.data?.name[0]?.text}
                location={item?.data?.location[0]?.text}
                size={`${item?.data?.sq_ft[0]?.text} sq ft`}
                client={item?.data?.client[0]?.text}
                images={item?.data?.images}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
