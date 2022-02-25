import React from 'react'
import Categories from '../components/Categories'
import ChangeOrder from '../components/ChangeOrder'
import HomeProduct from '../components/HomeProduct'
import Search from '../components/Search'
import Header from '../containers/Header'
import HomeProducts from '../containers/HomeProducts'
import Main from '../containers/Main'

function Home() {
  return (
    <>
      <Header/>
      <Main type='main-header'>
        <section>
          <Search/>
          <Categories/>
          <ChangeOrder/>
        </section>
        <HomeProducts>
          <HomeProduct
            img="/"
            price="$120.00"
            article="boat"
          />
          <HomeProduct
            img="/"
            price="$120.00"
            article="boat"
          />
          <HomeProduct
            img="/"
            price="$120.00"
            article="boat"
          />
          <HomeProduct
            img="/"
            price="$120.00"
            article="boat"
          />
          <HomeProduct
            img="/"
            price="$120.00"
            article="boat"
          />
        </HomeProducts>
      </Main>
    </>    
  )
}

export default Home
