import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { createClient } from "../../../prismicio"
import { Article } from "../../../components/Article"
import { Lines } from "../../../components/Lines"
import Head from "next/head"
import FilterResults from "react-filter-search"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const articles = await client.getAllByType("article", {
    orderings: {
      field: "document.data.published_date",
      direction: "desc",
    },
  })
  const etcPage = await client.getByUID("etc_page", "etc-page")
  const footer = await client.getSingle("footer")

  return {
    props: { articles, etcPage, footer },
  }
}

export default function Articles(props) {
  const { articles, etcPage } = props

  const [loaded, setLoaded] = useState(false)
  const [tags, setTags] = useState([])
  const [articleTags, setArticleTags] = useState([])
  const [data, setData] = useState([])
  const [value, setValue] = useState("")

  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
      document.body.classList.remove("sector")
    }

    setLoaded(true)

    const temporaryTags = articles.map((item) => {
      return item.tags.map((tag) => tag)
    })

    const emptyTags = temporaryTags.flat(1)

    const filteredTags = emptyTags.filter(
      (value, index) => emptyTags.indexOf(value) === index
    )

    setArticleTags(emptyTags)

    setTags(filteredTags)

    // articles.map((item) => {
    //   console.log(item.data.published_date)
    // })
    // console.log(articles)
  }, [])

  const filterItem = (item, e) => {
    if (process.browser) {
      const filterClass = document.querySelectorAll(`.${item}`)
      const tagNames = document.querySelectorAll(".tagname")
      const articles = document.querySelectorAll(".article-preview-outer")

      articles.forEach((article) => {
        if (!article.classList.contains(item)) {
          article.classList.remove("show")
          article.classList.add("hide")
        }
      })

      filterClass.forEach((article) => {
        article.classList.add("show")
        article.classList.remove("hide")
      })

      tagNames.forEach((tag) => {
        tag.classList.remove("active")
      })

      e.currentTarget.classList.add("active")
    }
  }

  const resetFilter = () => {
    const articles = document.querySelectorAll(".article-preview-outer")
    const tagNames = document.querySelectorAll(".tagname")

    articles.forEach((article) => {
      article.classList.remove("hide")
    })

    tagNames.forEach((tag) => {
      tag.classList.remove("active")
    })
  }

  const countTags = (tag) => {
    let counter = 0
    for (const article of articleTags) {
      if (article == tag) {
        counter++
      }
    }

    return counter
  }

  const handleSearch = (event) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <>
      <Head>
        <title>{etcPage?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={etcPage?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={etcPage?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={etcPage?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={etcPage?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto mt-10 md:mt-40 articles px-4 md:px-0 mb-40">
        <div className="grid grid-cols-4">
          <ScrollAnimate>
            <h2 onClick={() => resetFilter()} className="etc-title">
              INSIGHTS
            </h2>
            <input
              className="search-filter cols-2 md:cols-4"
              placeholder="SEARCH"
              type="text"
              value={value}
              onChange={handleSearch}
            ></input>
          </ScrollAnimate>
          <ScrollAnimate className="col-start-2 col-span-3 flex flex-wrap justify-around tags mt-20 md:mt-0">
            {tags?.map((item) => (
              <h4
                className={`tagname relative ${
                  item === undefined ? "hidden" : ""
                }`}
                onClick={(e) => filterItem(item, e)}
              >
                {item && item}
                <sup>{item && countTags(item)}</sup>
              </h4>
            ))}
          </ScrollAnimate>
        </div>
        <div className="masonry sm:masonry-sm md:masonry-md mt-10 md:mt-40">
          <FilterResults
            value={value}
            data={articles}
            renderResults={(results) => (
              <>
                {results.map((el) => (
                  <ScrollAnimate
                    className={`break-inside mb-16 mr-4 article-preview-outer ${el.tags.map(
                      (item) => ` ${item} `
                    )}`}
                  >
                    <Article
                      image={el?.data?.hero_image?.url}
                      title={el?.data?.title[0]?.text}
                      date={el?.data?.published_date}
                      author={el?.data?.author[0]?.text}
                      link={`/insights/articles/${el?.uid}`}
                    />
                  </ScrollAnimate>
                ))}
              </>
            )}
          />
        </div>
      </div>
    </>
  )
}
