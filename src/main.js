import styles from './main.module.css'
import logo from './assets/logo.jpg'
import sale from './assets/sale.jpg'
import Cards from './cards.js'
import Trendcards from './trendcards.js'
import Footer from './footer.js';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { User, ShoppingCart, Laptop, Shirt, Home, Footprints, Book, UserRound, Puzzle } from "lucide-react";



export default function Main({ handleAddToCart, Value, add }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleclick = () => {
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
        <div className={styles.menuContainer}>
          <button onClick={() => setOpen(!open)} className={styles.hamburgerBtn}>
            ☰
          </button>

          {open && <div className={styles.menuOverlay} onClick={() => setOpen(false)}></div>}

          <div className={`${styles.sideMenu} ${open ? styles.sideMenuOpen : ""}`}>
            <div className={styles.menuHeader}>
              <h2>Menu</h2>
            </div>
            <nav className={styles.menuLinks}>
              <Link to="/login">Login</Link>
              <a href="/">Settings</a>
              <a href="/">Other Options</a>
            </nav>
          </div>
        </div>
        <div className={styles.logo}>


          <div className={styles.logo1}>
            <img src={logo} alt='logo'></img>
            <h2>Logo</h2>
          </div>
          <div className={styles.logo2}>
            <input type='text' placeholder='Search you want...' value={query}
              onChange={(e) => setQuery(e.target.value)} ></input>
            <div className={styles.user}>
              {query === "" && <User color='rgba(138, 135, 135, 1)' />}
            </div>
            <div>
              <ShoppingCart onClick={handleclick} className={styles.shopping} />
            </div>
            <div>
              <div className={styles.cart}><span style={{ color: "white" }}>{Value}</span></div>
            </div>

          </div>
        </div>
        {add ? <div className={styles.addeditem}>
          <h3>{Value}  item{Value !== 1 ? "s" : null} added</h3>
        </div> : null}

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
        <div className={styles.h2}><h2>✨ New Arrival ✨</h2></div>

        <Cards handlevalue={handleAddToCart} products={products.slice(0, 9)} />
        <Cards handlevalue={handleAddToCart} products={products.slice(9, 18)} />
        <Cards handlevalue={handleAddToCart} products={products.slice(12, 21)} />
      </div>
      <div className={styles.trending}>
        <h2>✨ Trending Now ✨</h2>

        <div className={styles.trending1}>
          <Trendcards handlevalue={handleAddToCart} products={products.slice(0, 4)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(4, 8)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(8, 12)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(12, 16)} />
        </div>
        <div className={styles.trending2}>
          <Trendcards handlevalue={handleAddToCart} products={products.slice(0, 2)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(2, 4)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(4, 6)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(6, 8)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(8, 10)} />
          <Trendcards handlevalue={handleAddToCart} products={products.slice(10, 12)} />
        </div>
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>

    </div>
  )
}
