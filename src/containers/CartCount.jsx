import React, { useContext } from 'react'
import Button from '../components/Button'
import "@styles/CartCount.css"
import useReedirect from '../hooks/useReedirect'
import AppContext from '../context/AppContext'

function CartCount() {
  const {state} = useContext(AppContext)
  const cart = state.cart
  let finalPrice=0
  if(cart.length > 0){
    finalPrice=cart.reduce((price, item) =>(price+item.price),0)
  }

  return (
    <section className='cart-count' >
      <div className='count'>
        <span>Total</span>
        <span className='price'>{"$"+finalPrice}</span>
      </div>
      <Button buttonFunction={useReedirect} parameter="/my-orders" >
        Checkout
      </Button>
    </section>   
  )
}

export default CartCount
