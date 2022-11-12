export const Button = (props) => {
  const { link, text } = props
  return (
    <a href={link} className="button-row">
      <div>
        <span className="first">
          {text}{" "}
          <div className="white-arrow">
            <img src="/icons/circle-arrow-white.svg" />
          </div>
        </span>
        <span className="last">
          {text} <img src="/icons/circle-arrow.svg" />
        </span>
      </div>
    </a>
  )
}
