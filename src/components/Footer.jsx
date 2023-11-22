/* eslint-disable react/prop-types */
import Socials from "./Socials/Socials"

function Footer(props) {
  const { variant } = props

  let contentColors = ""
  switch (variant) {
    case "primary":
      contentColors = "bg-night text-white"
      break
    case "secondary":
      contentColors = "bg-persian-orange text-black"
      break
    default:
      break
  }

  const colorShade = variant === "primary" ? "light" : "dark"

  const baseClasses = "grid gap-10 px-8 py-12"

  return (
    <footer className={`${baseClasses} ${contentColors}`}>
      <img src={`/assets/logo-${colorShade}.svg`} alt="" />
      <p className="text-md">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <Socials colorShade={colorShade} />
    </footer>
  )
}

export default Footer
