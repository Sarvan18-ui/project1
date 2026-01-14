import React from 'react'
import styles from './login.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Login() {
  const[click,setclick]=useState(false);
  const [open, setOpen] = useState(false);
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [query3, setQuery3] = useState("");
  const [query4, setQuery4] = useState("");
  const [query5, setQuery5] = useState("");
  const [query6, setQuery6] = useState("");
  const [query7, setQuery7] = useState("");
  const handleChange = (e) => {
    const lettersOnly = e.target.value.replace(/[^a-zA-Z- ]/g, "");
    setQuery1(lettersOnly);
  };
  const handleChange1 = (e) => {
    const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
    setQuery5(numbersOnly);

  };
  const handlesign=()=>{
    setclick(!click);
  }

  
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  }
  const handlesignup=()=>{
    navigate("/");
  }
  return (
    <div className={styles.login}>
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
          <Link to="/">Home</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Settings</Link>
        </nav>
      </div>
    </div>
      
      <div className={styles.login2}>
        {click?<div className={styles.login2a}>
        <h2 >SignUp<hr></hr></h2>
        </div>:<div className={styles.login2a}>
        <h2 >Login<hr></hr></h2>
        
        </div>}
        {click?<div className={styles.login2b}>
          <input value={query1} onChange={handleChange} type='name' placeholder=' Name'></input>
          <input value={query4} onChange={(e) => setQuery4(e.target.value)} type='email' placeholder=' Add e-Mail'></input>
          <input value={query5} onChange={handleChange1} maxLength={10} placeholder=' Contact number'></input>
          <input value={query6} onChange={(e) => setQuery6(e.target.value)} type='password' placeholder=' Add your Password'></input>
          <input value={query7} onChange={(e) => setQuery7(e.target.value)} type='password' placeholder=' Confirm your Password'></input>
          {query1&&query5&&query6&&query7&&query6===query7?<button onClick={handlesignup}>Get in</button>:<button>Get in</button>}
          
          <div className={styles.loginAcc}>
          <span>Already have account?</span>
          <span onClick={handlesign}>Login</span>
          </div>
        </div>:<div className={styles.login2b}>
          <input value={query1} onChange={handleChange} type="text" placeholder=' Name'></input>
          <input value={query2} onChange={(e) => setQuery2(e.target.value)} type='email' placeholder=' e-Mail'></input>
          <input value={query3} onChange={(e) => setQuery3(e.target.value)} type='password' placeholder=' Password'></input>
          <div className={styles.forgot}>
          <span>forgot password?</span>
          <span>click here</span>
          </div>
          {query1&&query2&&query3?<button onClick={handleclick}>Get in</button>:<button>Get in</button>}
          <div className={styles.signup}>
          <span>Don't have account?</span>
          <span onClick={handlesign}>SignUp</span>
          </div>
        </div>}
        
      </div>
      </div>
    
      
    
  )
}
