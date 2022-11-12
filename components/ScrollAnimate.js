import React, { useRef, useEffect, useState } from "react"
import "intersection-observer"

const ScrollAnimate = (props) => {
  const { delay, style, children, className, disabled } = props

  const [showElement, setShowElement] = useState(false)
  const animateElement = useRef(null)

  const options = {
    root: null,
    threshold: [0.15],
  }

  const observeCallback = (entry, observer) => {
    const threshold = observer.thresholds[0]

    if (entry[0].intersectionRatio >= threshold) {
      if (delay) {
        setTimeout(() => {
          setShowElement(true)
        }, delay)
      } else {
        setShowElement(true)
      }
    } else {
      // if we want to, reset here
    }
  }

  const observe = (element) => {
    const observer = new IntersectionObserver(observeCallback, options)

    observer.observe(element.current)
  }

  useEffect(() => {
    observe(animateElement)
  }, [observe])

  const showCondition = showElement ? "active" : ""
  const activeClass = !disabled ? showCondition : "active"

  return (
    <div
      ref={animateElement}
      className={`scroll-item ${activeClass} ${className}`}
      style={{ ...style }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimate
