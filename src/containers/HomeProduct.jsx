import React from 'react'
import "@styles/HomeProduct.css"
import AddToCart from '../components/AddToCart'

function HomeProduct({product,img, price, article}) {
  return (
    <a href='/product-info' className='home-product' >
      <img className='home-product__img' src={img} alt={article} />  
      <section className='home-product-description' >
        <span className='home-product-price' >{price}</span> 
        <span className='home-product-article' > {article}</span> 
        <AddToCart product={product}/>
      </section>
    </a>
  )
}

export default HomeProduct
