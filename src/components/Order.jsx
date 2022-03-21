import React, { useContext } from 'react'
import styles from "../styles/Order.module.css"
// import "../styles/global.css"

import arrow from "@icons/arrow.svg"
import AppContext from '../context/AppContext'
import Image from 'next/image'
import Product from './Product'

function Order({order}) {
  const style = {
    height: `${order.numberOfArticles * 4 + 0.6}rem`
  }
  return (
    <article>
      <input type="checkbox" className={styles['order-selected']}/>
      <div  className={styles['order']}>
        <div>
          <span className={styles['date']}>{order.date}</span>
          <span className={styles['number-of-articles']} >
            {order.numberOfArticles + " articles"}
          </span>
        </div>
        <div className={styles['order__price']}>
          <span className='price'>{"$"+order.price}</span>
          <Image alt='show products' src={arrow}/>
        </div>
      </div>
      <div style={style} className={styles['order-products']}>
        {order.products.map((product)=>
          product.map((item)=>(
            <Product type='product-order' product={item}/>
          )))}
      </div>
    </article>    
  )
}

export default Order
