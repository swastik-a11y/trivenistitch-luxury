import React from "react";
import { Heart } from "lucide-react";
import styles from "./ProductCard.module.css";

export interface ProductCardProps {
  title: string;
  price: string;
  img: string;
}

export default function ProductCard({ title, price, img }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={img} alt={title} loading="lazy" />
        <button className={styles.wishlist} aria-label={`Add ${title} to wishlist`}>
          <Heart size={18} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.footer}>
          <div className={styles.price}>₹{price}</div>
          <button className={styles.cart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
