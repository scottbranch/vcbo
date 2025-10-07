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
import Head from "next/head"

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
  const footer = await client.getSingle("footer")
  const navigation = await client.getSingle("navigation")

  return {
    props: {
      page,
      projects,
      dropdownItems,
      additionalProjects,
      footer,
      navigation,
    },
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("sector")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
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

    const placeholderSectorsArray = []
    console.log({ pageData })

    if (pageData?.slices?.[0]?.items) {
      pageData.slices[0].items.map((item) => {
        placeholderSectorsArray.push(item.specialty.slug)
      })
    }

    console.log({ placeholderSectorsArray })

    const sectorTitles = placeholderSectorsArray

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

    console.log("About to set reducedProjects:", reducedProjects)

    if (reducedProjects.length > 1) {
      // Ordering the projects in order that is set by the CMS (hacky but works)
      let rearrangedProjects = []
      reducedProjects.map((item, index) => {
        const indexToMoveTo = item[0].data.specialty.slug
        const indexOfSpecialty = sectorTitles.indexOf(indexToMoveTo)

        // If index is found and valid, use it; otherwise append to end
        if (indexOfSpecialty >= 0) {
          rearrangedProjects[indexOfSpecialty] = item
        } else {
          // Fallback: if specialty not found in sectorTitles, add to end
          rearrangedProjects.push(item)
        }
      })

      // Filter out empty slots and ensure we have a proper array
      rearrangedProjects = rearrangedProjects.filter(
        (item) => item !== undefined
      )

      console.log("Setting rearranged projects:", rearrangedProjects)
      setReducedProjects(rearrangedProjects)
    } else {
      setReducedProjects(reducedProjects)
    }

    setSpecialtyData(reducedProjects[0]?.[0]?.data?.specialty?.data)

    setSliceValue(reducedProjects.length > 1 ? 4 : 0)

    // OLD CODE TO MANUALLY SORT K-12.
    // SHOULDNT NEED IT ANYMORE BUT KEEPING IT COMMENTED JUST IN CASE.

    // if (page?.data?.name[0]?.text === "K-12") {
    //   const sortedArray = []

    //   reducedProjects.map((item) => {
    //     item[0].data.specialty.uid === "elementary"
    //       ? sortedArray.splice(0, 0, item)
    //       : item[0].data.specialty.uid === "middle-junior"
    //       ? sortedArray.splice(1, 0, item)
    //       : item[0].data.specialty.uid === "high"
    //       ? sortedArray.splice(2, 0, item)
    //       : item[0].data.specialty.uid === "specialty"
    //       ? sortedArray.splice(2, 0, item)
    //       : null
    //   })

    //   setReducedProjects(sortedArray)
    // }

    setSortedSectors(
      dropdownItems.sort((a, b) => {
        return a.data.order - b.data.order
      })
    )

    setLoaded(true)
  }, [page])

  return (
    <>
      <Head>
        <title>{pageData?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={pageData?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={pageData?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={pageData?.social_meta_description[0]?.text}
        />
        <meta property="og:image" content={pageData?.social_meta_image?.url} />
      </Head>
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
        {reducedProjects?.map((array, arrayIndex) => {
          return (
            <div
              key={`specialty-${arrayIndex}`}
              className={`grid ${
                specialtyData !== undefined
                  ? "grid grid-cols-4 mt-5 md:mt-10 sector-projects-4"
                  : "grid-cols-1 md:grid-cols-2 sector-projects-2"
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

              {array
                .slice(0, sliceValue || array.length)
                ?.map((project, index) => {
                  return (
                    <ScrollAnimate
                      key={`project-${project.id || index}`}
                      className="col-span-2 md:col-span-1 mr-4"
                    >
                      <FilteredProject
                        className={`${
                          specialtyData !== undefined ? "" : "mb-5"
                        }`}
                        title={project?.data?.name[0]?.text}
                        specialty={
                          project?.data?.specialty?.data?.name[0]?.text
                        }
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
