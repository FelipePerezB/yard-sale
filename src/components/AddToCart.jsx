import React, { useState } from 'react'
import "@styles/AddToCart.css"

import add from "@icons/add-to-shopping-cart.svg"
import added from "@icons/added.svg"

function AddToCart() {
  return (
    <div className='add-button'>
      <input type="checkbox"/>
      <img className='added-image' src={added}/>
      <img className='add-image' src={add}/>
    </div>   
  )
}



export default AddToCart
