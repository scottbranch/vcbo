import { useEffect } from "react"
import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../prismicio"
import { PrismicRichText } from "@prismicio/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Fetch project content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("project", params.uid)

  return {
    props: { page },
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
  const { page } = props

  const pageData = page.data

  useEffect(() => {
    console.log({ page })
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  })

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
  }

  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-3">
          <ScrollAnimate>
            <h1>{pageData?.headline[0]?.text}</h1>
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-4">
          <ScrollAnimate>
            <img
              className="block w-full mt-24"
              src={pageData?.hero_image.url}
            />
          </ScrollAnimate>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-24 gap-x-8">
        <div className="col-start-3 col-span-2">
          <ScrollAnimate>
            <h3 className="max-w-md">
              {pageData?.text_blurb[0]?.heading[0]?.text}
            </h3>
          </ScrollAnimate>
          <div className="max-w-lg mt-12">
            <ScrollAnimate>
              <PrismicRichText field={pageData?.text_blurb[0]?.paragraph} />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-32 gap-x-8">
        <div className="col-start-1 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">
              {page?.tags.map((tag, index, arr) => {
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
        <div className="col-start-2 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">{pageData?.sq_ft[0]?.text} SQFT</p>
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">{pageData?.client[0]?.text}</p>
          </ScrollAnimate>
        </div>
        <div className="col-start-4 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">
              {pageData?.project_location[0]?.text}
            </p>
          </ScrollAnimate>
        </div>
        <div className="col-start-2 col-span-3 mt-32">
          <ScrollAnimate>
            <img className="w-full" src={pageData?.content_image_1.url} />
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-2 mt-4">
          <ScrollAnimate>
            <Slider {...settings}>
              {pageData?.image_carousel?.map((item) => {
                return <img className="w-full" src={item.image.url} />
              })}
            </Slider>
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-4 mt-40">
          <ScrollAnimate>
            <img className="w-full" src={pageData?.hero_image_2.url} />
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-3 mt-40">
          <ScrollAnimate>
            <h4 className="quote-text">
              <PrismicRichText field={pageData?.quote[0]?.quote_text} />
            </h4>
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-2 mt-40">
          <ScrollAnimate>
            <img className="w-full" src={pageData?.content_image_2.url} />
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-2 mt-8">
          <ScrollAnimate>
            <img className="w-full mb-8" src={pageData?.content_image_3.url} />
          </ScrollAnimate>
          <ScrollAnimate className="concluding-statement">
            <PrismicRichText field={pageData?.concluding_statement} />
          </ScrollAnimate>
        </div>
      </div>
    </div>
  )
}
