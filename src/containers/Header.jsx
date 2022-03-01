import React, {useContext, useState} from 'react'
import NavIcon from '../components/NavIcon'
import "@styles/Header.css"
import Title from "../containers/Title"
import Categories from "../components/Categories"

import menu from "@icons/menu.svg"
import cart from "@icons/cart.svg"
import NavMenu from './NavMenu'
import arrow from "@icons/arrow.svg"
import AppContext from '../context/AppContext'
// import NavShoppingCart from './NavShoppingCart'
import Product from '../components/Product'
import CartCount from './CartCount'
import NavShoppingCart from './NavShoppingCart'

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
      <nav>
        <ul>
          <li className='menu-container'>
            <NavIcon
              alt={"go to the menu"}
              link="/menu"
              img={menu}
            />
          </li>
          <li className='title-categories-container'>
            <a href='/'>
             <Title/>
            </a>
            <Categories/>
          </li>
          <li className='account-cart-container'>
            <div className='deploy-menu'>
              <div className="nav-email" >
                felipeeperez3@gmail.com
                <img alt='show menu options' src={arrow}/>
              </div>
              <NavMenu/>
            </div>
            
            <div className='cartIcon-count'>
              <input className='active-cart' onClick={()=>changeCartVisibility()} type={"checkbox"}/>
              <div className='cart-icon' >
                <NavIcon
                    alt={"go to the shopping cart"}
                    // link="/shopping-cart"
                    img={cart}
                />
                {haveProducts() 
                  ? <div className="product-added"></div> 
                  : null 
                }
              </div>

              {haveProducts() 
                ? <p>{productsLength}</p> 
                : null 
              }
              <NavShoppingCart product={products} type={cartState}/> 
              
            </div>

            {/* {state.navCartIsOpen 
              ? 
              : null 
            } */}


            {/* {isVisible 
            ? */}
             

              {/* <div className={"nav-shopping-cart-container"}>
              </div> */}

          </li>
        </ul>
      </nav>
      <div className='space' ></div>
    </header> 
  )
}

export default Header
