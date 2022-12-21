import { Button } from "./Button"

export const BackToTop = (props) => {
  const { theme, className } = props

  const scrollToTop = () => {
    if (process.browser) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Button
      onClick={() => scrollToTop()}
      className={`back-to-top ${className}`}
      text="Top"
      theme={theme}
    />
  )
}
