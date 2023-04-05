import { useState } from "react"
import { DownArrow } from "../components/DownArrow"
import Link from "next/link"

export default function SelectDropdown(props) {
  const { items, defaultText, className } = props

  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div
      className={`filter-container mr-2 md:mr-2 md:ml-4 ${className} ${
        showDropdown ? "arrow-up" : ""
      }`}
    >
      <button
        className="filter-select"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{defaultText}</span>
        <DownArrow />
      </button>
      <div className={`filter-dropdown ${showDropdown ? "open" : ""}`}>
        <ul>
          <li>
            <Link className="sector" href="/projects">
              All Projects
            </Link>
          </li>
          {items?.map((item) => {
            return (
              <li>
                <Link
                  className="sector"
                  href={item?.url}
                  onClick={() => setShowDropdown(false)}
                >
                  {item?.data?.name[0]?.text}
                </Link>
                {item?.data?.slices[0]?.items?.length > 0 ? (
                  <ul className="specialties">
                    {item?.data?.slices[0].items.map((item) => (
                      <li>
                        <Link
                          href={item?.specialty?.url}
                          onClick={() => setShowDropdown(false)}
                        >
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
  )
}
