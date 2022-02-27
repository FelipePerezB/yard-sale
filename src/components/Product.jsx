import React from 'react'
import "@styles/Product.css"

import x from "@icons/x.svg"

function Product({type="product",img,article,price}) {
  return (
    <div className={type}>
      <div className='description'>
        <img src={img}/>
        <span className='article'>{article}</span>
      </div>
      <div>
        <span className='price'>{price}</span>
        <img className='x' src={x} />
      </div>
      <input type="checkbox"/>
      <div className='deleted'>
        <span>Removed from the cart</span>
      </div>
    </div>    
  )
}

export default Product
