import React from 'react'
import "@styles/NavIcon.css"

function NavIcon({link,img,alt}) {
  return (
    <a className='nav-icon' href={link}>
      <img src={img} alt={alt} />
    </a>    
  )
}

export default NavIcon
