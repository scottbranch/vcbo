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
import ScrollTrigger from "react-scroll-trigger"
import { BackArrow } from "../../../components/BackArrow"
import Link from "next/link"

// Fetch sector content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("sector", params.uid)
  const projects = await client.getAllByType("project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })
  const dropdownItems = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name"],
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

  const pages = await client.getAllByType("sector")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Sectors(props) {
  const { page, projects, dropdownItems, additionalProjects } = props

  const [projectResults, setProjectResults] = useState(projects)
  const [reducedProjects, setReducedProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [specialtyData, setSpecialtyData] = useState()
  const [sliceValue, setSliceValue] = useState()
  const [sortedSectors, setSortedSectors] = useState()
  const [loaded, setLoaded] = useState(false)

  const pageData = page?.data

  const addDarkMode = () => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
    }
  }

  const removeDarkMode = () => {
    if (process.browser) {
      document.body.classList.remove("dark-mode")
    }
  }

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("sector")
      document.body.classList.add("dark-mode")

      document.body.classList.remove("homepage")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
    }

    const filteredProjects = projectResults.filter(
      (project) => project.data.sector.uid === page.uid
    )

    setFilteredProjects(filteredProjects)

    let reducedProjects = Object.values(
      filteredProjects.reduce((acc, current) => {
        acc[current.data.specialty.uid] = acc[current.data.specialty.uid] ?? []
        acc[current.data.specialty.uid].push(current)
        return acc
      }, {})
    )
    setReducedProjects(reducedProjects)

    setSpecialtyData(reducedProjects[0][0]?.data?.specialty?.data)

    setSliceValue(specialtyData !== undefined ? "0,4" : "0")

    if (page?.data?.name[0]?.text === "K-12") {
      const sortedArray = []

      reducedProjects.map((item) => {
        item[0].data.specialty.uid === "elementary"
          ? sortedArray.splice(0, 0, item)
          : item[0].data.specialty.uid === "middle-junior"
          ? sortedArray.splice(1, 0, item)
          : item[0].data.specialty.uid === "high"
          ? sortedArray.splice(2, 0, item)
          : item[0].data.specialty.uid === "specialty"
          ? sortedArray.splice(2, 0, item)
          : null
      })

      setReducedProjects(sortedArray)
    }

    setSortedSectors(
      dropdownItems.sort((a, b) => {
        return a.data.order - b.data.order
      })
    )

    setLoaded(true)
  }, [page])

  return (
    <>
      <Lines loaded={loaded} />
      <div className="container mx-auto sector-page px-4 md:px-0 mb-60">
        <div className="breadcrumb flex col-span-4 relative mb-10 md:mt-20 mt-10">
          <BackArrow className="mr-2" />
          <Link href="/projects">Back</Link>
        </div>
        <div className="grid grid-cols-4 mt-10 md:mt-20 gap-x-8 md:gap-0">
          <div className="col-start-1 col-span-4 md:col-span-2">
            <ScrollAnimate className="mb-10 md:mb-0">
              <h2 className="uppercase projects-header">
                Projects
                <sup>
                  <small>{filteredProjects?.length}</small>
                </sup>
              </h2>
            </ScrollAnimate>
          </div>
          <div className="grid items-center col-start-1 md:col-start-4 col-span-4 md:col-span-1">
            <SelectDropdown
              items={sortedSectors}
              defaultText={page?.data?.name[0]?.text}
            />
          </div>
        </div>
        <ScrollAnimate>
          <h3 className="mt-10 mb-0 md:mt-20 md:mb-20 sector-name">
            {page?.data?.name[0]?.text}
          </h3>
        </ScrollAnimate>
        {console.log(reducedProjects)}
        {reducedProjects?.map((array) => {
          return (
            <div
              className={`grid ${
                specialtyData !== undefined
                  ? "grid grid-cols-4 mt-5 md:mt-10"
                  : "grid-cols-1 md:grid-cols-2"
              } mt-5 md:mt-10`}
            >
              {specialtyData !== undefined ? (
                <ScrollAnimate className="col-span-4 mb-2  flex justify-between">
                  <h4>{array[0]?.data?.specialty?.data?.name[0]?.text}</h4>
                  <a href={array[0]?.data?.specialty?.url}>View all</a>
                </ScrollAnimate>
              ) : (
                ""
              )}

              {array.slice(sliceValue)?.map((project, index) => {
                return (
                  <ScrollAnimate className="col-span-2 md:col-span-1 mr-4">
                    <FilteredProject
                      className={`${specialtyData !== undefined ? "" : "mb-5"}`}
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
        {additionalProjects?.length === 0 ? (
          ""
        ) : (
          <ScrollTrigger
            onEnter={() => removeDarkMode()}
            onExit={() => addDarkMode()}
          >
            <div className="additional-project-container">
              <div className="additional-project-header grid grid-cols-4 gap-6">
                <p>Project Name</p>
                <p>Location</p>
                <p>Project Size</p>
                <p>Client</p>
              </div>
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
          </ScrollTrigger>
        )}
      </div>
    </>
  )
}
