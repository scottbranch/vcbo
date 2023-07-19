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
import { useRouter } from "next/router"

// Fetch specialty content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("specialty", params.uid)
  const projects = await client.getAllByType("project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })
  const dropdownItems = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name", "sector.name"],
  })
  const footer = await client.getSingle("footer")

  const additionalProjects = await client.getAllByType("additional_project", {
    fetchLinks: ["sector.name", "specialty.name"],
  })

  return {
    props: {
      page,
      projects,
      dropdownItems,
      additionalProjects,
      footer,
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
  const router = useRouter()
  const { page, projects, dropdownItems, additionalProjects } = props

  const [projectResults, setProjectResults] = useState()
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

  if (router.isFallback) <p>Data is loading</p>

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("sector")
      document.body.classList.add("dark-mode")

      document.body.classList.remove("homepage")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
    }

    const filteredProjects = projects.filter(
      (project) => project.data.specialty.uid === page.uid
    )

    setProjectResults(filteredProjects)

    setLoaded(true)
  }, [projects])

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
      <div className="container mx-auto projects-page px-4 md:px-0 mb-60">
        <div className="breadcrumb flex col-span-4 relative mb-10 md:mt-20 mt-10">
          <BackArrow className="mr-2" />
          <Link href="/projects">Back</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10 md:mt-20 gap-x-8 md:gap-0">
          <div className="col-start-1 col-span-4 md:col-span-2">
            <ScrollAnimate className="mb-10 md:mb-0">
              <h2 className="uppercase projects-header">
                Projects
                <sup>
                  <small>{projectResults?.length}</small>
                </sup>
              </h2>
            </ScrollAnimate>
          </div>
          <div className="grid items-center col-start-1 md:col-start-4 col-span-2 md:col-span-1 gap-4">
            <SelectDropdown
              items={dropdownItems}
              defaultText={page?.data?.name[0]?.text}
            />
          </div>
        </div>
        <ScrollAnimate>
          <h3 className="mt-10 mb-5 md:mt-20 md:mb-20 sector-name">
            {page?.data?.name[0]?.text},{" "}
            {projectResults?.length > 0
              ? projectResults[0]?.data?.sector?.data?.name[0]?.text
              : ""}
          </h3>
        </ScrollAnimate>
        <div className="grid grid-cols-2">
          {projectResults?.map((project) => {
            return (
              <ScrollAnimate className="mr-4">
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
        {additionalProjects?.length === 0 ? (
          ""
        ) : (
          <ScrollTrigger
            onEnter={() => removeDarkMode()}
            onExit={() => addDarkMode()}
          >
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
          </ScrollTrigger>
        )}
      </div>
    </>
  )
}
