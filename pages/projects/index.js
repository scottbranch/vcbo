import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect } from "react"

export default function Projects() {
  useEffect(() => {
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  })
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-2">
          <h2>
            Projects
            <sup>
              <small>38</small>
            </sup>
          </h2>
        </div>
        <div className="col-start-4 col-span-1">
          <select>
            <option>ALL Projects</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40 gap-x-4 gap-y-16">
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-11.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-10.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-9.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-8.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-7.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-6.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-5.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-4.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-3.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-2.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image-1.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
        <div className="project-col col-span-1">
          <a href="/projects/test-post">
            <img className="w-full mb-4" src="/projects/Project Image.jpg" />
            <p>The Ptoject Name Goes Here</p>
            <p>Sector</p>
          </a>
        </div>
      </div>
    </div>
  )
}
