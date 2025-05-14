// components/ProductCard.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h1>₹{product.price}</h1>
      <h6>{product.title}</h6>
    </Link>
  );
}
