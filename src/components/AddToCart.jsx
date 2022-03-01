import React, { useContext, useState } from 'react'
import "@styles/AddToCart.css"

import add from "@icons/add-to-shopping-cart.svg"
import added from "@icons/added.svg"
import AppContext from '../context/AppContext'

function AddToCart({product}) {
  const { addToCartFunction, deleteToCartFunction, isInTheCart } = useContext(AppContext)

  const AddToCartButton = (product)=>{
    if(isInTheCart(product.id)){
      deleteToCartFunction(product.id)      
    } else{
      addToCartFunction(product)
    }
  }

  return (
    <div className='add-button'>
      <label htmlFor={"add-to-cart-"+product.id}>{""}</label>
        <input 
        id={"add-to-cart-"+product.id} 
        type="checkbox" 
        onClick={()=>AddToCartButton(product)}/>

      <img 
        alt='add to the shopping cart'
        className='add-image'
        src={isInTheCart(product.id) ? added : add}
      />
    </div>   
  )
}



export default AddToCart
