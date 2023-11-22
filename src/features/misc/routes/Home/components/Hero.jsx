import Button from "@/components/Button/Button"
import ButtonIcon from "@/components/Button/ButtonIcon"
import ButtonText from "@/components/Button/ButtonText"
import Heading from "@/components/Heading"
import Image from "@/components/Image"

function Hero() {
  return (
    // START hero section
    <section>
      <Image
        src="/assets/mobile/image-hero.jpg"
        alt="two people looking at a large artwork of an elder woman"
      />
      <div className="grid gap-8 px-4 py-6">
        <Heading level="h1">
          Modern <br />
          Art Gallery
        </Heading>
        <p className="text-lg">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button to="/location">
          <ButtonText>Our Location</ButtonText>
          <ButtonIcon>
            <img src="/assets/icon-arrow-right.svg" alt="" />
          </ButtonIcon>
        </Button>
      </div>
    </section>
    // END hero section
  )
}

export default Hero
