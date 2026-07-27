import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="footerBrand">
          <h2>TRIVENISTITCH</h2>
          <p>Tailored for You</p>

          <span>
            Luxury ethnic wear crafted with elegance,
            premium fabrics and timeless craftsmanship.
          </span>
        </div>

        <div className="footerColumn">
          <h4>Shop</h4>

          <a href="#">New Arrivals</a>
          <a href="#">Festive Collection</a>
          <a href="#">Wedding Collection</a>
          <a href="#">Best Sellers</a>
        </div>

        <div className="footerColumn">
          <h4>Company</h4>

          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>

        <div className="footerColumn">
          <h4>Follow</h4>

          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Facebook</a>
        </div>

      </div>

      <div className="footerBottom">
        © 2026 Trivenistitch. All Rights Reserved.
      </div>

    </footer>
  );
}