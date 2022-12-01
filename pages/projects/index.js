import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect } from "react"
import { Project } from "../../components/Project"

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
        <div className="flex items-center col-start-3 col-span-8 gap-4">
          <select>
            <option>ALL Projects</option>
          </select>
          <button className="filter-button active">Grid</button>
          <button className="filter-button">List</button>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-40 gap-x-4 gap-y-16">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
