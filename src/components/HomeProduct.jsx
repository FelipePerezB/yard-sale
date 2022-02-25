import React from 'react'
import "../styles/HomeProduct.css"

function HomeProduct({img, price, article}) {
  return (
    <div className='home-product' >
      <img src={img} />  
      <section className='home-product-description' >
        <span className='home-product-price' >{price}</span> 
        <span className='home-product-article' > {article}</span> 
        <span className='home-product-cart'>Cart</span>
      </section>
    </div>
  )
}

export default HomeProduct
