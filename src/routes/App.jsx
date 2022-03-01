import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CreateAccount from '../pages/CreateAccount'
import SendEmail from '../pages/SendEmail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MobileMenu from '../pages/MobileMenu'
import MyAccount from '../pages/MyAccount'
import MyOrders from '../pages/MyOrders'
import NewPassword from '../pages/NewPassword'
import PasswordRecovery from '../pages/PasswordRecovery'
import ProductInfo from '../pages/ProductInfo'
import ShoppingCart from '../pages/ShoppingCart'
import NotFound from '../pages/NotFound'

import "@styles/global.css"

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename='/'>
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
