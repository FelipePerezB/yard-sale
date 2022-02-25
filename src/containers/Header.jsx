import React from 'react'
import NavIcon from '../components/NavIcon'
import "../styles/Header.css"
import Title from "../containers/Title"

import menu from "../assets/icons/menu.svg"
import cart from "../assets/icons/cart.svg"
import logo from "../assets/icons/logo.svg"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav__menu">
            <NavIcon
              link="/menu-mobile"
              img={menu}
            />
          </li>
          <li>
            <Title/>
          </li>
          <NavIcon
              link="/shopping-cart"
              img={cart}
            />
        </ul>
      </nav>
      <div className='space' ></div>
    </header> 
  )
}

export default Header
