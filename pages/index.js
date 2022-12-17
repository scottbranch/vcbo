import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/Button"
import ScrollAnimate from "../components/ScrollAnimate"
import { useState, useEffect } from "react"
import { createClient } from "../prismicio"

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("homepage")

  return {
    props: { page }, // Will be passed to the page component as props
  }
}

export default function Home({ page }) {
  const [loaded, setLoaded] = useState(false)

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
  }

  useEffect(() => {
    if (process.browser) {
      document.body.classList.add("homepage")
      document.body.classList.add("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("sector")

      let scrollpos = window.scrollY
      let slider = document.querySelector(".slider-outer")
      let pageWrapper = document.querySelector(".homepage")

      const add_class_on_scroll = () =>
        pageWrapper.classList.remove("dark-mode")
      const remove_class_on_scroll = () =>
        pageWrapper.classList.add("dark-mode")

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY
        if (document.body.classList.contains("homepage")) {
          if (slider.getBoundingClientRect().y + slider.offsetHeight < 0) {
            add_class_on_scroll()
          } else {
            remove_class_on_scroll()
          }
        } else {
          add_class_on_scroll()
        }
      })
    }

    setLoaded(true)
  }, [])

  return (
    <>
      <div className={`line-container container z-0 ${loaded ? "active" : ""}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container mx-auto z-10 relative">
        <div className="grid grid-cols-14 md:grid-cols-8">
          <div className="col-span-6">
            <ScrollAnimate>
              <h1 className="ml-2 md:ml-14 md:mb-10 md:mt-40 mt-20">
                IMPRESSIVE STRUCTURES. BEAUTIFUL OUTCOMES.
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
              <div className="img-container">
                <img src="/carousel/carousel1.jpg" />
              </div>
              <div className="img-container">
                <img src="/carousel/carousel2.jpg" />
              </div>
              <div className="img-container">
                <img src="/carousel/carousel3.jpg" />
              </div>
              <div className="img-container">
                <img src="/carousel/carousel4.jpg" />
              </div>
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
              <h3>VCBO Architecture creates spaces for people to thrive.</h3>
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10">
          <div className="md:col-start-3 md:col-span-1 col-start-2 col-span-3 md:ml-4">
            <ScrollAnimate className="mb-5 md:mb-20">
              <p>
                Since 1973, we have been shaping built environments to support
                human connection, balancing skill and precision with an
                unmatched passion for architecture, design, planning, and
                sustainability.
              </p>
            </ScrollAnimate>
            <ScrollAnimate>
              <Button link="/" text="enter epic spaces" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-40">
          <div className="col-start-3 col-span-1 md:col-start-2 md:col-span-1">
            <ScrollAnimate>
              <img src="/Feat1.jpg" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-2 md:col-span-1">
            <ScrollAnimate>
              <h4>
                Environments That Evoke Possibility—Featured Project Name Here
              </h4>
            </ScrollAnimate>
          </div>
          <div className="col-start-3 col-span-2 md:col-start-2 md:col-span-3">
            <img className="w-full" src="/Feat2.jpg" />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-8">
          <div className="col-span-3 md:col-span-2 col-start-2">
            <ScrollAnimate className="mb-5 md:mb-20">
              <p>
                Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi et bibendum libero. Donec ultricies
                turpis lobortis sapien laoreet, in rutrum mauris pharetra. In
                posuere faucibus est quis tempus.
              </p>
            </ScrollAnimate>
            <ScrollAnimate>
              <Button link="/" text="view project" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="mt-40">
          <ScrollAnimate>
            <img className="col-span-4 w-full" src="/FullImage.jpg" />
          </ScrollAnimate>
        </div>
        <div className="grid grid-cols-4 mt-16">
          <div className="col-start-2 col-span-3 md:col-start-3 md:col-span-2 md:ml-4">
            <ScrollAnimate className="mb-5 md:mb-20">
              <h4>
                We’re curiosity-driven. So we create places for curiosity to
                thrive.
              </h4>
            </ScrollAnimate>
            <ScrollAnimate>
              <Button link="/" text="discover the vcbo story" />
            </ScrollAnimate>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-40">
          <div className="col-start-1 col-span-2">
            <ScrollAnimate>
              <h4>
                Headline for Article. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi et libero.
              </h4>
            </ScrollAnimate>
            <ScrollAnimate className="mb-5 md:mb-20">
              <p className="mt-10 md:mt-80">
                Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi et bibendum libero. Donec ultricies
                turpis lobortis sapien laoreet, in rutrum mauris pharetra. In
                posuere faucibus est quis tempus.
              </p>
            </ScrollAnimate>
            <ScrollAnimate>
              <Button link="/" text="read the full article" />
            </ScrollAnimate>
          </div>
          <div className="col-start-3 col-span-2">
            <ScrollAnimate>
              <img className="w-full" src="/ArticleImage.jpg" />
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </>
  )
}
