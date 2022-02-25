import React from 'react'
import Product from '../components/Product'
import Space from '../components/Space'
import CartCount from '../containers/CartCount'
import Header from '../containers/Header'
import Main from '../containers/Main'

function ShoppingCart() {
  return (
    <>
    <Header/>
    <Main
      type='main-header'
    >
      <Product
        type="product"
        article="Boat"
        price="$120.00"
      />
      <Product
        type="product"
        article="Boat"
        price="$120.00"
      />
      <Space/>
      <Space/>
      <br/>
      <CartCount
        price="$500.00"
      />

    </Main>
    </>
    
  )
}

export default ShoppingCart
