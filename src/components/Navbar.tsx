import React from "react";

export default function Navbar() {
  return (
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
  );
}
