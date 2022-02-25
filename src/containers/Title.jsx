import React from 'react'
import "../styles/Title.css"

import logo from "../assets/icons/logo.svg"

function Title() {
  return (
    <section className="title">
      <img className='title__logo' src={logo}/>
      <p className="title__text--active">YARD</p>
      <p className="title__text">Sale</p>
    </section>

  )
}

export default Title
