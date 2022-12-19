import { BackToTop } from "./BackToTop"

export const Footer = (props) => {
  const {} = props
  return (
    <div className="container mx-auto grid mt-40">
      <BackToTop />
      <footer className="relative mt-28 md:mt-40 pb-10 px-4 md:px-0">
        <div className="flex flex-col md:grid grid-cols-4">
          <div className="grid grid-cols-4 mb-20 md:grid-cols-1 md:col-span-2 md:mr-20">
            <h3 className="col-start-1 col-span-2 md:col-span-1 md:grid-cols-1">
              Spaces for people to thrive.
            </h3>
          </div>
          <div className="grid grid-cols-4 items-center md:col-span-2">
            <div className="grid-cols-4 col-span-4 grid">
              <div>
                <p className="small-subhead mb-4">Inquiries</p>
                <p>info@vcbo.com</p>
                <p>+1 801 575 8800</p>
              </div>
              <div className="col-start-3 col-span-2">
                <p className="small-subhead mb-4">SLC (HQ)</p>
                <p>524 South 600 East</p>
                <p>Salt Lake City, UT 84102</p>
              </div>
            </div>
            <div className="grid-cols-4 col-span-4 grid mt-10">
              <div>
                <p className="small-subhead mb-4">Careers</p>
                <p>Create something great.</p>
                <p>
                  <a href="/etc/careers" className="underline">
                    See Open Positions
                  </a>
                </p>
              </div>
              <div className="col-start-3 col-span-2">
                <p className="small-subhead mb-4">STG</p>
                <p>20 North Main Street, Suite 103</p>
                <p>St. George, UT 84770</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 md:mt-40 lower-footer md:flex md:flex-row-reverse md:justify-between">
          <div className="col-span-4 md:col-span-6 md:col-start-3 flex justify-between items-center">
            <a href="#" className="md:ml-5">
              Instagram
            </a>
            <a href="#" className="md:ml-5">
              Twitter
            </a>
            <a href="#" className="md:ml-5">
              Facebook
            </a>
            <a href="#" className="md:ml-5">
              LinkedIn
            </a>
          </div>
          <div className="mt-7 md:mt-0 col-start-1 col-span-2">
            <p>© {new Date().getFullYear()} VCBO Architecture</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
