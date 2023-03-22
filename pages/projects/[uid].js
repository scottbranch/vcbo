import { useEffect, useState } from "react"
import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BackArrow } from "../../components/BackArrow"
import { Lines } from "../../components/Lines"
import Link from "next/link"
import Head from "next/head"

// Fetch project content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("project", params.uid, {
    fetchLinks: ["sector.name"],
  })
  const projects = await client.getAllByType("project", {
    fetchLinks: ["sector.name"],
  })
  const footer = await client.getSingle("footer")

  return {
    props: { page, projects, footer },
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("project")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Project(props) {
  const { page, projects } = props
  const [filteredProjects, setFilteredProjects] = useState()
  const [projectIndex, setProjectIndex] = useState()
  const [previousProject, setPreviousProject] = useState()
  const [nextProject, setNextProject] = useState()
  const [loaded, setLoaded] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(1)

  const pageData = page?.data

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
      document.body.classList.add("single-project")
      document.body.classList.remove("sector")
      document.body.classList.remove("homepage")
    }

    const currentSector = pageData?.sector?.data?.name[0]?.text
    const filteredProjects = projects.filter(
      (project) => project?.data?.sector?.data?.name[0]?.text === currentSector
    )

    setFilteredProjects(filteredProjects)

    setProjectIndex(
      filteredProjects?.findIndex((project) => project.uid === page?.uid)
    )
    setPreviousProject(filteredProjects[projectIndex - 1])
    setNextProject(filteredProjects[projectIndex + 1])

    setLoaded(true)

    console.log({ pageData })
  }, [projectIndex, nextProject, previousProject])

  const settings = {
    className: "project-carousel",
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (newIndex, slider) => {
      setSliderIndex(newIndex + 1)
    },
  }

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
      <div className="container mx-auto projects-page relative px-4 md:px-0 mb-60">
        <div className="grid grid-cols-4 mt-10 md:mt-20 gap-x-8">
          <div className="breadcrumb flex col-span-4 relative">
            <BackArrow className="mr-2" />
            {pageData?.sector?.url !== undefined ? (
              <Link href={pageData?.sector?.url} className="breadcrumb-sector">
                {pageData?.sector?.data?.name[0]?.text}
                <span>|</span>
              </Link>
            ) : (
              ""
            )}
            <p>{pageData?.name[0]?.text}</p>
          </div>
          <div className="col-start-1 col-span-3 mt-10 md:mt-20">
            <ScrollAnimate>
              <h1>{pageData?.headline[0]?.text}</h1>
            </ScrollAnimate>
          </div>
          <div className="col-start-1 col-span-4">
            <ScrollAnimate>
              <img
                className="block w-full mt-10 md:mt-24 project-full-image"
                src={pageData?.hero_image?.url}
              />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-24 gap-x-8">
          <div className="col-start-2 md:col-start-3 col-span-3 md:col-span-2">
            <ScrollAnimate>
              <h3 className="max-w-md project-name mb-2 md:mb-0">
                {pageData?.text_blurb[0]?.heading[0]?.text}
              </h3>
            </ScrollAnimate>
            <div className="mt-12">
              <ScrollAnimate className="project-text-blurb">
                <PrismicRichText field={pageData?.text_blurb[0]?.paragraph} />
              </ScrollAnimate>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-32">
          <div className="col-start-1 col-span-1 detail-item">
            <ScrollAnimate>
              <p className="small-subhead mb-4">Services</p>
              <p className="small-content">
                {page?.tags?.map((tag, index, arr) => {
                  const returnComma = arr.length - 1 === index ? "" : ","
                  return (
                    <>
                      {tag}
                      {returnComma}
                      <br />
                    </>
                  )
                })}
              </p>
            </ScrollAnimate>
          </div>
          <div className="col-start-2 col-span-1 detail-item ml-4">
            <ScrollAnimate>
              <p className="small-subhead mb-4">Project Size</p>
              <p className="small-content">{pageData?.sq_ft[0]?.text} SqFt</p>
            </ScrollAnimate>
          </div>
          <div className="col-start-3 col-span-1 detail-item ml-4">
            <ScrollAnimate>
              <p className="small-subhead mb-4">Client</p>
              <p className="small-content">{pageData?.client[0]?.text}</p>
            </ScrollAnimate>
          </div>
          <div className="col-start-4 col-span-1 detail-item ml-4">
            <ScrollAnimate>
              <p className="small-subhead mb-4">Location</p>
              <p className="small-content">
                {pageData?.project_location[0]?.text}
              </p>
            </ScrollAnimate>
          </div>
          <div className="col-start-2 col-span-3 mt-32">
            <ScrollAnimate>
              <img className="w-full" src={pageData?.content_image_1?.url} />
            </ScrollAnimate>
          </div>
          <p className="hidden md:flex carousel-count small-subhead col-start-2 col-span-1 items-end justify-items-end">
            <div className="w-full text-right mr-5">
              <span>{`${sliderIndex}`}&nbsp;</span> /{" "}
              {`${pageData?.image_carousel?.length}`}
            </div>
          </p>
          <div className="md:col-start-3 col-span-4 md:col-span-2 mt-4">
            <ScrollAnimate>
              <Slider {...settings}>
                {pageData?.image_carousel?.map((item) => {
                  return <img className="w-full" src={item.image.url} />
                })}
              </Slider>
            </ScrollAnimate>
            <p className="carousel-count small-subhead col-start-2 col-span-1 items-end flex md:hidden justify-items-end">
              <div className="w-full text-right mr-5 mt-2">
                <span>{`${sliderIndex}`}&nbsp;</span> /{" "}
                {`${pageData?.image_carousel?.length}`}
              </div>
            </p>
          </div>
          <div className="col-start-1 col-span-4 mt-40">
            <ScrollAnimate>
              <img
                className="w-full  project-full-image"
                src={pageData?.hero_image_2?.url}
              />
            </ScrollAnimate>
          </div>
          {pageData?.quote[0]?.quote_text.length === 0 ? (
            ""
          ) : (
            <div className="col-start-1 col-span-3 mt-40 md:pl-64">
              <ScrollAnimate>
                <h4 className="quote-text">
                  <PrismicRichText field={pageData?.quote[0]?.quote_text} />
                </h4>
                <h4 className="mt-6 font-medium">
                  —{pageData?.quote[0]?.source[0]?.text}
                </h4>
              </ScrollAnimate>
            </div>
          )}
          {pageData?.awards.length === 0 ? (
            <div></div>
          ) : (
            <div className="awards-container col-start-2 col-span-1 mt-10 md:mt-32">
              <ScrollAnimate>
                <h4 className="underline">Awards</h4>
                <ul>
                  {pageData?.awards.map((award) => {
                    return (
                      <li class="mb-1">
                        <a
                          className="body-large"
                          href={award?.link?.url}
                          target={award?.link?.target}
                        >
                          {award?.link_text[0]?.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </ScrollAnimate>
            </div>
          )}
          {pageData?.publications.length === 0 ? (
            <div></div>
          ) : (
            <div className="awards-container col-start-2 lg:col-start-3 col-span-1 mt-10 md:mt-32">
              <ScrollAnimate>
                <h4 className="underline">Publications</h4>
                <ul>
                  {pageData?.publications.map((publication) => {
                    return (
                      <li class="mb-1">
                        <a
                          className="body-large"
                          href={publication?.link?.url}
                          target={publication?.link?.target}
                        >
                          {publication?.link_text[0]?.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </ScrollAnimate>
            </div>
          )}
          <div className="col-start-3 col-span-2 mt-40">
            <ScrollAnimate>
              <img className="w-full" src={pageData?.content_image_2?.url} />
            </ScrollAnimate>
          </div>
          <div className="col-start-1 col-span-2 mt-8">
            <ScrollAnimate>
              <img
                className="w-full mb-8"
                src={pageData?.content_image_3?.url}
              />
            </ScrollAnimate>
            <ScrollAnimate className="concluding-statement">
              <PrismicRichText field={pageData?.concluding_statement} />
            </ScrollAnimate>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2 md:col-span-1 col-start-3 md:col-start-4 pagination grid-cols-2 grid mt-40  ml-2 md:ml-4">
            {nextProject === undefined && previousProject === undefined ? (
              ""
            ) : (
              <>
                <p className="col-span-2">Projects:</p>
                <p className="col-span-2 large mb-5">
                  {pageData?.sector?.data?.name[0]?.text}
                </p>
              </>
            )}
            {previousProject !== undefined ? (
              <Button
                link={previousProject?.url}
                text="prev"
                theme="dark"
                className="prev"
              />
            ) : (
              ""
            )}
            {nextProject !== undefined ? (
              <Button link={nextProject?.url} text="next" theme="dark" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  )
}
