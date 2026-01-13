import React from 'react'
import Card from './card.js'
import styles from './cards.module.css'

export default function cards({handlevalue,products}) {
  return (
    <div className={styles.cards}>
      {products.map(p => (
        <Card
          key={p.id}
          title={p.title}
          image={p.image}
          price={p.price}
          description={p.description}
          rating={p.rating.rate}
          count={p.rating.count}
          category={p.category}
          handlevalue={() => handlevalue(p)}
          
        />
      ))}
    </div>
  )
}
/*import React from 'react'
import styles from './main.module.css'
import logo from './assets/logo.jpg'
import sale from './assets/sale.jpg'
import Cards from './cards.js'
import Trendcards from './trendcards.js'
import Flashdeal from './flashdeal.js'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { User, Search, ShoppingCart, Laptop, Shirt, Home, Footprints, Book, UserRound, Puzzle } from "lucide-react";



export default function Main({handleAddToCart,Value,add}) {
  const [click, setclick] = useState(false);
  
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleclick=()=>{
      navigate("/cart");
  }
  
  const shuffle = (array) => {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();
      setProducts(shuffle(data));
    };
   fetchProducts();
  
  }, []);



  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logo1}>
            <img src={logo} alt='logo'></img>
            <h2>Logo</h2>
          </div>
          <div className={styles.logo2}>
            <Search color='rgba(138, 135, 135, 1)' className={styles.search} />
            <input type='text' placeholder='       Search' ></input>
            <User color='rgba(138, 135, 135, 1)' className={styles.user} />
            <ShoppingCart size={28} onClick={handleclick} />
            <div className={styles.cart}><span style={{ color: "white" }}>{Value}</span></div>
          </div>
        </div>
        {add?<div className={styles.addeditem}>
            <h3>{Value}  item{Value!==1?"s":null} added</h3>
        </div>:null}
        
        <div className={styles.sale}>
          <img src={sale} alt='sale'></img>
        </div>
        <div className={styles.categoriy}>
          <h3>Categoriy</h3>
          <div className={styles.virtical}></div>
          <div className={styles.categoriy1}>
            <h3><Laptop />Electronics</h3>
            <h3><Shirt /> Cloths</h3>
            <h3 ><Home /> Home</h3>
            <h3><Footprints /> Shoes</h3>
            <h3><Book /> Book</h3>
            <h3><User /> Man</h3>
            <h3><UserRound /> Women</h3>
            <h3>< Puzzle /> Kids</h3>
          </div>
        </div>
      </div>
      <div className={styles.arrival}>
        <h2>✨ New Arrival ✨</h2>
        <Cards handlevalue={handleAddToCart} products={products.slice(0, 9)} />
        <Cards handlevalue={handleAddToCart} products={products.slice(9, 18)} />
        <Cards handlevalue={handleAddToCart} products={products.slice(12, 21)} />
      </div>
      <div className={styles.trending}>
        <h2>✨ Trending Now ✨</h2>
      
        <div className={styles.trending1}>
          <Trendcards handlevalue={handleAddToCart} products={products.slice(0, 4)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(4, 8)}/>
          <Trendcards handlevalue={handleAddToCart} products={products.slice(8, 12)}/>
          <Trendcards handlevalue={handleAddToCart} products={products.slice(12, 16)}/>
        </div>
      </div>
      <div className={styles.flashdeal} onClick={() => { setclick(true) }}>
        <h2>⚡FLASH DEALS ARE HERE! ⚡</h2>
        <p>Our exclusive Flash Deals Event is live – and it’s bigger than ever. From everyday must-haves to trending bestsellers, everything is available at jaw-dropping discounts for a limited period.</p>
        <p>For a limited time only, enjoy massive discounts across fashion, electronics, home essentials, and more. These prices won’t last long – once they’re gone, they’re gone forever.</p>
        <h3 >click now to grab the hottest deals of the day!</h3>
      </div>
      {click ? <h3 type='click' className={styles.arrow} onClick={() => { setclick(false) }}>
        ←
      </h3> : null}

      {
        click ? (<Flashdeal />) : null
      }


    </div>
  )
}*/
