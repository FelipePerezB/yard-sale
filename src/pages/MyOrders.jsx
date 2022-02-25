import React from 'react'
import Order from '../components/Order'
import Product from '../components/Product'
import Header from '../containers/Header'
import Main from '../containers/Main'

function MyOrders() {
  return (
    <>
      <Header/>
      <Main>
      <Order
        date="27.2.2020"
        numberOfArticles="2 articles"
        price="$500.00"
      />
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
      </Main>
    </>
  )
}

export default MyOrders
