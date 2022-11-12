import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../components/Button"

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
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <h1 className="ml-14 mb-10">
            IMPRESSIVE STRUCTURES. BEAUTIFUL OUTCOMES.
          </h1>
        </div>
      </div>
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
      <div className="grid grid-cols-4 mt-40">
        <div className="col-span-2">
          <h3>VCBO Architecture creates spaces for people to thrive.</h3>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <div className="col-start-3 col-span-1">
          <p>
            Since 1973, we have been shaping built environments to support human
            connection, balancing skill and precision with an unmatched passion
            for architecture, design, planning, and sustainability.
          </p>
          <Button link="/" text="enter epic spaces" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-start-2 col-span-1">
          <img src="/Feat1.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4">
        <div className="col-span-1">
          <h4>
            Environments That Evoke Possibility—Featured Project Name Here
          </h4>
        </div>
        <div className="col-start-2 col-span-3">
          <img className="w-full" src="/Feat2.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8">
        <div className="col-span-2 col-start-2">
          <p>
            Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
            lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
            faucibus est quis tempus.
          </p>
          <Button link="/" text="view project" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <img className="col-span-4 w-full" src="/FullImage.jpg" />
      </div>
      <div className="grid grid-cols-4 mt-16">
        <div className="col-start-3 col-span-2">
          <h4>
            We’re curiosity-driven. So we create places for curiosity to thrive.
          </h4>
          <Button link="/" text="discover the vcbo story" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-start-1 col-span-2">
          <h4>
            Headline for Article. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et libero.
          </h4>
          <p className="mt-80">
            Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
            lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
            faucibus est quis tempus.
          </p>
          <Button link="/" text="read the full article" />
        </div>
        <div className="col-start-3 col-span-2">
          <img className="w-full" src="/ArticleImage.jpg" />
        </div>
      </div>
      <footer></footer>
    </div>
  )
}
