import React from 'react';
import styles from "../styles/Order.module.css";
import arrow from "@icons/arrow.svg";
import Image from 'next/image';
import Product from './Product';

function Order({order}) {
  const style = {
    height: `${order.numberOfArticles * 4 + 0.6}rem`
  };
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

            <Product key={item.title} type='product-order' product={item}/>
          )))}
      </div>
    </article>    
  );
};

export default Order;
