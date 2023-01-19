import { Button } from "./Button"
import Link from "next/link"

export const FilteredProject = (props) => {
  const { title, specialty, image, url, className } = props
  return (
    <div className={`filtered-project project-col col-span-2 ${className}`}>
      <Link href={url} className="project-wrapper">
        <img className="w-full" mb-4 src={image} />
        <div className="flex justify-between my-5 ml-4">
          <div>
            <p className="mb-2 md:mb-0 project-name">{title}</p>
            <p className="project-specialty">{specialty}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
