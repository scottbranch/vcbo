import ScrollAnimate from "../components/ScrollAnimate"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"
import { Lines } from "../components/Lines"

export default function Services() {
  const [loaded, setLoaded] = useState(false)
  const [activeClass, setActiveClass] = useState("")

  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
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
      <div className="container mx-auto services-page">
        <div
          className={`grid grid-cols-4 mt-20 md:mt-40 hero-section ${activeClass}`}
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
                    className="pt-10 md:pt-48 block"
                    src="/services/Architecture.jpg"
                  />
                  <h1 className="absolute">Architecture</h1>
                  <p>01</p>
                </div>
              </a>
            </ScrollAnimate>
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
                    className="block mx-auto"
                    src="/services/Interiors.jpg"
                  />
                  <h1 className="absolute">Interior Design</h1>
                  <p>02</p>
                </div>
              </a>
            </ScrollAnimate>
          </div>
          <div className="col-span-1 relative item-wrap planning">
            <ScrollAnimate>
              <a
                className="menu-panel"
                onMouseEnter={() => showColumn("planning")}
                onMouseLeave={() => hideColumn()}
                onClick={() => handleClickScroll("planning")}
              >
                <div className="inner-menu justify-end pt-10 md:pt-0">
                  <img className="block" src="/services/Planning.jpg" />
                  <h1 className="absolute">Planning</h1>
                  <p>03</p>
                </div>
              </a>
            </ScrollAnimate>
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
                    className="block mx-auto"
                    src="/services/Sustainability.jpg"
                  />
                  <h1 className="absolute">Sustainability</h1>
                  <p>04</p>
                </div>
              </a>
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60 gap-x-8" id="architecture">
          <div className="grid grid-cols-2 col-span-4 md:col-span-2 gap-x-8">
            <ScrollAnimate>
              <h3 className="col-start-1 col-span-2 mb-10 md:mb-0">
                Architecture with Feeling
              </h3>
            </ScrollAnimate>
            <ScrollAnimate className="block md:hidden col-start-1 col-span-4 w-full">
              <img className="w-full" src="/services/1.jpg" />
            </ScrollAnimate>
            <div className="col-start-1 col-span-1 flex items-baseline justify-between mt-20 md:mt-40">
              <ScrollAnimate>
                <p className="col-start-1 col-span-1 small-subhead">
                  ARCHITECTURE
                </p>
              </ScrollAnimate>
              <ScrollAnimate>
                <p>01</p>
              </ScrollAnimate>
            </div>
            <div className="col-start-1 col-span-2 md:col-span-1 md:col-start-2 mt-20 md:mt-40">
              <ScrollAnimate>
                <p>
                  Architecture is what we do— it’s in our name. As a
                  full-service architectural firm, we navigate advanced
                  technologies, project requirements, budgets, employee
                  efficiencies, and corporate cultures through creative and
                  thoughtful architecture.
                </p>
                <br />
                <p>
                  We employ a collaborative design process with cutting-edge
                  approaches to envelop clients’ multifaceted needs and create
                  elegant options and solutions.
                </p>
                <Button link="/" text="projects" />
              </ScrollAnimate>
            </div>
          </div>
          <ScrollAnimate className="hidden md:block col-start-3 col-span-2 w-full">
            <img
              className="col-start-3 col-span-2 w-full"
              src="/services/1.jpg"
            />
          </ScrollAnimate>
        </div>
        <div className="grid grid-cols-4 mt-60 gap-x-8" id="design">
          <div className="col-start-1 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <h3>Design and Interiors for People.</h3>
            </ScrollAnimate>
          </div>
          <div className="col-start-3 md:col-start-2 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <img src="/services/2.jpg" />
              <img className="mt-8" src="/services/3.jpg" />
            </ScrollAnimate>
          </div>
          <div className="col-start-1 md:col-start-3 col-span-2 md:col-span-1 flex items-baseline justify-between">
            <ScrollAnimate>
              <p className="small-subhead">INTERIOR DESIGN</p>
              <p>02</p>
            </ScrollAnimate>
          </div>
          <div className="col-start-1 md:col-start-4 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <p>
                VCBO’s Interiors team is an inspired group of professionals
                committed to creating spaces where people can thrive as they
                live, work, learn, and play.
              </p>
              <br />
              <p>
                Our team offers a wide range of services for new and renovated
                offices, healthcare spaces, educational environments, religious
                structures, and beyond.
              </p>
              <br />
              <p>
                We work diligently with our clients to design sustainable spaces
                that promote dynamic engagement. In every project, we consider
                how the spaces we occupy affect our moods, attitudes,
                productivity, creativity, and health.
              </p>
              <Button link="/" text="read more" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60 gap-x-8" id="planning">
          <div className="hidden md:block col-start-1 col-span-2">
            <ScrollAnimate>
              <img src="/services/4.jpg" />
            </ScrollAnimate>
          </div>
          <div className="col-start-1 md:col-start-3 col-span-4 md:col-span-1 flex items-baseline justify-between">
            <ScrollAnimate>
              <p className="small-subhead">PLANNING</p>
              <p>03</p>
            </ScrollAnimate>
          </div>
          <div className="block md:hidden col-start-1 col-span-4">
            <ScrollAnimate>
              <img src="/services/4.jpg" />
            </ScrollAnimate>
          </div>
          <div className="col-start-2 md:col-start-4 col-span-3 md:col-span-1 mt-10 md:mt-0">
            <ScrollAnimate>
              <p>
                Whether it’s facility planning, urban planning, or master
                planning, VCBO brings a vast wealth of expertise.
              </p>
              <br />
              <ul className="pl-8">
                <li>
                  <p>
                    Facility planning ensures the maximization of space,
                    management of operating costs, and overall effectiveness and
                    impact of a facility.
                  </p>
                </li>
                <li>
                  <p>
                    Urban planning typically applies to a city, town, or region.
                  </p>
                </li>
                <li>
                  <p>
                    A master plan typically applies to a specific project,
                    development, campus, or district that will include multiple
                    facilities and other elements.
                  </p>
                </li>
              </ul>
              <br />
              <p>
                Our specialized teams work collaboratively with clients,
                committees, and stakeholders to encapsulate and execute the
                vision of each intricate planning project.
              </p>
              <Button link="/" text="learn more" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-60 gap-x-8" id="sustainability">
          <div className="col-start-1 col-span-2 md:col-span-1">
            <ScrollAnimate>
              <img src="/services/5.jpg" />
            </ScrollAnimate>
          </div>
          <div className="col-start-3 md:col-start-2 col-span-2 md:col-span-1 flex flex-row flex-wrap">
            <ScrollAnimate>
              <h3>For People, Places, and the Planet to Thrive.</h3>
            </ScrollAnimate>
            <div className="hidden md:block flex items-end justify-between w-full">
              <div>
                <ScrollAnimate>
                  <p className="small-subhead">PLANNING</p>
                </ScrollAnimate>
              </div>
              <div>
                <ScrollAnimate>
                  <p>04</p>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="col-start-1 md:col-start-3 col-span-4 grid-cols-4 md:col-span-1">
            <div className="block md:hidden col-span-2 mt-10 mb-5">
              <div>
                <ScrollAnimate>
                  <p className="small-subhead">PLANNING</p>
                </ScrollAnimate>
              </div>
              <div>
                <ScrollAnimate>
                  <p>04</p>
                </ScrollAnimate>
              </div>
            </div>
            <ScrollAnimate>
              <p>
                Sustainable architecture is not reserved for futuristic,
                cutting-edge projects— it’s a pillar of the longterm health of
                our everyday communities. Resilient design and execution are
                important to us, and sustainability has become a driving force
                of VCBO’s innovations and practices.
              </p>
              <br />
              <p>
                We embrace design strategies that alleviate potentially harmful
                effects, seek ways to ever improve efficiency, and work with the
                native environment always in mind.
              </p>
              <br />
              <p>
                We take pride in collaborating with clients on ecological
                design.
              </p>
              <Button link="/" text="featured project" />
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </>
  )
}
