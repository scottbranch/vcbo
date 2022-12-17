import { Arrow } from "./Arrow"

export const Button = (props) => {
  const { className, link, text, theme, onClick } = props
  return (
    <a
      href={link}
      className={`button-row ${theme === "dark" ? "dark" : ""} ${className}`}
      onClick={onClick}
    >
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
