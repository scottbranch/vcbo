import { Button } from "./Button"
import Image from "next/image"

export const Project = (props) => {
  const { theme, image, sector, blurb, sectorLink, projectLink } = props
  return (
    <div className="project-col col-span-2 md:col-span-1">
      <a
        href={projectLink}
        className={`project-wrapper${theme === "list" ? "-list" : ""}`}
      >
        <img
          className={`w-full ${theme === "list" ? "hidden" : ""}`}
          src={image}
        />
        <div className="flex justify-between my-5">
          <h4>{sector}</h4>
          <img
            className={`list-image w-full ${
              theme === "grid" ? "hidden" : "max-w-xs"
            }`}
            src={image}
          />
          <div className={`${theme === "list" ? "flex w-6/12 " : "w-80"}`}>
            <p className={`${theme === "list" ? "mr-20" : ""}`}>{blurb}</p>
            <Button
              className={`${theme === "grid" ? "mt-10" : ""}`}
              theme="dark"
              link={sectorLink}
              text={`All ${sector} Projects`}
            />
          </div>
        </div>
      </a>
    </div>
  )
}
