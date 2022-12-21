import ScrollAnimate from "../../components/ScrollAnimate"
import { useEffect } from "react"

export default function Careers() {
  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
      document.body.classList.remove("sector")
    }

    setLoaded(true)
  }, [])

  return (
    <div className="container mx-auto mt-40 px-4 md:px-0 mb-60">
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-2 flex content-end flex-wrap">
          <ScrollAnimate>
            <h1 className="w-full">Join the VCBO Family</h1>
          </ScrollAnimate>
          <ScrollAnimate className="mt-12 md:mt-16">
            <h4 className="w-full">See Open Positions</h4>
          </ScrollAnimate>
        </div>
        <ScrollAnimate className="col-span-4 md:col-span-2 mt-12 md:mt-0">
          <img src="/etc/Rectangle.jpg" />
        </ScrollAnimate>
      </div>
      <div className="grid grid-cols-4 mt-24 md:mt-60">
        <ScrollAnimate className="col-span-4 md:col-span-1 mb-8 md:mb-0">
          <h4>
            Architectural
            <br className="hidden md:block" />
            Team
          </h4>
        </ScrollAnimate>
        <ScrollAnimate className="col-span-2 md:col-span-1">
          <p className="small-subhead">POSITION</p>
          <p className="mt-6">Architect II</p>
          <p className="mt-6">Architect II</p>
          <p className="mt-6">BIM Technician</p>
          <p className="mt-6">Specification Writer</p>
        </ScrollAnimate>
        <ScrollAnimate className="col-span-1">
          <p className="small-subhead">LOCATION</p>
          <p className="mt-6">Salt Lake City, UT</p>
          <p className="mt-6">Salt Lake City, UT</p>
          <p className="mt-6">Salt Lake City, UT</p>
          <p className="mt-6">Salt Lake City, UT</p>
        </ScrollAnimate>
      </div>
      <ScrollAnimate className="grid grid-cols-4 mt-24 md:mt-60">
        <div className="col-span-4 md:col-span-1 mb-8 md:mb-0">
          <h4>
            Interior Design
            <br className="hidden md:block" />
            Team
          </h4>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="small-subhead">POSITION</p>
          <p className="mt-6">Interior Designer II</p>
          <p className="mt-6">Interior Designer Intern</p>
        </div>
        <div className="col-span-1">
          <p className="small-subhead">LOCATION</p>
          <p className="mt-6">Salt Lake City, UT</p>
          <p className="mt-6">Salt Lake City, UT</p>
        </div>
      </ScrollAnimate>
      <ScrollAnimate className="grid grid-cols-4 mt-24 mb-24 md:mt-60 md:mb-60">
        <div className="col-span-4 md:col-span-1 mb-4 md:mb-0">
          <h4>Benefits</h4>
        </div>
        <div className="col-span-4 md:col-span-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            ultricies lacus sed turpis tincidunt. Quisque sagittis purus sit
            amet volutpat consequat mauris nunc. Amet justo donec enim diam
            vulputate. Ac turpis egestas integer eget aliquet nibh praesent
            tristique magna. Pellentesque nec nam aliquam sem et. Condimentum
            mattis pellentesque id nibh tortor id aliquet lectus proin. Purus
            semper eget duis at tellus at urna.
          </p>
        </div>
      </ScrollAnimate>
    </div>
  )
}
