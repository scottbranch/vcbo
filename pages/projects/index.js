import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { Project } from "../../components/Project"
import { DownArrow } from "../../components/DownArrow"
import Link from "next/link"
import { createClient } from "../../prismicio"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getAllByType("sector", {
    fetchLinks: ["specialty.name"],
  })

  return {
    props: { page }, // Will be passed to the page component as props
  }
}

export default function Projects(props) {
  const { page } = props

  const [theme, setTheme] = useState("grid")
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    console.log({ page })
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  })
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-4 md:col-span-2">
          <ScrollAnimate>
            <h2>
              Projects
              <sup>
                <small>38</small>
              </sup>
            </h2>
          </ScrollAnimate>
        </div>
        <div className="flex items-center col-start-1 md:col-start-3 col-span-8 gap-4">
          <div className="filter-container">
            <button
              className="filter-select"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>Project Types...</span>
              <DownArrow />
            </button>
            <div className={`filter-dropdown ${showDropdown ? "open" : ""}`}>
              <ul>
                {page.map((item) => {
                  return (
                    <li>
                      <Link className="sector" href="/">
                        {item?.data?.name[0]?.text}
                      </Link>
                      {item?.data?.slices[0]?.items?.length > 0 ? (
                        <ul className="specialties">
                          {item?.data?.slices[0].items.map((item) => (
                            <li>
                              <Link href="/">
                                {item?.specialty?.data?.name[0]?.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
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
        className={`grid mx-5 md:mx-0 ${
          theme === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
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
