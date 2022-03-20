import React, { useContext, useState } from 'react'
import styles from "../styles/Product.module.css"

import x from "@icons/x.svg"
import AppContext from '../context/AppContext'
import Image from 'next/image'

function Product({type="product",product}) {
  const { addToCartFunction, deleteToCartFunction } = useContext(AppContext)

  const [addedBool, addedToTheCart] = useState(true)


  const handleToggle = (item) =>{
    addedToTheCart(!addedBool)
    if(!addedBool){
      addToCartFunction(item)
    } else{
      deleteToCartFunction(item.id)
    }
  } 
  return (
    <div className={styles[type]}>
      <div className={styles['description']}>
        <img src={product.images[0]} alt={product.title}/>
        <span className={styles['article']}>{product.title}</span>
      </div>
      <div>
        <span className={styles['price']}>{"$"+product.price}</span>
          <div className={styles['delete-product']} >
            <Image 
              alt='delete product' className={styles['x-image']} 
              src={x} 
            />
            <input type="checkbox"
              onClick={()=>handleToggle(product)} 
            />
          </div>
        </div>
      {/* <div className={styles[]}'deleted'>
        <span>Removed from the cart</span>
      </div> */}
    </div>    
  )
}

export default Product
