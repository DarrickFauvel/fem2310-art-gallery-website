/* eslint-disable react/prop-types */
import SocialIcon from "./SocialIcon"
import SocialLink from "./SocialLink"

function Socials({ colorShade }) {
  return (
    <section className="flex gap-5 items-center">
      <SocialLink href="#">
        <SocialIcon
          src="/assets/icon-facebook.svg"
          alt="Facebook"
          colorShade={colorShade}
        />
      </SocialLink>

      <SocialLink href="#">
        <SocialIcon
          src="/assets/icon-instagram.svg"
          alt="Instagram"
          colorShade={colorShade}
        />
      </SocialLink>

      <SocialLink href="#">
        <SocialIcon
          src="/assets/icon-twitter.svg"
          alt="Twitter"
          colorShade={colorShade}
        />
      </SocialLink>
    </section>
  )
}

export default Socials
