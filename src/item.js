import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './item.module.css';
import { Zap } from "lucide-react";

export default function Item() {
  const location = useLocation(); 
  const product = location.state;

  return (
    <div className={styles.contain}>

    <div className={styles.item}>
      {product ? (
        <>
        <div  className={styles.item1}>
            <img src={product.image} alt={product.title} width="200" />
            
        </div>
        <div className={styles.item2}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Item type: {product.category}</p>
          <h3>Product rating {product.rating}/5</h3>
          <h3>Items left: {product.count}</h3>
          <p>Price: ${product.price}</p>
          <div className={styles.item1a}>
                
                <button><Zap/> BUY NOW</button>
          </div>
        </div>
          
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
    </div>
  );
}
