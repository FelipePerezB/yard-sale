import React, { useContext } from 'react'
import Categories from '../components/Categories'
import ChangeOrder from '../components/ChangeOrder'
import Search from '../components/Search'
import Header from '../containers/Header'
import HomeProducts from '../containers/HomeProductsList'
import Main from '../containers/Main'
import "@styles/Home.css"
import AppContext from '../context/AppContext'


function Home() {

  const {state} = useContext(AppContext)

  let mainState = (state.navCartIsOpen) ? "main-home-open ": ""
  
  return (
    <>
      <Header/>
      <Main type={'main-header main-home '+mainState}>
        <section className='search-components'>
          <Search/>
          <Categories/>
          <ChangeOrder/>
        </section>
        <HomeProducts>
        </HomeProducts>
      </Main>
    </>    
  )
}

export default Home
