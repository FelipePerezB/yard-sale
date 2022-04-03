import React, { useContext } from 'react';
import HomeProduct from './HomeProduct';
import styles from "../styles/HomeProductsList.module.css";
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';
// import boat from "@images/boat.jpg"

const API = "https://api.escuelajs.co/api/v1/products?limit=30&offset=1";

function HomeProducts() {
  const {state } = useContext(AppContext);

  let category = state.homeProductsCategory;
  const products = useGetProducts(API);
  // const products=[
  //   {
  //     price:200,
  //     id:0,
  //     images:[boat, boat, boat],
  //     title:"bote",
  //     category:"Toys",
  //     description:"Holaaaaaaaa"
  //   }
  // ]
  return (
    <section className={styles['home-products']}>
      {products.map(product=>(
        (product.category.name===category || category === "All")
          ? <HomeProduct
          key={product.id}
          img={product.images[0]}
          price={"$"+product.price}
          article={product.title}
          product={product}
        />
        : null 
      ))}
    </section>    
  )
}

export default HomeProducts
