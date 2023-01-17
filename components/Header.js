import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header = (props) => {
  const {} = props

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState()
  const [scrollPosition, setInitialScrollPosition] = useState()

  const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    if (process.browser) {
      var lastScrollTop = 0
      // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
      setInitialScrollPosition(
        window.pageYOffset || document.documentElement.scrollTop
      )
      console.log({ scrollPosition })
      window.addEventListener(
        "scroll",
        function () {
          // or window.addEventListener("scroll"....
          var st = window.pageYOffset || document.documentElement.scrollTop
          setInitialScrollPosition(st)
          if (st > lastScrollTop) {
            setScrollDirection("down")
          } else {
            setScrollDirection("up")
          }
          lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        },
        false
      )
    }
  }, [])

  const hideMobileMenu = () => {
    if (process.browser) {
    }
  }

  return (
    <header
      className={`z-50 pb-5 ${menuOpen ? "mobile-menu-active" : ""} ${
        scrollDirection === "down" ? "scroll-up" : "scroll-down"
      } ${
        scrollPosition === undefined || scrollPosition === 0
          ? "remove-bg"
          : "show-bg"
      }`}
    >
      <div className="container mx-auto ">
        <div className="mobile-inner grid grid-cols-8 pt-10 items-center md:items-end">
          <Link href="/" className="col-start-1 col-span-4 ml-4 md:ml-0">
            <svg
              className={`logo ${
                scrollDirection === "down" ? "scroll-up" : ""
              }`}
              width="160"
              height="47"
              viewBox="0 0 160 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M139.397 3.48541C127.287 3.48541 118.794 12.3338 118.794 25.2427C118.794 38.1516 127.287 47 139.397 47C151.507 47 160 38.1516 160 25.2427C160 12.3338 151.443 3.48541 139.397 3.48541ZM139.397 42.077C130.445 42.077 124.651 35.4877 124.651 25.2427C124.651 14.9978 130.445 8.40838 139.397 8.40838C148.349 8.40838 154.079 14.9978 154.079 25.2427C154.079 35.4877 148.355 42.077 139.397 42.077Z"
                fill="#0A0707"
              />
              <path
                d="M106.916 24.4447C111.328 23.6467 114.748 20.3197 114.748 15.4613C114.748 8.80736 110.533 4.28339 100.263 4.28339H82.6095V46.202H100.989C110.667 46.202 115.932 41.9421 115.932 34.6896C115.932 28.6987 111.984 25.3072 106.916 24.4447ZM88.142 9.00686H100.467C106.458 9.00686 109.024 11.7353 109.024 15.7253C109.024 19.7153 106.458 22.3793 100.467 22.3793H88.142V9.01272V9.00686ZM100.861 41.4785H88.142V26.8387H100.861C107.05 26.8387 110.278 29.6317 110.278 34.2261C110.278 38.8205 107.05 41.4785 100.861 41.4785Z"
                fill="#0A0707"
              />
              <path
                d="M33.7695 4.28928L20.1444 39.5481H19.8774L5.85755 4.28928H0L16.6554 46.202H22.8439L39.5632 4.28928H33.7695Z"
                fill="#0A0707"
              />
              <path
                d="M58.4594 42.077C50.0359 42.077 43.9752 35.5581 43.9752 25.2427C43.9752 14.9274 50.0301 8.40838 58.4594 8.40838C66.4417 8.40838 71.1556 13.4428 72.1251 20.3843H77.6866C76.4791 10.2978 69.8378 3.48541 58.4594 3.48541C47.081 3.48541 38.1176 12.3338 38.1176 25.2427C38.1176 38.1516 47.0056 47 58.4594 47C69.9133 47 77.0248 39.6126 77.8143 28.8337H72.2645C71.7071 36.4206 66.9178 42.0712 58.4594 42.0712V42.077Z"
                fill="#0A0707"
              />
              <path
                d="M156.563 6.98252C158.45 6.98252 160 5.50974 160 3.49126C160 1.47278 158.45 0 156.563 0C154.677 0 153.144 1.47278 153.144 3.49126C153.144 5.50974 154.694 6.98252 156.563 6.98252ZM156.563 0.586766C158.131 0.586766 159.379 1.78964 159.379 3.49126C159.379 5.19288 158.131 6.39575 156.563 6.39575C154.996 6.39575 153.765 5.17528 153.765 3.49126C153.765 1.80724 155.013 0.586766 156.563 0.586766Z"
                fill="#0A0707"
              />
              <path
                d="M156.035 4.07804H156.621C156.999 4.07804 157.167 4.213 157.19 4.6296C157.231 5.0286 157.266 5.20463 157.359 5.29852H158.322C158.189 5.16356 158.171 4.9934 158.131 4.45944C158.09 4.01937 157.864 3.80813 157.469 3.73185C157.922 3.65557 158.264 3.30938 158.264 2.77542C158.264 2.0713 157.794 1.63123 156.865 1.63123H155.106V5.29852H156.029V4.07804H156.035ZM156.035 2.39989H156.639C157.074 2.39989 157.3 2.55245 157.3 2.87517C157.3 3.22136 157.074 3.35045 156.639 3.35045H156.035V2.39402V2.39989Z"
                fill="#0A0707"
              />
            </svg>
          </Link>
          <Link
            href="/projects"
            className={`${
              router.pathname.startsWith("/projects") ? "active" : ""
            } hidden md:block col-start-5 col-span-1`}
          >
            <span>Projects</span>
          </Link>
          <Link
            href="/services"
            className={`hidden md:block col-start-6 col-span-1 ${
              router.pathname.startsWith("/services") ? "active" : ""
            }`}
          >
            <span>Services</span>
          </Link>
          <Link
            href="/about"
            className={`hidden md:block col-start-7 col-span-1 ${
              router.pathname.startsWith("/about") ? "active" : ""
            }`}
          >
            <span>About</span>
          </Link>
          <Link
            href="/etc/articles"
            className={`hidden md:block col-start-8 col-span-1 ${
              router.pathname.startsWith("/etc") ? "active" : ""
            }`}
          >
            <span>Etc.</span>
          </Link>

          <button
            className={`mobile-menu-button md:hidden block col-start-7 col-span-2 ${
              scrollDirection === "down" ? "scroll-up" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu +
          </button>
          <div
            className={`mobile-overlay flex flex-col justify-between`}
            id="mobile-overlay"
          >
            <div className="grid grid-cols-4 overlay-header">
              <Link
                href="/"
                className="col-start-1 col-span-3 mt-8"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="overlay-logo"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                  viewBox="0 0 170 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M139.397 3.48541C127.287 3.48541 118.794 12.3338 118.794 25.2427C118.794 38.1516 127.287 47 139.397 47C151.507 47 160 38.1516 160 25.2427C160 12.3338 151.443 3.48541 139.397 3.48541ZM139.397 42.077C130.445 42.077 124.651 35.4877 124.651 25.2427C124.651 14.9978 130.445 8.40838 139.397 8.40838C148.349 8.40838 154.079 14.9978 154.079 25.2427C154.079 35.4877 148.355 42.077 139.397 42.077Z"
                    fill="#0A0707"
                  />
                  <path
                    d="M106.916 24.4447C111.328 23.6467 114.748 20.3197 114.748 15.4613C114.748 8.80736 110.533 4.28339 100.263 4.28339H82.6095V46.202H100.989C110.667 46.202 115.932 41.9421 115.932 34.6896C115.932 28.6987 111.984 25.3072 106.916 24.4447ZM88.142 9.00686H100.467C106.458 9.00686 109.024 11.7353 109.024 15.7253C109.024 19.7153 106.458 22.3793 100.467 22.3793H88.142V9.01272V9.00686ZM100.861 41.4785H88.142V26.8387H100.861C107.05 26.8387 110.278 29.6317 110.278 34.2261C110.278 38.8205 107.05 41.4785 100.861 41.4785Z"
                    fill="#0A0707"
                  />
                  <path
                    d="M33.7695 4.28928L20.1444 39.5481H19.8774L5.85755 4.28928H0L16.6554 46.202H22.8439L39.5632 4.28928H33.7695Z"
                    fill="#0A0707"
                  />
                  <path
                    d="M58.4594 42.077C50.0359 42.077 43.9752 35.5581 43.9752 25.2427C43.9752 14.9274 50.0301 8.40838 58.4594 8.40838C66.4417 8.40838 71.1556 13.4428 72.1251 20.3843H77.6866C76.4791 10.2978 69.8378 3.48541 58.4594 3.48541C47.081 3.48541 38.1176 12.3338 38.1176 25.2427C38.1176 38.1516 47.0056 47 58.4594 47C69.9133 47 77.0248 39.6126 77.8143 28.8337H72.2645C71.7071 36.4206 66.9178 42.0712 58.4594 42.0712V42.077Z"
                    fill="#0A0707"
                  />
                  <path
                    d="M156.563 6.98252C158.45 6.98252 160 5.50974 160 3.49126C160 1.47278 158.45 0 156.563 0C154.677 0 153.144 1.47278 153.144 3.49126C153.144 5.50974 154.694 6.98252 156.563 6.98252ZM156.563 0.586766C158.131 0.586766 159.379 1.78964 159.379 3.49126C159.379 5.19288 158.131 6.39575 156.563 6.39575C154.996 6.39575 153.765 5.17528 153.765 3.49126C153.765 1.80724 155.013 0.586766 156.563 0.586766Z"
                    fill="#0A0707"
                  />
                  <path
                    d="M156.035 4.07804H156.621C156.999 4.07804 157.167 4.213 157.19 4.6296C157.231 5.0286 157.266 5.20463 157.359 5.29852H158.322C158.189 5.16356 158.171 4.9934 158.131 4.45944C158.09 4.01937 157.864 3.80813 157.469 3.73185C157.922 3.65557 158.264 3.30938 158.264 2.77542C158.264 2.0713 157.794 1.63123 156.865 1.63123H155.106V5.29852H156.029V4.07804H156.035ZM156.035 2.39989H156.639C157.074 2.39989 157.3 2.55245 157.3 2.87517C157.3 3.22136 157.074 3.35045 156.639 3.35045H156.035V2.39402V2.39989Z"
                    fill="#0A0707"
                  />
                </svg>
              </Link>
              <button
                className="overlay-close md:hidden block col-start-4 col-span-1 flex mt-10 justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu -
              </button>
            </div>
            <div className="grid grid-cols-4 overlay-nav-links">
              <ul className="mobile-list col-span-3 ml-5">
                <Link
                  href="/projects"
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/etc/articles"
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  Etc.
                </Link>
              </ul>
            </div>
            <div className="container mx-auto pb-10 overlay-footer ml-5">
              <div className="flex flex-col md:flex-row grid-cols-4 md:justify-between">
                <div className="grid grid-cols-4 mb-10 md:grid-cols-1 md:mr-20">
                  <h3 className="col-start-1 col-span-2 md:col-span-1 md:grid-cols-1">
                    Spaces for people to thrive.
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-4 lower-footer md:flex md:flex-row-reverse md:justify-between">
                <div className="flex social-links">
                  <Link href="#" className="mr-5">
                    Instagram
                  </Link>
                  <Link href="#" className="mr-5">
                    Twitter
                  </Link>
                  <Link href="#" className="mr-5">
                    Facebook
                  </Link>
                  <Link href="#" className="mr-5">
                    LinkedIn
                  </Link>
                </div>
                <div className="mt-7 md:mt-0 col-start-1 col-span-2 copyright">
                  <p>© {new Date().getFullYear()} VCBO Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
