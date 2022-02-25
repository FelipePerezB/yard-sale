import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/Layout'
import CreateAccount from '../pages/CreateAccount'
import EmailSent from '../pages/EmailSent'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MobileMenu from '../pages/MobileMenu'
import MyAccount from '../pages/MyAccount'
import MyOrders from '../pages/MyOrders'
import NewPassword from '../pages/NewPassword'
import PasswordRecovery from '../pages/PasswordRecovery'
import ProductInfo from '../pages/ProductInfo'
import ShoppingCart from '../pages/ShoppingCart'
import "../styles/global.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/create-new-password' element={<NewPassword />} />
          <Route path='/password-recovery' element={<PasswordRecovery />} />
          <Route path='/sent-email' element={<EmailSent />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/' element={<Home />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/menu' element={<MobileMenu />} />
          <Route path='/product-info' element={<ProductInfo />} />
        </Routes>
    </BrowserRouter>    
  )
}

export default App
