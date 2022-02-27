import React from 'react'
import Order from '../components/Order'
import Product from '../components/Product'
import Header from '../containers/Header'
import Main from '../containers/Main'

import boat from "@images/boat.jpg"

function MyOrders() {
  return (
    <>
      <Header/>
      <Main type='main-header'>
        <section>

          <Order
            date="27.2.2020"
            numberOfArticles="2 articles"
            price="$500.00"
          >
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
          </Order>
          <Order
            date="27.2.2020"
            numberOfArticles="2 articles"
            price="$500.00"
          >
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
            <Product
              img={boat}
              type="product-order"
              article="Boat"
              price="$120.00"
            />
          </Order>
        </section>
      </Main>
    </>
  )
}

export default MyOrders
