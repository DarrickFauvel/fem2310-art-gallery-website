/* eslint-disable react/prop-types */
const Heading = (props) => {
  const { level, className, children, ...attributes } = props

  let textSize = ""
  switch (level) {
    case "h1":
      textSize = "text-clamp-h1 leading-[0.91667]"
      break
    case "h2":
      textSize = "text-clamp-h2 leading-[0.91667]"
      break
    default:
      break
  }

  const baseClasses = "font-display uppercase leading-none"

  const CustomTag = `${level}`

  return (
    <CustomTag
      {...attributes}
      className={`${baseClasses} ${textSize} ${className}`}>
      {children}
    </CustomTag>
  )
}

export default Heading
