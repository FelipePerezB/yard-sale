import React, { useContext } from 'react'
import Button from '@components/Button'
// import "../styles/CartCount.module.css"
import styles from "../styles/CartCount.module.css"
import useReedirect from '../hooks/useReedirect'
import AppContext from '../context/AppContext'
import useCheckout from '@hooks/useCheckout'

function CartCount() {
  const {state, setOrder} = useContext(AppContext)
  const cart = state.cart
  let finalPrice=0
  if(cart.length > 0){
    finalPrice=cart.reduce((price, item) =>(price+item.price),0)
  }


  function Checkout(){
    setOrder(state.cart)
  }

  return (
    <section className={styles['cart-count']} >
      <div className={styles['count']}>
        <span>Total</span>
        <span className={styles['price']}>{"$"+finalPrice}</span>
      </div>
      <Button buttonClass="button" buttonFunction={()=>(Checkout())} url={"/yard-sale/MyOrders"}>
        Checkout
      </Button>
    </section>   
  )
}

export default CartCount
