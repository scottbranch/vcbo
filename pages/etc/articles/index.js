import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect } from "react"

export default function Articles() {
  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
    }
  })

  return (
    <div className="container mx-auto mt-40 articles">
      <div className="grid grid-cols-4">
        <ScrollAnimate>
          <h2>ETC.</h2>
        </ScrollAnimate>
        <ScrollAnimate className="col-start-2 col-span-3 flex flex-wrap justify-around tags">
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
        </ScrollAnimate>
      </div>
      <div className="masonry sm:masonry-sm md:masonry-md mt-40">
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle3.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle1.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle3.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle2.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle4.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle2.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle1.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle3.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle2.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle1.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle4.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle3.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle2.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle1.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle1.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
        <ScrollAnimate className="break-inside mb-16">
          <a href="/etc/articles/article">
            <img className="mb-4" src="/etc/articles/Rectangle4.jpg" />
            <p className="font-medium">Article Title</p>
            <p>Date</p>
          </a>
        </ScrollAnimate>
      </div>
    </div>
  )
}
