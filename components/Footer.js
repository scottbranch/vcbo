export const Footer = (props) => {
  const {} = props
  return (
    <footer className="container mx-auto mt-40 pb-10">
      <div className="grid grid-cols-4">
        <div className="col-start-1 col-span-1">
          <h3>Spaces for people to thrive.</h3>
        </div>
        <div className="col-start-3">
          <div>
            <p className="small-subhead mb-4">Inquiries</p>
            <p>info@vcbo.com</p>
            <p>+1 801 575 8800</p>
          </div>
          <div className="mt-16">
            <p className="small-subhead mb-4">SLC (HQ)</p>
            <p>524 South 600 East</p>
            <p>Salt Lake City, UT 84102</p>
          </div>
        </div>
        <div>
          <div>
            <p className="small-subhead mb-4">Careers</p>
            <p>Create something great.</p>
            <p>
              <a href="/etc/careers" className="underline">
                See Open Positions
              </a>
            </p>
          </div>
          <div className="mt-16">
            <p className="small-subhead mb-4">STG</p>
            <p>20 North Main Street, Suite 103</p>
            <p>St. George, UT 84770</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40 lower-footer">
        <div className="col-start-1 col-span-1">
          <p>© 2022 VCBO Architecture</p>
        </div>
        <div className="col-start-3 col-span-1 flex">
          <a href="#">Instagram</a>
          <a href="#" className="ml-16">
            Twitter
          </a>
        </div>
        <div className="col-start-4 col-span-1">
          <a href="#">Facebook</a>
          <a href="#" className="ml-16">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
