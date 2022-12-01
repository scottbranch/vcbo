export const Arrow = (props) => {
  const { theme } = props
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 0.500001C22.232 0.500001 28.5 6.76801 28.5 14.5C28.5 22.232 22.232 28.5 14.5 28.5C6.76801 28.5 0.5 22.232 0.499999 14.5C0.499999 6.76801 6.76801 0.500002 14.5 0.500001Z"
        fill="none"
        stroke={`${theme === "dark" ? "#F0EEEE" : "#0A0707"}`}
      />
      <path
        d="M10.5001 9.50006L12.7223 14.1314L10.5001 18.5001L18.5001 14.1314L10.5001 9.50006Z"
        fill={`${theme === "dark" ? "#F0EEEE" : "#0A0707"}`}
      />
    </svg>
  )
}
