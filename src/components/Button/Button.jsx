/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Button(props) {
  const { className, children, direction, to } = props

  const directionClass = direction === "left" ? "flex-row-reverse" : null

  const baseClasses =
    "group flex items-center w-[260px] transition-all duration-300 ease-in-out"

  return (
    <Link to={to} className={`${baseClasses} ${className} ${directionClass}`}>
      {children}
    </Link>
  )
}

export default Button
