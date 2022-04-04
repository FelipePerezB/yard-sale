import React, { useContext } from 'react'
import Product from '@components/Product'
import AppContext from '../context/AppContext'
import CartCount from './CartCount'
import styles from "../styles/NavShoppingCart.module.css"
import Warning from '@components/Warning'

import arror from "@icons/arrow.svg"
import Image from 'next/image'
import LinkButton from '@components/LinkButton'

function NavShoppingCart({product}) {
  const {state, changeCartVisibility} = useContext(AppContext)
  let cartState = (state.navCartIsOpen) ? "main-cart-open" : "nav-shopping-cart"

  let blurActive = (state.navCartIsOpen) ? "blur-active": "blur"
  return (
    <>
      <div className={styles[cartState]}>
        <div className={styles["close-cart"]} onClick={()=>changeCartVisibility()}>
          <Image
            alt='close cart'
            src={arror}
          />
          <p>Close</p>
        </div>
        {
          (state.user.email)
            ? 
              <>
                {(!product[0]) 
                    ? <Warning text="No has añadido productos al carro" instruction="Presiona 'add to cart' en el producto para añadirlo"/> 
                    : null
                }
                <div className={styles.products}>
                  {product.map((item)=>(
                    <Product
                      product={item}
                      key={item.id}
                      type="product"
                    />
                  ))}
                </div>
              </>
            : 
              <LinkButton href={"login"}>Inicia sesión para añadir productos</LinkButton>
        }

        {(product[0]) ? <CartCount/> : null }
      </div>
      <div onClick={()=>changeCartVisibility(false)} className={styles[blurActive]}></div> 
    </>
  )
}

export default NavShoppingCart
