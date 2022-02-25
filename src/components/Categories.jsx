import React from 'react'
import "../styles/Catgeories.css"
function Categories({type="categories"}) {
  return (
    <div className={type} >
      <a href="/">All</a>
      <a href="/">Clothes</a>
      <a href="/">Electronics</a>
      <a href="/">Furniture</a>
      <a href="/">Toys</a>
      <a href="/">Others</a>
    </div>    
  )
}

export default Categories
