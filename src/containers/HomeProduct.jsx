import React, {useContext} from 'react';
import styles from "../styles/HomeProduct.module.css";
import Image from 'next/image';
import AddToCart from '@components/AddToCart';
import { useRouter } from 'next/router';
import AppContext from '@context/AppContext';

function HomeProduct({product,img, price, article}) {
  const {setActualProduct} = useContext(AppContext)
  const router = useRouter();

  const openProduct = (product) => {
    setActualProduct(product)
    
    router.push("/yard-sale/ProductInfo")    
  }
  return (
    <div>
        <div className={styles['home-product']} onClick={()=>openProduct(product)}>
          <Image
            width={100}
            height={150}
            className={styles['home-product__img']} 
            src={img} 
            alt={article} 
          />  
          <section className={styles['home-product-description']} >
            <span className={styles['home-product-price']} >{price}</span> 
            <span className={styles['home-product-article']} > {article}</span> 
            <AddToCart product={product}/>
          </section>          
        </div>
 
    </div>
  );
};

export default HomeProduct;
