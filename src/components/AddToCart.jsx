import React, { useState } from 'react'
import "@styles/AddToCart.css"

import add from "@icons/add-to-shopping-cart.svg"
import added from "@icons/added.svg"

let n = 0
let id=0

function AddToCart() {
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
      <img 
        alt='add to the shopping cart'
        className='add-image'
        src={icon ? added : add}
      />
    </div>   
  )
}



export default AddToCart
