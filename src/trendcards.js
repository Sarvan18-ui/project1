import React from 'react'
import Trendcard from './trendcard.js'
import styles from './trendcards.module.css'

export default function Trendcards({ handlevalue, products }) {
  return (
    <div className={styles.trendcards}>
      {products.map(p => (
        <Trendcard
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
