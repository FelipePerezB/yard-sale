import React from 'react'
import Button from '../components/Button'
import "@styles/CartCount.css"
import useReedirect from '../hooks/useReedirect'

function CartCount({price}) {
  return (
    <section className='cart-count' >
      <div className='count'>
        <span>Total</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonFunction={useReedirect} parameter="/my-orders" >
        Checkout
      </Button>
    </section>   
  )
}

export default CartCount
