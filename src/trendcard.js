import React from 'react'
import styles from './trendcard.module.css'
import { useNavigate } from 'react-router-dom';

export default function Trendcard({handlevalue,image,title,price,id,rating,count,description,category}) {
  const navigate=useNavigate();
  
const handleclick=()=>{
  navigate(`/item/${id}`, { state: { id, image, title, price,rating,count,description,category } });
}
  return (
    <div className={styles.trendcard}>
      <div className={styles.trendcard1}>
        <img src={image} alt={title} onClick={handleclick}></img>
      </div>
      <div className={styles.trendcard2}>
        <p onClick={handleclick}>{title}</p>
        <p>${price}</p>
        <button onClick={()=>{if(handlevalue) handlevalue();}} type='submit'>Add to Cart</button>
      </div>
    </div>
  )
}
