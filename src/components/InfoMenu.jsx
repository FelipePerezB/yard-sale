import React from 'react'
import "@styles/InfoMenu.css"
import Space from "../components/Space"

function InfoMenu({email}) {
  return (
    <>
    <div className='orders-account'>
      <a href='/my-orders'>My orders</a>
      <a href='/my-account'>My account</a>
    </div>       
    <Space/>
    <div className='account-info'>
      <span>{email}</span>
      <a href='/login' >Sign out</a>
    </div> 
    </>
  )
}

export default InfoMenu
