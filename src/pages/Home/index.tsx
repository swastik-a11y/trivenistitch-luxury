import React from "react";
import ProductCard from "./ProductCard";
import styles from "./Home.module.css";

const collections = [
  { title: "TRIVENI", tagline: "Where Every Journey Begins", img: "/icons.svg" },
  { title: "YAMUNA", tagline: "Grace in Motion", img: "/icons.svg" },
  { title: "SARASWATI", tagline: "The Art of Simplicity", img: "/icons.svg" },
  { title: "MANDAKINI", tagline: "Bloom Beautifully", img: "/icons.svg" },
  { title: "ALAKNANDA", tagline: "Royal Heritage", img: "/icons.svg" },
  { title: "GANGA", tagline: "The Sacred Signature", img: "/icons.svg" },
];

const newArrivals = [
  { title: "White & Gold Embroidered Suit", price: "3799", img: "/icons.svg" },
  { title: "Sage Green Embroidered Suit", price: "3299", img: "/icons.svg" },
  { title: "Rani Pink Embroidered Suit", price: "3599", img: "/icons.svg" },
];

export default function Home() {
  return (
    <div>
      <div className="section" style={{ paddingTop: 12, paddingBottom: 12 }}>
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <div className="badge">Free shipping over ₹5000</div>
        </div>
      </div>

      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, backdropFilter: "blur(4px)", zIndex: 40 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0" }}>
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22 }}>TRIVENISTITCH</div>
          <nav style={{ display: "flex", gap: 28 }}>
            <a href="#">Home</a>
            <a href="#collections">Collections</a>
            <a href="#story">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="secondary-btn">Login</button>
            <button className="secondary-btn">Cart</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="container hero">
          <div className="hero-left">
            <div className="badge">NEW COLLECTION 2026</div>
            <h1 className="hero-title">Elegance
              <br />Tailored for
              <br /><span style={{ color: "var(--primary)" }}>Every Occasion.</span>
            </h1>
            <p className="hero-sub">Discover handcrafted ethnic wear that blends timeless tradition with modern elegance.</p>
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <button className="primary-btn">Shop Collection</button>
              <button className="secondary-btn">Discover</button>
            </div>
          </div>
          <div>
            <div className="card image-hover">
              <img src="/favicon.svg" alt="Hero" style={{ height: 520, objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Featured Collections</h2>
          <div className="collections-grid" style={{ marginTop: 18 }}>
            {collections.map((c) => (
              <div key={c.title} className="collection-card image-hover">
                <img src={c.img} alt={c.title} />
                <div className="overlay">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, letterSpacing: "0.12em" }}>{c.title}</div>
                    <div style={{ marginTop: 6, fontSize: 12 }}>{c.tagline}</div>
                    <div style={{ marginTop: 8 }}>
                      <button className="secondary-btn">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + New Arrivals */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28 }}>Why Trivenistitch?</h3>
            <ul style={{ marginTop: 18, color: "var(--muted)" }}>
              <li style={{ marginBottom: 12 }}><strong>Handcrafted with love</strong><br />Each piece is crafted by skilled artisans with attention to every detail.</li>
              <li style={{ marginBottom: 12 }}><strong>Premium quality</strong><br />We use the finest fabrics and embroidery techniques for unmatched quality.</li>
              <li style={{ marginBottom: 12 }}><strong>Timeless designs</strong><br />Elegant styles that celebrate tradition while embracing modern aesthetics.</li>
            </ul>
          </div>

          <div>
            <h2 className="section-title">New Arrivals</h2>
            <div className="new-grid" style={{ marginTop: 12 }}>
              {newArrivals.map((p) => (
                <ProductCard key={p.title} title={p.title} price={p.price} img={p.img} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section">
        <div className="container">
          <h3 className="section-title">Instagram Gallery</h3>
          <div className="instagram-grid" style={{ marginTop: 12 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card image-hover"><img src="/icons.svg" alt={`IG ${i + 1}`} /></div>
            ))}
          </div>
          <div style={{ marginTop: 12, textAlign: "center", color: "var(--muted)" }}>FOLLOW US @TRIVENISTITCH</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ marginBottom: 6 }}>Be the first to know</h3>
              <p style={{ color: "var(--muted)" }}>Join our newsletter for new arrivals, exclusive offers and style inspiration.</p>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input aria-label="Email" placeholder="Enter your email" style={{ padding: 12, borderRadius: 6, border: "1px solid #eee" }} />
              <button className="primary-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          <div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18 }}>TRIVENISTITCH</div>
            <p style={{ color: "var(--muted)" }}>Timeless tradition. Thoughtful craftsmanship. Made for you.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul style={{ color: "var(--muted)" }}>
              <li>All Collections</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
            </ul>
          </div>
          <div>
            <h4>Customer Care</h4>
            <ul style={{ color: "var(--muted)" }}>
              <li>Contact Us</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchange</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
