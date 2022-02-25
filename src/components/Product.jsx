import React from 'react'
import "../styles/Product.css"

function Product({type,article,price}) {
  return (
    <div className={type}>
      <div>
        <img src='../media/download.jpg' />
        <span>{article}</span>
      </div>
      <div>
        <span>{price}</span>
        <span></span>
      </div>
    </div>    
  )
}

export default Product
