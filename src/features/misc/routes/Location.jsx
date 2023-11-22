import Button from "@/components/Button/Button"
import ButtonIcon from "@/components/Button/ButtonIcon"
import ButtonText from "@/components/Button/ButtonText"
import Footer from "@/components/Footer"
import Heading from "@/components/Heading"
import Image from "@/components/Image"

const Location = () => {
  return (
    <>
      <section className="relative">
        <Image src="/assets/mobile/image-map.png" alt="" />
        <Button className="absolute top-0" direction="left" to="/">
          <ButtonText>Back to Home</ButtonText>
          <ButtonIcon>
            <img src="/assets/icon-arrow-left.svg" alt="" />
          </ButtonIcon>
        </Button>
      </section>

      <section className="grid gap-8 px-4 py-6 bg-night text-white">
        <Heading level="h1">Our Location</Heading>
        <div className="grid gap-6">
          <span className="font-display uppercase text-persian-orange text-[32px]">
            99 King Street
          </span>
          <p className="text-lg">
            Newport
            <br />
            RI 02840
            <br />
            United States of America
          </p>
          <p className="text-lg">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>

      <Footer variant="secondary" />
    </>
  )
}

export default Location
