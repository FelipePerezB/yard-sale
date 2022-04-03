import React, { useContext } from 'react';
import styles from "../styles/AddToCart.module.css";
import Image from 'next/image';

import add from "@icons/add-to-shopping-cart.svg";
import added from "@icons/added.png";
import AppContext from '../context/AppContext';

function AddToCart({product}) {
  const { addToCartFunction, deleteToCartFunction, isInTheCart } = useContext(AppContext);

  let image = isInTheCart(product.id) ? added : add;
  let isAdded = isInTheCart(product.id) ? true : false;

  const AddToCartButton = (product)=>{
    if(isInTheCart(product.id)){
      deleteToCartFunction(product.id);      
    } else{
      addToCartFunction(product);
    }
  };
  return (

      <div 
        style={
          (isAdded)
            ?{
          backgroundColor:"white"
        } : null
        } 
        className={styles['add-button']}>
          <label htmlFor={"add-to-cart-"+product.id}>{""}</label>
            <input 
            id={"add-to-cart-"+product.id} 
            type="checkbox" 
            onClick={()=>AddToCartButton(product)}/>
            <Image
              width={"25"}
              height={"25"}
              alt='add to cart'
              src={image}
            />
      </div>   

  );
};

export default AddToCart;
