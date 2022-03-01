import React, { useContext } from 'react'
import "@styles/Order.css"

import arrow from "@icons/arrow.svg"
import AppContext from '../context/AppContext'

function Order({children,date,price}) {
  const { state } = useContext(AppContext)
  const numberOfArticles =   state.cart.length
  return (
    <article>
      <input type="checkbox" className='order-selected'/>
      <div  className='order'>
        <div>
          <span className='date'>{date}</span>
          <span className='number-of-articles' >
            {(state) ? numberOfArticles : 0}
          </span>
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
