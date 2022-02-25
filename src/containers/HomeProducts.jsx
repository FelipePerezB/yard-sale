import React from 'react'
import "../styles/HomeProducts.css"

function HomeProducts({children}) {
  return (
    <section className='home-products'>
      {children}
    </section>    
  )
}

export default HomeProducts
