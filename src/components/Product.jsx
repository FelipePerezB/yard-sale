import React, { useContext, useState } from 'react';
import styles from "../styles/Product.module.css";

import x from "@icons/x.svg";
import AppContext from '../context/AppContext';
import Image from 'next/image';

function Product({type="product",product}) {
  const { addToCartFunction, deleteToCartFunction } = useContext(AppContext);

  const [addedBool, addedToTheCart] = useState(true);

  const productImage = product.images[0]; 


  const handleToggle = (item) =>{
    addedToTheCart(!addedBool);
    if(!addedBool){
      addToCartFunction(item);
    } else{
      deleteToCartFunction(item.id);
    }
  };
  return (
    <div className={styles[type]}>
      <div className={styles['description']}>
        <Image width={50} height={50} src={productImage} alt={product.title}/>
        <span className='article'>{product.title}</span>
      </div>
      <div>
        <span className='price'>{"$"+product.price}</span>
          <div className={styles['delete-product']} >
            <Image 
              alt='delete product' className={styles['x-image']} 
              src={x} 
              onClick={()=>handleToggle(product)}
            />
          </div>
        </div>
    </div>    
  );
};

export default Product;
