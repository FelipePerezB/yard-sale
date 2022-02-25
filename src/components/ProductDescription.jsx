import React from 'react'
import "@styles/ProductDescription.css"

function ProductDescription({img,price, article,description}) {
  return (
    <>
      <img className='image-article' src={img}/>
      <div className='price-article'>
        <span className='price' >{price}</span>
        <span className='article' >{article}</span>
      </div>    
      <p>
        {description}
      </p>
    </>
  )
}

export default ProductDescription
