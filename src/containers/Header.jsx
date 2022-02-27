import React, {useState} from 'react'
import NavIcon from '../components/NavIcon'
import "@styles/Header.css"
import Title from "../containers/Title"
import Categories from "../components/Categories"

import menu from "@icons/menu.svg"
import cart from "@icons/cart.svg"
import NavMenu from './NavMenu'
import arrow from "@icons/arrow.svg"

function Header() {

  // const [] = useState()

  return (
    <header>
      <nav>
        <ul>
          <li className='menu-container'>
            <NavIcon
              alt={"go to the menu"}
              link="/menu"
              img={menu}
            />
          </li>
          <li className='title-categories-container'>
            <a href='/'>
             <Title/>
            </a>
            <Categories/>
          </li>
          <li className='account-cart-container'>
            <div className='deploy-menu'>
              <div className="nav-email" >
                felipeeperez3@gmail.com
                <img alt='show menu options' src={arrow}/>
              </div>
              <NavMenu/>
            </div>
            <NavIcon
                alt={"go to the shopping cart"}
                link="/shopping-cart"
                img={cart}
              />
          </li>
        </ul>
      </nav>
      <div className='space' ></div>
    </header> 
  )
}

export default Header
