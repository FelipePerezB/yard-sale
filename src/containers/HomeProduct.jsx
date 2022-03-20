import React from 'react'
import styles from "../styles/HomeProduct.module.css"
import Image from 'next/image'
import AddToCart from '@components/AddToCart'
import Link from 'next/link'

function HomeProduct({product,img, price, article}) {
  return (
    <a href={"yard-sale/ProductInfo"} >
      <div className={styles['home-product']}>
        <img
          // width={100}
          // height={150}
          className={styles['home-product__img']} 
          src={img} 
          alt={article} 
        />  
        <section className={styles['home-product-description']} >
          <span className={styles['home-product-price']} >{price}</span> 
          <span className={styles['home-product-article']} > {article}</span> 
          <AddToCart product={product}/>
        </section>
      </div>
    </a>
  )
}

export default HomeProduct
