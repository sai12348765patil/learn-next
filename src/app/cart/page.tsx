"use client"
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import styles from '../../styles/Cart.module.css';
import ProductCard from '@/components/ProductCard';

export default function CartPage() {
  
    const [data, setData] = useState<any[]>([]);


  useEffect(()=>{
    const savedCart = localStorage.getItem('cart');
    setData([...data,savedCart])
  },[])
  return (
    <>
      <Header />
      <div className={styles.container}>
                {data?.map((p:any) => <ProductCard key={p.id} product={p} />)}
            </div>
    </>
  );
}
