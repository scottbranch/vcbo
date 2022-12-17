import { Button } from "./Button"

export const BackToTop = (props) => {
  const { theme } = props

  const scrollToTop = () => {
    if (process.browser) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Button
      onClick={() => scrollToTop()}
      className="back-to-top"
      text="Top"
      theme={theme}
    />
  )
}
