import React, { useContext, useState } from 'react'
import "@styles/Product.css"

import x from "@icons/x.svg"
import AppContext from '../context/AppContext'

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
    console.log(item)
  } 
  return (
    <div className={type}>
      <div className='description'>
        <img src={product.images[0]} alt={product.title}/>
        <span className='article'>{product.title}</span>
      </div>
      <div>
        <span className='price'>{"$"+product.price}</span>
          <div className='delete-product' >
            <img 
              alt='delete product' className='x' 
              src={x} 
            />
            <input type="checkbox"
              onClick={()=>handleToggle(product)} 
            />
          </div>
        </div>
      {/* <div className='deleted'>
        <span>Removed from the cart</span>
      </div> */}
    </div>    
  )
}

export default Product
