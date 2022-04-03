import React from 'react'
import Link from "next/link"
import styles from "../styles/NavMenu.module.css"

function NavMenu() {
  return (
    <div className={styles['nav-menu']}>
      <div className={styles['settings']}>
      <Link href={' /MyOrders'}>
        {/* <a></a> */}
        My orders
      </Link>
      <Link href=' /MyAccount'>
        My account
      </Link>
      </div>
      <Link href=' /login'>Sign out</Link>
    </div>
  )
}

export default NavMenu
