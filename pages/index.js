import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/Button"
import ScrollAnimate from "../components/ScrollAnimate"
import { useState, useEffect } from "react"
import { createClient } from "../prismicio"
import { Lines } from "../components/Lines"
import ScrollTrigger from "react-scroll-trigger"
import Head from "next/head"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const homepage = await client.getSingle("homepage")
  const footer = await client.getSingle("footer")
  const navigation = await client.getSingle("navigation")

  return {
    props: { homepage, footer, navigation }, // Will be passed to the page component as props
  }
}

export default function Home(props) {
  const [loaded, setLoaded] = useState(false)
  const [firstButtonTheme, setFirstButtonTheme] = useState("dark")

  const { homepage } = props

  const settings = {
    className: "homepage-carousel",
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  }

  const addDarkMode = () => {
    if (process.browser) {
      document.body.classList.add("dark-mode")
    }
    setFirstButtonTheme("dark")
  }

  const removeDarkMode = () => {
    if (process.browser) {
      document.body.classList.remove("dark-mode")
    }
    setFirstButtonTheme("light")
  }

  useEffect(() => {
    document.body.classList.add("homepage")
    document.body.classList.add("dark-mode")

    document.body.classList.remove("sector")
    document.body.classList.remove("projects-page")
    document.body.classList.remove("single-project")

    setLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>{homepage?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={homepage?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={homepage?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={homepage?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={homepage?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto z-10 relative px-4 md:px-0">
        <div className="grid grid-cols-14 md:grid-cols-8">
          <div className="col-span-6">
            <ScrollAnimate>
              <h1 className="ml-2 md:ml-5 mb-10 md:mt-40 mt-20">
                {homepage?.data?.heading[0]?.text}
              </h1>
            </ScrollAnimate>
          </div>
        </div>
        <ScrollAnimate delay={150}>
          <div className="slider-outer">
            <div className="pillar-container">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Slider {...settings}>
              {homepage?.data?.carousel.map((item) => {
                return (
                  <div className="img-container">
                    <img src={item?.image?.url} />
                  </div>
                )
              })}
            </Slider>
            <div className="label-container">
              <div>
                <p>Architecture</p>
              </div>
              <div>
                <p>For People</p>
              </div>
              <div>
                <p>Utah</p>
              </div>
              <div>
                <p>1973</p>
              </div>
            </div>
          </div>
        </ScrollAnimate>
        <div className="grid grid-cols-4 mt-40">
          <div className="col-span-2">
            <ScrollAnimate>
              <h3>{homepage?.data?.text_blurb_1[0]?.title[0]?.text}</h3>
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10">
          <div className="md:col-start-3 md:col-span-1 col-start-2 col-span-3 ml-4">
            <ScrollAnimate className="mb-5 md:mb-20">
              <p>{homepage?.data?.text_blurb_1[0]?.paragraph[0]?.text}</p>
            </ScrollAnimate>
            <ScrollAnimate>
              <Button
                className="homepage-first-button"
                theme={firstButtonTheme}
                link={homepage?.data?.text_blurb_1[0]?.link?.url}
                text={homepage?.data?.text_blurb_1[0]?.link_text[0]?.text}
              />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-40">
          <div className="col-start-3 col-span-1 md:col-start-2 md:col-span-1">
            <ScrollAnimate>
              <img src={homepage?.data?.text_blurb_2[0]?.small_image?.url} />
            </ScrollAnimate>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => removeDarkMode()}
          onExit={() => addDarkMode()}
          className="pb-60 "
        >
          <div className="grid grid-cols-4 mt-4">
            <div className="col-span-2 md:col-span-1 mr-4">
              <ScrollAnimate>
                <h4>{homepage?.data?.text_blurb_2[0]?.title[0]?.text}</h4>
              </ScrollAnimate>
            </div>
            <div className="col-start-3 col-span-2 md:col-start-2 md:col-span-3">
              <img
                className="w-full"
                src={homepage?.data?.text_blurb_2[0]?.large_image?.url}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mt-8">
            <div className="col-span-3 md:col-span-2 col-start-2 md:col-start-2 ml-4">
              <ScrollAnimate className="mb-5 md:mb-20">
                <p>{homepage?.data?.text_blurb_2[0]?.paragraph[0]?.text}</p>
              </ScrollAnimate>
              <ScrollAnimate>
                <Button
                  link={homepage?.data?.text_blurb_2[0]?.link?.url}
                  text={homepage?.data?.text_blurb_2[0]?.link_text[0]?.text}
                />
              </ScrollAnimate>
            </div>
          </div>
          <div className="mt-40">
            <ScrollAnimate>
              <img
                className="col-span-4 w-full homepage-full-image"
                src={homepage?.data?.text_blurb_3[0]?.full_width_image?.url}
              />
            </ScrollAnimate>
          </div>
          <div className="grid grid-cols-4 mt-16">
            <div className="col-start-2 col-span-3 md:col-start-3 md:col-span-2 ml-4">
              <ScrollAnimate className="mb-5 md:mb-20">
                <h4>{homepage?.data?.text_blurb_3[0]?.title[0]?.text}</h4>
              </ScrollAnimate>
              <ScrollAnimate>
                <Button
                  link={homepage?.data?.text_blurb_3[0]?.link?.url}
                  text={homepage?.data?.text_blurb_3[0]?.link_text[0]?.text}
                />
              </ScrollAnimate>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-40">
            <div className="col-start-1 col-span-2">
              <ScrollAnimate>
                <h4>{homepage?.data?.text_blurb_4[0]?.title[0]?.text}</h4>
              </ScrollAnimate>
              <ScrollAnimate className="mb-5 md:mb-20">
                <p className="mt-10 md:mt-80">
                  {homepage?.data?.text_blurb_4[0]?.paragraph[0]?.text}
                </p>
              </ScrollAnimate>
              <ScrollAnimate>
                <Button
                  link={homepage?.data?.text_blurb_4[0]?.link?.url}
                  text={homepage?.data?.text_blurb_4[0]?.link_text[0]?.text}
                />
              </ScrollAnimate>
            </div>
            <div className="col-start-3 col-span-2">
              <ScrollAnimate>
                <img
                  className="w-full"
                  src={homepage?.data?.text_blurb_4[0]?.image?.url}
                />
              </ScrollAnimate>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  )
}
