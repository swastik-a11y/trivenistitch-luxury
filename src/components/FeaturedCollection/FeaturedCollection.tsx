import "./FeaturedCollection.css";

const collections = [
  {
    name: "TRIVENI",
    title: "Where Every Journey Begins",
    description:
      "Timeless everyday elegance in soft ivory, pearl, and champagne tones.",
    accent: "The Beginning",
    tone: "tone1",
  },
  {
    name: "YAMUNA",
    title: "Grace in Motion",
    description:
      "Serene pastels and calm silhouettes for effortless daytime luxury.",
    accent: "The Flow of Serenity",
    tone: "tone2",
  },
  {
    name: "SARASWATI",
    title: "The Art of Simplicity",
    description:
      "Minimal, refined, and quietly powerful pieces for modern elegance.",
    accent: "Quiet Luxury",
    tone: "tone3",
  },
  {
    name: "MANDAKINI",
    title: "Bloom Beautifully",
    description:
      "Romantic florals and delicate details for joyful, feminine dressing.",
    accent: "Romance in Bloom",
    tone: "tone4",
  },
  {
    name: "ALAKNANDA",
    title: "Royal Heritage",
    description:
      "Statement embroidery and regal textures for festive occasions.",
    accent: "Grand Celebrations",
    tone: "tone5",
  },
  {
    name: "GANGA",
    title: "The Sacred Signature",
    description:
      "Our most exquisite pieces, crafted for bridal and heirloom moments.",
    accent: "Legacy Couture",
    tone: "tone6",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="featuredSection" id="collections">
      <div className="featuredHeader">
        <p className="featuredKicker">The Rivers Collection</p>
        <h2 className="featuredTitle">
          Inspired by sacred rivers, each collection tells a different story.
        </h2>
        <p className="featuredText">
          A curated journey of elegance, heritage, and feminine luxury.
        </p>
      </div>

      <div className="featuredGrid">
        {collections.map((item) => (
          <article key={item.name} className={`featureCard ${item.tone}`}>
            <div className="featureCardGlow" />
            <div className="featureCardTop">
              <span className="featureBadge">{item.accent}</span>
              <span className="featureLabel">{item.name}</span>
            </div>

            <div className="featureCardBottom">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="featureButton">Explore Collection</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}