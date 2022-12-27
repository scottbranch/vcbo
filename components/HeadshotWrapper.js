import { useState } from "react"
import { Headshot } from "./Headshot"
import ScrollAnimate from "./ScrollAnimate"

export const HeadshotWrapper = (props) => {
  const { headshots } = props

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  const toggleClick = (index) => {
    if (index === open) {
      setActive(false)
      setOpen(null)
    } else {
      setActive(true)
      setOpen(index)
    }
  }

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 col-span-8 ${
        active ? "headshot-active" : ""
      }`}
    >
      {headshots.map((item, index) => {
        return (
          <ScrollAnimate>
            <Headshot
              image={item?.headshot?.url}
              name={item?.name[0]?.text}
              title={item?.title[0]?.text}
              paragraph={item?.paragraph}
              active={open === index}
              className={`headshot mr-4 ${
                open === index ? "open-headshot" : ""
              }`}
              onClick={() => toggleClick(index)}
            />
          </ScrollAnimate>
        )
      })}
    </div>
  )
}
