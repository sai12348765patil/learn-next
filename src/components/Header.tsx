// components/Header.tsx
'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>E-Shop</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}
