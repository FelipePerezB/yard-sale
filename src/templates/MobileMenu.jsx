import React, {useContext} from 'react'

import Categories from '@components/Categories'
import arrow from "@icons/arrow.svg"

import styles from "../styles/MobileMenu.module.css"
import Image from 'next/image'
import AppContext from '@context/AppContext'
import Link from 'next/link'

function MobileMenu() {
  const {changeMenuVisibility, state} = useContext(AppContext)


  let menuState = state.menuIsOpen

  let menuStyles = (menuState) ? "menu-mobile-open": "menu-mobile"
  let blurActive = (menuState) ? "blur-active": "blur"

  return (
    <>
    <div className={styles[menuStyles]}>
      <div className={styles["close-menu"]} onClick={()=>changeMenuVisibility()}>
        <Image
          alt='close cart'
          src={arrow}
        />
        <p>Close</p>
      </div>
      <Categories
        type='categories-mobile'
      />
      {
        (state.user.email)
          ? <>
              <div className={styles['orders-account']} onClick={()=>changeMenuVisibility()}>
                <Link href=' /MyOrders'>My orders</Link>
                <Link href=' /MyAccount'>My account</Link>
              </div>       
              <div className={styles['account-info']}>
                <span>{state.user.email}</span>
                <Link href=' /login' >Sign out</Link>
              </div>             
          </>
        : <>
            <div className={styles['account-info']}>
              <Link href={" /login"}>Sign in</Link>
            </div>
          </>  
      }
    </div>
    <div onClick={()=>changeMenuVisibility(false)} className={styles[blurActive]}></div> 
    </>
  )
}

export default MobileMenu
