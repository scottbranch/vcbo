import { BackToTop } from "./BackToTop"

export const Footer = (props) => {
  const { data } = props

  return (
    <div className="container mx-auto grid">
      <BackToTop className="ml-4" />
      <footer className="relative mt-28 md:mt-40 pb-10 px-4 md:px-0">
        <div className="flex flex-col md:grid grid-cols-4">
          <div className="grid grid-cols-4 mb-20 md:grid-cols-1 md:col-span-2 md:mr-20 md:max-w-sm">
            <h3 className="col-start-1 col-span-3 md:col-span-1 md:grid-cols-1">
              {data?.heading[0]?.text}
            </h3>
          </div>
          <div className="grid grid-cols-4 items-center md:col-span-2">
            <div className="grid-cols-4 col-span-4 grid">
              <div className="md:ml-4 col-span-2">
                <p className="small-subhead mb-4">Inquiries</p>
                <p>{data?.inquiries[0]?.email[0]?.text}</p>
                <p>{data?.inquiries[0]?.phone[0]?.text}</p>
              </div>
              <div className="col-start-3 col-span-2 ml-4">
                <p className="small-subhead mb-4">SLC (HQ)</p>
                <p>{data?.slc_hq[0]?.street[0]?.text}</p>
                <p>{data?.slc_hq[0]?.city[0]?.text}</p>
              </div>
            </div>
            <div className="grid-cols-4 col-span-4 grid mt-10">
              <div className="md:ml-4 col-span-2">
                <p className="small-subhead mb-4">Careers</p>
                <p>{data?.careers[0]?.text[0]?.text}</p>
                <p>
                  <a
                    href={data?.careers[0]?.link[0].spans[0]?.data?.url}
                    className="underline"
                  >
                    <p>{data?.careers[0]?.link[0]?.text}</p>
                  </a>
                </p>
              </div>
              <div className="col-start-3 col-span-2 ml-4">
                <p className="small-subhead mb-4">STG</p>
                <p>{data?.stg[0]?.street[0]?.text}</p>
                <p>{data?.stg[0]?.city[0]?.text}</p>
              </div>
              <div className="col-start-1 col-span-2 mt-10 sm:ml-4">
                <p className="small-subhead mb-4">
                  <a
                    className="small-subhead mb-4"
                    href="https://projects.vcbo.com/"
                  >
                    FILE TRANSFER
                  </a>
                </p>
              </div>
              <div className="col-start-3 col-span-2 ml-4 mt-10">
                <p className="small-subhead mb-4">HI</p>
                <p>{data?.hawaii[0]?.street[0]?.text}</p>
                <p>{data?.hawaii[0]?.city[0]?.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 md:mt-40 lower-footer">
          <div className="col-span-4 md:col-span-2 md:col-start-3 grid items-center grid-cols-4">
            <a
              href="https://www.linkedin.com/company/vcbo/ "
              target="_blank"
              className="ml-1 md:ml-4"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href=" https://www.instagram.com/vcboarchitecture/"
              target="_blank"
              className="ml-1 md:ml-4"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/VCBOArchitecture "
              target="_blank"
              className="ml-1 md:ml-4"
            >
              <span>Facebook</span>
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
