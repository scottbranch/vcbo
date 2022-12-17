export const Lines = (props) => {
  const { loaded } = props
  return (
    <div className={`line-container container z-0 ${loaded ? "active" : ""}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
