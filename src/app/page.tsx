"use client"
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

type datatype = {
    id: number,
   title: string,
   price: number,
    description: string,
    category: string,
   image:string
}

export default function HomePage() {

    const [data, setData] = useState<datatype[]>([]);

    useEffect(()=>{
        CallApi();
    },[])

    const CallApi = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }
    return (
        <>
            <Header />
            <div className={styles.container}>
                {data.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </>
    );
}
