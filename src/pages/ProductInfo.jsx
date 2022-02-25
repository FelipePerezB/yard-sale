import React from 'react'
import Button from '../components/Button'
import ProductDescription from '../components/ProductDescription'
import Header from "../containers/Header"
import Main from '../containers/Main'

function ProductInfo() {
  return (
    <>
    <Header/>   
    <Main type='main-header'>
      <ProductDescription
        price="120.00"
        article="Boat"
        description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nostrum itaque ducimus suscipit excepturi ipsam incidunt. Odio cupiditate vitae minima voluptatum tempore eum recusandae ipsam, fugit id? Ab, debitis sapiente!
        "
      />
      <Button type='button drop-button'>
        Add to cart
      </Button>

    </Main> 
    </>
  )
}

export default ProductInfo
