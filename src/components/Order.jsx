import React from 'react'
import "@styles/Order.css"

import arrow from "@icons/arrow.svg"

function Order({children,date,numberOfArticles,price}) {
  return (
    <article>
      <input type="checkbox" className='order-selected'/>
      <div  className='order'>
        <div>
          <span className='date'>{date}</span>
          <span className='number-of-articles' >{numberOfArticles}</span>
        </div>
        <div className='order__price'>
          <span className='price'>{price}</span>
          <img alt='show products' src={arrow}/>
        </div>
      </div>
      <div className='order-products'>
        {children}
      </div>
    </article>    
  )
}

export default Order
