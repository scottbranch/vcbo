import { PrismicRichText } from "@prismicio/react"
import { useState } from "react"

export const Headshot = (props) => {
  const { image, name, title, paragraph, className, onClick, active } = props

  return (
    <div className={className} onClick={onClick}>
      <img src={image} />
      <div className="headshot-top-content flex justify-between items-center">
        <span>
          <p className="font-medium mt-4">{name}</p>
          <p>{title}</p>
        </span>
        <p>{active ? "-" : "+"}</p>
      </div>
      <div className={`headshot-content`}>
        <PrismicRichText field={paragraph} />
      </div>
    </div>
  )
}
