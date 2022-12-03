import { Button } from "./Button"

export const Project = (props) => {
  const { theme } = props
  return (
    <div className="project-col col-span-1">
      <a
        href="/projects/test-post"
        className={`project-wrapper${theme === "list" ? "-list" : ""}`}
      >
        <img
          className={`w-full ${theme === "list" ? "hidden" : ""}`}
          mb-4
          src="/projects/Project Image-11.jpg"
        />
        <div className="flex justify-between my-5">
          <h4>K-12</h4>
          <img
            className={`list-image w-full ${
              theme === "grid" ? "hidden" : "max-w-xs"
            }`}
            src="/projects/Project Image-11.jpg"
          />
          <div className={`${theme === "list" ? "flex w-6/12 " : "w-80"}`}>
            <p className={`${theme === "list" ? "mr-20" : ""}`}>
              Small blurb about what types of projects you’ll find in this
              sector.
            </p>
            <Button
              className={`${theme === "grid" ? "mt-10" : ""}`}
              theme="dark"
              link="/"
              text="All K-12 Projects"
            />
          </div>
        </div>
      </a>
    </div>
  )
}
