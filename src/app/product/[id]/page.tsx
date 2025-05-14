"use client"
import { useEffect, useState , use } from 'react';
import Header from '../../../components/Header';
import styles from '../../../styles/Product.module.css';


  function ProductPage({ params }: { params: Promise<{ id: string }> }) {
   const [data, setData] = useState<any>();

   const { id } = use(params);
  
      useEffect(()=>{
          CallApi();
      },[])
  
      const CallApi = async() => {
          await fetch(`https://fakestoreapi.com/products/${id}`)
              .then(response => response.json())
              .then(data => setData(data));
      }

      const handleClick = () => {
        console.log('Product added to cart!');
        localStorage.setItem('cart', JSON.stringify(data));
      };
    
  return (
    <>
      <Header />
      <div className={styles.product}>
        <img src={data?.image} alt="Product" />
        <div>
          <h1>Product #{data?.id}</h1>
          <p>{data?.category}</p>
          <p>Price: ₹{data?.price}</p>
          <p>{data?.description}</p>
          <button
           onClick={handleClick}
           style={{
             padding: '10px 20px',
             backgroundColor: '#0070f3',
             color: '#fff',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             width:"50%",
             alignSelf:"center"
           }}
          >Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
