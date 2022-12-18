import { useState } from "react"
import { Headshot } from "./Headshot"
import ScrollAnimate from "./ScrollAnimate"

export const HeadshotWrapper = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  const toggleClick = (index) => {
    setActive(true)
    setOpen(index)
  }

  const headshots = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 col-span-8 ${
        active ? "headshot-active" : ""
      }`}
    >
      {headshots.map((item, index) => {
        return (
          <ScrollAnimate>
            <Headshot
              active={open === index}
              className={`headshot ${open === index ? "open-headshot" : ""}`}
              onClick={() => toggleClick(index)}
            />
          </ScrollAnimate>
        )
      })}
    </div>
  )
}
