import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/Layout'
import CreateAccount from '../pages/CreateAccount'
import Login from '../pages/Login'
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import PasswordRecovery from '../pages/PasswordRecovery'
import "../styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/create-new-password' element={<NewPassword />} />
          <Route path='/password-recovery' element={<PasswordRecovery />} />
          <Route path='/my-account' element={<MyAccount />} />
        </Routes>
      </Layout>
    </BrowserRouter>    
  )
}

export default App
