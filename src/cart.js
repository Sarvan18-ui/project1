import React from 'react'
import styles from './cart.module.css'

export default function Cart({ cart }) {

  return (
    <div className={styles.cart}>


      <h2>Cart Items:</h2>
      <hr></hr>
      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        cart.map((item, i) => (

          <div key={i} className={styles.cart1}>

            <div className={styles.cart1a}><img src={item.image} alt={item.title}></img></div>
            <div className={styles.cart1b}> <h3>{item.title}</h3>
              <h3>{item.description}</h3>
              <p>₹{item.price}</p>
              <button>Place order</button>
            </div>
            <hr></hr>
          </div>


        ))

      )}


    </div>
  )
}
