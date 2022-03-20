import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../templates/CreateAccount'
import SendEmail from '../templates/SendEmail'
import Home from '../templates/Home'
import Login from '../templates/Login'
import MobileMenu from '../templates/MobileMenu'
import MyAccount from '../templates/MyAccount'
import MyOrders from '../templates/MyOrders'
import NewPassword from '../templates/NewPassword'
import PasswordRecovery from '../templates/PasswordRecovery'
import ProductInfo from '../templates/ProductInfo'
import ShoppingCart from '../templates/ShoppingCart'
import NotFound from '../templates/NotFound'

import "../styles/global.module.css"

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename='/yard-sale'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/create-new-password' element={<NewPassword />} />
            <Route path='/password-recovery' element={<PasswordRecovery />} />
            <Route path='/send-email' element={<SendEmail />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/' element={<Home />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/my-orders' element={<MyOrders />} />
            <Route path='/menu' element={<MobileMenu />} />
            <Route path='/product-info' element={<ProductInfo />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>  
    </AppContext.Provider>  
  )
}

export default App
