import "./NewArrivals.css";

const items = [
  { name: "White & Gold Embroidered Suit", price: "₹3,799" },
  { name: "Sage Green Luxury Suit", price: "₹3,299" },
  { name: "Rani Pink Embroidered Suit", price: "₹3,599" },
  { name: "Lilac Floral Suit Set", price: "₹3,499" },
  { name: "Ivory Floral Suit Set", price: "₹3,499" },
  { name: "Mustard Embroidered Suit", price: "₹3,299" },
];

export default function NewArrivals() {
  return (
    <section className="newArrivalsSection" id="new-arrivals">
      <div className="newArrivalsHeader">
        <p className="sectionKicker">New Arrivals</p>
        <h2 className="sectionTitle">
          Fresh styles for celebrations and everyday elegance.
        </h2>
      </div>

      <div className="newArrivalsGrid">
        {items.map((item) => (
          <article key={item.name} className="arrivalCard">
            <div className="arrivalImage" />
            <div className="arrivalBody">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button className="arrivalBtn">Add to Cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}