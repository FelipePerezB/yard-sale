import React from 'react'
import "@styles/HomeProduct.css"
import AddToCart from '../components/AddToCart'

function HomeProduct({img, price, article}) {
  return (
    <a href='/product-info' className='home-product' >
      <img className='home-product__img' src={img} />  
      <section className='home-product-description' >
        <span className='home-product-price' >{price}</span> 
        <span className='home-product-article' > {article}</span> 
        <AddToCart/>
      </section>
    </a>
  )
}

export default HomeProduct
