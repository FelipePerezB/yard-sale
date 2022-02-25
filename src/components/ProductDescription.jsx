import React from 'react'
import "../styles/ProductDescription.css"

function ProductDescription({price, article,description}) {
  return (
    <>
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
