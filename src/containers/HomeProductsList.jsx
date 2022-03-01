import React, { useContext } from 'react'
import HomeProduct from './HomeProduct'
import "@styles/HomeProductsList.css"
import useGetProducts from '../hooks/useGetProducts'
import AppContext from '../context/AppContext'

const API = "https://api.escuelajs.co/api/v1/products?limit=50&offset=1"

function HomeProducts() {
  const {state, changeCartVisibility} = useContext(AppContext)

  let blurActive = (state.navCartIsOpen) ? "blur-active": ""
  const products = useGetProducts(API)
  return (
    <section className='home-products'>
      {products.map(product=>(
        <HomeProduct
          key={product.id}
          img={product.images[0]}
          price={"$"+product.price}
          article={product.title}
          product={product}
        />
      ))}
      <div onClick={()=>changeCartVisibility()} className={'blur ' + blurActive}></div>
    </section>    
  )
}

export default HomeProducts
