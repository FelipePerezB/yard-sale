import React, {useContext, useState} from 'react'
import NavIcon from '@components/NavIcon'
import styles from "../styles/Header.module.css"
import Title from "../containers/Title"
import Categories from "@components/Categories"

import menu from "@icons/menu.svg"
import cart from "@icons/cart.svg"
import NavMenu from './NavMenu'
import arrow from "@icons/arrow.svg"
import AppContext from '../context/AppContext'
// import NavShoppingCart from './NavShoppingCart'
import Product from '@components/Product'
import CartCount from './CartCount'
import NavShoppingCart from './NavShoppingCart'
import Space from '@components/Space'

import Link from 'next/link'
import Image from 'next/image'
import LinkButton from '@components/LinkButton'

function Header() {
  const {state, changeCartVisibility} = useContext(AppContext)

  // const [isVisible, showShoppingCart] = useState(false)

  // let cartState = (state.navCartIsOpen) ? "main-home-open ": ""

  // let NavShoppingCartState="hidden"
// 


  // const handleToggle = () =>{
  //   changeCartVisibility()
  // }
  let cartState = (state.navCartIsOpen) ? "main-cart-open ": ""

  
  const productsLength = state.cart.length


  const haveProducts = () => (products.length>0)

  const products = state.cart

  return (
    <header>
      <nav className={styles.Nav}>
        <ul>
          <li className={styles['menu-container']}>
            <NavIcon
              alt={"go to the menu"}
              link="/yard-sale/menu"
              img={menu}
            />
          </li>
          <li className={styles['title-categories-container']}>
            <Link href={"/yard-sale/"} >
             <a>
               <Title/>
             </a>
            </Link>
            <Categories/>
          </li>
          <li className={styles['account-cart-container']}>
            {state.user.email
              ? <div className={styles['deploy-menu']}>
                  <div className={styles["nav-email"]} >
                  {(state.user.email) 
                    ? <p>{state.user.email}</p>
                    : null
                  }
                  <Image alt='options' src={arrow}/>
                  </div>
                  <NavMenu/>
                </div>
             : <LinkButton href={"/yard-sale/login"}>Sign in</LinkButton>
            }

            
            <div className={styles['cartIcon-count']}>
              <input className={styles['active-cart']} onClick={()=>changeCartVisibility()} type={"checkbox"}/>
              <div className={styles['cart-icon']} >
                <NavIcon
                    alt={"go to the shopping cart"}
                    link="/yard-sale/shopping-cart"

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

            {/* {state.navCartIsOpen 
              ? 
              : null 
            } */}


            {/* {isVisible 
            ? */}
             

              {/* <div className={styles[]}{"nav-shopping-cart-container"}>
              </div> */}

          </li>
        </ul>
      </nav>
      <Space/>
      <Space/>
    </header> 
  )
}

export default Header
