import React from 'react'
import Main from '../containers/Main'
import Subtitle from "../components/Subtitle"
import Categories from '../components/Categories'
import InfoMenu from '../components/InfoMenu'

function MobileMenu() {
  return (
    <Main>
      <Subtitle>
        Categories
      </Subtitle>
      <Categories
        type='categories-mobile'
      />
      <InfoMenu email="felipeeperez3@gmail.com" />
    </Main>
    
  )
}

export default MobileMenu
