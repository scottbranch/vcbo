import { useState } from "react"
import { Button } from "./Button"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"

export const AdditionalProject = (props) => {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState("close")

  const toggleDrawer = () => {
    if (process.browser) {
      const openDrawers = document.querySelectorAll(".open")
      openDrawers.forEach((element) => {
        element.classList.remove("open")
      })
    }
    setOpen(!open)
  }

  const triggerModal = (status) => {
    setModal(status)
  }

  const renderActive = () => {
    if (process.browser) {
      setTimeout(() => {
        const modalContainer = document.getElementById("modal-container")
        modalContainer.classList.add("active")
      }, 200)
    }
  }

  return (
    <>
      <div className={`additional-project-outer ${open ? "open" : ""}`}>
        <div
          className="additional-project grid grid-cols-4 gap-6"
          onClick={toggleDrawer}
        >
          <p className="name">Project Name</p>
          <p>Location</p>
          <p>100,000 SqFt</p>
          <p>Name of Client</p>
        </div>
        <span className="icon">{open ? "-" : "+"}</span>
        <Swiper
          className="swipable-carousel"
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          modules={FreeMode}
          onClick={() => triggerModal("open")}
        >
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="370"
              height="306"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="370"
              height="306"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="370"
              height="306"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="370"
              height="306"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="340"
              height="306"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
              width="370"
              height="306"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {modal === "open" ? (
        <div
          id="modal-container"
          className={`modal-container ${
            modal === "open" ? renderActive() : ""
          }`}
        >
          <div className="modal-header flex justify-between items-center">
            <h4>Elementary</h4>
            <span onClick={() => triggerModal("close")}></span>
          </div>
          <Swiper
            className="modal-carousel"
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            modules={FreeMode}
          >
            <SwiperSlide onClick={() => triggerModal("close")}>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://images.prismic.io/vcbo/85356442-a41c-40c5-bc18-ff82f685e513_Utah-State-Capitol-Image-08.jpg?auto=compress,format"
                width="1080"
                height="740"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
