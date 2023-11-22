import Heading from "@/components/Heading"
import Image from "@/components/Image"

function Welcome() {
  return (
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
  )
}

export default Welcome
