import ScrollAnimate from "../components/ScrollAnimate"
import { Button } from "../components/Button"

export default function Services() {
  return (
    <div className="container mx-auto services-page">
      <div className="grid grid-cols-4 mt-40 hero-section">
        <div className="col-span-1 relative item-wrap">
          <a className="menu-panel" href="">
            <div className="inner-menu">
              <img className="pt-48 block" src="/services/Architecture.jpg" />
              <h1 className="absolute">Architecture</h1>
              <p>01</p>
            </div>
          </a>
        </div>
        <div className="col-span-1 relative item-wrap">
          <a className="menu-panel" href="">
            <div className="inner-menu">
              <img className="block mx-auto" src="/services/Interiors.jpg" />
              <h1 className="absolute">Interior Design</h1>
              <p>02</p>
            </div>
          </a>
        </div>
        <div className="col-span-1 relative item-wrap">
          <a className="menu-panel" href="">
            <div className="inner-menu justify-end">
              <img className="block" src="/services/Planning.jpg" />
              <h1 className="absolute">Planning</h1>
              <p>03</p>
            </div>
          </a>
        </div>
        <div className="col-span-1 relative item-wrap">
          <a className="menu-panel" href="">
            <div className="inner-menu justify-center pt-20">
              <img
                className="block mx-auto"
                src="/services/Sustainability.jpg"
              />
              <h1 className="absolute">Sustainability</h1>
              <p>04</p>
            </div>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-60 gap-x-8">
        <div className="grid grid-cols-2 col-span-2 gap-x-8">
          <h3 className="col-start-1 col-span-2">Architecture with Feeling</h3>
          <div className="col-start-1 col-span-1 flex items-baseline justify-between mt-40">
            <p className="col-start-1 col-span-1 small-subhead">ARCHITECTURE</p>
            <p>01</p>
          </div>
          <div className="col-start-2 mt-40">
            <p>
              Architecture is what we do— it’s in our name. As a full-service
              architectural firm, we navigate advanced technologies, project
              requirements, budgets, employee efficiencies, and corporate
              cultures through creative and thoughtful architecture.
            </p>
            <br />
            <p>
              We employ a collaborative design process with cutting-edge
              approaches to envelop clients’ multifaceted needs and create
              elegant options and solutions.
            </p>
            <Button link="/" text="projects" />
          </div>
        </div>
        <img className="col-start-3 col-span-2 w-full" src="/services/1.jpg" />
      </div>
      <div className="grid grid-cols-4 mt-60 gap-x-8">
        <div className="col-start-1 col-span-1">
          <h3>Design and Interiors for People.</h3>
        </div>
        <div className="col-start-2 col-span-1">
          <img src="/services/2.jpg" />
          <img className="mt-8" src="/services/3.jpg" />
        </div>
        <div className="col-start-3 col-span-1 flex items-baseline justify-between">
          <p className="small-subhead">INTERIOR DESIGN</p>
          <p>02</p>
        </div>
        <div className="col-start-4 col-span-1">
          <p>
            VCBO’s Interiors team is an inspired group of professionals
            committed to creating spaces where people can thrive as they live,
            work, learn, and play.
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
            that promote dynamic engagement. In every project, we consider how
            the spaces we occupy affect our moods, attitudes, productivity,
            creativity, and health.
          </p>
          <Button link="/" text="read more" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-60 gap-x-8">
        <div className="col-start-1 col-span-2">
          <img src="/services/4.jpg" />
        </div>
        <div className="col-start-3 col-span-1 flex items-baseline justify-between">
          <p className="small-subhead">PLANNING</p>
          <p>03</p>
        </div>
        <div className="col-start-4 col-span-1">
          <p>
            Whether it’s facility planning, urban planning, or master planning,
            VCBO brings a vast wealth of expertise.
          </p>
          <br />
          <ul className="pl-8">
            <li>
              <p>
                Facility planning ensures the maximization of space, management
                of operating costs, and overall effectiveness and impact of a
                facility.
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
            Our specialized teams work collaboratively with clients, committees,
            and stakeholders to encapsulate and execute the vision of each
            intricate planning project.
          </p>
          <Button link="/" text="learn more" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-60 gap-x-8">
        <div className="col-start-1 col-span-1">
          <img src="/services/5.jpg" />
        </div>
        <div className="col-start-2 col-span-1 flex flex-row flex-wrap">
          <h3>For People, Places, and the Planet to Thrive.</h3>
          <div className="flex items-end justify-between w-full">
            <div>
              <p className="small-subhead">PLANNING</p>
            </div>
            <div>
              <p>04</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-1">
          <p>
            Sustainable architecture is not reserved for futuristic,
            cutting-edge projects— it’s a pillar of the longterm health of our
            everyday communities. Resilient design and execution are important
            to us, and sustainability has become a driving force of VCBO’s
            innovations and practices.
          </p>
          <br />
          <p>
            We embrace design strategies that alleviate potentially harmful
            effects, seek ways to ever improve efficiency, and work with the
            native environment always in mind.
          </p>
          <br />
          <p>
            We take pride in collaborating with clients on ecological design.
          </p>
          <Button link="/" text="featured project" />
        </div>
      </div>
    </div>
  )
}
