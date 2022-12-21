import { Button } from "./Button"
import Link from "next/link"

export const Article = (props) => {
  const { link, image, title, date } = props
  return (
    <Link href={link}>
      <img className="mb-4" src={image} />
      <p className="font-medium ml-4">{title}</p>
      <p className="ml-4">{date}</p>
    </Link>
  )
}
