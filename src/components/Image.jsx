/* eslint-disable react/prop-types */
const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`w-full ${className}`} />
}

export default Image
