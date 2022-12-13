import { useEffect } from "react"
import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../../prismicio"

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
              src="/projects/test-project/Hero.jpg"
            />
          </ScrollAnimate>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-24 gap-x-8">
        <div className="col-start-3 col-span-2">
          <ScrollAnimate>
            <h3 className="max-w-md">The Salt Lake City Public Library</h3>
          </ScrollAnimate>
          <div className="max-w-lg mt-12">
            <ScrollAnimate>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis libero augue, in ultricies velit tempus vel.
                Suspendisse eu consectetur ligula. Morbi sollicitudin ornare
                felis eget mattis. Nunc ac dolor ac metus malesuada sagittis eu
                et augue. In suscipit fringilla elit sit amet consequat. Cras
                consectetur erat et dui elementum convallis. Nulla viverra lorem
                et augue sollicitudin, sodales pellentesque massa hendrerit.
                Nulla in risus ac nisl bibendum tristique a eget tellus.
                Pellentesque hendrerit ante mattis eros mattis, ut ullamcorper
                erat hendrerit. Nam vitae ornare ligula, vitae posuere sem.
                Aenean tempus augue rutrum, facilisis erat finibus, viverra
                ante.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                venenatis libero augue, in ultricies velit tempus vel.
                Suspendisse eu consectetur ligula. Morbi sollicitudin ornare
                felis eget mattis.
              </p>
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-32 gap-x-8">
        <div className="col-start-1 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">
              ARCHITECTURE,
              <br /> PLANNING
            </p>
          </ScrollAnimate>
        </div>
        <div className="col-start-2 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">240,000 SQFT</p>
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">SALT LAKE CITY</p>
          </ScrollAnimate>
        </div>
        <div className="col-start-4 col-span-1">
          <ScrollAnimate>
            <p className="small-subhead">SALT LAKE CITY, UT</p>
          </ScrollAnimate>
        </div>
        <div className="col-start-2 col-span-3 mt-32">
          <ScrollAnimate>
            <img className="w-full" src="/projects/test-project/Image 01.jpg" />
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-2 mt-4">
          <ScrollAnimate>
            <img
              className="w-full"
              src="/projects/test-project/Rectangle 9.jpg"
            />
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-4 mt-40">
          <ScrollAnimate>
            <img className="w-full" src="/projects/test-project/Image 03.jpg" />
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-3 mt-40">
          <ScrollAnimate>
            <h4>
              “Testimonial Quote. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut venenatis libero augue, in ultricies velit
              tempus vel. Arcu suspendisse eu consect ligula. Sollicitudin
              ornare felis eget mattis.” <br />
              —Name, Position, Organization
            </h4>
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-2 mt-40">
          <ScrollAnimate>
            <img className="w-full" src="/projects/test-project/Image 05.jpg" />
          </ScrollAnimate>
        </div>
        <div className="col-start-1 col-span-2 mt-8">
          <ScrollAnimate>
            <img className="w-full" src="/projects/test-project/Image 06.jpg" />
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-8">
              Concluding statement about the Project. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Or <a href="#">click here</a>{" "}
              to view similar projects.
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </div>
  )
}
