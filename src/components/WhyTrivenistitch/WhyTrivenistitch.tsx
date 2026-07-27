import "./WhyTrivenistitch.css";

export default function WhyTrivenistitch() {
  return (
    <section className="whySection">
      <div className="whyContainer">
        <div className="whyText">
          <span className="whyLabel">Why Trivenistitch?</span>
          <h2>
            Crafted to feel
            <span> luxurious, timeless, and personal.</span>
          </h2>
          <p>
            Every piece is designed with soft elegance, premium detailing, and a refined ethnic aesthetic that feels elevated for every occasion.
          </p>

          <div className="whyPoints">
            <div className="whyPoint">
              <h3>Handcrafted with love</h3>
              <p>Detailed finishing and careful tailoring in every outfit.</p>
            </div>
            <div className="whyPoint">
              <h3>Premium quality</h3>
              <p>Elegant fabrics, rich embroidery, and comfortable wear.</p>
            </div>
            <div className="whyPoint">
              <h3>Timeless designs</h3>
              <p>Styles that feel current but remain classic for years.</p>
            </div>
          </div>
        </div>

        <div className="whyVisual">
          <div className="whyCard">
            <div className="whyCardInner">
              <p>Trivenistitch</p>
              <h3>Luxury ethnic wear with a soft feminine signature.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}