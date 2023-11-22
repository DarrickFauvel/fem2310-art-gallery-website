/* eslint-disable react/prop-types */
const ButtonIcon = ({ children }) => {
  return (
    <span className="flex justify-center items-center w-[56px] h-[72px] bg-persian-orange group-hover:bg-night transition-all duration-300 ease-in-out">
      {children}
    </span>
  )
}

export default ButtonIcon
