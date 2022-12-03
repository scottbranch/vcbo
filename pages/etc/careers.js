import ScrollAnimate from "../../components/ScrollAnimate"

export default function Careers() {
  return (
    <div className="container mx-auto mt-40">
      <div className="grid grid-cols-4">
        <div className="col-span-2 flex content-end flex-wrap">
          <ScrollAnimate>
            <h1>Join the VCBO Family</h1>
          </ScrollAnimate>
          <ScrollAnimate className="mt-16">
            <h4>See Open Positions</h4>
          </ScrollAnimate>
        </div>
        <ScrollAnimate className="col-span-2">
          <img src="/etc/Rectangle.jpg" />
        </ScrollAnimate>
      </div>
      <div className="grid grid-cols-4 mt-60">
        <ScrollAnimate className="col-span-1">
          <h4>
            Architectural
            <br />
            Team
          </h4>
        </ScrollAnimate>
        <ScrollAnimate className="col-span-1">
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
      <ScrollAnimate className="grid grid-cols-4 mt-60">
        <div className="col-span-1">
          <h4>
            Interior Design
            <br />
            Team
          </h4>
        </div>
        <div className="col-span-1">
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
      <ScrollAnimate className="grid grid-cols-4 mt-60 mb-60">
        <div className="col-span-1">
          <h4>Benefits</h4>
        </div>
        <div className="col-span-2">
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
