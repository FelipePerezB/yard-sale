import React, {useContext} from 'react'
import NavIcon from '@components/NavIcon'
import styles from "../styles/Header.module.css"
import Title from "../containers/Title"
import Categories from "@components/Categories"

import menu from "@icons/menu.svg"
import cart from "@icons/cart.svg"
import NavMenu from './NavMenu'
import arrow from "@icons/arrow.svg"
import AppContext from '../context/AppContext'
import NavShoppingCart from './NavShoppingCart'
import Space from '@components/Space'

import Link from 'next/link'
import Image from 'next/image'
import LinkButton from '@components/LinkButton'
import MobileMenu from '@templates/MobileMenu'

function Header() {
  const {state, changeCartVisibility, changeMenuVisibility} = useContext(AppContext)

  
  const productsLength = state.cart.length


  const haveProducts = () => (products.length>0)

  const products = state.cart

  return (
    <header>
      <nav className={styles.Nav}>
        <ul>
          <li className={styles["menu-icon"]}>
            <div onClick={()=>changeMenuVisibility()}>
              <NavIcon
                img={menu}
                alt={"open the menu"}
              />
            </div>
            <MobileMenu/>
          </li>

          <li className={styles['title-categories-container']}>
            <Link href={" /"} >
             <a>
               <Title/>
             </a>
            </Link>
            <Categories/>
          </li>

          <li className={styles['account-cart-container']}>
            <div className={styles["account-container"]}>
              {
                state.user.email
                  ? <div className={styles['deploy-menu']}>
                      <div className={styles["nav-email"]} >
                        <p>{state.user.email}</p>
                        <Image alt='options' src={arrow}/>
                      </div>
                      <NavMenu/>
                    </div>
                  : <LinkButton href={" /login"}>Sign in</LinkButton>
              }
            </div>

            
            <div className={styles['cartIcon-count']}>
              <div className={styles['cart-icon']} onClick={()=>changeCartVisibility()} >
                <NavIcon
                    alt={"go to the shopping cart"}
                    link=" /shopping-cart"
                    img={cart}
                />
                {haveProducts() 
                  ? <div className={styles["product-added"]}></div> 
                  : null 
                }
              </div>
              {haveProducts() 
                ? <p>{productsLength}</p> 
                : null 
              }
              <NavShoppingCart product={products}/> 
            </div>
          </li>
          
        </ul>
      </nav>
      <Space/>
      <Space/>
    </header> 
  )
}

export default Header
