import React, { useContext } from 'react'
import Categories from '@components/Categories'
import ChangeOrder from '@components/ChangeOrder'
import Search from '@components/Search'
import Header from '@containers/Header'
import HomeProducts from '@containers/HomeProductsList'
import Main from '@containers/Main'
// import styles from "@styles/Home.module.css"
import AppContext from '@context/AppContext'
import Head from 'next/head'

function Home() {

  const {state} = useContext(AppContext)

  // let mainState = (state.navCartIsOpen || state.menuIsOpen) ? "main-home-open-left": "main-pc"
  
  let mainState = (state.navCartIsOpen)
    ? "main-home-open"
    : (state.menuIsOpen)
      ? "main-home-open-left"
      : "main-pc"
  
  return (
    <>
      <Head>
        <title>Home | Yard Sale</title>
      </Head>
      <Header/>
      <Main type={mainState}>
        <Search/>
        <Categories/>
        <ChangeOrder/>
        <HomeProducts>
        </HomeProducts>
      </Main>
    </>    
  )
}

export default Home
