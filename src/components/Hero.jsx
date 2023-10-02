import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <img
        src="/assets/mobile/image-hero.jpg"
        alt="two people looking at a large artwork of an elder woman"
      />
      <div className="content">
        <h1>
          Modern <span className="no-wrap">Art Gallery</span>
        </h1>
        <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button>
          <div className="text">Our Location</div>
          <div className="icon">
            <img src="/assets/icon-arrow-right.svg" alt="" />
          </div>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
