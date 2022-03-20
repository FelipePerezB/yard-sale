import React from 'react'
import Button from '@components/Button'
import ProductDescription from '@components/ProductDescription'
import Header from "@containers/Header"
import Main from '@containers/Main'
import Space from "@components/Space"

import product from "@images/boat.jpg"
import cart from "@icons/add-to-shopping-cart.svg"

import Image from 'next/image'

function ProductInfo() {
  return (
    <>
    <Header/>   
    <Main type='main-header'>
      <ProductDescription
        img={product}
        price="120.00"
        article="Boat"
        description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nostrum itaque ducimus suscipit excepturi ipsam incidunt. Odio cupiditate vitae minima voluptatum tempore eum recusandae ipsam, fugit id? Ab, debitis sapiente!
        "
      />
      <Space/>
      <Button buttonClass='drop-button'>
        <Image alt='cart icon' src={cart} />
        Add to the cart
      </Button>

    </Main> 
    </>
  )
}

export default ProductInfo
