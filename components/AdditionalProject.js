import { useState } from "react"
import { Button } from "./Button"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

export const AdditionalProject = (props) => {
  const { name, location, size, client, images } = props
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
          <p className="name">{name}</p>
          <p>{location}</p>
          <p>{size}</p>
          <p>{client}</p>
        </div>
        <span className="icon">{open ? "-" : "+"}</span>
        <Swiper
          className="swipable-carousel"
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          scrollbar={{ draggable: true }}
          modules={FreeMode}
          onClick={() => triggerModal("open")}
        >
          {images?.map((item) => (
            <SwiperSlide>
              <img src={item.image.url} />
            </SwiperSlide>
          ))}
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
            <h4>{name}</h4>
            <span onClick={() => triggerModal("close")}></span>
          </div>
          <Swiper
            className="modal-carousel"
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[FreeMode, Pagination]}
          >
            {images?.map((item) => (
              <SwiperSlide onClick={() => triggerModal("close")}>
                <img src={item.image.url} width="1080" height="740" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
