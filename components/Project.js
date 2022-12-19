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
        <div className="grid grid-cols-4 md:flex justify-between my-5 items-center md:items-start">
          <h4>{sector}</h4>
          <img
            className={`hidden md:block list-image w-full ${
              theme === "grid" ? "hidden" : "max-w-xs"
            }`}
            src={image}
          />
          <div
            className={`${
              theme === "list"
                ? "grid col-span-2 col-start-3 md:flex w-auto md:w-6/12 "
                : "col-span-2 col-start-3"
            }`}
          >
            <p
              className={`${
                theme === "list" ? "mb-4 md:mb-0 mr-0 md:mr-20" : ""
              }`}
            >
              {blurb}
            </p>
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
