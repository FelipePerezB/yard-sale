import React, { useContext } from 'react'
import Button from '@components/Button'
// import "../styles/CartCount.module.css"
import styles from "../styles/CartCount.module.css"
import AppContext from '../context/AppContext'

function CartCount() {
  const {state, setOrder, changeCartVisibility} = useContext(AppContext)
  const cart = state.cart
  let finalPrice=0
  if(cart.length > 0){
    finalPrice=cart.reduce((price, item) =>(price+item.price),0)
  }


  function Checkout(){
    setOrder(state.cart)
    // changeCartVisibility()
  }

  return (
    <section className={styles['cart-count']} >
      <div className={styles['count']}>
        <span>Total</span>
        <span className='price'>{"$"+finalPrice}</span>
      </div>
      <Button buttonClass="button" buttonFunction={()=>{
        setOrder(state.cart)
        // changeCartVisibility()
        }} 
        url={"/yard-sale/MyOrders"}
        >
          Checkout
        </Button>
    </section>   
  )
}

export default CartCount
