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
      <div className={styles['orders-account']}>
        <Link href='/yard-sale/MyOrders'>My orders</Link>
        <Link href='/yard-sale/MyAccount'>My account</Link>
      </div>       
      {/* <Space/> */}
      <div className={styles['account-info']}>
      {
        (state.user.email)
          ? <>
              <span>{state.user.email}</span>
              <Link href='/yard-sale/login' >Sign out</Link>
            </>
          : <Link href={"/yard-sale/login"}>Sign in</Link>
      }
        {/* <span>
          {
            (state.user.email) 
              ? state.user.email 
              : null
          } */}
        {/* </span> */}
        
      </div> 
      {/* <InfoMenu email="felipeeperez3@gmail.com" /> */}
    </div>
    <div onClick={()=>changeMenuVisibility(false)} className={styles[blurActive]}></div> 
    </>
  )
}

export default MobileMenu
