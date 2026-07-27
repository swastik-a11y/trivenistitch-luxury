import "./StorySection.css";

export default function StorySection() {
  return (
    <section className="storySection">
      <div className="storyContainer">

        <div className="storyLeft">
          <span className="storyLabel">Our Craft</span>

          <h2>
            Every stitch tells
            <span> a story.</span>
          </h2>

          <p>
            Trivenistitch celebrates timeless Indian craftsmanship,
            combining heritage embroidery with contemporary silhouettes.
            Every garment is thoughtfully designed to make you feel elegant,
            confident and beautifully yourself.
          </p>

          <button className="storyButton">
            Discover Our Story
          </button>
        </div>

        <div className="storyRight">
          <div className="storyImage"></div>
        </div>

      </div>
    </section>
  );
}