import React, { useContext } from 'react'
import Product from '@components/Product'
import AppContext from '../context/AppContext'
import CartCount from './CartCount'
import styles from "../styles/NavShoppingCart.module.css"
import Warning from '@components/Warning'
import sad from "@icons/sad.svg"

function NavShoppingCart({product}) {
  const {state, changeCartVisibility} = useContext(AppContext)
  let cartState = (state.navCartIsOpen) ? "main-cart-open" : "nav-shopping-cart"
  
  let blurActive = (state.navCartIsOpen) ? "blur-active": "blur"
  // if(state.i){
  //   NavShoppingCartContainer= "nav-shopping-cart main-cart-open" 
  // } else{
  //   NavShoppingCartContainer="nav-shopping-cart"
  // }
  // let NavShoppingCartContainer = "nav-shopping-cart" + type
  return (
    <>
    <div className={styles[cartState]}>
      {(product[0]) ? null : <Warning text="No has añadido productos al carro" instruction="Presiona 'add to cart' en el producto para añadirlo"/>}
      <div className={styles.products}>
        {product.map((item)=>(
          <Product
            product={item}
            key={item.id}
            type="product"
          />
        ))}
      </div>
      {(product[0]) ? <CartCount/> : null }
      {/* <CartCount/>    */}
    </div>
    <div onClick={()=>changeCartVisibility(false)} className={styles[blurActive]}></div> 
    </>
  )
}

export default NavShoppingCart
