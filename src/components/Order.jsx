import React from 'react'
import "../styles/Order.css"

function Order({date,numberOfArticles,price}) {
  return (
    <div className='order'>
      <div>
        <span className='date'>{date}</span>
        <span className='number-of-articles' >{numberOfArticles}</span>
      </div>
      <div>
      <span className='price'>{price}</span>
      <span></span>
      </div>
    </div>    
  )
}

export default Order
