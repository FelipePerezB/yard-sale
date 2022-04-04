import React from 'react';
import styles from "../styles/ProductDescription.module.css";
import Image from 'next/image';

function ProductDescription({img,price, article,description}) {
  return (
    <>
      <Image width={100} height={250} alt={article} className={styles['image-article']} src={img}/>
      <div className={styles['price-article']}>
        <span className={'price'} >{price}</span>
        <span className='article' >{article}</span>
      </div>    
      <p>
        {description}
      </p>
    </>
  );
};

export default ProductDescription;
