import ScrollAnimate from "../../../components/ScrollAnimate"
import { useEffect, useState } from "react"
import { createClient } from "../../../prismicio"
import * as prismicH from "@prismicio/helpers"
import { PrismicRichText } from "@prismicio/react"
import Link from "next/link"
import { Lines } from "../../../components/Lines"
import { BackArrow } from "../../../components/BackArrow"
import { Button, RealButton } from "../../../components/Button"
import Head from "next/head"

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const position = await client.getByUID("position", params.uid)
  const footer = await client.getSingle("footer")

  return {
    props: { position, footer }, // Will be passed to the sectors component as props
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType("position")

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  }
}

export default function Article(props) {
  const { position } = props
  const [loaded, setLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [successState, setSuccessState] = useState(false)
  const [formState, setFormState] = useState({})

  useEffect(() => {
    if (process.browser) {
      document.body.classList.remove("homepage")
      document.body.classList.remove("dark-mode")
      document.body.classList.remove("projects-page")
      document.body.classList.remove("single-project")
      document.body.classList.remove("sector")
    }
    setLoaded(true)

    console.log({ position })
  }, [])

  const firstNameField =
    typeof document !== `undefined`
      ? document.getElementById("firstName-field")
      : null
  const lastNameField =
    typeof document !== `undefined`
      ? document.getElementById("lastName-field")
      : null
  const positionField =
    typeof document !== `undefined`
      ? document.getElementById("position-field")
      : null
  const emailField =
    typeof document !== `undefined`
      ? document.getElementById("email-field")
      : null
  const phoneNumberField =
    typeof document !== `undefined`
      ? document.getElementById("phoneNumber-field")
      : null
  const resumeField =
    typeof document !== `undefined`
      ? document.getElementById("resume-field")
      : null
  const coverLetterField =
    typeof document !== `undefined`
      ? document.getElementById("coverLetter-field")
      : null
  const portfolioField =
    typeof document !== `undefined`
      ? document.getElementById("portfolio-field")
      : null

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const submitForm = (e) => {
    console.log({ formState })
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => {
        setSuccessState(true)
        firstNameField.value = ""
        lastNameField.value = ""
        emailField.value = ""
        phoneNumberField.value = ""
        resumeField.value = ""
        coverLetterField.value = ""
        portfolioField.value = ""
      })
      .catch((error) => alert(error))
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Head>
        <title>{position?.data?.meta_title[0]?.text}</title>
        <meta
          name="description"
          content={position?.data?.meta_description[0]?.text}
          key="desc"
        />
        <meta
          property="og:title"
          content={position?.data?.social_meta_title[0]?.text}
        />
        <meta
          property="og:description"
          content={position?.data?.social_meta_description[0]?.text}
        />
        <meta
          property="og:image"
          content={position?.data?.social_meta_image?.url}
        />
      </Head>
      <Lines loaded={loaded} />
      <div className="container mx-auto mt-20 md:mt-40 article px-4 md:px-0 relative z-10 mb-60">
        <div className="breadcrumb flex col-span-4 relative">
          <BackArrow className="mr-2" />
          <Link href="/insights/careers">Back</Link>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-2 flex content-end flex-wrap mt-10 md:mt-20">
            <div className="w-full">
              <ScrollAnimate>
                <h1>{position?.data?.title[0]?.text}</h1>
              </ScrollAnimate>
            </div>
            <div className="mt-16 mb-10 md:mb-10">
              <ScrollAnimate>
                <h4>{position?.data?.team[0]?.text} · </h4>
                <h4>{position?.data?.location[0]?.text}</h4>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 md:mt-40">
          <div className="col-start-1 md:col-start-2 col-span-4 md:col-span-2 article-body ml-4 mr-4">
            <PrismicRichText field={position?.data?.description} />
            <Button
              className="mt-4 apply-button hover:cursor-pointer"
              onClick={() => setModalOpen(true)}
              text="Apply"
            />
          </div>
        </div>
      </div>

      {/* APPLY MODAL */}
      <div
        className={`apply-modal-outer w-full h-full z-50 fixed top-0 left-0 ${
          modalOpen ? "open" : ""
        }`}
      >
        <div className="apply-modal-container">
          <div className="close-button" onClick={() => setModalOpen(false)}>
            <span></span>
            <span></span>
          </div>
          <h4>Apply</h4>
          <p className="text-sm">Fields marked with * are required</p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-5"
            onSubmit={submitForm}
            netlify
          >
            <div hidden aria-hidden="true">
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <div>
              <label className="uppercase small-subhead small-subhead-form">
                First Name*
              </label>
              <input
                onChange={handleChange}
                id="firstName-field"
                name="firstName"
                type="text"
                maxLength="100"
                required
                className="form-input"
              ></input>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                Last Name*
              </label>
              <input
                onChange={handleChange}
                id="lastName-field"
                name="lastName"
                type="text"
                maxLength="100"
                required
                className="form-input"
              ></input>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                Position applying for*
              </label>
              <input
                required
                value={position?.data?.title[0]?.text}
                className="form-input"
              ></input>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                Email*
              </label>
              <input
                onChange={handleChange}
                id="email-field"
                name="email"
                type="email"
                maxLength="100"
                required
                className="form-input"
              ></input>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                Phone Number*
              </label>
              <input
                onChange={handleChange}
                id="phoneNumber-field"
                name="phoneNumber"
                type="tel"
                maxLength="100"
                required
                className="form-input"
              ></input>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                RESUME (PDF,DOC) *
              </label>
              <div className="file-outer">
                <div className="upload-text text-center">
                  <img className="m-auto" src="/cloud.png" />
                  <p className="uppercase text-xs font-medium">
                    Click to upload resume
                  </p>
                </div>
                <input
                  onChange={handleChange}
                  id="resume-field"
                  name="resume"
                  type="file"
                  required
                  className="file-input"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                COVER LETTER (PDF,DOC)
              </label>
              <div className="file-outer">
                <div className="upload-text text-center">
                  <img className="m-auto" src="/cloud.png" />
                  <p className="uppercase text-xs font-medium">
                    Click to upload cover letter
                  </p>
                </div>
                <input
                  onChange={handleChange}
                  id="coverLetter-field"
                  name="coverLetter"
                  type="file"
                  className="file-input"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="uppercase small-subhead small-subhead-form">
                LINK TO PROFESSIONAL PORTFOLIO
              </label>
              <input
                onChange={handleChange}
                id="portfolio-field"
                name="portfolio"
                type="text"
                className="form-input"
              ></input>
            </div>
            <div className="text-right">
              {successState === true ? (
                "Thank you for applying!"
              ) : (
                <RealButton
                  type="submit"
                  className="mt-10 apply-button"
                  text="Apply"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
