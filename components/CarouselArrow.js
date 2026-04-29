export const NextArrow = (props) => {
  const { className, onClick } = props
  return (
    <button
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      aria-label="Next slide"
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(1.3)" }}
      >
        <path
          d="M14.5 0.500001C22.232 0.500001 28.5 6.76801 28.5 14.5C28.5 22.232 22.232 28.5 14.5 28.5C6.76801 28.5 0.5 22.232 0.499999 14.5C0.499999 6.76801 6.76801 0.500002 14.5 0.500001Z"
          fill="none"
          stroke="#F0EEEE"
        />
        <path
          d="M10.5001 9.50006L12.7223 14.1314L10.5001 18.5001L18.5001 14.1314L10.5001 9.50006Z"
          fill="#F0EEEE"
        />
      </svg>
    </button>
  )
}

export const PrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <button
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(1.3)" }}
      >
        <path
          d="M14.5 28.5C6.76801 28.5 0.500001 22.232 0.500001 14.5C0.500001 6.76801 6.76801 0.500002 14.5 0.500002C22.232 0.500002 28.5 6.76801 28.5 14.5C28.5 22.232 22.232 28.5 14.5 28.5Z"
          fill="none"
          stroke="#F0EEEE"
        />
        <path
          d="M18.4999 18.5L16.2777 13.8686L18.4999 9.50001L10.4999 13.8686L18.4999 18.5Z"
          fill="#F0EEEE"
        />
      </svg>
    </button>
  )
}
