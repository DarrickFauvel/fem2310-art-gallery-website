/* eslint-disable react/prop-types */
const ButtonText = ({ children }) => {
  return (
    <span className="flex justify-center items-center h-[72px] w-[204px] bg-night group-hover:bg-persian-orange text-white text-xl font-display font-extrabold uppercase tracking-[3.64px] transition-all duration-300 ease-in-out">
      {children}
    </span>
  )
}

export default ButtonText
