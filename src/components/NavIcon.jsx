import React from 'react'
import "../styles/NavIcon.css"

function NavIcon({link,img}) {
  return (
    <a className='nav-icon' href={link}>
      <img src={img} />
    </a>    
  )
}

export default NavIcon
