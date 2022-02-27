import React, { useState } from 'react'
import "@styles/AddToCart.css"

import add from "@icons/add-to-shopping-cart.svg"
import added from "@icons/added.svg"

function sum(n){
  return n+1
}

let n = 0

let id=0

function AddToCart() {
  const addedElement = <img className='added-image' src={added}/>
  const [icon, addedToTheCart] = useState(false)
  const handleToggle = () =>{
    (icon) ? n-=1 : n+=1
    console.log(n)
    addedToTheCart(!icon)
  } 
  id+=1

  return (
    <div className='add-button'>
      <label htmlFor={"add-to-cart-"+id}>{""}</label>
        <input id={"add-to-cart-"+id} type="checkbox" onClick={handleToggle}/>
      {icon && addedElement}
      <img alt='add to the shopping cart' className='add-image' src={add}/>
    </div>   
  )
}



export default AddToCart
