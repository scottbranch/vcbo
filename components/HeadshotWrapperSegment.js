import { useState } from "react"
import { Headshot } from "./Headshot"
import ScrollAnimate from "./ScrollAnimate"

export const HeadshotWrapperSegment = (props) => {
  const { headshots } = props

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 col-span-8">
      {headshots.map((item, index) => {
        return (
          <ScrollAnimate>
            <Headshot
              image={item?.headshot?.url}
              name={item?.name[0]?.text}
              title={item?.title[0]?.text}
              className="headshot headshotSegment mr-4"
              showPlus={false}
            />
          </ScrollAnimate>
        )
      })}
    </div>
  )
}
