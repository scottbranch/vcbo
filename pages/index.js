import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import ScrollAnimate from "../components/scrollAnimate"

export default function Home() {
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

  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <ScrollAnimate>
            <h1 className="ml-14 mb-10 mt-40">
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
        <div className="col-start-3 col-span-1">
          <ScrollAnimate>
            <p>
              Since 1973, we have been shaping built environments to support
              human connection, balancing skill and precision with an unmatched
              passion for architecture, design, planning, and sustainability.
            </p>
          </ScrollAnimate>
          <ScrollAnimate>
            <Button link="/" text="enter epic spaces" />
          </ScrollAnimate>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-start-2 col-span-1">
          <ScrollAnimate>
            <img src="/Feat1.jpg" />
          </ScrollAnimate>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4">
        <div className="col-span-1">
          <ScrollAnimate>
            <h4>
              Environments That Evoke Possibility—Featured Project Name Here
            </h4>
          </ScrollAnimate>
        </div>
        <div className="col-start-2 col-span-3">
          <img className="w-full" src="/Feat2.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8">
        <div className="col-span-2 col-start-2">
          <ScrollAnimate>
            <p>
              Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
              lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
              faucibus est quis tempus.
            </p>
          </ScrollAnimate>
          <ScrollAnimate>
            <Button link="/" text="view project" />
          </ScrollAnimate>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <ScrollAnimate>
          <img className="col-span-4 w-full" src="/FullImage.jpg" />
        </ScrollAnimate>
      </div>
      <div className="grid grid-cols-4 mt-16">
        <div className="col-start-3 col-span-2">
          <ScrollAnimate>
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
          <ScrollAnimate>
            <p className="mt-80">
              Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
              lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
              faucibus est quis tempus.
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
      <Footer />
    </div>
  )
}
