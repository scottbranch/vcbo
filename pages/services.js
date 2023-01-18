import ScrollAnimate from "../components/ScrollAnimate"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"
import { Lines } from "../components/Lines"
import { createClient } from "../prismicio"
import { PrismicRichText } from "@prismicio/react"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const services = await client.getByUID("services_page", "services")

  return {
    props: { services }, // Will be passed to the sectors component as props
  }
}

export default function Services(props) {
  const { services } = props
  const [loaded, setLoaded] = useState(false)
  const [activeClass, setActiveClass] = useState("")

  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
      document.body.classList.remove("sector")
    }

    setLoaded(true)
  }, [])

  const showColumn = (name) => {
    setActiveClass(`${name} hovered`)
  }

  const hideColumn = (name) => {
    setActiveClass("")
  }

  const handleClickScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Lines loaded={loaded} />
      <div className="container mx-auto services-page px-4 md:px-0 mb-60">
        <div
          className={`grid grid-cols-4 mt-10 md:mt-40 hero-section ${activeClass}`}
        >
          <div className="col-span-1 relative item-wrap">
            <ScrollAnimate>
              <a
                className="menu-panel architecture"
                onMouseEnter={() => showColumn("architecture")}
                onMouseLeave={() => hideColumn()}
                onClick={() => handleClickScroll("architecture")}
              >
                <div className="inner-menu">
                  <img
                    className="pt-32 md:pt-48 block"
                    src={services?.data?.architecture[0]?.image?.url}
                  />
                  <h1 className="hidden md:block absolute architecture">
                    Architecture
                  </h1>
                  <p className="hidden md:block">01</p>
                </div>
              </a>
            </ScrollAnimate>
            <h1 className="block md:hidden absolute architecture">
              Architecture
            </h1>
            <p className="block md:hidden">01</p>
          </div>
          <div className="col-span-1 relative item-wrap">
            <ScrollAnimate>
              <a
                className="menu-panel"
                onMouseEnter={() => showColumn("design")}
                onMouseLeave={() => hideColumn()}
                onClick={() => handleClickScroll("design")}
              >
                <div className="inner-menu design">
                  <img
                    className="block mx-auto design-image"
                    src={services?.data?.design[0]?.image_1?.url}
                  />
                  <h1 className="hidden md:block absolute design">
                    Interior Design
                  </h1>
                  <p className="hidden md:block">02</p>
                </div>
              </a>
            </ScrollAnimate>
            <h1 className="block md:hidden absolute design">Interior Design</h1>
            <p className="block md:hidden">02</p>
          </div>
          <div className="col-span-1 relative item-wrap planning">
            <ScrollAnimate>
              <a
                className="menu-panel"
                onMouseEnter={() => showColumn("planning")}
                onMouseLeave={() => hideColumn()}
                onClick={() => handleClickScroll("planning")}
              >
                <div className="inner-menu justify-end pt-10 md:pt-0 pr-4 md:pr-20">
                  <img
                    className="planning-image block"
                    src={services?.data?.planning[0]?.image?.url}
                  />
                  <h1 className="hidden md:block absolute planning">
                    Planning
                  </h1>
                  <p className="hidden md:block">03</p>
                </div>
              </a>
            </ScrollAnimate>
            <h1 className="block md:hidden absolute planning">Planning</h1>
            <p className="block md:hidden">03</p>
          </div>
          <div className="col-span-1 relative item-wrap">
            <ScrollAnimate>
              <a
                className="menu-panel sustainability"
                onMouseEnter={() => showColumn("sustainability")}
                onMouseLeave={() => hideColumn()}
                onClick={() => handleClickScroll("sustainability")}
              >
                <div className="inner-menu justify-center">
                  <img
                    className="block mx-auto sustainability-image"
                    src={services?.data?.sustainability[0]?.image?.url}
                  />
                  <h1 className="hidden md:block absolute sustainability">
                    Sustainability
                  </h1>
                  <p className="hidden md:block ">04</p>
                </div>
              </a>
            </ScrollAnimate>
            <h1 className="block md:hidden absolute sustainability">
              Sustainability
            </h1>
            <p className="block md:hidden ">04</p>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60" id="architecture">
          <div className="grid grid-cols-2 col-span-4 md:col-span-2">
            <ScrollAnimate>
              <h3 className="col-start-1 col-span-2 mb-10 md:mb-0">
                {services?.data?.architecture[0]?.heading[0]?.text}
              </h3>
            </ScrollAnimate>
            <ScrollAnimate className="block md:hidden col-start-1 col-span-4 w-full">
              <img
                className="w-full"
                src={services?.data?.architecture[0]?.image?.url}
              />
            </ScrollAnimate>
            <div className="col-start-1 col-span-1 flex items-baseline justify-between mt-20 md:mt-40 mr-4">
              <ScrollAnimate>
                <p className="col-start-1 col-span-1 small-subhead">
                  {services?.data?.architecture[0]?.sub_heading[0]?.text}
                </p>
              </ScrollAnimate>
              <ScrollAnimate>
                <p>01</p>
              </ScrollAnimate>
            </div>
            <div className="col-start-2 col-span-2 md:col-span-1 md:col-start-2 mt-20 md:mt-40 ml-4 mr-4">
              <ScrollAnimate>
                <PrismicRichText
                  field={services?.data?.architecture[0]?.text}
                />
                <Button
                  link={services?.data?.architecture[0]?.link?.url}
                  text={services?.data?.architecture[0]?.link_text[0]?.text}
                />
              </ScrollAnimate>
            </div>
          </div>
          <ScrollAnimate className="hidden md:block col-start-3 col-span-2 w-full">
            <img
              className="col-start-3 col-span-2 w-full"
              src={services?.data?.architecture[0]?.image?.url}
            />
          </ScrollAnimate>
        </div>
        <div className="grid grid-cols-4 mt-60" id="design">
          <div className="col-start-1 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <h3>{services?.data?.design[0]?.heading[0]?.text}</h3>
            </ScrollAnimate>
          </div>
          <div className="col-start-3 md:col-start-2 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <img src={services?.data?.design[0]?.image_1?.url} />
              <img
                className="mt-8"
                src={services?.data?.design[0]?.image_2?.url}
              />
            </ScrollAnimate>
          </div>
          <ScrollAnimate className="col-start-1 md:col-start-3 col-span-2 md:col-span-1 flex items-baseline justify-between ml-4 mr-4">
            <p className="small-subhead">
              {services?.data?.design[0]?.sub_heading[0]?.text}
            </p>
            <p>02</p>
          </ScrollAnimate>
          <div className="col-start-1 md:col-start-4 col-span-2 md:col-span-1  ml-4 mr-4">
            <ScrollAnimate>
              <PrismicRichText field={services?.data?.design[0]?.text} />
              <Button
                link={services?.data?.design[0]?.link?.url}
                text={services?.data?.design[0]?.link_text[0]?.text}
              />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60" id="planning">
          <div className="hidden md:block col-start-1 col-span-2">
            <ScrollAnimate>
              <img src={services?.data?.planning[0]?.image?.url} />
            </ScrollAnimate>
          </div>
          <div className="col-start-1 md:col-start-3 col-span-4 md:col-span-2">
            <ScrollAnimate>
              <h3 className="hidden md:block col-span-2 mx-4 mb-14">
                {services?.data?.planning[0]?.heading[0]?.text}
              </h3>
            </ScrollAnimate>
            <div className="grid grid-cols-4 md:flex">
              <ScrollAnimate className="col-start-1 md:col-start-3 col-span-3 md:col-span-1 flex items-baseline justify-between ml-4 mr-4 w-2/4 mb-5">
                <p className="small-subhead">
                  {services?.data?.planning[0]?.sub_heading[0]?.text}
                </p>
                <p>03</p>
              </ScrollAnimate>
              <div className="block md:hidden col-start-1 col-span-4">
                <ScrollAnimate>
                  <img src={services?.data?.planning[0]?.image?.url} />
                </ScrollAnimate>
              </div>
              <div className="col-start-2 md:col-start-4 col-span-3 md:col-span-1 mt-10 md:mt-0 ml-4 mr-4 md:w-2/4">
                <ScrollAnimate>
                  <h3 className="block md:hidden col-span-3 mb-8">
                    {services?.data?.planning[0]?.heading[0]?.text}
                  </h3>
                  <PrismicRichText field={services?.data?.planning[0]?.text} />
                  <Button
                    link={services?.data?.planning[0]?.link?.url}
                    text={services?.data?.planning[0]?.link_text[0]?.text}
                  />
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60" id="sustainability">
          <div className="col-start-1 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <img src={services?.data?.sustainability[0]?.image?.url} />
            </ScrollAnimate>
          </div>
          <div className="col-start-3 md:col-start-2 col-span-2 md:col-span-1 flex flex-row flex-wrap ml-4 mr-4">
            <ScrollAnimate>
              <h3>{services?.data?.sustainability[0]?.heading[0]?.text}</h3>
            </ScrollAnimate>
            <ScrollAnimate className="hidden md:flex col-start-1 items-center justify-between col-span-1 ml-4 mr-4 w-full">
              <p className="small-subhead">
                {services?.data?.sustainability[0]?.sub_heading[0]?.text}
              </p>
              <p>04</p>
            </ScrollAnimate>
          </div>
          <div className="grid col-start-1 md:col-start-3 col-span-4 grid-cols-4 md:col-span-2">
            <div className="block md:hidden col-span-2 mt-10 mb-5">
              <div>
                <ScrollAnimate>
                  <p className="small-subhead">
                    {services?.data?.sustainability[0]?.sub_heading[0]?.text}
                  </p>
                </ScrollAnimate>
              </div>
              <div>
                <ScrollAnimate>
                  <p>04</p>
                </ScrollAnimate>
              </div>
            </div>
            <ScrollAnimate className="mt-10 ml-4 mr-4 col-span-2">
              <PrismicRichText
                field={services?.data?.sustainability[0]?.text}
              />
              <Button
                link={services?.data?.sustainability[0]?.link?.url}
                text={services?.data?.sustainability[0]?.link_text[0]?.text}
              />
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </>
  )
}
