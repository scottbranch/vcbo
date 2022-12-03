import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"

export default function Projects(props) {
  const [theme, setTheme] = useState("grid")

  useEffect(() => {
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  })
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-2">
          <ScrollAnimate>
            <h2>
              Projects
              <sup>
                <small>38</small>
              </sup>
            </h2>
          </ScrollAnimate>
        </div>
        <div className="flex items-center col-start-3 col-span-8 gap-4">
          <select>
            <option>ALL Projects</option>
          </select>
          <button
            className={`filter-button ${theme === "grid" ? "active" : ""}`}
            onClick={() => setTheme("grid")}
          >
            Grid
          </button>
          <button
            className={`filter-button ${theme === "list" ? "active" : ""}`}
            onClick={() => setTheme("list")}
          >
            List
          </button>
        </div>
      </div>
      <div
        className={`grid grid-cols-${
          theme === "grid" ? "2" : "1"
        } mt-40 gap-x-4 gap-y-16`}
      >
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
        <ScrollAnimate>
          <Project theme={theme} />
        </ScrollAnimate>
      </div>
    </div>
  )
}
