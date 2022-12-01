import { Arrow } from "./Arrow"

export const Button = (props) => {
  const { link, text, theme } = props
  return (
    <a href={link} className={`button-row ${theme === "dark" ? "dark" : ""}`}>
      <div>
        <span className="first">
          <span>{text} </span>
          <div className="white-arrow">
            <Arrow theme={`${theme === "dark" ? "" : "dark"}`} />
          </div>
        </span>
        <span className="last">
          <span>{text}</span>{" "}
          <Arrow theme={`${theme === "dark" ? "dark" : ""}`} />
        </span>
      </div>
    </a>
  )
}
