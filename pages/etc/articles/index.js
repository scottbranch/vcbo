import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { createClient } from "../../../prismicio"
import { Article } from "../../../components/Article"
import { Lines } from "../../../components/Lines"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const articles = await client.getAllByType("article")

  return {
    props: { articles },
  }
}

export default function Articles(props) {
  const { articles } = props

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log({ articles })
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("sector")
    }

    setLoaded(true)
  }, [])

  return (
    <>
      <Lines loaded={loaded} />
      <div className="container mx-auto mt-10 md:mt-40 articles">
        <div className="grid grid-cols-4">
          <ScrollAnimate>
            <h2>ETC.</h2>
          </ScrollAnimate>
          {/* <ScrollAnimate className="col-start-2 col-span-3 flex flex-wrap justify-around tags">
          <h4>
            Culture <sup>5</sup>
          </h4>
          <h4>
            Careers <sup>10</sup>
          </h4>
          <h4>
            Corporate Resposibilit <sup>12</sup>
          </h4>
          <h4>
            Another Tag <sup>5</sup>
          </h4>
          <h4>
            Sustainability <sup>3</sup>
          </h4>
          <h4>
            Awards <sup>2</sup>
          </h4>
          <h4>
            Another Tag <sup>8</sup>
          </h4>
          <h4>
            Another Tag <sup>20</sup>
          </h4>
        </ScrollAnimate> */}
        </div>
        <div className="masonry sm:masonry-sm md:masonry-md mt-10 md:mt-40">
          {articles?.map((article) => {
            const date = new Date(article?.first_publication_date)

            return (
              <ScrollAnimate className="break-inside mb-16">
                <Article
                  image={article?.data?.hero_image?.url}
                  title={article?.data?.title[0]?.text}
                  date={`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}
                  link={`/etc/articles/${article?.uid}`}
                />
              </ScrollAnimate>
            )
          })}
        </div>
      </div>
    </>
  )
}
