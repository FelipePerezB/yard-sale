import React, { useContext, useState } from 'react'
// import "../styles/AddToCart.module.css"
// import "../styles/AddToCart.module.css"
import styles from "../styles/AddToCart.module.css"
import Image from 'next/image'

import add from "@icons/add-to-shopping-cart.svg"
import added from "@icons/added.png"
import AppContext from '../context/AppContext'

function AddToCart({product}) {
  const { addToCartFunction, deleteToCartFunction, isInTheCart } = useContext(AppContext)

  let image = isInTheCart(product.id) ? added : add
  let isAdded = isInTheCart(product.id) ? true : false

  const AddToCartButton = (product)=>{
    if(isInTheCart(product.id)){
      deleteToCartFunction(product.id)      
    } else{
      addToCartFunction(product)
    }
  }

  const style={
    with:"10px"
  }

  return (
    <div className={styles[""]}>
      <div 
      style={
        (isAdded)
          ?{
        backgroundColor:"white"
      } : null
      } 
      className={styles['add-button']}>
        <label htmlFor={"add-to-cart-"+product.id}>{""}</label>
          <input 
          id={"add-to-cart-"+product.id} 
          type="checkbox" 
          onClick={()=>AddToCartButton(product)}/>

          {/* <div */}
          <>
            <Image
              width={"25"}
              height={"25"}
              // style={style}

              // styles={{
              //   width:"100%"
              // }}
              // className={styles['add-image']}
              alt='add to cart'
              src={image}
            />

          </>
          {/* </div> */}

      </div>   
    </div>
  )
}



export default AddToCart
