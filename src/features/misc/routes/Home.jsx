import Footer from "@/components/Footer"
import Image from "@/components/Image"
import Heading from "@/components/Heading"
import Button from "@/components/Button/Button"
import ButtonText from "@/components/Button/ButtonText"
import ButtonIcon from "@/components/Button/ButtonIcon"

const Home = () => {
  return (
    <>
      {/* START hero section */}
      <section className="relative">
        <Image
          className="md:hidden"
          src="/assets/mobile/image-hero.jpg"
          alt="two people looking at a large artwork of an elder woman"
        />
        <Image
          className="hidden md:block md:h-[700px] md:w-auto"
          src="/assets/tablet/image-hero.jpg"
          alt="two people looking at a large artwork of an elder woman"
        />
        <div className="grid gap-8 px-4 py-6 md:absolute md:top-[145px] md:right-[2em] md:w-[339px]">
          <Heading level="h1" className="md:leading-[.95] md:text-[70px]">
            Modern <br />
            Art Gallery
          </Heading>
          <p className="text-lg">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button to="/location">
            <ButtonText>Our Location</ButtonText>
            <ButtonIcon>
              <img src="/assets/icon-arrow-right.svg" alt="" />
            </ButtonIcon>
          </Button>
        </div>
      </section>
      {/* END hero section */}

      {/* START welcome section */}
      <section className="mt-20">
        <Image
          src="/assets/mobile/image-grid-1.jpg"
          alt="inside room of gallery"
        />
        <div className="grid gap-6 px-4 py-6">
          <Heading level="h2">
            Your day <span className="whitespace-nowrap">at the gallery</span>
          </Heading>
          <p className="text-lg">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>

        <section className="grid gap-4 px-4 mb-32">
          <Image
            src="/assets/mobile/image-grid-2.jpg"
            alt="empty bench inside gallery room"
          />
          <Image
            src="/assets/mobile/image-grid-3.jpg"
            alt="gallery hallway with patrons"
          />
          <div className="grid gap-4 px-4 py-6 bg-night text-white">
            <Heading level="h2">Come &amp; be inspired</Heading>
            <p className="text-lg">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </section>
      </section>
      {/* END welcome section */}

      <Footer variant="primary" />
    </>
  )
}

export default Home
