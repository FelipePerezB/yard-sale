import React from 'react'
import Button from '../components/Button'
import "../styles/CartCount.css"

function CartCount({price}) {
  return (
    <section className='cart-count' >
      <div className='count'>
        <span>Total</span>
        <span>{price}</span>
      </div>
      <Button>
        Checkout
      </Button>
    </section>   
  )
}

export default CartCount
