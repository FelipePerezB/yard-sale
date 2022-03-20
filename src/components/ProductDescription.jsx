import React from 'react'
import styles from "../styles/ProductDescription.module.css"
import Image from 'next/image'

function ProductDescription({img,price, article,description}) {
  return (
    <>
      <Image alt={article} className={styles['image-article']} src={img}/>
      <div className={styles['price-article']}>
        <span className={styles['price']} >{price}</span>
        <span className={styles['article']} >{article}</span>
      </div>    
      <p>
        {description}
      </p>
    </>
  )
}

export default ProductDescription
