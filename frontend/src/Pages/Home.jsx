import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import EmployeeList from './EmployeeList'
import CreateUser from './CreateUser'

const Home = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<DashBoard/>} />
    <Route path='/list' element={<EmployeeList/>} />
    <Route path='/create' element={<CreateUser/>} />
    </Routes>
    </>
  )
}

export default Home
