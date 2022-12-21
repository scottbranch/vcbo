import { BackToTop } from "./BackToTop"

export const Footer = (props) => {
  const {} = props
  return (
    <div className="container mx-auto grid">
      <BackToTop className="ml-4" />
      <footer className="relative mt-28 md:mt-40 pb-10 px-4 md:px-0">
        <div className="flex flex-col md:grid grid-cols-4">
          <div className="grid grid-cols-4 mb-20 md:grid-cols-1 md:col-span-2 md:mr-20 md:max-w-sm">
            <h3 className="col-start-1 col-span-3 md:col-span-1 md:grid-cols-1">
              Spaces for people to thrive.
            </h3>
          </div>
          <div className="grid grid-cols-4 items-center md:col-span-2">
            <div className="grid-cols-4 col-span-4 grid">
              <div className="md:ml-4 col-span-2">
                <p className="small-subhead mb-4">Inquiries</p>
                <p>info@vcbo.com</p>
                <p>+1 801 575 8800</p>
              </div>
              <div className="col-start-3 col-span-2 ml-4">
                <p className="small-subhead mb-4">SLC (HQ)</p>
                <p>524 South 600 East</p>
                <p>Salt Lake City, UT 84102</p>
              </div>
            </div>
            <div className="grid-cols-4 col-span-4 grid mt-10">
              <div className="md:ml-4 col-span-2">
                <p className="small-subhead mb-4">Careers</p>
                <p>Create something great.</p>
                <p>
                  <a href="/etc/careers" className="underline">
                    See Open Positions
                  </a>
                </p>
              </div>
              <div className="col-start-3 col-span-2 ml-4">
                <p className="small-subhead mb-4">STG</p>
                <p>20 North Main Street, Suite 103</p>
                <p>St. George, UT 84770</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 md:mt-40 lower-footer">
          <div className="col-span-4 md:col-span-2 md:col-start-3 grid items-center grid-cols-4">
            <a
              href=" https://www.instagram.com/vcboarchitecture/"
              target="_blank"
              className="ml-1 md:ml-4"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/VCBOArchitects"
              target="_blank"
              className="ml-1 md:ml-4"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/VCBOArchitecture "
              target="_blank"
              className="ml-1 md:ml-4"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/vcbo/ "
              target="_blank"
              className="ml-1 md:ml-4"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-7 md:mt-0 col-start-1 col-span-2 footer-copyright">
            <p>© {new Date().getFullYear()} VCBO Architecture</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
