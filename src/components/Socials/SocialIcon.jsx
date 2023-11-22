/* eslint-disable react/prop-types */
const SocialIcon = (props) => {
  const { src, alt, colorShade } = props

  let textColor = ""
  switch (colorShade) {
    case "dark":
      textColor = "text-white"
      break
    case "light":
      textColor = "text-black"
      break

    default:
      break
  }

  const baseClasses = "transiton-all duration-300 origin-bottom hover:scale-125"

  return <img className={`${baseClasses} ${textColor}`} src={src} alt={alt} />
}

export default SocialIcon
