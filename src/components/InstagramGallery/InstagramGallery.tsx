import React from "react";

export default function InstagramGallery(): JSX.Element {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    src: "/icons.svg",
    alt: `Instagram ${i + 1}`,
  }));

  return (
    <div className="instagram-grid" style={{ marginTop: 12 }}>
      {items.map((it) => (
        <div key={it.id} className="card image-hover">
          <img src={it.src} alt={it.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
