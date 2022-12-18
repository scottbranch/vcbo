import { useState } from "react"

export const Headshot = (props) => {
  const { className, onClick, active } = props

  return (
    <div className={className} onClick={onClick}>
      <img src="about-headshot.png" />
      <div className="headshot-top-content flex justify-between items-center">
        <span>
          <p className="font-medium mt-4">Niels Valentiner, AIA</p>
          <p>Principal</p>
        </span>
        <p>{active ? "-" : "+"}</p>
      </div>
      <div className={`headshot-content`}>
        <p>
          Niels Valentiner is the Founder and "V" of VCBO Architecture. His
          guidance has developed VCBO into the dynamic firm it is today,
          recognized for its regional, national, and international impact.
        </p>
        <p>
          Niels has a history of designing projects for corporate office
          complexes, civic and state institutional buildings, universities,
          sports and arena facilities, medical facilities, and significant
          religious buildings in the United States and abroad in Central
          America, Europe, and Asia. Niels' corporate social responsibility
          extends to the co-founding of CHOICE Humanitarian, as chairman and
          board member, providing village development leadership in rural areas
          of Guatemala,
        </p>
        <p>Bolivia, Mexico, Nepal, and Kenya. nvalentiner@vcbo.com</p>
      </div>
    </div>
  )
}
