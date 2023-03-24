import Link from "next/link"

export const Article = (props) => {
  const { link, image, title, date, author } = props
  return (
    <Link href={link} className="article-preview">
      <div class="bg-image" style={{ backgroundImage: `url(${image})` }}></div>
      <p className="font-medium ml-4">{title}</p>
      <p className="ml-4">
        {author ? `By ${author} |` : ""} {date}
      </p>
    </Link>
  )
}
