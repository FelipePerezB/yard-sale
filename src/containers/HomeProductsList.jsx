import React, { useContext } from 'react'
import HomeProduct from './HomeProduct'
import styles from "../styles/HomeProductsList.module.css"
import useGetProducts from '../hooks/useGetProducts'
import AppContext from '../context/AppContext'
import boat from "@images/boat.jpg"

const API = "https://api.escuelajs.co/api/v1/products?limit=30&offset=1"

function HomeProducts() {
  const {state } = useContext(AppContext)

  let category = state.homeProductsCategory
  // const products = useGetProducts(API)
  const products=[
    {
      price:200,
      id:0,
      images:[boat, boat, boat],
      title:"bote",
      category:"Toys",
      description:"Holaaaaaaaa"
    }
  ]
  return (
    <section className={styles['home-products']}>
      {products.map(product=>(
        (product.category.name===category || category === "All")
          ? <HomeProduct
          key={product.id}
          img={product.images[0]}
          // img= {(product.images[0]!==undefined)
          //   ? product.images[0]
          //   : "https://www.dhresource.com/0x0/f2/albu/g19/M00/94/43/rBVap2EQuXOAbfu5AAD9cpdl968109.jpg/shoulder-capacity-simple-luxury-large-slung.jpg"}
          price={"$"+product.price}
          article={product.title}
          product={product}
        />
        : null 
      ))}
      {/* <div onClick={()=>changeCartVisibility()} className={styles[blurActive]}></div> */}
    </section>    
  )
}

export default HomeProducts
