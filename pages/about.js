import ScrollAnimate from "../components/ScrollAnimate"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
    }
  })

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <ScrollAnimate>
            <h3 className="ml-4 mb-10 mt-40">
              For 50 years now, VCBO Architecture has delivered iconic
              architecture with a focus on impeccable design, innovative
              thinking, and unparalleled client service. Today, we actively
              contribute to the built environment through the design of diverse
              projects across the country and around the globe.
            </h3>
          </ScrollAnimate>
        </div>
        <div className="col-span-5 col-start-4">
          <ScrollAnimate>
            <img src="about-hero.png" />
          </ScrollAnimate>
        </div>
        <div className="col-span-4 col-start-5 mt-28">
          <ScrollAnimate>
            <p className="large mb-5">History &amp; Culture</p>
            <p className="mb-4">
              Located in Salt Lake City and St. George Utah, our office
              buildings are symbols of our deep connection to our community, the
              Western United States, and creative thinking. Our Salt Lake City
              office building originally served as a stable of strong and
              reliable workhorses. Now, it houses an assembly of diverse talent,
              drawn from near and far to work together to influence and shape
              our communities for good.
            </p>
            <p className="mb-4">
              The big yellow-gold lettering on our walls signifies our
              willingness to be bold, stand out, and make a statement. Our
              buildings back this claim with full force. But above all, our
              people— and commitment to people— make working with VCBO a
              standout experience. We strive to cultivate a culture where
              passion and curiosity can thrive.
            </p>

            <p>
              Through physical structures, we evoke our passion for bridging
              timeless significance with progressive learning, classical thought
              with contemporary, and elegance with restraint, all while
              displaying our distinct ability to innovate and problem-solve.
            </p>
          </ScrollAnimate>
        </div>
        <div className="col-span-8 mx-auto">
          <ScrollAnimate>
            <img src="about-grid.png" />
          </ScrollAnimate>
        </div>
        <div className="col-span-4 mt-28">
          <ScrollAnimate>
            <p className="large mb-5">Social Responsibility</p>
            <p className="mb-4">
              VCBO cares deeply about social responsibility, and we are honored
              to partner with CHOICE Humanitarian to make a global difference.
              Whether it’s donations or expeditions, our team is dedicated to
              helping both local and international rural communities chart a
              path from poverty to peace and prosperity.
            </p>
            <p className="mb-4">
              From celebrating Earth Day by beautifying local gardens, to
              participating in Boys & Girls Club events, you’ll frequently see
              VCBO out volunteering in the local community.
            </p>
          </ScrollAnimate>
        </div>
        <div className="col-start-3 mt-20 col-span-4">
          <ScrollAnimate>
            <img src="about-image.png" />
          </ScrollAnimate>
        </div>
        <div className="col-start-3 col-span-4 mt-28">
          <ScrollAnimate>
            <p className="large mb-5">Commitment to Sustainability</p>
            <p className="mb-4">
              VCBO is dedicated to best environmental practices. We bring a
              strong understanding of sustainable resources, guidelines, and
              rating systems to each project, as well as a wealth of experience
              in finding ecological solutions.
            </p>
            <p className="mb-4">
              Beyond our dedication to driving down energy use, energy costs,
              and the associated environmental impacts, we also understand the
              long-term value of architecture. We know our buildings have the
              potential to dramatically influence the people who live in them,
              work in them, and experience them, as well as the communities they
              serve. Because of this, we sit down with each client to determine
              the right sustainable strategies for each individual project.
            </p>
            <p className="mb-4">
              VCBO has recently signed the AIA 2030 Commitment, a collaborative
              effort pushing the building industry toward carbon neutrality
              through improvements in the design process, the integration of
              efficient and holistic systems, and ongoing monitoring and
              performance verification. By signing this commitment, we
              acknowledge our role in shaping the future of the built
              environment and seek to continuously strive for improvement while
              supporting environmental stewardship.
            </p>
          </ScrollAnimate>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-8 mt-40 mb-10">
          <ScrollAnimate>
            <h3>Leadership</h3>
          </ScrollAnimate>
        </div>
        <div className="grid grid-cols-4 gap-4 col-span-8">
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="headshot">
              <img src="about-headshot.png" />
              <p className="font-medium mt-4">Niels Valentiner, AIA</p>
              <p>Principal</p>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </div>
  )
}
