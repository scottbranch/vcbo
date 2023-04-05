import { useState } from "react"
import { DownArrow } from "../components/DownArrow"
import Link from "next/link"

export default function TeamDropdown(props) {
  const { items, defaultText, className } = props

  const [showDropdown, setShowDropdown] = useState(false)
  const [currentValue, setCurrentValue] = useState("All Team")

  const handleItemClick = (value) => {
    const formattedTitle = value.replace(/\s+/g, "-").toLowerCase()
    const allSegments = document.querySelectorAll(".team-segment")
    const activeSegment = document.querySelector(`.${formattedTitle}`)

    console.log("thing", formattedTitle)

    if (formattedTitle === "all-team") {
      console.log("yes")
      allSegments.forEach((item) => item.classList.remove("hide-segment"))
      allSegments.forEach((item) => item.classList.add("show-segment"))
    } else {
      allSegments.forEach((item) => item.classList.add("hide-segment"))
      allSegments.forEach((item) => item.classList.remove("show-segment"))

      activeSegment.classList.remove("hide-segment")
      activeSegment.classList.add("show-segment")
    }

    setCurrentValue(value)
    setShowDropdown(false)
  }

  return (
    <div
      className={`filter-container ${className} ${
        showDropdown ? "arrow-up" : ""
      }`}
    >
      <button
        className="filter-select team-select-button w-full text-left flex justify-between items-center pb-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{currentValue}</span>
        <DownArrow />
      </button>
      <div
        className={`filter-dropdown team-filter ${showDropdown ? "open" : ""}`}
      >
        <ul className="specialties">
          <li>
            <Link
              className="sector"
              href="#"
              onClick={() => handleItemClick("All Team")}
            >
              All Team
            </Link>
          </li>
          <li>
            <Link
              className="sector"
              href="#"
              onClick={() => handleItemClick("Principals")}
            >
              Principals
            </Link>
          </li>
          {items?.map((item) => {
            return (
              <li>
                <Link
                  href="#"
                  className="sector"
                  onClick={() =>
                    handleItemClick(item?.primary?.team_segment[0]?.text)
                  }
                >
                  {item?.primary?.team_segment[0]?.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
