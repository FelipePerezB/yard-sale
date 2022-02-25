import React from 'react'
import "@styles/Order.css"

import arrow from "@icons/arrow.svg"

function Order({date,numberOfArticles,price}) {
  return (
    <div className='order'>
      <div>
        <span className='date'>{date}</span>
        <span className='number-of-articles' >{numberOfArticles}</span>
      </div>
      <div className='order__price'>
        <span className='price'>{price}</span>
        <img src={arrow}/>
      </div>
    </div>    
  )
}

export default Order
