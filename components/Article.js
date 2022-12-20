import { Button } from "./Button"
import Link from "next/link"

export const Article = (props) => {
  const { link, image, title, date } = props
  return (
    <Link href={link}>
      <img className="mb-4" src={image} />
      <p className="font-medium">{title}</p>
      <p>{date}</p>
    </Link>
  )
}
