import React from 'react'
import "@styles/NavMenu.css"

function NavMenu() {
  return (
    <div className='nav-menu'>
      <div className='settings'>
        <a href='/my-orders'>My orders</a>
        <a href='/my-account'>My account</a>
      </div>
      <a href='/login'>Sign out</a>
    </div>
  )
}

export default NavMenu
