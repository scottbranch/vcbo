import { Button } from "./Button"

export const Article = (props) => {
  const { link, image, title, date } = props
  return (
    <a href={link}>
      <img className="mb-4" src={image} />
      <p className="font-medium">{title}</p>
      <p>{date}</p>
    </a>
  )
}
