import ScrollAnimate from "../../components/ScrollAnimate"
import { Button } from "../../components/Button"
import { useEffect } from "react"

export default function TestPost() {
  useEffect(() => {
    document.body.classList.add("dark-mode")
    document.body.classList.add("projects-page")
  })
  return (
    <div className="container mx-auto projects-page">
      <div className="grid grid-cols-4 mt-40 gap-x-8">
        <div className="col-start-1 col-span-3">
          <h1>Architecture that cracks possibility open wide.</h1>
        </div>
        <div className="col-start-1 col-span-4">
          <img
            className="block w-full mt-24"
            src="/projects/test-project/Hero.jpg"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-24 gap-x-8">
        <div className="col-start-3 col-span-2">
          <h3 className="max-w-md">The Salt Lake City Public Library</h3>
          <div className="max-w-lg mt-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis libero augue, in ultricies velit tempus vel. Suspendisse
              eu consectetur ligula. Morbi sollicitudin ornare felis eget
              mattis. Nunc ac dolor ac metus malesuada sagittis eu et augue. In
              suscipit fringilla elit sit amet consequat. Cras consectetur erat
              et dui elementum convallis. Nulla viverra lorem et augue
              sollicitudin, sodales pellentesque massa hendrerit. Nulla in risus
              ac nisl bibendum tristique a eget tellus. Pellentesque hendrerit
              ante mattis eros mattis, ut ullamcorper erat hendrerit. Nam vitae
              ornare ligula, vitae posuere sem. Aenean tempus augue rutrum,
              facilisis erat finibus, viverra ante.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis libero augue, in ultricies velit tempus vel. Suspendisse
              eu consectetur ligula. Morbi sollicitudin ornare felis eget
              mattis.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-32 gap-x-8">
        <div className="col-start-1 col-span-1">
          <p className="small-subhead">
            ARCHITECTURE,
            <br /> PLANNING
          </p>
        </div>
        <div className="col-start-2 col-span-1">
          <p className="small-subhead">240,000 SQFT</p>
        </div>
        <div className="col-start-3 col-span-1">
          <p className="small-subhead">SALT LAKE CITY</p>
        </div>
        <div className="col-start-4 col-span-1">
          <p className="small-subhead">SALT LAKE CITY, UT</p>
        </div>
        <div className="col-start-2 col-span-3 mt-32">
          <img className="w-full" src="/projects/test-project/Image 01.jpg" />
        </div>
        <div className="col-start-3 col-span-2 mt-4">
          <img
            className="w-full"
            src="/projects/test-project/Rectangle 9.jpg"
          />
        </div>
        <div className="col-start-1 col-span-4 mt-40">
          <img className="w-full" src="/projects/test-project/Image 03.jpg" />
        </div>
        <div className="col-start-1 col-span-3 mt-40">
          <h4>
            “Testimonial Quote. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut venenatis libero augue, in ultricies velit
            tempus vel. Arcu suspendisse eu consect ligula. Sollicitudin ornare
            felis eget mattis.” <br />
            —Name, Position, Organization
          </h4>
        </div>
        <div className="col-start-3 col-span-2 mt-40">
          <img className="w-full" src="/projects/test-project/Image 05.jpg" />
        </div>
        <div className="col-start-1 col-span-2 mt-8">
          <img className="w-full" src="/projects/test-project/Image 06.jpg" />
          <p className="mt-8">
            Concluding statement about the Project. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Or <a href="#">click here</a> to view
            similar projects.
          </p>
        </div>
      </div>
    </div>
  )
}
