import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home/*' element={ <Home/>} />
      </Routes>
    </div>
  )
}

export default Layout
