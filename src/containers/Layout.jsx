import React from 'react'
import "../styles/Layout.css"
import Header from './Header'

function Layout({children}) {
  return (
    <>
      <div className='layout'>
        {children}
      </div>        
    </>
  )
}

export default Layout
