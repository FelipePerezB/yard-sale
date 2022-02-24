import React from 'react'
import "../styles/Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav__menu">
            <span className="menu-icon" />
          </li>
          <li>
            <section className="title">
              <span className="title__logo" />
              <p className="title__text--active">YARD</p>
              <p className="title__text">Sale</p>
            </section>
          </li>
          <li className="nav__cart">
            <span className="cart-icon" />
          </li>
        </ul>
      </nav>
      <div className='space' ></div>
    </header> 
  )
}

export default Header
