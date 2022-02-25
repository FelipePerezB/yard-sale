import React from 'react'
import "@styles/AddToCart.css"

import cart from "@icons/add-to-shopping-cart.svg"

function AddToCart() {
  return (
    <button className='add-button'>
      <img src={cart}/>
    </button>   
  )
}

export default AddToCart
