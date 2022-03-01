import React, { useContext } from 'react'
import Product from '../components/Product'
import AppContext from '../context/AppContext'
import CartCount from './CartCount'
import "@styles/NavShoppingCart.css"

function NavShoppingCart({product, type}) {
  const {state} = useContext(AppContext)
  // const products = state.cart
  // console.log(state)
  return (
    <div className={'nav-shopping-cart '+type}>
      <div className='products'>
        {product.map((item)=>(
          <Product
            product={item}
            key={item.id}
            type="product"
          />
        ))}
      </div>
      <CartCount/>    
    </div>
  )
}

export default NavShoppingCart
