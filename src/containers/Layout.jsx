import React from 'react'
import styles from "../styles/Layout.module.css"
import Header from './Header'

function Layout({children}) {
  return (
    <>
      <div className={styles['layout']}>
        {children}
      </div>        
    </>
  )
}

export default Layout
