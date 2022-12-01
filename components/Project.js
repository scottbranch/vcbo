import { Button } from "./Button"

export const Project = (props) => {
  return (
    <div className="project-col col-span-1">
      <a href="/projects/test-post">
        <img className="w-full mb-4" src="/projects/Project Image-11.jpg" />
        <div className="flex justify-between mx-5">
          <h4>K-12</h4>
          <div className="w-80">
            <p>
              Small blurb about what types of projects you’ll find in this
              sector.
            </p>
            <Button theme="dark" link="/" text="All K-12 Projects" />
          </div>
        </div>
      </a>
    </div>
  )
}
